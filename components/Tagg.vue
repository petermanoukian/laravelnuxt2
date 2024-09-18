<!-- components/Tagg.vue -->

<script setup>

import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()

import { defineProps } from 'vue';

const props = defineProps({
  taggs: {
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



watch(() => props.taggs, (newTaggs) => {
  console.log('Items updated now:', newTaggs);
})

</script>
<template>

	<div class="w-full mt-8 mb-8 fullwidth"> 
	  <div class="grid fullwidth90">
		<div v-for="tagg in taggs" :key="tagg.id" class="border fullwidth padding8">
			<div class="fullwidth45 floatleft">{{ tagg.id }} {{ tagg.name }} </div> 

			<div class=" fullwidth40floatleft"> <NuxtLink :to="`/admin/tagg/edit/${tagg.id}`" > &rsaquo; Edit </NuxtLink> </div>

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


