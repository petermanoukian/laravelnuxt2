<!-- components/Cat.vue -->

<script setup>

import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()

import { defineProps } from 'vue';

const props = defineProps({
  cats: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  },
  pageNumbers: {
    type: Number,
    required: true
  },
  lastPage: {
    type: Number,
    required: true
  },
  changePage: {
    type: Function,
    required: true
  }
})



watch(() => props.cats, (newCats) => {
  console.log('Items updated now:', newCats);
})

</script>
<template>

	<div class="w-full mt-8 mb-8">
	  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
		<div v-for="cat in cats" :key="cat.id" class="p-2 border rounded">
			<NuxtLink :to="`/admin/cat/detail/${cat.id}`" > &rsaquo; {{ cat.name }} {{ cat.id }}</NuxtLink> 
			<p v-if="cat.img">
			  <NuxtLink :to="`/admin/cat/detail/${cat.id}`" >
			  <img :src="`${config.public.BaseUrl}/images/cat/thumb/${cat.img}`"
			  :alt="cat.name" class="mt-2 mb-2 w-32 h-32"/>
			  </NuxtLink>  

			</p>

			<p v-else>
			<NuxtLink :to="`/admin/cat/detail/${cat.id}`" >
				<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 w-32 h-32"/>
			</NuxtLink> 
			</p> 
			<p> <NuxtLink :to="`/admin/cat/edit/${cat.id}`" > &rsaquo; Edit </NuxtLink> </p>
			<p>
			<NuxtLink :to="`/admin/subcat/viewsubcatbycatid/${cat.id}`" > &rsaquo; View Subcategories 
			 ( {{ cat.subcats_count }} )
			</NuxtLink>
			</p>
			<p>
			<NuxtLink :to="`/admin/subcat/addsubcat/${cat.id}`" > &rsaquo; Add Subcategories </NuxtLink>
			</p>

			<p>
			<NuxtLink :to="`/admin/prod/viewprodbycatid/${cat.id}`" > &rsaquo; View Products 
			( {{ cat.prods_count }} )
			</NuxtLink>
			</p>
			<p>
			<NuxtLink :to="`/admin/prod/addprodbycatid/${cat.id}`" > &rsaquo; Add Products </NuxtLink>
			</p>
 
			  
		  
		  
		  
		</div>
	  </div>
	</div>

	
	<div class=" bg-gray-100 fullwidth margintopbottom8">
	  <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" 
	  :class="['marginleft5', { red: currentPage === 1 , active: currentPage === 1 }]"> << Previous</button>
	 
	  
	  
	  <span v-for="page in pageNumbers" :key="page"  class='marginleft5'>
        <button @click="changePage(page)" :class="{ red: page === currentPage , active: page === currentPage }"
		:disabled="page === currentPage">{{ page }}</button>
      </span>
	<button @click="changePage(currentPage + 1)" :disabled="currentPage === lastPage" 
	:class="['marginleft5', { red: currentPage === lastPage , active: currentPage === lastPage }]"> >> Next</button>
     
      <span class='marginleft5'>Page {{ currentPage }} of {{ lastPage }}</span>


	  
	</div>
				
			
			
			
</template>


