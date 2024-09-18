<!-- pages/admin/prod/addproduct.vue -->
<script setup>
import { useAuthStore } from '~/stores/auth'
import { ref, onMounted, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Sidebar from '~/components/Sidebar.vue'
import MobileHeader from '~/components/MobileHeader.vue'
import { useCat } from '~/composables/useCat'
import { useSubcat } from '~/composables/useSubcat'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const { cats,  fetchCatsCommon } = useCat()
const { subcats,  fetchSubcatsCommon } = useSubcat()



definePageMeta({
  middleware: 'auth',
  layout: 'admin'
});


import { useRuntimeConfig } from '#imports'




const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const name = ref('')
const catid = ref('')
const subid = ref('')
const des = ref('')
const dess = ref('')
const pic = ref(null)
const fileError = ref('')
const adderror = ref('')
const addsuc = ref('')
const selectedCat = ref(null)
const selectedSubCat = ref(null)
const firsloader = ref(0)

const catidx = route.params.catid

if(catidx)
{
	catid.value = catidx
}

const clearsubcat = () => {

  subid.value = null
  selectedSubCat.value = null
}
const addprod = async () => {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('catid', catid.value)
  formData.append('subid', subid.value)
  formData.append('des', des.value)
  formData.append('dess', dess.value)
  if (pic.value) {
    formData.append('pic', pic.value)
  }

  try {
    const response = await $api.post(`${apiUrl}/admin/prod/add`, formData)
    console.log(' added successfully:', response.data)
	addsuc.value = 'product added ' + name.value +  ' ... you will be redircted in a monent ...'
  } catch (error) {

		if (error.response && error.response.status === 422) {
          // Extract error message from the response
          adderror.value = error.response.data.message;
        } else {
          adderror.value = 'An unexpected error occurred.';
        }
  }
  
  setTimeout(resetForm, 1200)
  setTimeout(() => {
    router.push('/admin/prod/viewprod'); 
  }, 300);
   
}

let editor = ref(null)


onMounted(async () => {
	await authStore.fetchUser()
	//resetForm()
	await fetchCatsCommon()
	await fetchSubcatsCommon()

	updateSelectedCategory()
	
		const multiselectcatComponent = $refs.multiselectcat
	if (multiselectcatComponent) 
	{
		multiselectcatComponent.$on('input', handleSelectCat)
	}


	updateSelectedSubCategory()
	const multiselectsubcatComponent = $refs.multiselectcatsub
	if (multiselectsubcatComponent) 
	{
		multiselectsubcatComponent.$on('input', handleSelectSubCat)
	}

	editor.value = useEditor({
	content: dess.value,
	extensions: [TiptapStarterKit],
	onUpdate: ({ editor }) => {
	  dess.value = editor.getHTML(); // Update dess whenever the content changes
	},
	})
})



const handleSelectCat = (selected) => {
 
  catid.value = selected ? selected.id : null
   firsloader.value +=1
}

const handleSelectSubCat = (selected) => {
 
  subid.value = selected ? selected.id : null
}

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

watch(cats, subcats, updateSelectedCategory ,updateSelectedSubCategory)

watch(selectedCat, (newValue) => {
  console.log('selectedCat changed:', newValue);
  handleSelectCat(newValue);
})

watch(selectedSubCat, (newValue2) => {
  console.log('selectedCat changed:', newValue2);
  handleSelectSubCat(newValue2);
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

const resetForm = async () => {
  name.value = ''
  catid.value = ''
  subid.value = ''
  pic.value = null
  des.vale = null
  dess.value = null
  fileError.value = ''
  adderror.value = ''
  addsuc.value =''
  
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length > 0) {
	fileInputs[0].value = '';
  }
  
  
}

watch(catid, (newCatid) => {
  fetchSubcatsCommon(newCatid);
});




</script>

<style scoped>
.textareashort
{
	height:80px;
}
.textarealongborder
{
	height:150px;border:1px solid #333;width:100%;  padding: 10px;
}


.editable-content 
{
  border: 1px solid lightgray; /* Default border */
  border-radius: 5px;
  padding: 10px;
  min-height: 100px; /* Set a minimum height */
  max-height: 300px; /* Optional: Set a maximum height */
  overflow-y: auto; /* Add scrollbar if content exceeds max height */
}


.editable-content:focus {
  outline: none;
  border: 1px solid transparent; 
}


</style>

<template>


<div  class="bg-gray-100 font-family-karla flex">
	<Sidebar />

    <div class="relative w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
        <header class="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div  class="relative w-1/2 flex justify-end"> Add Product By Category  </div>
        </header>

        <!-- Mobile Header & Nav -->
       <MobileHeader />
    
        <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">

				<div class="flex items-center justify-center bg-gray-100">
					<div class="fullwidth90 bg-white p-8 shadow-md rounded-lg">
						<h1 class="text-2xl font-bold mb-4">Add  Product By Category </h1>
						<p class="mb-4">
						  <NuxtLink to="/admin/prod/viewprod" class=" widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						  <i class="fas fa-align-left mr-3"></i>View Products</NuxtLink>
						 </p>
						<form @submit.prevent="addprod">
						
						<div class="mb-4">	
						  <label for="catid" class="block text-sm font-medium text-gray-700">Category</label>
						<!--
						  <select v-model="catid"  placeholder="Cat" required
						  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
						  focus:border-indigo-500 sm:text-sm"
						   @change="fetchSubcatsCommon(catid)">
						  <option value = '' disabled> Choose category</option>
						  <option v-for="cat in cats" :value = "cat.id"> {{ cat.name }}</option>
						  </select>
						-->  
						  
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
							  @change="handleSelectCat,fetchSubcatsCommon(catid) "
							/>
						   catid  {{ catid }}
						   <p v-if="selectedCat">{{ selectedCat.id }} </p>
						   <p v-else>Nothing cat</p>
						 
						   <p v-if="selectedCat?.id">Selected Category ID: {{ selectedCat.id }}</p>
						   <p v-else>No category selected</p>
						  
						  
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
							  class="mt-1 block w-full"
							  @change="handleSelectSubCat "
						/>
						   subid  {{ subid }}
						   <p v-if="selectedSubCat">{{ selectedSubCat.id }} </p>
						   <p v-else>Nothin sub</p>
						 
						   <p v-if="selectedSubCat?.id">Selected Category ID: {{ selectedSubCat.id }}</p>
						   <p v-else>No subcategory selected</p>
						  
						  
						  
						  
						  
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
						
						  <div class="formatted-result" v-html="dess"></div>

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
    
            <footer class="w-full bg-white text-right p-4">
                
            </footer>
        </div>
		
	</div>	
		
		
		
	</div>



</template>
