<template>
  <h1>opciones</h1>

  <div class="options-container"></div>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.options-container {
  display: flex;
  justify-content: center;
}
</style>