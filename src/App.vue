<template>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    if(document.cookie.includes("token")) {
      this.$router.push({path: '/main'});
    } else {
      this.$router.push({path: '/'});
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.link {
  margin: 10px;
}
</style>
