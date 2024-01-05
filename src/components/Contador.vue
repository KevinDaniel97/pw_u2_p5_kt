<template>
  <h2>{{ titulo }}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ obtenerCuadradoComputado }}</p>
  <button @click="suma()">+1</button>
  <button @click="resta()">-1</button>
</template>

<script>
export default {

  //primera forma
  //props: ['titulo', 'valor'],
  //segunda forma
  props: {
    titulo: String,
    valor: {
      type: Number,
      required: false,
      default: 100,
      validator(value) {
        if (value > 0) {
          console.log("ERROR")
        }
        return value > 0
      }
    }
  },
  data() {
    return {
      counter: this.valor,
    };
  },
  methods: {
    obtenerCuadrado() {
      console.log('Se calcula el cuadrado')
      return this.counter * this.counter;
    },
    suma() {
      this.counter++;
    },
    resta() {
      this.counter--;
    }
  },

  computed: {
    obtenerCuadradoComputado() {
      console.log('Se calcula el cuadrado')
      return this.counter * this.counter;
    }
  },
}
</script>

<style scoped>
button {
  background: rgb(65, 230, 139);
  border-radius: 5px;
  border: 1px solid rgb(58, 7, 7);
  color: blueviolet;
  cursor: pointer;
  margin: 0px 5px;
  padding: 5px 15px;

}

button:hover {
  background: rgb(212, 207, 218);
}

h2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
}

h2:hover {
  color: rgb(95, 209, 19);

}

p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 25px;
}
</style>