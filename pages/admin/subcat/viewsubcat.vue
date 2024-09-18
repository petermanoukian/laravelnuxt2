<!-- pages/admin/subcat/viewsubcat.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useSubcatPagination } from '~/composables/useSubcatpagination'

const { subcats, currentPage, lastPage, changePage, pageNumbers, fetchSubcats } = useSubcatPagination()




definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig } from '#imports'
const router = useRouter()
const route = useRoute()

const catidx =''


const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
  fetchSubcats()

})
const key = ref(0)



const refreshRoute = () => {

  key.value += 1;


router.replace({ path: route.path })
    .then(() => {
      console.log('Navigation ok, route replaced to ' + route.path);
    })
    .catch(err => {
      console.error('Navigation error:', err);
    });
  console.log('end')
  fetchSubcats()
 
}


watch(route, async (newRoute, oldRoute) => {
  console.log('Route changed from', oldRoute.path, 'to', newRoute.path);
  await fetchSubcats();
});


</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end">
			 View SubCategories 
            </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
			<h1 class="text-2xl font-bold mb-4">View SubCategories
			
			  <NuxtLink to="/admin/subcat/addsubcategory" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					<i class="fas fa-align-left mr-3"></i>Add SubCategory</NuxtLink>
			 </h1>
			
			<SubcatsAdmin 
			  :subcats="subcats" 
			  :currentPage="currentPage" 
			  :lastPage="lastPage" 
			  :changePage="changePage" 
			  :pageNumbers="pageNumbers"  
			  :key="key.value" 
			/>
			<p>Current Route: {{ $route.path }}</p>
			<button @click.native="refreshRoute"
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button>		

            </main>
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
