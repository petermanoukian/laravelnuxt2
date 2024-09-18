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
const config = useRuntimeConfig()

const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const id1 = ref('')

const id = route.params.id



const prod= ref(null)

const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchProd = async () => {
  try {
    // Call the Laravel API using the ID from the route
    const response = await $api.get(`${apiUrl}/admin/prod/detail/${id}`)
	prod.value = response.data

  } catch (error) {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}





onMounted(async () => {
  await authStore.fetchUser()
  fetchProd()

})

watch(route, () => {
  
})





</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end">Product Details </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">

				<div class="flex items-center justify-center bg-gray-100">
					<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Product Details</h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/prod/viewprod" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View subcategories</NuxtLink>
						</p>
						
						<div v-if="prod">	
							<h1> {{ prod.name }}</h1>
							<h2> {{ prod.cat.name }}</h2>
							<h2> {{ prod.subcat.name }}</h2>
							
							
							<p>ID: {{ id }}</p>
							<p v-if="prod.img">
							  <img :src="`${config.public.BaseUrl}/images/prod/${prod.img}`"
							  :alt="prod.name" class="mt-2 mb-2 maxwidth96height400"/>
							</p> 
							<p v-else>
								<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
							</p>
							<div v-if="prod.des !== 'null' && prod.des !== 'NULL' && prod.des !== ''"  
							class="formatted-result" v-html="prod.des"></div>
							<div v-if="prod.dess !== 'null' && prod.dess !== 'NULL' && prod.dess !== ''"  class="formatted-result" v-html="prod.dess"></div>
							
						</div>
						<div v-else>
						<p>Loading...</p>
						</div>	


						
				
						
						

					</div>
			  </div>
			  
				
				
				
				
				

             
            </main>
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
