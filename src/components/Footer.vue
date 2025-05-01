<template> 
  <!-- Estructura del Footer principal para las paginas -->
  <footer class="main-footer">
    <div class="footer-content">
      <p class="credits">© 2025 Universidad Católica Boliviana "San Pablo"</p>
      <p class="disclaimer">Datos obtenidos de SWAPI - The Star Wars API</p>
      <div class="links">
        <a href="https://swapi.dev/" target="_blank" class="footer-link">API Oficial</a>
        <router-link to="/" class="footer-link">Inicio</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default { 
  name: 'FooterComponent' // Componente de pie de página
}
</script>

<style scoped>
/* Estilos encapsulados */
.main-footer {
  background-color: #ffe81f;
  color: #121211;
  padding: 2rem;
  margin-top: auto;
}
/* Alinear el contenido */
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.credits {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.disclaimer {
  color: #666;
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffe81f;
}
</style>