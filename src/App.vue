<template>
  <h1>CALCULADORA</h1>
  <h1>BASICA</h1>
  <calculadora />
</template>

<script>
import calculadora from "./components/calculadora.vue";
export default {
  name: "App",
  components: {
    calculadora,
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
  margin-top: 30px;
}
</style>
