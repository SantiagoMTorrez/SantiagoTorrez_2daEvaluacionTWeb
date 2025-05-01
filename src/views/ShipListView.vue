<template>
  <!-- Contenedor de la lista de naves -->
    <div class="ship-list">
      <div class="content-wrapper">
        <h2>Naves Espaciales de Star Wars</h2>
        
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Buscar nave..."
            class="search-input"
            @input="handleSearch"
          />
        </div>
  
        <div v-if="loading" class="loading">Cargando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        
        <div v-else class="grid">
          <template v-if="ships.length > 0">
            <ShipCard
              v-for="ship in ships"
              :key="ship.uid"
              :ship="ship"
            />
          </template>
          <div v-else class="no-results">
            No se encontraron naves para "{{ searchTerm }}"
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import ShipCard from '@/components/ShipCard.vue'
  
  export default {
    name: 'ShipListView',
    components: { ShipCard },
    data() {
      return {
        searchTerm: '',
        ships: [],
        loading: false,
        error: null,
        searchTimeout: null
      }
    },
    methods: {
      handleSearch() {
        clearTimeout(this.searchTimeout)
        this.searchTimeout = setTimeout(this.fetchShips, 500)
      },
      async fetchShips() {
        this.loading = true
        this.error = null
        try {
          const url = this.searchTerm 
            ? `https://www.swapi.tech/api/starships/?name=${encodeURIComponent(this.searchTerm)}`
            : 'https://www.swapi.tech/api/starships'
          
          const response = await axios.get(url)
          
          this.ships = response.data.result.map(item => ({
            ...item.properties,
            uid: item.uid,
            url: item._id
          }))
          
        } catch (err) {
          this.error = 'Error al buscar naves espaciales'
          this.ships = []
        } finally {
          this.loading = false
        }
      }
    },
    mounted() {
      this.fetchShips()
    }
  }
  </script>
  
  <style>
  .ship-list {
    background-image: url('@/assets/fondoNave.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    padding: 2rem;
    position: relative;
  }
  
  .ship-list::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  
  /* Estilos consistentes con otros componentes */
  .search-input {
    border-color: #00B4D8;
    color: #90E0EF;
  }
  
  .search-input:focus {
    box-shadow: 0 0 10px #00B4D8;
  }
  
  .loading, .error, .no-results {
    color: #00B4D8;
  }
  
  h2 {
    color: #00B4D8;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }
    
    .search-input {
      font-size: 1rem;
      padding: 0.6rem 1rem;
    }
  }
  </style>