<template>
  <pokemonPage2 />
</template>

<script>
import PokemonPage2 from "./pages/PokemonPage2.vue";
//import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    PokemonPage2,
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