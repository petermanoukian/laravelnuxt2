<!-- pages/admin/cat/addcategory.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useCat } from '~/composables/useCat'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
const { cats,  fetchCatsCommon } = useCat()

definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig } from '#imports'

const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const name = ref('')
const des = ref('')
const catid = ref(null)
const selectedCat = ref(null)

const pic = ref(null)
const fileError = ref('')
const adderror = ref('')
const addsuc = ref('')

const catidx = route.params.catid
if(catidx != "")
	catid.value = catidx

const handleSelectCat = (selected) => {
 
  catid.value = selected ? selected.id : null
}

const addsubcat = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('des', des.value)
  formData.append('catid', catid.value)
  if (pic.value) {
    formData.append('pic', pic.value)
  }

    try 
    {
		const response = await $api.post(`${apiUrl}/admin/subcat/add`, formData)
		console.log('SubCategory added successfully:', response.data)
		addsuc.value = 'subcategoty aded ' + name.value +  ' ... you will be redircted in a monent ...'
		
		setTimeout(resetForm, 100)
		setTimeout(() => {
			router.push('/admin/subcat/viewsubcat'); 
		}, 300); 
    } 
    catch (error) 
	{
		if (error.response && error.response.status === 422) 
		{
          adderror.value = error.response.data.message;
        } 
		else 
		{
          adderror.value = 'An unexpected error occurred.';
        }
  }
}

onMounted(async () => {
  await authStore.fetchUser()

  await fetchCatsCommon()
  
  /*
  const multiselectComponent = $refs.multiselect
  if (multiselectComponent) {
    multiselectComponent.$on('input', handleSelectCat)
  }
  */
  
})

watch(route, () => {
  resetForm()
})

watch(selectedCat, (newValue) => {
  console.log('selectedCat changed:', newValue);
  handleSelectCat(newValue);
});


const handleFileChange = (event) => {
  const file = event.target.files[0];
  
  if (file && !file.type.startsWith('image/')) {
    fileError.value = 'Please upload a valid image file.';
    pic.value = null;
  } else {
    fileError.value = '';
    pic.value = file;
  }
  
  
}

const resetForm = async () => {
  name.value = ''
  des.value = ''
  catid.value = ''
  pic.value = null
  fileError.value = ''
  adderror.value = ''
  addsuc.value =''
  
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length > 0) {
	fileInputs[0].value = '';
  }

}
</script>

<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end"> Add SubCategory</div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">

				<div class="flex items-center justify-center bg-gray-100">
					<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Add Sub Category</h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/subcat/viewsubcat" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View subcategories</NuxtLink>
						 </p>
						<form @submit.prevent="addsubcat">
							<div class="mb-4" v-if="cats">	
								<label for="catid" class="block text-sm font-medium text-gray-700">Category</label>
								<Multiselect
								ref="multiselect"
								v-model="selectedCat"
								:options="cats"
								label="name"
								track-by="id"
								placeholder="Choose category"
								:searchable="true"
								:close-on-select="true"
								:allow-empty="false"
								class="mt-1 block w-full"
								@change="handleSelectCat"
								/>
								catid  {{ catid }}
								<p v-if="selectedCat?.id">Selected Category ID: {{ selectedCat.id }}</p>
								<p v-else>No category selected</p>
							</div>  

							<div class="mb-4">	
							  <label for="name" class="block text-sm font-medium text-gray-700">Title</label>
							  <input v-model="name" type="text" placeholder="Name" required
							  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
							</div>  
							
							<div class="mb-4">	
							  <label for="des" class="block text-sm font-medium text-gray-700"> Short Description</label>
							  <textarea v-model="des" 
							  class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md "/>
							</div> 

							<div class="mb-4">
								<label for="pic" class="block text-sm font-medium text-gray-700">Picture</label>
								<input type="file" @change="handleFileChange" class="mt-1 block w-full px-3 py-2 
								border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
								accept="image/*"/>
								<p v-if="fileError" class="mt-2 text-sm text-red-600">{{ fileError }}</p>
							</div>	
							<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
							<p v-if="adderror" class="mt-2 text-sm text-red-600">{{ adderror }}</p>
							<p v-if="addsuc" class="mt-2 text-sm text-red-600">{{ addsuc }}</p>
						</form>
					</div>
			  </div>  
            </main>
            <footer class="w-full bg-white text-right p-4"></footer>
        </div>	
	</div>		
</div>



</template>
