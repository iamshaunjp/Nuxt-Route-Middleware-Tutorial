export default defineNuxtRouteMiddleware((to, from) => {
  const authenticated = useCookie('user')

  if (!authenticated.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  if (authenticated.value && to.path === '/login') {
    return navigateTo('/')
  }
})