<template> 
 <!-- Estructura del Navbar principal para las paginas -->
    <nav class="navbar">
      <router-link to="/" class="logo">Star Wars API</router-link>
      <div class="nav-links">
        <router-link to="/">Inicio</router-link>
        <router-link to="/people">Personajes</router-link>
        <router-link to="/vehicles" class="nav-link">Vehículos</router-link>
        <router-link to="/starships" class="nav-link">Naves Espaciales</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarComponent' // Componente de barra de navegación
  }
  </script>
  
  <style scoped>
  /* Estilos encapsulados */
  .navbar {
    padding: 1rem;
    background: #000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    font-size: 1.5rem;
    color: #ffe81f;
    text-decoration: none;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    margin-left: 2rem;
  }
  </style>