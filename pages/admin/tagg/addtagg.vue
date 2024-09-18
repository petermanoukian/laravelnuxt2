<!-- pages/admin/cat/addcategory.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'



definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig } from '#imports'

const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const name = ref('')

const adderror = ref('')
const addsuc = ref('')

const resetForm = async () => {
  
  name.value = ''
  adderror.value = ''
  addsuc.value =''
  

  
  
}


const addtagg = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

	
  const formData = new FormData()
  formData.append('name', name.value)


  try {
    const response = await $api.post(`${apiUrl}/admin/tagg/add`, formData)

	addsuc.value = 'Record Added ' + name.value +  ' ... you will be redircted in a monent ...'
	  
	  setTimeout(() => {
		router.push('/admin/tagg/viewtagg'); 
	  }, 300); 
	
	
  } 
  catch (error) 
  {

		if (error.response && error.response.status === 422) 
		{
          // Extract error message from the response
          adderror.value = error.response.data.message;
        } 
		else 
		{
          adderror.value = 'An unexpected error occurred. name is ' +    name.value + error;
        }
		setTimeout(resetForm, 1200)
  }

}



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
			 Add Category   			 
			
			
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">

				<div class="flex items-center justify-center bg-gray-100">
					<div class=" fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Add Category
						
						</h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/tagg/viewtagg" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View Tags</NuxtLink>
						 </p>
						<form @submit.prevent="addtagg">

						<div class="mb-4">	
						  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
						  <input v-model="name" type="text" placeholder="Name" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
						</div>  

						
						
						<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add </button>
						<p v-if="adderror" class="mt-2 text-sm text-red-600">{{ adderror }}</p>
						<p v-if="addsuc" class="mt-2 text-sm text-red-600">{{ addsuc }}</p>
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
