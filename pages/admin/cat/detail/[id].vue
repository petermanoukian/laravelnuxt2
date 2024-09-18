<!-- pages/admin/cat/[id].vue -->
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
  fetchCat()
})


const router = useRouter()
const route = useRoute()

const id = route.params.id


const cat= ref(null)

// Use NuxtApp to access global plugins or configurations
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchCat = async () => {
  try {
    // Call the Laravel API using the ID from the route
    const response = await $api.get(`${apiUrl}/admin/cat/detail/${id}`)
    cat.value = response.data
  } catch (error) {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
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
			 View Category Detail
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			
			<div v-if="cat">	
				<h1>Category Detail {{ cat.name }}</h1>
				<p>Category ID: {{ id }}</p>
				
				<div v-if="cat.des !== 'null' && cat.des !== 'NULL' && cat.des !== ''"  
				class="formatted-result mt-4" v-html="cat.des"></div>
				
				
				<p v-if="cat.img">
				  <img :src="`${config.public.BaseUrl}/images/cat/${cat.img}`"
				  :alt="cat.name" class="mt-2 mb-2 maxwidth96height400"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
			</div>
		    <div v-else>
			<p>Loading...</p>
		    </div>		
							
						
			<p class="mb-4 mt-4">
			  <NuxtLink to="/admin/cat/viewcat" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			  <i class="fas fa-align-left mr-3"></i>View categories</NuxtLink>
			</p>			

			  
 
            </main>
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
</div>

</template>
