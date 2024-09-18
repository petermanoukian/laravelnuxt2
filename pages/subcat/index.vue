<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
import { useFetch } from '#app' 

const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl


import { useCatopenPagination } from '~/composables/useCatopenpagination'
import { useSubcatopenpagination } from '~/composables/useSubcatopenpagination'
const { 
  cats, 
  currentPage: currentCatPage, 
  lastPage: lastCatPage, 
  changePage: changeCatPage, 
  pageNumbers: catPageNumbers, 
  fetchCats 
} = useCatopenPagination()




const catidx = route.params.catid
const cat= ref(null)

const fetchCat = async () => {
  try 
  {
    const response = await fetch(`${apiUrl}/cat/detail/${catidx}`)
    const data = await response.json() // Parse the JSON response
    cat.value = data
    //JSON.stringify(cat.value)
	
  } 
  catch (error) 
  {
	
	console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}

const { 
  subcats, 
  currentPage: currentSubcatPage, 
  lastPage: lastSubcatPage, 
  changePage: changeSubcatPage, 
  pageNumbers: subcatPageNumbers, 
  fetchSubcats 
}  = useSubcatopenpagination(catidx)


import { useHead } from 'nuxt/app'

await fetchCat()
  
   if (cat.value) {
    useHead({
      title: cat.value.name,
      meta: [
        {
          name: 'description',
          content: cat.value.name + ' Nuxt3 Laravel 11 MySQl API Products Page'
        },
        {
          name: 'keywords',
          content: cat.value.name + ', Nuxt3 Laravel 11 MySQl API Web Development Armenia, Web Developer Lebanon'
        },
        {
          property: 'og:title',
          content: cat.value.name
        },
        {
          property: 'og:description',
          content: cat.value.name + ' Nuxt3 Laravel 11 MySQl API Products Page'
        }
      ]
    })
  }

onMounted(async () => {

 
  fetchSubcats(catidx)
})

const key = ref(0)

watch(route, async (newRoute, oldRoute) => {
   fetchCats()
  fetchSubcats(catidx)
})

</script>

<template>
	<div class="container-xxl py-1">
		<div class="container mt-4">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Categories {{ catidx }}</h1>
			<div class="row g-4">
				
			<div v-if ="cat && cat.name">
				<h3>Category: {{ cat.name }} </h3>
				<p v-if="cat.img">
				  <img :src="`${config.public.BaseUrl}/images/cat/${cat.img}`"
				  :alt="cat.name" class="mt-2 mb-2 maxwidth96height300"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
			</div>
				
				

			</div>
		</div>
		
		
		<div class="container mt-4">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">SubCategories</h1>
			
			<div class="row g-4" v-if="subcats && subcats.length > 0">
				
				<SubcatsOpen
				  :subcats="subcats" 
				  :currentPage="currentSubcatPage" 
				  :lastPage="lastSubcatPage" 
				  :changePage="changeSubcatPage" 
				  :pageNumbers="subcatPageNumbers"  
				  :key="key.value" 
				  :catid="catidx"
				/>
			</div>
			
			<div  v-else class="row g-4">
				Nothing found
			</div>	
			
			
		</div>
		
		
	</div>
</template>