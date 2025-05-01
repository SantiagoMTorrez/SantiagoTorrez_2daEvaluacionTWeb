 // Importacion de las librerías necesarias para las rutas
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleListView from '../views/PeopleListView.vue'
import VehicleListView from '../views/VehicleListView.vue'
import ShipListView from '../views/ShipListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // Definición de las rutas de la aplicación 
  routes: [
    { path: '/', component: HomeView },
    { path: '/people', component: PeopleListView },
    { path: '/vehicles', name: 'vehicles', component: VehicleListView },
    { path: '/starships', name: 'starships', component: ShipListView }
  ]
})

export default router