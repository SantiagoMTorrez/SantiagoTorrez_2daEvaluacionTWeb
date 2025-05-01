<template>
  <!-- Contenedor de la lista de personas-->
    <div class="people-list">
      <div class="content-wrapper">
        <h2>Personajes de Star Wars</h2>
        
        <!-- Barra de búsqueda -->
        <div class="search-container">
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Buscar personaje..."
            class="search-input"
            @input="handleSearch"
          />
        </div>
  
        <!-- Estados de carga y error -->
        <div v-if="loading" class="loading">Cargando...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        
        <!-- Resultados -->
        <div v-else class="grid">
          <template v-if="people.length > 0">
            <PersonCard
              v-for="person in people"
              :key="person.uid"
              :person="person"
            />
          </template>
          <div v-else class="no-results">
            No se encontraron personajes para "{{ searchTerm }}"
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import PersonCard from '@/components/PersonCard.vue'
  
  export default {
    name: 'PeopleListView',
    components: { PersonCard },
    data() {
      return {
        searchTerm: '',
        people: [],
        loading: false,
        error: null,
        searchTimeout: null
      }
    },
    methods: {
      handleSearch() {
        clearTimeout(this.searchTimeout)
        this.searchTimeout = setTimeout(this.fetchPeople, 500)
      },
      async fetchPeople() {
        this.loading = true
        this.error = null
        try {
          const url = this.searchTerm 
            ? `https://www.swapi.tech/api/people/?name=${encodeURIComponent(this.searchTerm)}`
            : 'https://www.swapi.tech/api/people'
          
          const response = await axios.get(url)
          
          this.people = response.data.result.map(item => ({
            ...item.properties,
            uid: item.uid,
            url: item._id
          }))
          
        } catch (err) {
          this.error = 'Error al buscar personajes'
          this.people = []
        } finally {
          this.loading = false
        }
      }
    },
    mounted() {
      this.fetchPeople()
    }
  }
  </script>
  
  <style>
  .people-list {
    background-image: url('@/assets/fondoPersonaje.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    padding: 1rem;
    position: relative;
  }
  
  .people-list::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  
  .content-wrapper {
    position: relative;
    z-index: 1;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    padding: 1rem;
  
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
  }
  
  /* Estilos actualizados para las tarjetas */
  .card {
    border: 2px solid #ffe81f !important;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.8) !important;
    transition: transform 0.3s ease;
    padding: 1rem;
  margin: 0.5rem;
  
  h3 {
    font-size: 1.2rem;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  
  p {
    font-size: 0.9rem;
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
  }
  
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #ffe81f;
  }
  
  .search-container {
    max-width: 90%;
    margin: 1rem auto;
    position: relative;
    @media (max-width: 480px) {
        max-width: 100%;
    }
  }
  
  .search-input {
    width: 100%;
    border: 2px solid #ffe81f;
    border-radius: 30px;
    background: rgba(26, 26, 26, 0.9);
    color: #ffe81f;
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
    transition: all 0.3s ease;
  }
  
  .search-input:focus {
    outline: none;
    box-shadow: 0 0 10px #ffe81f;
  }
  
  .loading, .error, .no-results {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #ffe81f;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    margin: 1rem auto;
    max-width: 500px;
  }
  
  .no-results {
    grid-column: 1 / -1;
    background: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border: 2px solid #ffe81f;
    border-radius: 10px;
  }
  
  h2 {
    color: #ffe81f;
    text-align: center;
    font-size: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
  }
  </style>