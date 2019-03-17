<template>
  <div id="app">
    <img class="backgroundImage" src="./assets/sunset.jpg">
    <router-view style="position: relative;"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.backgroundImage{
        background-size: cover;
        filter: blur(8px);
        -webkit-filter: blur(8px);
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
      }
</style>
