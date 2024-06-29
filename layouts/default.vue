<template>
  <header>
    <nav>
      <h1>Ninja Book Store</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/logout">Logout</NuxtLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style>
  body {
    margin: 0;
    background: #efefef;
    font-family: 'Rubik';
  }
  header {
    background: #00dc82;
    padding: 20px;
  }
  nav {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
  }
  nav * {
    color: #fff;
    margin: 0;
  }
  nav h1 {
    margin-right: auto;
  }
  nav a {
    margin-left: 20px;
    text-decoration: none;
  }
  main {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
  }
</style>