<template>
  <!-- Partes de la pagina inicial -->
    <div class="home">
      <div class="content">
        <h1>Bienvenido al Portal Star Wars</h1>
        <div class="category-buttons">
          <router-link to="/people" class="btn">Ver Personajes</router-link>
          <router-link to="/vehicles" class="btn">Ver Vehiculos</router-link>
          <router-link to="/starships" class="btn">Ver Naves</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
  <style>
  /* Estilos para la vista de inicio */
  .home {
    background-image: url('@/assets/fondo1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .home::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
}
  
  .content {
    position: relative;
    z-index: 1;
    color: white;
    padding: 2rem;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .category-buttons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .btn {
    padding: 1rem 2rem;
    background: #ffe81f;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: transform 0.3s ease;
    border: 2px solid transparent;
    @media (max-width: 480px) {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }
  }
  
  .btn:hover {
    transform: scale(1.05);
    background: #000;
    color: #ffe81f;
    border-color: #ffe81f;
  }
  </style>