<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" v-model="username" required />
      <input type="password" placeholder="Password" required />
      <button>Login</button>
    </form>
  </div>
</template>

<script setup>
  const user = useCookie('user')
  const router = useRouter()
  const username = ref()

  const login = () => {
    user.value = {username: username, role: 'user'}

    router.push('/')
  }
</script>

<style scoped>
  .login-form {
    width: 400px;
    margin: 80px auto;
    padding: 20px 40px 40px;
    background: #fff;
    border-radius: 4px;
  }
  input {
    display: block;
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #bbb;
    border-radius: 4px;
  }
  button {
    background: #00dc82;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px;
  }
</style>