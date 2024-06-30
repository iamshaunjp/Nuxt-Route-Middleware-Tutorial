<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: Object as () => NuxtError
  })
</script>

<template>
  <NuxtLayout>
    <div class="error">
      <h2>{{ error.statusCode }}</h2>
      <p>{{ error.statusMessage }}</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped>
  .error {
    width: 400px;
    margin: 0 auto;
    background: #ffdede;
    border: 1px solid crimson;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
  }
  .error h2 {
    margin-top: 0;
  }
</style>