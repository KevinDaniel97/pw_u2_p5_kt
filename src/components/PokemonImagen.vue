<template>
  <div class="pokemon-container">
    <img class="ocultar" :src="imagenFuente" alt="no se puede visualizar" />
    <img :src="imagenFuente" alt="no se puede visualizar" v-if="showPokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  showPokemon: {
    type: Boolean,
    required: true,
    default: false,
  },
  computed: {
    imagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  position: absolute;
  right: 42%;
}

.pokemon-container {
  height: 200px;
}
</style>