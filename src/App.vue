<template>
  <div class="container">
    <h1>Casino Pokemon</h1>
    <div class="juego" v-if="mostrarJuego">
      <h2>Puntaje:{{ puntaje }}</h2>
      <h2>Intentos: {{ intentos }}</h2>

      <div class="cuadros">
        <Imagen class="imgText" :urlImg="url1" :texto="texto1"></Imagen>
        <Imagen class="imgText" :urlImg="url2" :texto="texto2"></Imagen>
        <Imagen class="imgText" :urlImg="url3" :texto="texto3"> </Imagen>
      </div>

      <button v-on:click="jugar()">JUGAR</button>
    </div>

    <div v-if="mostrarPerdedor">
      <h1>has utilizado tus 5 intentos</h1>
      <h1>El juego ha termindo, intentalo nuevamente</h1>
      <button @click="reiniciar">Reiniciar</button>
    </div>

    <div v-if="mostrarGanador">
      <h1>Puntaje: {{ puntaje }}</h1>
      <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
      <button @click="reiniciar">Reiniciar</button>
    </div>
  </div>
</template>

<script>
import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    Imagen,
  },
  data() {
    return {
      puntaje: 0,
      intentos: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXXXXXXXXXXX",
      texto2: "XXXXXXXXXXXXXXXX",
      texto3: "XXXXXXXXXXXXXXXX",
      mostrarPerdedor: false,
      mostrarGanador: false,
      mostrarJuego: true,
    };
  },

  methods: {
    async jugar() {
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;
      this.evaluarResultado();
    },

    async consumirAPI() {
      return await fetch("https://yesno.wtf/api").then((r) => r.json());
    },

    evaluarResultado() {
      this.intentos++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto2 === "yes" && this.texto3 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes")
      ) {
        this.puntaje += 2;
      } else {
        this.puntaje += 1;
      }

      if (this.puntaje >= 10) {
        this.mostrarGanador = true;
        this.mostrarJuego = false;
        this.mostrarPerdedor = false;
      }

      if (this.intentos === 5) {
        this.mostrarGanador = false;
        this.mostrarPerdedor = true;
        this.mostrarJuego = false;
      }
    },

    reiniciar() {
      this.puntaje = 0;
      this.intentos = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXXXXXXXXXX";
      this.texto2 = "XXXXXXXXXXXXXXXX";
      this.texto3 = "XXXXXXXXXXXXXXXX";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 5px;
  width: 140px;
  font-size: 27px;
  border: solid 2px black;
  border-radius: 5px;
  box-shadow: 15px black;
}
.cuadros .imgText {
  border: 2px solid rgb(68, 2, 2);
  display: grid;
  justify-content: center;
  align-items: center;
  color: rgb(16, 16, 124);
  margin-bottom: 25px;
  font: bold;
  padding: 10px;
  background: #aacff3;
}
.cuadros {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(16, 16, 124);
  margin-bottom: 25px;
  font: bold;
}
</style>