<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    <RouterView /> <!-- Debe estar envuelto en Suspense para manejar carga -->
    <Footer />
  </div>
</template>