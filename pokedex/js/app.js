window.addEventListener('load',function(){
    
    const div = document.querySelector(".card");
    const urlPokedex = 'https://pokeapi.co/api/v2/pokemon?limit=';
    const formulario = document.forms[0];
    const inputNumPokemon = document.querySelector("#cantidad")
    
    
    
    formulario.addEventListener('submit', function(event){
        event.preventDefault();
        consultaApi(inputNumPokemon.value);
        
    })
    
    
    
    
    function consultaApi(cantidad){
        
        fetch(`${urlPokedex}${cantidad}`)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            let arreglo = data.results;
            arreglo.forEach(pokemon => {
                consultarPokemon(pokemon.url)    
            });
            
    
        });
    }
    
    function consultarPokemon(urlPokemon){
        fetch(urlPokemon)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data)
            renderizarPokemon(data.name, data.sprites.other.dream_world.front_default)
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
        nodoNombre.appendChild(nodoImagen);
    }

})
