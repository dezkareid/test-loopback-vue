<template>
  <div id="app">
    <MenuSkydrop></MenuSkydrop>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import MenuSkydrop from './components/MenuSkydrop'
import ContactForm from './components/ContactForm'

export default {
  name: 'app',
  components: {
    MenuSkydrop,
    ContactForm
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #app nav {
    background-color: #512DA8;
  }

</style>
