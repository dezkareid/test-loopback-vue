<template>
  <div class="info-layer">
    <div class="container">
      <v-grid m12>
        <h2>
          Tenemos una solución a tu medida<br/>
          (81) 40 40 52 22
        </h2>
        <a href="mailto:ventas@skydrop.com.mx">ventas@skydrop.com.mx</a>
      </v-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contactinfo'
  }
</script>

<style scoped>
  .info-layer {
    background-image: 
      linear-gradient(
        rgba(70,38,160, 0.5),
        rgba(70,38,160, 0.5)
      ),
      url('http://www.skydrop.com.mx/assets/img/bg_footer-759364d3bf048a11c237285b949ac52b.jpg');
    background-position: center center;
    background-size: cover;
    padding: 100px 0;
  }

  div.container {
    text-align: center;
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .container h2 {
    font-weight: 700;
    font-size: 2.125rem;
  }

  .container a {
    color: #00EAB4;
    font-size: 1.5rem;
    font-weight: 300;
    text-decoration: underline;
  }   

</style>
