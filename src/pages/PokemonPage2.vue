<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonId="5" :showPokemon="true" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerIdPokemonsFachada from "../helpers/pokemonHelper";
obtenerIdPokemonsFachada();

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
};
</script>

<style>
* {
  background-color: aliceblue;
}
</style>