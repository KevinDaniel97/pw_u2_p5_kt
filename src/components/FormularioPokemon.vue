<template>
  <div class="dark"></div>
  <div class="container">
    <form @submit.prevent="consumirURLAPI(id)" class="form" action="" method="">
      <h2>Pokemon</h2>
      <p type="Id:">
        <input id="idNumero" type="number" v-model="id" />
      </p>

      <label for="name">Name:</label>
      <p id="name">{{ name }}</p>

      <label for="weight">Weight:</label>
      <p id="weight">{{ weight }}</p>

      <label for="base_experience">Base Experience:</label>
      <p id="base_experience:">{{ base_experience }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      name: null,
      weight: null,
      base_experience: null,
    };
  },
  watch: {},

  methods: {
    async consumirURLAPI(id) {
      const { name, base_experience, weight } = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + id
      ).then((respuesta) => respuesta.json());
      console.log(name);

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
    },
  },
};
</script>


<style scoped>
body {
  background-color: #59abe3;
}

.container {
  justify-content: left;
  align-items: left;
}

.form {
  width: 340px;
  height: 450px;
  background-color: #eecfcf;
  border-radius: 8px;
  padding: 20px 30px;
  box-shadow: 0 0 40px -10px #868181;
}

h2 {
  margin: 10px 0px;
  padding-bottom: 10px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 16px;
  color: #5a5a5a;
  justify-content: left;
  align-items: left;
}

input {
  width: 100%;
  border: 0;
  border-bottom: 2px solid #bebed2;
  background: rgb(167, 103, 103);
  color: white;
}

input:focus {
  border-bottom: 3px solid #78788c;
}
label {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-bottom: 2px solid #bebed2;
}
</style>