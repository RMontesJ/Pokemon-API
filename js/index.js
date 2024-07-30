
    let btnPeticion = document.getElementById("btnPedir");
    window.addEventListener('DOMContentLoaded', pedirDatos);
    let divRes = document.getElementById("res");
    
    function mostrarDatos(datosIn){
        let textoRes = "";
        for (let i = 0; i < datosIn.results.length; i++) {
            textoRes += '<div class="tarjeta">';
            textoRes += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i+1) + ".png'>";
            textoRes +=  '<p> Nombre :' + datosIn.results[i].name + "</p>";
            textoRes +=  '<p> Numero Pokedex :' + (i+1) + "</p>";
             textoRes += '</div>';
        }
        res.innerHTML = textoRes;
    }
    
    function pedirDatos(){
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025")
        .then (res => res.json())
        .then (data => {
            console.log(data);
            mostrarDatos(data);
    
        })
    }
    