<!-- components/CatsOpen.vue -->

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
	<div class=" mt-8 mb-8"> 
		<div class="row">
			<template v-for="(cat, index) in cats" :key="cat.id">
				<CatSingleOpen  
				  :cat="cat"
				  :config="config"
				/>
			    <div v-if="(index + 1) % 3 === 0" class="w-full">
				  <hr class="my-4"/> 
				</div>
			</template>
		</div>
	</div>
  <Pagination
    :currentPage="currentPage"
    :pageNumbers="pageNumbers"
    :lastPage="lastPage"
    :changePage="changePage"
	typ="catpaginater"
  />
</template>