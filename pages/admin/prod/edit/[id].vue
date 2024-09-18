<!-- pages/admin/cat/addcategory.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useCat } from '~/composables/useCat'
import { useTaggSelectNonSelect } from '~/composables/useTaggSelectNonSelect'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const { cats,  fetchCatsCommon } = useCat()
const { subcats,  fetchSubcatsCommon } = useSubcat()
const {  taggselects, taggnonselects, taggs, fetchTaggsCommonselect , fetchTaggsCommonnonselect ,fetchTaggsCommon } = useTaggSelectNonSelect()

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
const catid = ref('')
const subid = ref('')
const pic = ref(null)
const pic1 = ref(null)
const fileError = ref('')
const editerror = ref('')
const editsuc = ref('')
const selectedCat = ref(null)
const selectedSubCat = ref(null)
const taggid = ref([])
const selectedTags= ref([])

const des = ref('')
const dess = ref('')
const firsloader = ref(0)
const id = route.params.id

let editor = ref(null)

const prod= ref(null)

// Use NuxtApp to access global plugins or configurations
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const fetchProd = async () => {
  try {
    // Call the Laravel API using the ID from the route
    const response = await $api.get(`${apiUrl}/admin/prod/edit/${id}`)
	id1.value = id;
    prod.value = response.data
	name.value = prod.value.name
	pic1.value = prod.value.img
	catid.value = prod.value.catid
	subid.value = prod.value.subid
	des.value = prod.value.des
	dess.value = prod.value.dess

	
  } catch (error) {
    console.error('Error fetching item:', error.response ? error.response.data : error.message)
  }
}





const editprod = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl
  
  const taggIds = taggselects.value.map(tag => tag.id)

  // Append the IDs as a comma-separated string or array to formData
   // As a comma-separated string
  // or
  //formData.append('taggid', taggIds); 

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('catid', catid.value)
  formData.append('subid', subid.value)
  formData.append('des', des.value)
  formData.append('dess', dess.value)
  //formData.append('taggid', taggIds.join(','))
  formData.append('taggid', taggIds)
  
  
  
  
  formData.append('pic1', pic1.value)
  if (pic.value) {
    formData.append('pic', pic.value)
  }

  try 
  {
    const response = await $api.post(`${apiUrl}/admin/prod/update/${id}`, formData)
    console.log('SubCategory added successfully:', response.data)
	editsuc.value = 'subcategoty updated ' + name.value +  ' ... you will be redircted in a monent ...'
	setTimeout(() => {
    router.push('/admin/prod/viewprod'); 
	}, 300); 
  } 
  catch (error) 
  {
	if (error.response && error.response.status === 422) 
	{
	  editerror.value = error.response.data.message;
	} 
	else 
	{
	  editerror.value = 'An unexpected error occurred.';
	}
  }
  
}

const handleSelectCat = (selected) => {
  
  catid.value = selected ? selected.id : null
  if(firsloader > 1)
  {
	clearsubcat()
  }
  firsloader.value +=1

}

const handleSelectSubCat = (selected) => {

  subid.value = selected ? selected.id : null
}

const clearsubcat = () => {

  subid.value = null
  selectedSubCat.value = null
}


onMounted(async () => {
	await authStore.fetchUser()
	
	await fetchProd()
	await fetchCatsCommon()
	await fetchSubcatsCommon(catid.value)
	
	await fetchTaggsCommonselect(id)
	await fetchTaggsCommonnonselect(id)
	await fetchTaggsCommon()
	updateSelectedCategory()
	updateSelectedSubCategory()
	
	
	
	
	/*
	const multiselectcatComponent = $refs.multiselectcat
	if (multiselectcatComponent) 
	{
		multiselectcatComponent.$on('input', handleSelectCat)
	}

	
	const multiselectsubcatComponent = $refs.multiselectsubcat
	if (multiselectsubcatComponent) 
	{
		multiselectsubcatComponent.$on('input', handleSelectSubCat)
	}
	*/

	editor.value = useEditor({
	content: dess.value,
	extensions: [TiptapStarterKit],
	onUpdate: ({ editor }) => {
	  dess.value = editor.getHTML(); // Update dess whenever the content changes
	},
	})

  
})

