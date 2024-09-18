<!-- components/Sidevar.vue -->

<script setup>
import { useAuthStore } from '~/stores/auth'
import { computed, onMounted } from 'vue'
import { useRuntimeConfig } from '#imports'

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const authStore = useAuthStore()
onMounted(async () => {
  await authStore.fetchUser()
})

const config = useRuntimeConfig()


const isAdmin = computed(() => authStore.user && authStore.user.levell === 1)

const userPicUrl = computed(() => {
  return authStore.user.pic ? `${config.public.BaseUrl}/images/users/thumb/${authStore.user.pic}` : null
})


const reloadCatPage = () => {
  router.push({ path: '/admin/cat/viewcat', query: { reload: Date.now() } })
}
const reloadSubPage = () => {
  router.push({ path: '/admin/subcat/viewsubcat', query: { reload: Date.now() } })
}

const reloadProdPage = () => {
  router.push({ path: '/admin/prod/viewprod', query: { reload: Date.now() } })
}
</script>

<template>
  <aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
		<template v-if="authStore.user">
        <div class="p-6">
            <NuxtLink to="/admin" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">{{ authStore.user.name }}</NuxtLink>
			<div v-if="authStore.user.pic">
				<img :src="userPicUrl" alt="User Picture" class="mt-4 mb-4 w-32 h-32 rounded-full"/> 
			</div>
			<div v-else>
				<img src="~/assets/default/1.jpg" alt="Default Picture" class="mt-4 mb-4 w-32 h-32 rounded-full"/>
			</div>
			<button @click="authStore.logout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>		
        </div>
		</template>
        <nav class="text-white text-base font-semibold pt-3 mt-4">
            <NuxtLink to="/admin/cat/addcategory" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
			  <i class="fas fa-align-left mr-3"></i>Add Category</NuxtLink>
			  
			<NuxtLink to="/admin/cat/viewcat"  @click.prevent="reloadCatPage" 
			class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
			<i class="fas fa-align-left mr-3"></i>View Categories</NuxtLink> 
			  
			  
			<NuxtLink to="/admin/subcat/addsubcategory" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>Add Subcategory
			</NuxtLink>

			<NuxtLink to="/admin/subcat/viewsubcat" @click.prevent="reloadSubPage"
			  class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>View Subcategories
			</NuxtLink>  
			  
			  
			<NuxtLink to="/admin/prod/addproduct" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>Add Product
			</NuxtLink>

			<NuxtLink to="/admin/prod/viewprod" @click.prevent="reloadProdPage"
			  class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>View Products
			</NuxtLink>   
			  
			  
			<NuxtLink to="/admin/tagg/addtagg" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>Add Tag
			</NuxtLink>
  
			  
			<NuxtLink to="/admin/tagg/viewtagg" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
				<i class="fas fa-align-left mr-3"></i>View  Tags
			</NuxtLink>
       
			<div v-if="isAdmin">
	         <NuxtLink to="/admin/register" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
			  <i class="fas fa-align-left mr-3"></i>Add Admins</NuxtLink>
			</div>
			<div v-else>
			  <NuxtLink  class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">VIP</NuxtLink>
			</div>     
			  
			  <NuxtLink to="/admin/page3" class="flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item">
			  <i class="fas fa-align-left mr-3"></i>Page3</NuxtLink>

        </nav>

    </aside>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

.font-family-karla { font-family: karla; }
.bg-sidebar { background: #3d68ff; }
.cta-btn { color: #3d68ff; }
.upgrade-btn { background: #1947ee; }
.upgrade-btn:hover { background: #0038fd; }
.active-nav-link { background: #1947ee; }
.nav-item:hover { background: #1947ee; }
.account-link:hover { background: #3d68ff; }
</style>
