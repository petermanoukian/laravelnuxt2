<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()



import { useProdsearchopenpagination } from '~/composables/useProdsearchopenpagination'
import debounce from 'lodash/debounce'



const { prodsx, currentPagex, lastPagex, changePagex, pageNumbersx, fetchsearchProds } = useProdsearchopenpagination()

const searchTerm = decodeURIComponent(route.params.searchTerm)

import { useHead } from 'nuxt/app'

useHead({
  title: 'Nuxt3 Laravel 11 MySQl API Products Page',
  meta: [
    {
      name: 'description',
      content: 'Nuxt3 Laravel 11 MySQl API Products Page'
    },
    {
      name: 'keywords',
      content: 'Nuxt3 Laravel 11 MySQl API Products Page, MySQL, PHP 8, Web Development,  VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon'
    },
    {
      property: 'og:title',
      content: 'Nuxt3 Laravel 11 MySQl API Products Page'
    },
    {
      property: 'og:description',
      content: 'Nuxt3 Laravel 11 MySQl API Products Page'
    },
  ]
})

onMounted(async () => {

  await fetchsearchProds(searchTerm)
  
})

const key = ref(0)


</script>

<template>
	<div class="container-xxl py-1">
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Searching for {{searchTerm}}</h1>
			
			
			
			<div class="row g-4 mt-2" v-if="prodsx && prodsx.length > 0">
			
				<Prodsopen 
				  :prods="prodsx" 
				  :currentPage="currentPagex" 
				  :lastPage="lastPagex" 
				  :changePage="changePagex" 
				  :pageNumbers="pageNumbersx" 
				  :searchx="searchTerm"
				  :key="key.value" 
				/>
			</div>
			<div  v-else class="row mt-2 g-4">
				Nothing found
			</div>
			
			
		</div>
		
		

		
		
	</div>
</template>