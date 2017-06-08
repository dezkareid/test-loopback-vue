<template>
  <div id="app">
    <MenuSkydrop></MenuSkydrop>
    <ContactForm></ContactForm>
    <FooterSkydrop></FooterSkydrop>
  </div>
</template>

<script>
import MenuSkydrop from './components/MenuSkydrop'
import ContactForm from './components/ContactForm'
import FooterSkydrop from './components/FooterSkydrop'

export default {
  name: 'app',
  components: {
    MenuSkydrop,
    ContactForm,
    FooterSkydrop
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
