<template>
  <v-nav>
    <ul>
      <li>
        <a href="#!">
          <img src="http://www.skydrop.com.mx/assets/img/logo_header@2x-96e1c4677177e38c484b5736e1a62cb1.png"/>
        </a>
      </li>
      <li>
        <a href="#!">Mensajería</a>
      </li>
      <li>
        <a href="#!">E-commerce</a>
      </li>
      <li>
        <a href="#!">Restaurantes</a>
      </li>
    </ul>
    <ul class="right">
      <li>
        <a href="#!">Contacto</a>
      </li>
      <li>
        <a href="#!">Iniciar Sesión</a>
      </li>
      <li>
        <a href="#!">CONVIÉRTETE EN REPARTIDOR</a>
      </li>
    </ul>
    <v-side-nav id="side"></v-side-nav>
  </v-nav>
</template>

<script>
  export default {
    name: 'menuskydrop'
  }
</script>

<style scoped>
  img {
    max-width: 148px;
    vertical-align: middle;
  }
</style>
