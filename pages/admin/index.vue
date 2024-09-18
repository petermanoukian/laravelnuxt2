<!-- pages/dashboard.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { onMounted } from 'vue'




definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});




const authStore = useAuthStore()

onMounted(async () => {
  await authStore.fetchUser()
})
</script>



<template>


	<div  class="bg-gray-100 font-family-karla flex">
		<Sidebar />

		<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
			<!-- Desktop Header -->
			<header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
				<div class="w-1/2"></div>
				<div  class="relative w-1/2 flex justify-end">
				 page 2
				</div>
			</header>

			<!-- Mobile Header & Nav -->
		   <MobileHeader />
		
			<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
				<main class="w-full flex-grow p-6">
					<h1 class="text-3xl text-black pb-6">Home Page</h1>

				 
				</main>
		
				<footer class="w-full bg-white text-right p-4">
					
				</footer>
			</div>
			
		</div>		
	</div>



</template>
