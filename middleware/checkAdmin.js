import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    const token = localStorage.getItem('token');
    if (!token) {
      // If there's no token, redirect to login
      return navigateTo('/login');
    }

    const authStore = useAuthStore();

    // Fetch user if not already fetched
    if (!authStore.user) {
      await authStore.fetchUser();
    }

    // Check if user levell is 1
    if (authStore.user.levell !== 1) {
      // Clear the token and user data if access is forbidden


      // Provide a JSON response if the request expects JSON
      if (to.meta && to.meta.expectsJson) {
           return navigateTo('/forbidden') // Redirect to a custom page or handle it

      }

      // Optionally, you can return a specific response code here
      // without redirecting.
     return navigateTo('/forbidden');
    }
  }
});
