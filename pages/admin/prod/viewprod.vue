<!-- pages/admin/subcat/viewprod.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useProdPagination } from '~/composables/useProdpagination'
import { useProdsearchPagination } from '~/composables/useProdsearchpagination'
import debounce from 'lodash/debounce'

import { useCat } from '~/composables/useCat'
import { useSubcat } from '~/composables/useSubcat'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
const { cats,  fetchCatsCommon } = useCat()
const { subcats,  fetchSubcatsCommon } = useSubcat()

const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdPagination()

const { prodsx, currentPagex, lastPagex, changePagex, pageNumbersx, fetchsearchProds } = useProdsearchPagination()


definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig , useNuxtApp} from '#imports'
const router = useRouter()
const route = useRoute()

const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl


const selectedCat = ref(null)
const selectedCat2 = ref(null)
const selectedSubcat = ref(null)
const searchQuery = ref('')
var searcher = ref('')
const searhmade = ref(0)
const suggestions = ref([])
const suggestions2 = ref([])
const searchmissing = ref('')

const handleSearch = async () => {
  
  if(searchQuery.value != '')
  {
	  searhmade.value = 1
	  searcher.value = searchQuery.value
	  await fetchsearchProds( searchQuery.value)
	  searchmissing.value =''
	  suggestions.value = ''
	  suggestions2.value = ''
  }
  else
  {
	searchmissing.value = 'Your seach is empty'
  }
}

const handleSearch2 = async () => {
  
  if(searchQuery.value != '')
  {
	  searhmade.value = 1
	  searcher.value = searchQuery.value
	  await fetchsearchProds( searchQuery.value)
	  searchmissing.value =''
	  suggestions.value = ''
	  suggestions2.value = ''
  }
  else
  {
	searchmissing.value = ''
  }
}


const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
  await fetchProds()
  await fetchCatsCommon()
  await fetchSubcatsCommon()

})
const key = ref(0)



const refreshRoute = () => {

  key.value += 1;
  searhmade.value = 0

	router.replace({ path: route.path })
    .then(() => {
      console.log('Navigation ok, route replaced to ' + route.path);
    })
    .catch(err => {
      console.error('Navigation error:', err);
    });

  fetchProds()
  
    selectedCat.value = null
	selectedCat2.value = null
	selectedSubcat.value = null
	searchQuery.value = ''
	searcher.value = ''
	searhmade.value = 0
	suggestions.value = []
	suggestions2.value = []
  
 
}

watch(route, async (newRoute, oldRoute) => {
  console.log('Route changed from', oldRoute.path, 'to', newRoute.path);
   fetchProds ()
})


const viewProductsByCat = () => {
	if (selectedCat.value) {
	router.push(`/admin/prod/viewprodbycatid/${selectedCat.value}`)
	}

}

const viewProductsByCatAndSubcat = () => {
  
  if (selectedCat2.value) {
  if (selectedSubcat.value) {
    router.push(`/admin/prod/viewprodbycatidsubid/${selectedCat2.value}/${selectedSubcat.value}`);
  } else {
    router.push(`/admin/prod/viewprodbycatid/${selectedCat2.value}`);
  }
  }
}

watch(searchQuery, (newsearchQuery) => {
handleSearch()

})


const fetchSuggestions = async () => {


  if (searchQuery.value.length < 2) {
  
    
	suggestions.value = [];
	return;
  }
  
  try {
	const response = await $api.get(`${apiUrl}/admin/prod/suggestions/${searchQuery.value}`, {
	  params: { query: searchQuery.value }
	});
	suggestions.value = response.data;

  } catch (error) {
	console.error('Error fetching suggestions:', error);
  }
}


