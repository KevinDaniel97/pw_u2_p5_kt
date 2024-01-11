<template>
  <Pregunta />
  <!-- <FormularioPokemon /> -->
</template>

<script>
import FormularioPokemonVue from "./components/FormularioPokemon.vue";
//import contador from './components/contador.vue'
//import calculadora from "./components/calculadora.vue";
import Pregunta from "./components/Pregunta.vue";
//import FormularioPokemon from "./components/FormularioPokemon.vue";

export default {
  name: "App",
  components: {
    Pregunta,
  },
  methods: {
    calcularValor() {
      return 5 + 5 * 100;
    },
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