<!-- components/Pagination.vue -->
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  pageNumbers: {
    type: Array, // Changed from Number to Array to handle multiple pages
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
  searchx: {
    type: String,
    required: false 
  },
  
  tag: {
    type: String,
    required: false 
  },
  
  typ: {
    type: String,
    required: false 
  }
})

const handlePageChange = (page) => {
  if (props.typ !== undefined && props.typ == 'subcatpaginater') 
  {
	props.changePage(props.catid, page);
  } 
  else   if (props.typ !== undefined && props.typ == 'prodpaginater') 
  {
    if (props.searchx !== undefined) 
	{
		props.changePage(  props.searchx, props.catid, props.subid, page)
	
	}
	else  if (props.tag !== undefined) 
	{
		props.changePage(  props.tag, page)
	
	}
	else
	{
		props.changePage( props.catid, props.subid,  page)
	}
  } 
  else 
  {
	props.changePage(page);
  }
};
</script>

<template>
  <div class="bg-gray-100 fullwidth margintopbottom8 pagination"> {{ tag }}
    <!-- Previous Button -->
    <button @click="handlePageChange(currentPage - 1)" 
            :disabled="currentPage === 1" 
            :class="['marginleft5 pager pagerwide', { red: currentPage === 1, active: currentPage === 1 }]">
      << Previous 
    </button>

    <!-- Page Numbers -->
    <span v-for="page in pageNumbers" :key="page" class="marginleft5">
      <button @click="handlePageChange(page)" 
              :class="['marginleft5 pager', { red: page === currentPage, active: page === currentPage }]" 
              :disabled="page === currentPage">
        {{ page }} 
      </button>
    </span>

    <!-- Next Button -->
    <button @click="handlePageChange(currentPage + 1)" 
            :disabled="currentPage === lastPage" 
            :class="['marginleft5 pager pagerwide', { red: currentPage === lastPage, active: currentPage === lastPage }]">
      >> Next 
    </button>

    <!-- Page Information -->
    <span class="marginleft5 margintop5">Page {{ currentPage }} of {{ lastPage }}</span>
  </div>
</template>
