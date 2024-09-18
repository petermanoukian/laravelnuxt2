<!-- components/SubcatsOpen.vue -->
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
	<div class=" fullwidth row mt-8 mb-8"> 	
		<template v-for="(subcat, index) in subcats" :key="subcat.id">
		<SubCatSingleOpen
		  :subcat="subcat"
		  :catid="catid"
		  :config="config" 
		/>
		
		<div v-if="(index + 1) % 3 === 0" class="w-full">
		  <hr class="my-4"/> 
		</div>
		</template>
	</div>
	
  <Pagination
    :currentPage="currentPage"
    :pageNumbers="pageNumbers"
    :lastPage="lastPage"
    :changePage="changePage"
    typ="subcatpaginater"
	:catid="catid"
  />
</template>