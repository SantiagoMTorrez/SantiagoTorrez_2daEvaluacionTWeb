<template>
  <!-- Contenedor de lo vehiculos -->
    <div class="vehicle-list">
      <div class="content-wrapper">
        <h2>Vehículos de Star Wars</h2>
        
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Buscar vehículo..."
            class="search-input"
            @input="handleSearch"
          />
        </div>
  
        <div v-if="loading" class="loading">Cargando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        
        <div v-else class="grid">
          <template v-if="vehicles.length > 0">
            <VehicleCard
              v-for="vehicle in vehicles"
              :key="vehicle.uid"
              :vehicle="vehicle"
            />
          </template>
          <div v-else class="no-results">
            No se encontraron vehículos para "{{ searchTerm }}"
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import VehicleCard from '@/components/VehicleCard.vue'
  
  export default {
    name: 'VehicleListView',
    components: { VehicleCard },
    data() {
      return {
        searchTerm: '',
        vehicles: [],
        loading: false,
        error: null,
        searchTimeout: null
      }
    },
    methods: {
      handleSearch() {
        clearTimeout(this.searchTimeout)
        this.searchTimeout = setTimeout(this.fetchVehicles, 500)
      },
      async fetchVehicles() {
        this.loading = true
        this.error = null
        try {
          const url = this.searchTerm 
            ? `https://www.swapi.tech/api/vehicles/?name=${encodeURIComponent(this.searchTerm)}`
            : 'https://www.swapi.tech/api/vehicles'
          
          const response = await axios.get(url)
          
          this.vehicles = response.data.result.map(item => ({
            ...item.properties,
            uid: item.uid,
            url: item._id
          }))
          
        } catch (err) {
          this.error = 'Error al buscar vehículos'
          this.vehicles = []
        } finally {
          this.loading = false
        }
      }
    },
    mounted() {
      this.fetchVehicles()
    }
  }
  </script>
  
  <style>
  .vehicle-list {
    background-image: url('@/assets/fondoVehiculos.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    padding: 2rem;
    position: relative;
  }
  
  .vehicle-list::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  
  /* Reutiliza los estilos de PeopleListView para consistencia */
  .content-wrapper {
    position: relative;
    z-index: 1;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .search-container {
    margin: 2rem auto;
    max-width: 500px;
    position: relative;
  }
  
  .search-input {
    width: 100%;
    padding: 0.8rem 1.5rem;
    border: 2px solid #FF4444;
    border-radius: 30px;
    background: rgba(26, 26, 26, 0.9);
    color: #FFD700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }
  
  .search-input:focus {
    outline: none;
    box-shadow: 0 0 10px #FF4444;
  }
  
  .loading, .error, .no-results {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #FF4444;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    margin: 1rem auto;
    max-width: 500px;
  }
  
  h2 {
    color: #FF4444;
    text-align: center;
    font-size: 2.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }
    
    .grid {
      grid-template-columns: 1fr;
    }
  }
  </style>