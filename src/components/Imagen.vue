<template>
  <div class="container">
    <img class="img-caja" :src="urlImg" alt="" />
    <label for="">{{ texto }}</label>
  </div>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
    },
    urlImg: {
      type: String,
    },
  },
};
</script>

<style>
img {
  width: 200px;
  height: 300px;
}
</style>