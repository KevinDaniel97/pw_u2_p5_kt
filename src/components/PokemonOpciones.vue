<template>
  <h1>opciones</h1>

  <div class="options-container"></div>
  <ul>
    <li v-for="pokemon in pokemons" :key="pokemon.id"
      @click="$emit('selecciono', { pok: pokemon.id, nom: 'pepito', edad: pokemon.id, hobby: pokemon.nombre })">{{
        pokemon.nombre }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,

    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>