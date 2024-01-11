<template>
  <img v-if="img !== null" v-bind:src="img" alt="No se puede visualizar" />
  <div class="dark"></div>
  <div class="container">
    <form class="form" action="" method="">
      <h2>Pokemon</h2>
      <p type="Id:">
        <input id="idNombre" type="number" v-model="id" />
      </p>
      <p type="Name:">
        <label id="idName" type="text" />
      </p>
      <p type="Weight:">
        <label id="idWeight" type="text" />
      </p>
      <p type="base_experience:">
        <label id="idbase_experience" type="text" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonId: "",
      pokemonData: null,
    };
  },
  watch: {
    pregunta(value) {
      if (!value.includes("0")) return;
      this.consumirApi();
    },
  },

  methods: {
    async consumirApi(id) {
      const { name, base_experience, weight } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + id
      ).then((respuesta) => respuesta.json());

      this.pokemonData = { name, weight, base_experience };
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