<!-- pages/page4.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref ,onMounted } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'


import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'redirect-if-authenticated'
});

const authStore = useAuthStore()
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const levell = ref('2')

const register = async () => {
  await authStore.register({ name: name.value, email: email.value, levell: levell.value, password: password.value })
  
}



definePageMeta({
  middleware: ['auth' , 'check-admin'],
  layout: 'admin'
});



onMounted(async () => {
  await authStore.fetchUser()
})
</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end">
			 page 4
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">Full Admin</h1>

             
            
			
			
			  <div class="flex items-center justify-center bg-gray-100">
				<div class="max-w-md w-full bg-white p-8 shadow-md rounded-lg">
					<h1 class="text-2xl font-bold mb-4">Add an Admin</h1>
					<form @submit.prevent="register">
					
					<div class="mb-4">	
					  <label for="levell" class="block text-sm font-medium text-gray-700">Level</label>
					  <select v-model="levell" 
					  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
					  focus:border-indigo-500 sm:text-sm">
					  <option value = '2'> Limited Admin</option>
					  <option value = '1'> Full Admin</option>
					  
					  </select>
					</div>  
					
					
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
					  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Admin</button>
					</form>
				</div>
			  </div>
			</main>
			
			
			
			
			
			
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
