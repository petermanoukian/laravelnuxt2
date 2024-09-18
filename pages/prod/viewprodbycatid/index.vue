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


import { useProdopenpagination } from '~/composables/useProdopenpagination'

import { useProdsearchopenpagination } from '~/composables/useProdsearchopenpagination'
import debounce from 'lodash/debounce'

const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdopenpagination()

const { prodsx, currentPagex, lastPagex, changePagex, pageNumbersx, fetchsearchProds } = useProdsearchopenpagination()

const catidx = route.params.catid
const cat= ref(null)

const fetchCat = async () => {
  try {
    
    const response = await fetch(`${apiUrl}/cat/detail/${catidx}`)
    const data = await response.json() // Parse the JSON response

    cat.value = data

    JSON.stringify(cat.value)
  } 
  catch (error) 
  {
	console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}


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

  
  await fetchProds(catidx)
  
  
})

const key = ref(0)




</script>

<template>
	<div class="container-xxl py-1">
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1>
			<div v-if="cat.value">
				<h3>Category: {{ cat.name }} </h3>
				<p v-if="cat.img">
				  <img :src="`${config.public.BaseUrl}/images/cat/${cat.img}`"
				  :alt="cat.name" class="mt-2 mb-2 maxwidth96height300"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
			</div>
			
			<div class="row g-4" v-if="prods && prods.length > 0">
				<Prodsopen
				  :prods="prods" 
				  :currentPage="currentPage" 
				  :lastPage="lastPage" 
				  :changePage="changePage" 
				  :pageNumbers="pageNumbers"  
				  :key="key.value" 
				/>
			</div>
			<div  v-else class="row g-4">
				Nothing found
			</div>	
		</div>
	
	</div>
</template>