const fetchSuggestions2 = async () => {


  if (searchQuery.value.length < 2) {
  
    
	suggestions2.value = [];
	return;
  }
  
  try {
	
	const response = await $api.get(`${apiUrl}/admin/prod/suggestions/${searchQuery.value}`, {
	  params: { query: searchQuery.value }
	});
	suggestions2.value = response.data;

  } catch (error) {
	console.error('Error fetching suggestions:', error);
  }
}
 const selectSuggestion = (suggestion) => {
      searchQuery.value = suggestion.name;
      suggestions.value = []; 
	  suggestions2.value = []; 
      handleSearch(); // Perform the search immediately
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
			 View All products 
            </div>
        </header>

       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			
			<div class = 'fullwidth mb-2'>
				<div class = 'halfwidth48 floatleft'>
				<h1 class="text-2xl font-bold mb-4">View By Category</h1>
				<form @submit.prevent="viewProductsByCat" class= 'floatleft'>
					<label for="catSelect">Select Category:</label>
					<select v-model="selectedCat" id="catSelect" required
					  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						focus:border-indigo-500 sm:text-sm width400px">
					   <option value = null disabled > Choose category</option>
					   <option v-for="cat in cats" :key="cat.id" :value="cat.id">
						{{ cat.name }} 
					  </option>
					</select>
					<button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">
					View Products By category</button>
				</form>
				</div>	
			
				<div class = 'halfwidth48 floatleft'>
					<h1 class="text-2xl font-bold mb-4">View By Category and Subcategory</h1>
					 <form @submit.prevent="viewProductsByCatAndSubcat" class= 'floatleft'>
						<label for="catSelect2">Select Category:</label>
						<select v-model="selectedCat2" id="catSelect2" 
						@change="fetchSubcatsCommon(selectedCat2)"
						required	
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						focus:border-indigo-500 sm:text-sm width400px">
						<option value = null disabled > Choose Category</option>
						  <option v-for="cat in cats" :key="cat.id" :value="cat.id">
							{{ cat.name }}
						  </option>
						</select>

						<label for="subcatSelect">Select Subcategory:</label>
						<select v-model="selectedSubcat" id="subcatSelect" required
						class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						focus:border-indigo-500 sm:text-sm width400px"
						>
						  <option value = null disabled > Choose subcategory</option>
						  <option v-for="subcat in subcats" :key="subcat.id" :value="subcat.id">
							{{ subcat.name }} 
						  </option>
						</select>

						<button type="submit" 
						class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">
						View Products By category and Subcategory</button>
					  </form>
				</div>
				
			</div>
			
			<div class = 'fullwidth mt-2 floatleft'> <hr class='hr1' /></div>
			<div class = 'fullwidth mt-6'>
				<div class = 'halfwidth48 floatleft '>
					<form @submit.prevent="handleSearch">
					  <input v-model="searchQuery" placeholder="Search products..." 
					  @input="fetchSuggestions"
					  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none 
						focus:border-indigo-500 sm:text-sm width400px"  />
					  <button type="submit"
					  class="mt-3 block  px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">Search</button>
					</form>
					
					 <ul v-if="suggestions.length" class="suggestions-list marginleft25">
						<li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectSuggestion(suggestion)" class ='cursor'>
						  &rsaquo; {{ suggestion.name }}
						</li>
					  </ul>
					  
					  <span v-if="searchmissing" class = 'red'> NO SEARCH  {{searchmissing}} </span>
				</div>
				
				
				<div class = 'halfwidth48 floatleft'>
					
					  <input v-model="searchQuery" placeholder="Search products directly..." 
					  @focus="handleSearch2"
					  @input="fetchSuggestions2"

					  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						focus:border-indigo-500 sm:text-sm width400px"  />
					  <ul v-if="suggestions2.length" class="suggestions-list marginleft25">
						<li v-for="suggestion in suggestions2" :key="suggestion.id" class ='cursor' @click="selectSuggestion(suggestion)">
						  &rsaquo; {{ suggestion.name }}
						</li>
					  </ul>
					
				</div>
			</div>

			
			<div class = 'fullwidth mt-3'>
			
				<h1 class="text-2xl font-bold mb-4">View All Products </h1>
				<div v-if="searhmade==0 ">
					<ProdsAdmin 
					  :prods="prods" 
					  :currentPage="currentPage" 
					  :lastPage="lastPage" 
					  :changePage="changePage" 
					  :pageNumbers="pageNumbers"  
					  :key="key.value" 
					/>
					<p>Current Route: {{ $route.path }}</p>
					<button @click.native="refreshRoute"
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Page</button>		
				</div>
				
				<div v-else>
					search done : By 1) : {{ searchQuery }} 2) {{ searcher }}
					<br> Has seach been made: {{ searhmade}}
					<Prodsearch 
					  :prodsx="prodsx" 
					  :currentPagex="currentPagex" 
					  :lastPagex="lastPagex" 
					  :changePagex="changePagex" 
					  :pageNumbersx="pageNumbersx" 
					  :searchx="searchQuery"
					  :key="key.value" 
					/>
					<p>Current Route: {{ $route.path }}</p>
					<button @click.native="refreshRoute" 
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Page</button>	
					
					
				</div>
				
			</div>
			



            </main>
    
            <footer class="w-full bg-white text-right p-4"> </footer>
        </div>
		
	</div>	
	
</div>
</template>