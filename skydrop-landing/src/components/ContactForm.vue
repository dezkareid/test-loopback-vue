<template>
  <div class="container">
    <v-row>
      <v-grid s8 offset-s2>
        <h2 class="center">Contacto</h2>
        <form @submit.prevent="submit" action="" method="post">
          <div class="input-field">
            <v-text-input 
              name="name" id="name" v-model="message.name"
              placeholder="Joel Humberto Gómez Paredes" required>
            </v-text-input>
            <label for="name">Nombre</label>
          </div>
          <div class="input-field">
            <v-text-input type="tel" 
              name="phone" id="phone" v-model="message.phone"
              placeholder="1234567890" required>
            </v-text-input>
            <label for="phone">Celular (10 dígitos)</label>
          </div>
          <div class="input-field">
            <v-text-input type="email" 
              name="email" id="email" v-model="message.email"
              placeholder="elmaildeldezkareid@gmail.com" required>
            </v-text-input>
            <label for="email">Email</label>
          </div>
          <div class="input-field">
            <v-text-input 
              id="company" name="company" v-model="message.company"
              placeholder="Nombre de la Empresa o Negocio">
            </v-text-input>
            <label for="name">Empresa (opcional)</label>
          </div>
          <div class="input-field">
            <v-select name="category" id="category" :items="categories"
            select-text="Seleccionar tipo de empresa">
            </v-select>
            <label for="select">Tipo de empresa (opcional)</label>
          </div>
          <div class="input-field">
            <v-select name="topic" id="topic"
            v-model="message.topic" :items="topics"
            select-text="Seleccionar asunto">
            </v-select>
            <label for="select">Asunto</label>
          </div>
          <div class="input-field">
            <v-text-area name="comment" id="comment" v-model="message.comment" required>
            </v-text-area>
            <label for="comment">Dudas, comentarios o reporte</label>
          </div>
          <div class="center">
            <v-btn class="send-form-button" type="submit">Enviar</v-btn>
          </div>
        </form>
      </v-grid>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'contactform',
    data () {
      return {
        categories: [
          { text: 'Restaurante' },
          { text: 'Local' }
        ],
        message: {},
        topics: [
          { text: 'Quiero más información' }
        ]
      }
    },
    methods: {
      submit: function () {
        console.log(this.message)
      }
    }
  }
</script>

<style scoped>
  .container .row {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }

  .send-form-button {
    background: linear-gradient(to top right, #9c27b0 0%, #e91e63 100%);
    border-radius: 60px;
    margin-top: 2rem;
  }
</style>
