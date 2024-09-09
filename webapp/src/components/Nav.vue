<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <header>
    <div class="text-center w-full p-4">
      <nav class="w-1/4 flex justify-between space-x-5 m-auto">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>
