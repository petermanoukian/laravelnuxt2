<!-- pages/admin/subcat/viewsubcatbycatid/[catid].vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useSubcatPagination } from '~/composables/useSubcatpagination'

const { subcats, currentPage, lastPage, changePage, pageNumbers, fetchSubcats } = useSubcatPagination()




definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig } from '#imports'
const config = useRuntimeConfig()
const router = useRouter()
const route = useRoute()

const catidx = route.params.catid
const cat= ref(null)

const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchCat = async () => {
  try {
    
    const response = await $api.get(`${apiUrl}/admin/cat/detail/${catidx}`)
    cat.value = response.data
	console.log('line33' + response.data)
	console.log('line34' +response.data)
	
  } catch (error) {
  alert(error)
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}



const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
  await fetchSubcats(catidx)
  await fetchCat()
})
const key = ref(0)

const refreshRoute = () => {
  key.value += 1;
  fetchSubcats(catidx)
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
			 View SubCategories By Category
            </div>
        </header>


       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			<h1 class="text-2xl font-bold mb-4">View SubCategories By Category
			
			  <NuxtLink 
			  :to="`/admin/subcat/addsubcat/${catidx}`"
			  class=" widthmax300 marginleft5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					<i class="fas fa-align-left mr-3"></i>Add SubCategory to this category </NuxtLink> 
			 </h1>
			 
			<div v-if="cat">	
				<h1>Category Detail {{ cat.name }}</h1>
				
				<p v-if="cat.img">
				  <img :src="`${config.public.BaseUrl}/images/cat/thumb/${cat.img}`"
				  :alt="cat.name" class="mt-2 mb-2"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
			</div>
			<div v-else>
			<p>Loading category...</p>
			</div>	 
			 
			<div  v-if="subcats && subcats.length > 0"> 
			
			<SubcatsAdmin
			  :subcats="subcats" 
			  :currentPage="currentPage" 
			  :lastPage="lastPage" 
			  :changePage="changePage" 
			  :pageNumbers="pageNumbers"  
			  :key="key.value" 
			  :catid="catidx"
			/>
			</div>
			<div  v-else >
				Nothing found
			</div>	
			
			<p>Current Route: {{ $route.path }}</p>
			<button @click.native="refreshRoute"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button>		

            </main>
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
