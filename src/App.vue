<template>
  <div id="app">
    <router-view v-if="isRouterAlive">
         <Main/>  
       </router-view>
    
  </div>
</template>

<script>
import Main from './components/main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  provide() {
    return {
      reload:this.reload
    }
  },
  data() {
    return {
      isRouterAlive:true
    };
  },

   methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick( () => {
        this.isRouterAlive = true;
      })
    }
  },
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
