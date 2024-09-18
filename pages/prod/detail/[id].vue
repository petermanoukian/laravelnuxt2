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


import debounce from 'lodash/debounce'

const idx = route.params.id
const prod= ref(null)

const fetchProd = async () => {
  try 
  {
    const response = await fetch(`${apiUrl}/prod/detail/${idx}`)
    const data = await response.json() 
    prod.value = data
  } 
  catch (error) 
  {
	console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}

import { useHead } from 'nuxt/app'

await fetchProd()
  
if (prod.value) {

    console.log('yes prod value')
	useHead({
	  title: 'product details ' + prod.value.name + ' ' + prod.value.cat.name + ' ' + prod.value.subcat.name,
	  meta: [
		{
		  name: 'description',
		  content: 'product details ' + prod.value.name + '  ' + prod.value.des
		},
		{
		  name: 'keywords',
		  content: 'product details, ' +prod.value.name + ', ' + prod.value.cat.name + ', ' + prod.value.subcat.name
		},
		{
		  property: 'og:title',
		  content: 'product details ' + prod.value.name + ' ' + prod.value.cat.name + ' ' + prod.value.subcat.name
		},
		{
		  property: 'og:description',
		  content: 'product details ' + prod.value.name + '  ' + prod.value.des
		}
	  ]
	})
}

else
{
    console.log('yes')
	useHead({
	  title: 'product details',
	  meta: [
		{
		  name: 'description',
		  content: 'product details',
		},
		{
		  name: 'keywords',
		  content: 'product details',
		},
		{
		  property: 'og:title',
		  content: 'product details',
		},
		{
		  property: 'og:description',
		  content: 'product details',
		}
	  ]
	})

}



const key = ref(0)


</script>

<template>
	<div class="container-xxl py-1">
		<div class="container">
			<h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Product</h1>
			
			
			
			<div v-if ="prod">
				<h2>Category: 
				 <NuxtLink :to="`/prod/viewprodbycatid/${prod.catid}`"  class='link1' > &rsaquo; {{ prod.cat.name }} </NuxtLink> </h2>
				<h3>SubCategory:
				<NuxtLink :to="`/prod/viewprodbycatsub/${prod.catid}/${prod.subid}`" class='link1'> 
				&rsaquo;  {{ prod.subcat.name }} </NuxtLink> </h3>
				<h4>Title: {{ prod.name }}  </h4>

				
				<div v-if="prod.des !== 'null' && prod.des !== 'NULL' && prod.des !== ''"  
				class="formatted-result mt-4" v-html="prod.des"></div>
				
				<div v-if="prod.dess !== 'null' && prod.dess !== 'NULL' && prod.dess !== ''"  
				class="formatted-result mt-4" v-html="prod.dess"></div>
				
				<p v-if="prod.img">
				  <img :src="`${config.public.BaseUrl}/images/prod/${prod.img}`"
				  :alt="prod.name" class="mt-2 mb-2 maxwidth96height300"/>
				</p> 
				<p v-else>
					<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 "/>
				</p>
				
				<div v-if = "prod.prodtaggs.length > 0">
					<span v-for="(taggprod, index2) in prod.prodtaggs" >
						<NuxtLink    v-if="taggprod.tagg " 
						:key="taggprod.id" 
						:to="`/prod/tagg/${taggprod.tagg.name}`" class="link1 marginright5">
						&rsaquo; {{ taggprod.tagg.name }} 
						</NuxtLink>
					</span>		
				</div>
				
			</div>
	
		
			
			
		</div>
		
		

		
		
	</div>
</template>