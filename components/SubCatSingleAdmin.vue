<!-- CatSingleAdmin.vue -->
<template>
<div class="p-2 border rounded">
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
		  <p v-if="isAdmin">
			<button class ='buttonwhite margintop5' @click="confirmDelete(subcat.id)">
			  &rsaquo; Delete SubCategory
			</button>
		  </p>
	
</div>  
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRuntimeConfig } from '#imports'

const router = useRouter()
const route = useRoute()

const authStore = useAuthStore()
onMounted(async () => {
  await authStore.fetchUser()
})
import { defineProps } from 'vue'

//const config = useRuntimeConfig()
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const isAdmin = computed(() => authStore.user && authStore.user.levell === 1)

const props = defineProps({
  subcat: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: true
  }
})

const confirmDelete = async (Id) => {
  const confirmed = confirm('Are you sure you want to delete this subcategory?')
  
  if (confirmed) 
  {
    try 
	{
      await $api.delete(`/admin/deletesubcat/${Id}`)
      
      router.push('/admin/subcat/viewsubcat?message=deleted')
    } 
	catch (error) 
	{
      console.error('Error deleting category:', error.response ? error.response.data : error.message)
      alert('Failed to delete.')
    }
  }
}


</script>