const updateSelectedCategory = () => {

  if (catid.value && cats.value.length) {
    const catidNumber = Number(catid.value) // Convert catid.value to a number
    const selectedCategory = cats.value.find(cat => cat.id === catidNumber)
    selectedCat.value = selectedCategory || null
  }
}

const updateSelectedSubCategory = () => {

  if (subid.value && subcats.value.length) {

    const subcatidNumber = Number(subid.value) // Convert catid.value to a number
    const selectedSubCategory = subcats.value.find(sub => sub.id === subcatidNumber)
    selectedSubCat.value = selectedSubCategory || null
  }
}

watch(firsloader, (newfirsloader) => {

  if(newfirsloader > 1)
  {
	clearsubcat()
  }
  
})

watch(catid, (newCatid) => {

  
  fetchSubcatsCommon(newCatid);
})

/*

watch(cats, subcats, updateSelectedCategory ,updateSelectedSubCategory)
*/


watch(selectedCat, (newValue) => {
  console.log('selectedCat changed:', newValue)

  handleSelectCat(newValue)

  
  
})

watch(selectedSubCat, (newValue2) => {
  console.log('selectedCat changed:', newValue2)
  handleSelectSubCat(newValue2)
})


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

watch(selectedTags, (newTags) => {
  
  taggid.value = newTags.map(tag => tag.id);
})
const resetForm = async () => {
  fetchProd()
  
  
}



</script>



<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end"> Edit Product </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">

				<div class="flex items-center justify-center bg-gray-100">
					<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Edit Product
						
						</h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/subcat/viewsubcat" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View Subcategories</NuxtLink>
						  <NuxtLink to="/admin/prod/viewprod" class=" marginleft8 widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View Products</NuxtLink>
						  
						 </p>
						<form @submit.prevent="editprod">
						
						<div class="mb-4">	
						  <label for="catid" class="block text-sm font-medium text-gray-700">Category</label>
						  <Multiselect
							  ref="multiselectcat"
							  v-model="selectedCat"
							  :options="cats"
							  label="name"
							  track-by="id"
							  placeholder="Choose category"
							  :searchable="true"
							  :close-on-select="true"
							  :allow-empty="false"
							  class="mt-1 block w-full"
							  
							/>
					
						   loader : {{ firsloader }}
   
						</div>  
						
						
						<div class="mb-4">	
							  <label for="subid" class="block text-sm font-medium text-gray-700">SubCategory</label>
							  <!--
							  <select v-model="subid"  placeholder="Subcat" required
							  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
							  focus:border-indigo-500 sm:text-sm">
							  <option value = '' disabled> Choose Subcategory</option>
							  <option v-for="subcat in subcats" :value = "subcat.id"> {{ subcat.name }}</option>
							  </select>
							  -->
						  
												  
							<Multiselect
							  ref="multiselectsubcat"
							  v-model="selectedSubCat"
							  :options="subcats"
							  label="name"
							  track-by="id"
							  placeholder="Choose subcategory"
							  :searchable="true"
							  :close-on-select="true"
							  :allow-empty="false"
							  class="mt-1 block w-full"	/>
						  
			
						</div>
						
						<div class="mb-4">	
						  <label for="taggid" class="block text-sm font-medium text-gray-700">
						  Tags </label>
			 
						  
							<Multiselect
								v-model="taggselects"

								:options="taggs"
								label="name"
								track-by="id"
								placeholder="Choose tags"
								:searchable="true"
								:close-on-select="true"
								:allow-empty="true"
								class="mt-1 block w-full"
								:multiple="true" 
							/>
						  
			
						</div>  
						
						
						
						<div class="mb-4">	
						  <label for="name" class="block text-sm font-medium text-gray-700"> Name</label>
						  <input v-model="name" type="text" placeholder="Name" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "/>
						</div>


						<div class="mb-4">	
						  <label for="des" class="block text-sm font-medium text-gray-700"> Short Description</label>
						  <textarea v-model="des" type="text" 
						  class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md "/>
						</div>  

						<div class="mb-4">	
							<label for="dess" class="block text-sm font-medium text-gray-700"> Long Description</label>    
							<client-only>
							  <tiptap-editor v-model="dess" class = 'textarealongborder'
							  :editor="editor"/>
							</client-only>
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
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
