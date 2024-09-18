<!-- pages/admin/subcat/edit.vue -->
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
const id1 = ref('')
const name = ref('')
const des = ref('')
const catid = ref('')
const selectedCat = ref(null)
const pic = ref(null)
const pic1 = ref(null)
const fileError = ref('')
const editerror = ref('')
const editsuc = ref('')
const id = route.params.id
const subcat= ref(null)
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchSub = async () => {
  try {
    // Call the Laravel API using the ID from the route
    const response = await $api.get(`${apiUrl}/admin/sub/edit/${id}`)
	id1.value = id;
    subcat.value = response.data
	name.value = subcat.value.name
	des.value = subcat.value.des
	pic1.value = subcat.value.img
	catid.value = subcat.value.catid
	updateSelectedCategory()
  } 
  catch (error) 
  {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}


const updateSelectedCategory = () => {
  if (catid.value && cats.value.length) {
    const selectedCategory = cats.value.find(cat => cat.id === catid.value)
    selectedCat.value = selectedCategory || null
  }
}


const editsubcat = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('des', des.value)
  formData.append('catid', catid.value)
  formData.append('pic1', pic1.value)
  if (pic.value) {
    formData.append('pic', pic.value)
  }

  try 
  {
    const response = await $api.post(`${apiUrl}/admin/subcat/update/${id}`, formData)
    console.log('SubCategory added successfully:', response.data)
	editsuc.value = 'subcategoty updated ' + name.value +  ' ... you will be redircted in a monent ...'
	setTimeout(() => {
		router.push('/admin/subcat/viewsubcat'); 
	}, 300); 
  } 
  catch (error) 
  {
	if (error.response && error.response.status === 422) 
	{
	  editerror.value = error.response.data.message;
	} else 
	{
	  editerror.value = 'An unexpected error occurred.';
	}
  }
  

}

const handleSelectCat = (selected) => 
{
  catid.value = selected ? selected.id : null
}


onMounted(async () => 
{
	await authStore.fetchUser()
	fetchSub()
	fetchCatsCommon()
	updateSelectedCategory()
	const multiselectComponent = $refs.multiselect
	if (multiselectComponent)
	{
		multiselectComponent.$on('input', handleSelectCat)
	}

  
})

watch(cats, updateSelectedCategory)

watch(selectedCat, (newValue) => {
  console.log('selectedCat changed:', newValue);
  handleSelectCat(newValue);
})


const handleFileChange = (event) => 
{
  const file = event.target.files[0];
  
  if (file && !file.type.startsWith('image/')) {
    fileError.value = 'Please upload a valid image file.';
    pic.value = null;
  } else {
    fileError.value = '';
    pic.value = file;
  }
}

const resetForm = async () => 
{
  fetchSub()
}

</script>

<template>
	<div  class="bg-gray-100 font-family-karla flex">
		<Sidebar />
		<div class="relative w-full flex flex-col h-screen overflow-y-hidden">
			<!-- Desktop Header -->
			<header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
				<div class="w-1/2"></div>
				<div  class="relative w-1/2 flex justify-end">Edit SubCategory</div>
			</header>

		   <MobileHeader />
		
			<div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
				<main class="w-full flex-grow p-6">

					<div class="flex items-center justify-center bg-gray-100">
						<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
							<h1 class="text-2xl font-bold mb-4">Edit SubCategory</h1>
							<p class="mb-4">
							  <NuxtLink to="/admin/subcat/viewsubcat" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white 
							  font-bold py-2 px-4 rounded">
							  <i class="fas fa-align-left mr-3"></i>View subcategories</NuxtLink>
							 </p>
							<form @submit.prevent="editsubcat">
								<div class="mb-4">	
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
								   <p v-if="selectedCat">{{ selectedCat.id }} </p>
								   <p v-else>Nothin</p>
								 
								   <p v-if="selectedCat?.id">Selected Category ID: {{ selectedCat.id }}</p>
								   <p v-else>No category selected</p>
								</div>  

								<div class="mb-4">	
								  <label for="name" class="block text-sm font-medium text-gray-700">Title</label>
								  <input v-model="name" type="text" placeholder="Name" required
								  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
								  focus:border-indigo-500 sm:text-sm"/>
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
									
									Old Picture
									<input v-model="pic1" type="text" readonly placeholder="Old Picture"
									class="mt-1 block w-full px-3 py-2 
									border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
								</div>

								<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
								<p v-if="editerror" class="mt-2 text-sm text-red-600">{{ editerror }}</p>
								<p v-if="editsuc" class="mt-2 text-sm text-red-600">{{ editsuc }}</p>
							</form>
						</div>
					</div>
				</main>
		
				<footer class="w-full bg-white text-right p-4"></footer>
			</div>	
		</div>		
	</div>
</template>