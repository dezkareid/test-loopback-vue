<template>
  <div id="app">
    <MenuSkydrop></MenuSkydrop>
  </div>
</template>

<script>
import MenuSkydrop from './components/MenuSkydrop'

export default {
  name: 'app',
  components: {
    MenuSkydrop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
