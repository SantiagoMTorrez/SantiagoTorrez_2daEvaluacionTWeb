# Explorador SWAPI

[![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)

Portal web interactivo para explorar personajes, vehículos y naves espaciales de Star Wars usando la API SWAPI.

![Preview](https://via.placeholder.com/800x400.png?text=Vista+Previa+del+Portal) <!-- Reemplazar con imagen real -->

## ✨ Características
- Búsqueda en tiempo real con debounce
- Diseño 100% responsivo
- 3 categorías principales
- Tarjetas interactivas con detalles
- Manejo de estados de carga/error
- Navegación SPA fluida

## 🛠 Instalación
```bash
git clone https://github.com/tu-usuario/star-wars-portal.git
cd star-wars-portal
npm install
npm run dev

// Personajes
https://www.swapi.tech/api/people/?name=[nombre]

// Vehículos 
https://www.swapi.tech/api/vehicles/?name=[modelo]

// Naves
https://www.swapi.tech/api/starships/?name=[nombre]