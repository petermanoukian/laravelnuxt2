<!-- components/Prodsopen.vue -->

<script setup>

import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()

import { defineProps } from 'vue';

const props = defineProps({
  prods: {
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
  subid: {
    type: Number,
    required: false
  },
  tag: {
    type: String,
    required: false
  },
  searchx: {
    type: String,
    required: false 
  },
  
  
})



watch(() => props.prods, (newProds) => {
  console.log('Items updated now:', newProds);
})

</script>
<template>

	<div class=" mt-8 mb-8"> 
		<div class="row">
		
			<template v-for="(prod, index) in prods" :key="prod.id">
				<ProdSingleOpen  
				  :prod="prod"
				  :config="config"
				/>
			    <div v-if="(index + 1) % 3 === 0" class="w-full">
				  <hr class="my-4"/> 
				</div>
			</template>

	  </div>
	</div>
	search {{ searchx }} tag {{ tag }}
	<Pagination
    :currentPage="currentPage"
    :pageNumbers="pageNumbers"
    :lastPage="lastPage"
    :changePage="changePage"
	:catid="catid"
	:subid="subid"
	:searchx="searchx"
	:tag="tag"
	typ="prodpaginater"
	/>
			
</template>