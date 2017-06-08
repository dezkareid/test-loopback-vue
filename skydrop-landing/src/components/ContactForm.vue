<template>
  <div class="container">
    <h2 class="center">Contacto</h2>
    <form>
      <div class="input-field">
        <v-text-input 
          id="name" name="name"  
          placeholder="Joel Humberto Gómez Paredes" required>
        </v-text-input>
        <label for="name">Nombre</label>
      </div>
      <div class="input-field">
        <v-text-input type="tel" 
          name="phone" id="phone"
          placeholder="1234567890" required>
        </v-text-input>
        <label for="phone">Celular (10 dígitos)</label>
      </div>
      <div class="input-field">
        <v-text-input type="email" 
          name="email" id="email"
          placeholder="elmaildeldezkareid@gmail.com" required>
        </v-text-input>
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <v-text-input 
          id="company" name="company"  
          placeholder="Nombre de la Empresa o Negocio">
        </v-text-input>
        <label for="name">Empresa (opcional)</label>
      </div>
      <div class="input-field">
        <v-select name="category" id="category" 
        select-text="Seleccionar tipo de empresa">
        </v-select>
        <label for="select">Tipo de empresa (opcional)</label>
      </div>
      <div class="input-field">
        <v-select name="topic" id="topic" 
        select-text="Seleccionar asunto" required>
        </v-select>
        <label for="select">Asunto</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contactform'
}
</script>

<style scoped>
</style>
