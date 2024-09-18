<!-- pages/login.vue -->
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'redirect-if-authenticated'
});

const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')


const login = async () => {
  await authStore.login({ email: email.value, password: password.value })
  //router.push('/dashboard')
}

const loginError = computed(() => authStore.loginError); // Reactive binding to loginError in store

</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" id="email" name="email" placeholder="Enter your email"
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password"
                 class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 required>
        </div>
        <button type="submit" class="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Login
        </button>
      </form>
      <p v-if="loginError" class="mt-2 text-sm text-red-600">{{ loginError }}</p>
    </div>
  </div>
</template>
