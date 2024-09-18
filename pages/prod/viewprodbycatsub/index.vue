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
const subidx = route.params.subid
const cat= ref(null)
const subcat= ref(null)

const fetchCat = async () => {
  try 
  {  
    const response = await fetch(`${apiUrl}/cat/detail/${catidx}`)
    const data = await response.json() 
    cat.value = data
    //JSON.stringify(cat.value)
  } 
  catch (error) 
  {
	console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}

const fetchSub = async () => {
  try 
  {

    const response = await fetch(`${apiUrl}/subcat/detail/${subidx}`)
	const data = await response.json() 
    subcat.value = data

  } 
  catch (error) 
  {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}



import { useHead } from 'nuxt/app'

await fetchCat()
await fetchSub()
  
   if (cat.value && subcat.value) {
    useHead({
      title: subcat.value.name + ' ' +  cat.value.name,
      meta: [
        {
          name: 'description',
          content: subcat.value.name + ' ' + cat.value.name + ' Nuxt3 Laravel 11 MySQl API Products Page'
        },
        {
          name: 'keywords',
          content: subcat.value.name + ', ' + cat.value.name + ', Nuxt3 Laravel 11 MySQl API Web Development Armenia, Web Developer Lebanon'
        },
        {
          property: 'og:title',
          content: subcat.value.name + ' ' + cat.value.name
        },
        {
          property: 'og:description',
          content: subcat.value.name + ' ' + cat.value.name + ' Nuxt3 Laravel 11 MySQl API Products Page'
        }
      ]
    })
  }

onMounted(async () => {
  await fetchProds(catidx, subidx)
})

const key = ref(0)

</script>

<template>
	<div class="container-xxl py-1">
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1>
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
			<div v-if ="subcat && subcat.name">
				<h3>SubCategory: {{ subcat.name }} </h3>
				<p v-if="subcat.img">
				  <img :src="`${config.public.BaseUrl}/images/subcat/${subcat.img}`"
				  :alt="cat.name" class="mt-2 mb-2 maxwidth96height300"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
			</div>
			<div class ='mt-2 row'> <b>Products </b></div>
			<div class="row g-4 " v-if="prods && prods.length > 0">
				<Prodsopen
				  :prods="prods" 
				  :currentPage="currentPage" 
				  :lastPage="lastPage" 
				  :changePage="changePage" 
				  :pageNumbers="pageNumbers"  
				  :key="key.value"
				  :catid="catidx"
				  :subid="subidx"				  
				/>
			</div>
			<div  v-else class="row g-4 mt-4">
				Nothing found
			</div>	
	
		</div>
	</div>
</template>