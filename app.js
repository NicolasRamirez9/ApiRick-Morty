// funcion para cargar las peliculas

window.addEventListener("load",() =>{
    cargarPersonajes();
})

let pagina = 1 // variable para controlar la paginacion

// capturar los botones

let btnAnterior  = document.querySelector("#btnAnterior")
let btnSiguiente = document.querySelector("#btnSiguiente")

//funcion anterior

btnAnterior.addEventListener("click",()=>{
    if(pagina > 1){
        // pagina = pagina - 1
        pagina-=1; 
        //llamar a la funcion que cargue las paginas
        cargarPersonajes();
    }
})

//funcion siguiente

btnSiguiente.addEventListener("click",()=>{
    if(pagina > 42){
        // pagina = pagina - 1
        pagina = 1; 
    }else
    {
        pagina +=1;
        //llamar a la funcion que cargue las paginas
        cargarPersonajes();
    }   
})

//funcion que cargue las pelis

const cargarPersonajes = async (idPersonajes) => {

    try {
        const respuesta = await axios (`https://rickandmortyapi.com/api/character?page=${pagina}`);
        console.log(respuesta.data);
        if(respuesta.status === 200){
            let personajes = "";

            respuesta.data.results.forEach((personaje)=> {
                personajes+= `<div class = "personaje">
                <img class = "foto" src ="${personaje.image}" />
                <h3 class="nombrePersonaje">${personaje.name}</h3>
                <h4 class="ubicacionPersonaje">Ubicacion: ${personaje.location.name}</h4>
                </div>`
            });

            document.querySelector(".contenedor").innerHTML = personajes;

    }else if(respuesta.status === 404){
        console.log("error 404 nos vemos en otro lado");
    }
    } catch (error) {
        console.log(error);
    }
};