<template>
  <img
    src="https://yesno.wtf/assets/yes/8-2f93962e2ab24427df8589131da01a4d.gif"
    alt="No se puede visualizar"
  />
  <div class="dark"></div>

  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interrogacion(?)</p>

    <h2>{{ pregunta }}</h2>
    <h1>SI, NO...........</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "voy a ser millonario",
    };
  },
  watch: {
    pregunta(value, oldvalue) {
      console.log(value);
      console.log(oldvalue);
      if (!value.includes("?")) return;
      //consumop del api
      this.consumirApi();
    },
  },

  methods: {
    async consumirApi() {
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (respuesta) => respuesta.json()
      );
      console.log(answer);
      console.log(image);
    },
  },
};
</script>

<style scoped>
/* hace que el estilo flote, y no lo pone ni abajo ni arriba, va a estar atras como marca de agua */
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dark {
  background: rgba(0, 0, 0, 0.4);
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

.container {
  position: relative;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}
h2 {
  margin-top: 150px;
}
</style>