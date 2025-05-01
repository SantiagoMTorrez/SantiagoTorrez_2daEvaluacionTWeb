<template>
  <!-- Componente de tarjeta de vehículo -->
    <div class="vehicle-card">
      <h3>{{ vehicle.name }}</h3>
      <div class="card-content">
        <p>Modelo: {{ vehicle.model }}</p>
        <p>Pasajeros: {{ vehicle.passengers }}</p>
        <p>Longitud: {{ vehicle.length }} metros</p>
        <p>Costo: {{ formattedCost }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
     // Componente de carta de los vehiculos para mostrar su infromacion
    name: 'VehicleCard',
    props: {
      vehicle: {
        type: Object,
        required: true
      }
    },
    computed: {
      formattedCost() {
        return this.vehicle.cost_in_credits !== 'unknown' 
          ? `${this.vehicle.cost_in_credits} créditos` 
          : 'Desconocido';
      }
    }
  }
  </script>
  
  <style scoped>
  .vehicle-card {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #FF4444;
    border-radius: 10px;
    padding: 1.5rem;
    color: #FFFFFF;
    transition: all 0.3s ease;
  }
  
  .vehicle-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px #FF4444;
  }
  
  .card-content p {
    margin: 0.8rem 0;
    color: #FFD700;
  }
  
  h3 {
    color: #FF4444;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  </style>