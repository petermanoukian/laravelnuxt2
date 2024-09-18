<!-- pages/admin/tag/edit/[id].vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'


import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()



definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});

const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
  fetchTagg()
})


const router = useRouter()
const route = useRoute()
const id1 = ref('')
const name = ref('')

const editerror = ref('')
const editsuc = ref('')

const id = route.params.id


const tagg= ref(null)

// Use NuxtApp to access global plugins or configurations
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchTagg = async () => {
  try {
    // Call the Laravel API using the ID from the route
    const response = await $api.get(`${apiUrl}/admin/tagg/edit/${id}`)
	id1.value = id;
    tagg.value = response.data
	name.value = tagg.value.name

  } catch (error) {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}




const edittagg = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const formData = new FormData()
  formData.append('name', name.value)


  try {
    const response = await $api.post(`${apiUrl}/admin/tagg/update/${id}`, formData)
  
	editsuc.value = ' updated ' + name.value +  ' ... you will be redircted in a monent ...'
  } catch (error) {

		if (error.response && error.response.status === 422) {
          // Extract error message from the response
          editerror.value = error.response.data.message;
        } else {
          editerror.value = 'An unexpected error occurred.';
        }
  }

  setTimeout(() => {
    router.push('/admin/tagg/viewtagg'); 
  }, 300); 
}




</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end">
			 Edit Tag
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			
			<div v-if="tagg">	


				<div class="flex items-center justify-center bg-gray-100">
					<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Edit Tag</h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/tagg/viewctagg" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View Tags</NuxtLink>
						 </p>
						<form @submit.prevent="edittagg">

						<div class="mb-4">	
						  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
						  <input v-model="name" type="text" placeholder="Name" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						  focus:border-indigo-500 sm:text-sm"/>
						</div>  

						
		
						
						<input v-model="id1" type="text" readonly 
							class="mt-1 block w-full px-3 py-2 mb-4 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none 
							focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />


						
						<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
						<p v-if="editerror" class="mt-2 text-sm text-red-600">{{ editerror }}</p>
						<p v-if="editsuc" class="mt-2 text-sm text-red-600">{{ editsuc }}</p>
					</form>
						
						

					</div>
			  </div>
			  





			</div>
		    <div v-else>
			<p>Loading...</p>
		    </div>		
							
						
		

			  
 
            </main>
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>



