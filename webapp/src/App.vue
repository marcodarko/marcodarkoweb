<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Triangle from './components/Triangle.vue'

let year = ref('')
var currentTime = new Date()
year.value = currentTime.getFullYear()
</script>

<template>
  <main
    class="bg-neon dark:bg-black dark:text-neon h-full flex justify-center align-middle flex-wrap"
  >
    <div class="w-full text-center bg-black text-neon">
      <Triangle />
      <h1 class="font-bold text-8xl">Marco Darko</h1>
    </div>
    <div class="container p-4">
      <Nav></Nav>
      <hr class="border-black mb-6" />
      <RouterView />
    </div>
    <footer class="my-9">
      <small>All content copyright Marco Cano {{ year }} All rights reserved. </small>
    </footer>
  </main>
</template>
