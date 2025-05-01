<template>
    <!-- Estructura de la carta de la nave -->
    <div class="ship-card">
      <h3>{{ ship.name }}</h3>
      <div class="card-content">
        <p>Modelo: {{ ship.model }}</p>
        <p>Clase: {{ ship.starship_class }}</p>
        <p>Longitud: {{ ship.length }} metros</p>
        <p>Pasajeros: {{ ship.passengers }}</p>
        <p>Costo: {{ formattedCost }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Componente de carta de nave para mostrar la información de las naves espaciales
    name: 'ShipCard',
    props: {
      ship: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedCost() {
        return this.ship.cost_in_credits !== 'unknown' 
          ? `${this.ship.cost_in_credits} créditos` 
          : 'Desconocido';
      }
    }
  }
  </script>
  
  <style scoped>
  .ship-card {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #00B4D8;
    border-radius: 10px;
    padding: 1.5rem;
    color: #FFFFFF;
    transition: all 0.3s ease;
  }
  
  .ship-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px #00B4D8;
  }
  
  .card-content p {
    margin: 0.8rem 0;
    color: #90E0EF;
  }
  
  h3 {
    color: #00B4D8;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  </style>