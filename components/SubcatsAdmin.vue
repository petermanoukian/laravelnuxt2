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
	 
	 
	 
	 		<SubCatSingleAdmin
			  v-for="subcat in subcats"
			  :key="subcat.id"
			  :subcat="subcat"
			  :config="config"
			/>
	 
	 

		
		
	  </div>
	</div>
	<div class=" bg-gray-100 fullwidth margintopbottom8 pagination"> catid : {{ catid }}
	  <button @click="changePage(catid,currentPage - 1)" :disabled="currentPage === 1" 
	  :class="['marginleft5 pager pagerwide', { red: currentPage === 1 , active: currentPage === 1 }]"> << Previous</button>
	  <span v-for="page in pageNumbers" :key="page"  class='marginleft5'>
        <button @click="changePage(catid,page)" 
		:class="['marginleft5 pager', { red: page === currentPage, active: page === currentPage }]" 
		:disabled="page === currentPage">{{ page }}</button>
      </span>
	  <button @click="changePage(catid,currentPage + 1)" :disabled="currentPage === lastPage" 
	  :class="['marginleft5 pager pagerwide', { red: currentPage === lastPage , active: currentPage === lastPage }]"> >> Next</button>
      <span class='marginleft5'>Page {{ currentPage }} of {{ lastPage }}</span> 
	</div>	
</template>