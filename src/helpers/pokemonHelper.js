const obtenerIdPokemons = () => {
    const pokemonsl = getRandomInt(600)
    const pokenons2 = getRandomInt(600)
    const pokemons3 = getRandomInt(600)
    const pokemons4 = getRandomInt(600)
    const pokemonsArr = [pokemonsl, pokenons2, pokemons3, pokemons4]

    console.log(pokemonsArr)
}
const obtenerNombresPokemons = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);

}
function consumirAPI(id) {
    return "nombre"
}

const obtenerIdPokemonsFachada = () => {
    obtenerIdPokemons()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}
export default obtenerIdPokemonsFachada
