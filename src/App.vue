<template>
  <PokemonPage2 />
</template>

<script>
import PokemonPage2 from "./pages/PokemonPage2.vue";

export default {
  name: "App",
  components: {
    PokemonPage2,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100px;
}
</style>