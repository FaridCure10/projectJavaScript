window.addEventListener('load',function(){
    
    const div = document.querySelector(".card");
    const urlPokedex = 'https://pokeapi.co/api/v2/pokemon?limit=';
    const formulario = document.forms[0];
    const inputNumPokemon = document.querySelector("#cantidad")
    let arreglo = [];
    let totalPokemons = [];
    
    
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        consultaApi(inputNumPokemon.value);
    })
    
    function consultaApi(cantidad){    
        fetch(`${urlPokedex}${cantidad}`)
        .then( respuesta => respuesta.json())
        .then( data => {
            // console.log(data)
            arreglo = data.results;
            totalPokemons = []
            arreglo.forEach(pokemon => {
                consultarPokemon(pokemon.url)    
            });   
        });
    }
    
    function consultarPokemon(urlPokemon){
        fetch(urlPokemon)
        .then( respuesta => respuesta.json())
        .then( data => {
            // console.log(data)
            totalPokemons.push(data)
            if(totalPokemons.length === parseInt(inputNumPokemon.value)){
                change(1);
            }
        })
    }

    function renderizarPokemon(nombre,imagen){
        const nodoCard = document.createElement("div");
        nodoCard.classList.add("tarjeta")
        const nodoNombre = document.createElement("h6");
        nodoNombre.innerText= nombre;
        nodoCard.appendChild(nodoNombre)
        div.appendChild(nodoCard);
    
        const nodoImagen = document.createElement("img");
        nodoImagen.setAttribute('src',imagen);
        nodoCard.appendChild(nodoImagen);
    }


    //PAGINATION
    let btn_next = document.getElementById("btn_next");
    let btn_prev = document.getElementById("btn_prev");
    let current_page = 1;
    let obj_per_page = 10;

    function totNumPages()
    {
        return Math.ceil(arreglo.length / obj_per_page);
    }

    btn_prev.addEventListener('click', function prevPage()
    {
        if (current_page > 1) {
            current_page--;
            change(current_page);
        }
    })

    btn_next.addEventListener('click', function nextPage()
    {
        if (current_page < totNumPages()) {
            current_page++;
            change(current_page);
        }
    })

    function change(page)
    {
        let page_span = document.getElementById("page");
        if (page < 1) page = 1
        else if (page > totNumPages()) page = totNumPages();
        div.innerHTML = '';
        for (let i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
            if(i < parseInt(inputNumPokemon.value)){
                renderizarPokemon(totalPokemons[i].name, totalPokemons[i].sprites.other.dream_world.front_default)
            }
        }
        page_span.innerHTML = page;
        if (page == 1) {
            btn_prev.style.visibility = "hidden";
        } else {
            btn_prev.style.visibility = "visible";
        }
        if (page == totNumPages()) {
            btn_next.style.visibility = "hidden";
        } else {
            btn_next.style.visibility = "visible";
        }
    }

    window.onload = function() {
        change(1);
    };

})
