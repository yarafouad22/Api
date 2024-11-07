async function getMeal(id="asparagus") {
    try {
        var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${id}`); 
        var data = await response.json();

        console.log(data.recipes);  
        display(data.recipes);      
    } catch (error) {
        console.error("Error fetching meal data:", error);
    }
    inlod();
}
    getMeal();

//    btns.forEach(function(element){
//     element.addEventListener('click',function(e){
//         console.log(e.target)
//     })
//    })

    var btns= document.querySelectorAll('.nav-link')
    for(var i=0;i<btns.length;i++)
        btns[i].addEventListener('click',function(e){
        console.log(e.target.innerHTML);
        getMeal(e.target.innerHTML);
    })

    function display (sas){
    var car='';
    for( var i=0;i<sas.length;i++){
    car+=`<div class="col-3">
                    <div class="card">
                        <img src="${sas[i].image_url}" class="card-img-top" alt="${sas[i].title}">
                        <div class="card-body">
                            <p class="card-text">${sas[i].title}</p>
                        </div>
                    </div>
                </div>`
    }
    document.getElementById("rbody").innerHTML = car;
    }
    function inlod(){
        document.getElementById('lod').classList.add('d-none');
        document.body.classList.remove('overflow-hidden')
    }