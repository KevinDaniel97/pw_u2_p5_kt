<template>
  <h1 v-if="!pokemonGanador">Espere por favor estamos cargando el juego..............</h1>
  <div v-else>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen :pokemonId="pokemonGanador.id" :showPokemon="true" />
    <PokemonOpciones v-on:selecciono="revisarClick($event)" :pokemons="pokemonsArr" />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";
import obtenerPokemonsFachada from "../helpers/pokemonHelper";

import obtenerIdPokemonsFachada from "../helpers/pokemonHelper";

obtenerPokemonsFachada();

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },

  beforeCreate() {
    console.log('antes de crear el componente')
  },
  created() {
    console.log('se creo el componente')
  },
  beforeMount() {
    console.log('antes de que se monte el componnete en la pagina')
  },
  mounted() {
    console.log("se monto el componente PokemonPage");
    this.cargaInicial();
  },
  beforeUpdate() {
    console.log('antes de que se actualice el componente')
  },
  updated() {
    console.log('se actualiza el componente')
  },
  beforeDestroy() {
    console.log('antes de destruir')

  },
  destroyed() {
    console.log('destruir')
  },


  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
      this.pokemonsArr = arregloPokemons;
      const indiceGandor = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonsArr[indiceGandor];
    },
    revisarClick(datoRecibido) {
      console.log('dio click y reporto desde el padre')
      console.log(datoRecibido)
    },
  },
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
    }
  }
};
</script>

<style></style>