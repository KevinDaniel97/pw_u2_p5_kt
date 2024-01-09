<template>
  <div class="container">
    <div class="calculadora">
      <div class="display">
        <label class="labelResultado" id="labelResultado" for=""
          >Resultado: {{ resultado }}</label
        >
      </div>
      <button class="col-2" @click="calcClear()">C</button>
      <button class="ideliminar" @click="ClearUno()">br</button>
      <button @click="calc('/')">/</button>
      <button @click="calc('7')">7</button>
      <button @click="calc('8')">8</button>
      <button @click="calc('9')">9</button>
      <button @click="calc('*')">X</button>
      <button @click="calc('4')">4</button>
      <button @click="calc('5')">5</button>
      <button @click="calc('6')">6</button>
      <button @click="calc('-')">-</button>
      <button @click="calc('1')">1</button>
      <button @click="calc('2')">2</button>
      <button @click="calc('3')">3</button>
      <button @click="calc('+')">+</button>
      <button class="col-2" @click="calc('0')">0</button>
      <button @click="calc('.')">.</button>
      <button @click="calcRes()">=</button>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    valor: {
      type: Number,
    },
  },

  data() {
    return {
      resultado: "",
    };
  },

  methods: {
    calc(numero) {
      this.resultado += numero;
    },

    calcClear() {
      this.resultado = "";
    },

    calcRes() {
      try {
        this.resultado = eval(this.resultado);
      } catch (error) {
        limpiar();
      }
    },

    ClearUno() {
      this.resultado = this.resultado.slice(0, -1);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  /*grid-template-columns: 75px 75px 75px 75px;*/
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 150px repeat(5, 75px);
  background-color: #00916e;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #00000033;
}

.display {
  color: antiquewhite;
  grid-column: span 4;
  padding: 15px;
  margin: 10px 10px 20px 20px;
  background: #363636;
  border-radius: 32px;
  text-align: right;
  box-shadow: 0px 0px 0px 10px #00000033;
  font-size: 25px;
}

button {
  cursor: pointer;
  margin: 3px;
  padding: 0;
  border-radius: 32px;
  border: none;
  background-color: #71eacd;
  box-shadow: 5px 5px 10px 2px #00000040;
  font-size: 30px;
}

button:active {
  background-color: #006f54;
}

.col-2 {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-column: span 2;
  background: rgb(231, 203, 141);
  border-radius: 15px;
}

body {
  background-color: #224870;
}

* {
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
h1 {
  font-family: "Times New Roman", Times, serif;
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 0px;
}
</style>