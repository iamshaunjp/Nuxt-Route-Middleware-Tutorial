export default defineNuxtRouteMiddleware((to, from) => {
  const authenticated = useCookie('user')

  if (!authenticated.value) {
    console.log('must be authenticated to view', to.name)

    return navigateTo('/login')
  }
})