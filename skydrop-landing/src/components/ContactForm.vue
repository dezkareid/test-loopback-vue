<template>
  <div class="container">
    <v-row>
      <v-grid s8 offset-s2>
        <h2 class="center">Contacto</h2>
        <form @submit.prevent="submit" action="" method="post">
          <div class="input-field">
            <input type="text"
              name="name" id="name" v-model="message.name"
              data-vv-as="nombre" v-validate data-vv-rules="required"
              placeholder="Joel Humberto Gómez Paredes" />
            <label for="name">Nombre</label>
            <span class="invalid">{{errors.first('name')}}</span>
          </div>
          <div class="input-field">
            <input type="tel" 
              name="phone" id="phone" v-model="message.phone"
              data-vv-as="celular" v-validate
              data-vv-rules="required|digits:10"
              placeholder="1234567890"/>
            <label for="phone">Celular (10 dígitos)</label>
            <span class="invalid">{{errors.first('phone')}}</span>
          </div>
          <div class="input-field">
            <input type="email" 
              name="email" id="email" v-model="message.email"
              v-validate data-vv-rules="required|email"
              placeholder="elmaildeldezkareid@gmail.com"/>
            <label for="email">Email</label>
            <span class="invalid">{{errors.first('email')}}</span>
          </div>
          <div class="input-field">
            <input type="text" 
              id="company" name="company" v-model="message.company"
              data-vv-as="empresa" v-validate
              data-vv-rules="regex:^([A-Za-z\d\-_\-.\s]+)$"
              placeholder="Nombre de la Empresa o Negocio"/>
            <label for="company">Empresa (opcional)</label>
            <span class="invalid">{{errors.first('company')}}</span>
          </div>
          <div class="input-field">
            <v-select name="category" id="category"
            v-model="message.category" :items="categories"
            select-text="Seleccionar tipo de empresa">
            </v-select>
            <label for="category">Tipo de empresa (opcional)</label>
          </div>
          <div class="input-field">
            <v-select name="topic" id="topic"
            v-model="message.topic" :items="topics"
            select-text="Seleccionar asunto">
            </v-select>
            <label for="topic">Asunto</label>
            <span class="invalid">{{errors.first('topic')}}</span>
          </div>
          <div class="input-field">
            <textarea class="materialize-textarea" data-length="120"
            name="comment" id="comment" v-model="message.comment"
            data-vv-as="comentario" v-validate data-vv-rules="required">
            </textarea>
            <label for="comment">Dudas, comentarios o reporte</label>
            <span class="invalid">{{errors.first('comment')}}</span>
          </div>
          <div class="center">
            <v-btn class="send-form-button" 
              :disabled="buttonDisabled" type="submit">
              Enviar
            </v-btn>
          </div>
        </form>
      </v-grid>
    </v-row>
  </div>
</template>

<script>
  import requester from '../requester'

  export default {
    name: 'contactform',
    data () {
      return {
        categories: [
          { id: 0, text: 'Restaurante' },
          { id: 1, text: 'Local' }
        ],
        message: {},
        buttonDisabled: false,
        topics: [
          { id: 0, text: 'Quiero más información' },
          { id: 1, text: 'Acerca de mi envío' },
          { id: 2, text: 'Soporte técnico' }
        ]
      }
    },
    methods: {
      submit: function () {
        let message = this.message
        let messageData = {
          name: message.name,
          phone: message.phone,
          email: message.email,
          comment: message.comment
        }
        if (!message.topic) {
          this.$swal(
            'Debes elegir un asunto',
            '',
            'error'
          )
          return false
        } else {
          messageData.topic = this.topics[+message.topic].text
        }
        if (message.company) {
          if (!message.category) {
            this.$swal(
              'Debes elegir una categoria',
              '',
              'error'
            )
            return false
          } else {
            messageData.category = this.categories[+message.category].text
          }
        }

        this.$validator.validateAll()
          .then(() => {
            this.$Progress.start()
            this.buttonDisabled = true
            return requester.save('Messages', messageData)
          })
          .then(() => {
            this.$Progress.finish()
            this.buttonDisabled = false
            this.$swal(
              'Mensaje enviado',
              'Te atenderemos a la brevedad',
              'success'
            )
          })
          .catch(() => {
            this.$Progress.fail()
            this.buttonDisabled = false
            this.$swal(
              'Ocurrio un error',
              'Intenta nuevamente',
              'error'
            )
          })
      }
    }
  }
</script>

<style scoped>
  .container .row {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }

  .invalid {
    color: #F44336;
  }

  .send-form-button {
    background: linear-gradient(to top right, #9c27b0 0%, #e91e63 100%);
    border-radius: 60px;
    margin-top: 2rem;
  }
</style>
