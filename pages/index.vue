<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()



import { useCatopenPagination } from '~/composables/useCatopenpagination'
import { useSubcatopenpagination } from '~/composables/useSubcatopenpagination'
const { 
  cats, 
  currentPage: currentCatPage, 
  lastPage: lastCatPage, 
  changePage: changeCatPage, 
  pageNumbers: catPageNumbers, 
  loadingcats: loadingcats,
  fetchCats 
} = useCatopenPagination()

const { 
  subcats, 
  currentPage: currentSubcatPage, 
  lastPage: lastSubcatPage, 
  changePage: changeSubcatPage, 
  pageNumbers: subcatPageNumbers, 
  loadingsubcats: loadingsubcats,
  fetchSubcats 
}  = useSubcatopenpagination()
import { useHead } from 'nuxt/app'

useHead({
  title: 'Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon',
  meta: [
    {
      name: 'description',
      content: 'Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3'
    },
    {
      name: 'keywords',
      content: 'Laravel, MySQL, PHP 8, Web Development, Nuxt 3, VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon'
    },
    {
      property: 'og:title',
      content: 'Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon'
    },
    {
      property: 'og:description',
      content: 'Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3'
    },
  ]
})

onMounted(async () => {

  fetchCats()
  fetchSubcats()
})

const key = ref(0)

watch(route, async (newRoute, oldRoute) => {
   fetchCats()
  fetchSubcats()
})

</script>

<template>
	<div class="container-xxl py-1">
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Categories</h1>
			
		
			<div v-if="loadingcats" class="row g-4">
				Loading...
			</div>
			
			<div v-else>
			
				<div class="row g-4" v-if=" cats && cats.length > 0">	
					<CatsOpen
					  :cats="cats" 
					  :currentPage="currentCatPage" 
					  :lastPage="lastCatPage" 
					  :changePage="changeCatPage" 
					  :pageNumbers="catPageNumbers"  
					  :key="key.value" 
					/>
				</div>
				
				<div  v-else class="row g-4 mt-4 fullwidth margintopbottom8">
					No Categories Yet
				</div>
			
			</div>
			
			
		</div>
		
		
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">SubCategories</h1>

			<div v-if="loadingsubcats" class="row g-4">
				Loading...
			</div>
			
			<div v-else>
			
			
			<div class="row g-4"  v-if="subcats && subcats.length > 0">	
				<SubcatsOpen
				  :subcats="subcats" 
				  :currentPage="currentSubcatPage" 
				  :lastPage="lastSubcatPage" 
				  :changePage="changeSubcatPage" 
				  :pageNumbers="subcatPageNumbers"  
				  :key="key.value" 
				/>
			</div>
			
			<div  v-else class="row g-4 mt-4">
				No Subcategories currently on HomePage
			</div>
			
			</div>
			
			
		</div>
		
		
	</div>
</template>