<template>
  <div id="app">
    <!-- <Main/> -->
    <router-link to="/">home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Main from './views/main.vue'

export default {
  name: 'App',
  // components: {
  //   Main
  // }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
