<template>
  <div>
    <h2>Logout</h2>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: function (to, from) {
      const user = useCookie('user')

      // reset the user cookie value
      user.value = null;
      
      // redirect user to login page
      return navigateTo('/login')
    }
  })
</script>