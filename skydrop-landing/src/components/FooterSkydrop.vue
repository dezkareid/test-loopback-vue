<template>
  <v-footer>
    <div slot="content">
      <v-row>
        <v-grid m6>
          <img alt="Skydrop Logo" src="http://www.skydrop.com.mx/assets/img/logo_header@2x-96e1c4677177e38c484b5736e1a62cb1.png">
        </v-grid>
        <v-grid m6>
          <div class="right social-networks">
            <a href="http://www.facebook.com/skydropco" target="_blank">
              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
            <a href="http://www.twitter.com/skydropco" target="_blank">
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </v-grid>
      </v-row>
      <v-row class="links">
        <v-grid m3>
          <a href="/inicio">Inicio</a>
          <a href="/users/sign_in">Iniciar sesión</a>
          <a href="/users/sign_up">Regístrate</a>
          <a href="/terminos_y_condiciones">Términos y condiciones</a>
        </v-grid>
        <v-grid m3>
          <a href="/mensajeria">Mensajería</a>
          <a href="/ecommerce">E-commerce</a>
          <a href="/restaurantes">Restaurantes</a>
          <a href="/registro_dropper">Repartidores</a>
        </v-grid>
        <v-grid m6 class="direct-contact">
          <a href="tel:8140405222" title="Skydrop phone">(81) 40 40 52 22</a>
          <a href="mailto:atencion@skydrop.com.mx">atencion@skydrop.com.mx</a>
        </v-grid>
      </v-row>
    </div>
    <div class="container" slot="copyright">&copy; Copyright 2017 Skydrop</div>
  </v-footer>
</template>

<script>
  export default {
    name: 'footerskydrop'
  }
</script>

<style scoped>

  .links a {
    color: #00EAB4;
    display: block;
    font-size: 1.25rem;
    font-weight: 300;
  }

  .links a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .social-networks a {
    padding-left: 2rem;
  }

  .direct-contact a {
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: right;
  }

  .direct-contact a:hover {
    color: #00EAB4;
    text-align: right;
    text-decoration: none;
  }

</style>
