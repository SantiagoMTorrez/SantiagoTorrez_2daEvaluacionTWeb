<template>
    <!-- Componente de tarjeta de personaje -->
    <div class="card">
      <h3>{{ person.name }}</h3>
      <div class="card-content">
        <p>Altura: {{ person.height }} cm</p>
        <p>Género: {{ person.gender }}</p>
        <p>Año de nacimiento: {{ person.birth_year }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default { 
    // Creacion del objeto de la tarjeta para mostrar la información de un personaje
    name: 'PersonCard',
    props: {
      person: {
        type: Object,
        required: true
      }
    }
  }
  </script>

  <!-- PersonCard.vue -->
<style scoped>
.card {
  padding: 1.5rem;
  color: #ffe81f;
  position: relative;
  overflow: hidden;
}

.card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.card-content p {
  margin: 0.8rem 0;
  font-size: 1.1rem;
}
</style>