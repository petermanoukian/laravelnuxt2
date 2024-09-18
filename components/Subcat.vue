<!-- components/Subat.vue -->
<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRuntimeConfig } from '#imports'
const config = useRuntimeConfig()
import { defineProps } from 'vue';

const props = defineProps({
  subcats: {
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
  },
  catid: {
    type: Number,
    required: false
  },
})

watch(() => props.subcats, (newSubcats) => {
  console.log('Items updated now:', newSubcats);
})
</script>
<template>
	<div class="w-full mt-8 mb-8">
	  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"> 
		<div v-for="subcat in subcats" :key="subcat.id" class="p-2 border rounded"> 
		  <NuxtLink :to="`/admin/subcat/detail/${subcat.id}`" > &rsaquo; {{ subcat.name }} </NuxtLink> 
		  <p> Category : {{ subcat.cat.name }} </p>
		  <p v-if="subcat.img">
			  <NuxtLink :to="`/admin/subcat/detail/${subcat.id}`" >
		      <img :src="`${config.public.BaseUrl}/images/subcat/thumb/${subcat.img}`"
			  :alt="subcat.name" class="mt-2 mb-2 w-32 h-32"/>
			  </NuxtLink>  
		  </p> 
		  <p v-else>
		    <NuxtLink :to="`/admin/subcat/detail/${subcat.id}`" >
		  		<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 w-32 h-32"/>
			</NuxtLink> 
		  </p> 
		  <p> <NuxtLink :to="`/admin/subcat/edit/${subcat.id}`" > &rsaquo; Edit </NuxtLink> </p>
		  <p>
		   <NuxtLink :to="`/admin/prod/addprodbycatidsubid/${subcat.catid}/${subcat.id}`" > &rsaquo; Add Products</NuxtLink>
		  </p>  
		  <p>
		   <NuxtLink :to="`/admin/prod/viewprodbycatidsubid/${subcat.catid}/${subcat.id}`" > &rsaquo; View Products
		   ( {{ subcat.prods_count }} )
		   </NuxtLink>
		  </p>  
		</div>
	  </div>
	</div>
	<div class=" bg-gray-100 fullwidth margintopbottom8"> catid : {{ catid }}
	  <button @click="changePage(catid,currentPage - 1)" :disabled="currentPage === 1" 
	  :class="['marginleft5', { red: currentPage === 1 , active: currentPage === 1 }]"> << Previous</button>
	  <span v-for="page in pageNumbers" :key="page"  class='marginleft5'>
        <button @click="changePage(catid,page)" :class="{ red: page === currentPage , active: page === currentPage }"
		:disabled="page === currentPage">{{ page }}</button>
      </span>
	  <button @click="changePage(catid,currentPage + 1)" :disabled="currentPage === lastPage" 
	  :class="['marginleft5', { red: currentPage === lastPage , active: currentPage === lastPage }]"> >> Next</button>
      <span class='marginleft5'>Page {{ currentPage }} of {{ lastPage }}</span> 
	</div>	
</template>