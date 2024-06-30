type User = {
  username: string,
  role: string
}

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie<User>('user')

  if (user.value.role !== 'admin') {
    console.log('you need to be an admin to view the admin page')
    
    return navigateTo('/')
  }
})