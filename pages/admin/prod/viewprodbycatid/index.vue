<!-- pages/admin/subcat/viewprod.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useProdPagination } from '~/composables/useProdpagination'

import { useCat } from '~/composables/useCat'
import { useSubcat } from '~/composables/useSubcat'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
const { cats,  fetchCatsCommon } = useCat()
const { subcats,  fetchSubcatsCommon } = useSubcat()

const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdPagination()

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

const selectedCat = ref(catidx)
const selectedCat2 = ref(catidx)
const selectedSubcat = ref(null)

const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchCat = async () => {
  try {
    
    const response = await $api.get(`${apiUrl}/admin/cat/detail/${catidx}`)
	
    cat.value = response.data

	console.log('line33' + response.data)
	console.log('line34' +response.data)
	
  } catch (error) {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}



const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
  await fetchCat()
  await fetchProds(catidx)
  
  
  await fetchCatsCommon()
  await fetchSubcatsCommon(catidx)
  selectedCat.value = catidx
  selectedCat2.value = catidx
})
const key = ref(0)



const refreshRoute = () => {

  key.value += 1;


router.replace({ path: route.path })
    .then(() => {
      console.log('Navigation ok, route replaced to ' + route.path);
    })
    .catch(err => {
      console.error('Navigation error:', err);
    });
  console.log('end')
  fetchProds(catidx)
 
}

watch(route, async (newRoute, oldRoute) => {
  console.log('Route changed from', oldRoute.path, 'to', newRoute.path);
  await fetchprods(catidx);
})




const viewProductsByCat = () => 
{
	if (selectedCat.value  != '' && selectedCat.value  != null && selectedCat.value  > 0) 
	{
		router.push(`/admin/prod/viewprodbycatid/${selectedCat.value}`)
	}
	else
	{
		router.push(`/admin/prod/viewprod`)
	}

}

const viewProductsByCatAndSubcat = () => 
{
  
	if (selectedCat2.value && selectedCat2.value  != null && selectedCat2.value  > 0) 
	{
	  if (selectedSubcat.value && selectedSubcat.value  != null && selectedSubcat.value  > 0) 
	  {
		router.push(`/admin/prod/viewprodbycatidsubid/${selectedCat2.value}/${selectedSubcat.value}`);
	  } 
	  else 
	  {
		router.push(`/admin/prod/viewprodbycatid/${selectedCat2.value}`);
	  }
	}
	else
	{
		router.push(`/admin/prod/viewprod`)
	}
}

</script>

<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">

        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end"> View products by Category </div>
        </header>

       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			<h1 class="text-2xl font-bold mb-4">View Products By category {{ catidx }} </h1>
	
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

			<div class = 'fullwidth'>
			<h1 class="text-2xl font-bold mb-4">View By Category</h1>
			<form @submit.prevent="viewProductsByCat">
				<label for="catSelect">Select Category:</label>
				<select v-model="selectedCat" id="catSelect" required
				  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
					focus:border-indigo-500 sm:text-sm width400px">
				   <option value = null > All categories</option>
				   <option v-for="cat in cats" :key="cat.id" :value="cat.id">
					{{ cat.name }} 
				  </option>
				</select>
				<button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">
				View Products By category</button>
			</form>
			</div>	
			
			<div class = 'fullwidth mt-3'>
				 <form @submit.prevent="viewProductsByCatAndSubcat">
					<label for="catSelect2">Select Category:</label>
					<select v-model="selectedCat2" id="catSelect2" 
					@change="fetchSubcatsCommon(selectedCat2)"
					required	
					class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
					focus:border-indigo-500 sm:text-sm width400px">
					<option value = null  > All categories</option>
					  <option v-for="cat in cats" :key="cat.id" :value="cat.id">
						{{ cat.name }}
					  </option>
					</select>

					<label for="subcatSelect">Select Subcategory:</label>
					<select v-model="selectedSubcat" id="subcatSelect" required
					class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
					focus:border-indigo-500 sm:text-sm width400px"
					>
					  <option value = null > All Subcategories</option>
					  <option v-for="subcat in subcats" :key="subcat.id" :value="subcat.id">
						{{ subcat.name }} 
					  </option>
					</select>

					<button type="submit" 
					class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">
					View Products By category and Subcategory</button>
				  </form>
			</div>			
			
			
			
			
			<ProdsAdmin 
			  :prods="prods" 
			  :currentPage="currentPage" 
			  :lastPage="lastPage" 
			  :changePage="changePage" 
			  :pageNumbers="pageNumbers"  
			  :key="key.value"
			  :catid="catidx"
			/>
			<p>Current Route: {{ $route.path }}</p>
			<button @click.native="refreshRoute"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button>		
            </main>
            <footer class="w-full bg-white text-right p-4"> </footer>
        </div>	
	</div>	
		
		
		
</div>
</template>
