<template>
  <div id="app">
    <MenuSkydrop></MenuSkydrop>
    <ContactForm></ContactForm>
    <ContactInfo></ContactInfo>
    <FooterSkydrop></FooterSkydrop>
  </div>
</template>

<script>
import MenuSkydrop from './components/MenuSkydrop'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import FooterSkydrop from './components/FooterSkydrop'

export default {
  name: 'app',
  components: {
    MenuSkydrop,
    ContactForm,
    ContactInfo,
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
    background-color: rgba(70,38,160,0.95);
  }

  #app footer {
    background-color: #4626A0;
    background-image: linear-gradient(-45deg, #7d1e8d 0%, #4626a0 100%);
    margin: 0px;
    padding: 30px 15px;
  }

</style>
