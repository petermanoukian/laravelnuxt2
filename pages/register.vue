<!-- pages/register.vue -->
<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'redirect-if-authenticated'
});

const authStore = useAuthStore()
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')

const register = async () => {
  await authStore.register({ name: name.value, email: email.value, password: password.value })
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
		<h1 class="text-2xl font-bold mb-4">Register</h1>
		<form @submit.prevent="register">
		<div class="mb-4">	
		  <label for="name" class="block text-sm font-medium text-gray-700">Email</label>
		  <input v-model="name" type="text" placeholder="Name" 
		  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
		</div>  
		<div class="mb-4">  
		  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
		  <input v-model="email" type="email" placeholder="Email" 
		  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
		</div>
		<div class="mb-4">
		  <label for="name" class="block text-sm font-medium text-gray-700">Password</label>
		  <input v-model="password" type="password" placeholder="Password" 
		  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
		</div>
		  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
		</form>
	</div>
  </div>
</template>
