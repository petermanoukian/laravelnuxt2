<!-- CatSingleAdmin.vue -->
<template>
<div class="p-2 border rounded">
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
	<p v-if="isAdmin">
	<button  @click="confirmDelete(cat.id)" class ='buttonwhite margintop5'>
      &rsaquo; Delete Category
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
  cat: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: true
  }
})

const confirmDelete = async (catId) => {
  const confirmed = confirm('Are you sure you want to delete this category?')
  
  if (confirmed) 
  {
    try {

      await $api.delete(`/admin/deletecat/${catId}`)
      
   
      router.push('/admin/cat/viewcat?message=deleted')
    } catch (error) 
	{
      console.error('Error deleting category:', error.response ? error.response.data : error.message)
      alert('Failed to delete the category.')
    }
  }
}


</script>
