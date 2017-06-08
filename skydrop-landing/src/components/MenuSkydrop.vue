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
    <div class="right round-menu">
      <a href="#!">CONVIÉRTETE EN REPARTIDOR</a>
    </div>
    <ul class="right">
      <li>
        <a class="active" href="#!">Contacto</a>
      </li>
      <li>
        <a href="#!">Iniciar Sesión</a>
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
  
  ul li a.active {
    border-top-color: white;
  }
  
  ul li a {
    font-size: 1.125rem;
    font-weight: 400;
    border-top: solid transparent 5px;
  }

  .round-menu {
    padding-top: 5px;
    margin-right: 1rem;
  }

  .round-menu a {
    border: solid white 0.15rem; 
    border-radius: 60px;
    padding: 5px;
  }

  .round-menu a:hover {
    border-color: #00796B;
    color: #00796B;
  }
</style>
