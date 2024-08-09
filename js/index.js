window.addEventListener('DOMContentLoaded', pedirDatos);
let divRes = document.getElementById("res");
let searchValue = document.getElementById("searchValue");
let btnSearch = document.getElementById("btn-search");
let allPokemonData = []; // Para almacenar todos los datos de Pokémon

// Obtiene los datos de la API
function pedirDatos() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // Almacena el índice junto con los datos de los Pokémon
        allPokemonData = data.results.map((pokemon, index) => ({
            ...pokemon,
            index: index + 1 // Guardamos el índice + 1 para los sprites
        }));
        construirDatos(allPokemonData); // Construye las tarjetas inicialmente con todos los Pokémon
    });
}

// Crea la tarjeta del Pokémon
function construirDatos(datosIn) {
    let textoRes = "";
    for (let i = 0; i < datosIn.length; i++) {
        textoRes += '<div class="tarjeta">';
        textoRes += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + datosIn[i].index + ".png'>"; // Usamos el índice correcto
        textoRes +=  '<p> Nombre: ' + datosIn[i].name + "</p>";
        textoRes +=  '<p> Número Pokedex: ' + datosIn[i].index + "</p>"; // Usamos el índice correcto
        textoRes += '</div>';
    }
    imprimirDatos(textoRes);
}

// Imprime los datos
function imprimirDatos(data) {
    divRes.innerHTML = data;
}

// Agrega un evento al botón de búsqueda
btnSearch.addEventListener('click', () => {
    let searchTerm = searchValue.value.toLowerCase().trim();
    if (searchTerm) {
        let filteredData = allPokemonData.filter(pokemon => pokemon.name.includes(searchTerm));
        construirDatos(filteredData);
    } else {
        construirDatos(allPokemonData); // Muestra todos si no hay término de búsqueda
    }
});
