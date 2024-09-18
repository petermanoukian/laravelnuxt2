<!-- ProdAdminSingle.vue -->
<template>
  <div class="p-2 border rounded">
  
    <NuxtLink :to="`/admin/prod/detail/${prod.id}`"> &rsaquo; {{ prod.name }} </NuxtLink>
    <p> Category: {{ prod.cat.name }} </p>
    <p> SubCategory: {{ prod.subcat.name }} </p>
    <p v-if="prod.img">
      <NuxtLink :to="`/admin/prod/detail/${prod.id}`">
        <img :src="`${config.public.BaseUrl}/images/prod/thumb/${prod.img}`" :alt="prod.name" class="mt-2 mb-2 w-32 h-32" />
      </NuxtLink>
    </p>
    <p v-else>
      <NuxtLink :to="`/admin/prod/detail/${prod.id}`">
        <img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-2 mb-2 w-32 h-32" />
      </NuxtLink>
    </p>
    <p>
      <NuxtLink :to="`/admin/prod/edit/${prod.id}`"> &rsaquo; Edit </NuxtLink>
    </p>
    <p>
      <NuxtLink :to="`/admin/prod/addprodbycatidsubid/${prod.catid}/${prod.subid}`"> &rsaquo; Add By Cat/Subcategory</NuxtLink>
    </p>
    <p>
      <NuxtLink :to="`/admin/prod/viewprodbycatidsubid/${prod.catid}/${prod.subid}`"> &rsaquo; View  By Cat/Subcategory</NuxtLink>
    </p>
	
	<p v-if="isAdmin">
		<button class ='buttonwhite margintop5' @click="confirmDelete(prod.id)">
		  &rsaquo; Delete 
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
  prod: {
    type: Object,
    required: true
  },
  config: {
    type: Object,
    required: true
  }
})

const confirmDelete = async (Id) => {
  const confirmed = confirm('Are you sure you want to delete this ')
  
  if (confirmed) 
  {
    try 
	{
      await $api.delete(`/admin/deleteprod/${Id}`)
      
      router.push('/admin/prod/viewprod?message=deleted')
    } 
	catch (error) 
	{
      console.error('Error deleting :', error.response ? error.response.data : error.message)
      alert('Failed to delete.')
    }
  }
}
</script>
