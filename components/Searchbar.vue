<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

import { useProdsearchopenpagination } from '~/composables/useProdsearchopenpagination'


//const { data: catData, error: catError } = await useFetch(`${apiUrl}/cat/common`)
//const { data: subcatData, error: subcatError } = await useFetch(`${apiUrl}/subcat/common`)
//const cats = catData.value?.cats || [];
//const subcats = subcatData.value?.subcats || [];

const { prodsx, currentPagex, lastPagex, changePagex, pageNumbersx, fetchsearchProds } = useProdsearchopenpagination()


const catid = ref('')
const subid = ref('')
const cats= ref([])
const subcats = ref([])
const selectedCat = ref(null)
const selectedCat2 = ref(null)
const selectedSubCat = ref(null)
const firsloader = ref(0)

const searchQuery = ref('')
var searcher = ref('')
const searhmade = ref(0)
const suggestions = ref([])
const suggestions2 = ref([])
const searchmissing = ref('')
const searchmissingcatsub = ref('')
const catidx = ref(route.params.catid || "") 

const clearsubcat = () => {

  subid.value = null
  selectedSubCat.value = null
}

const clearcat = () => {

  catid.value = null
  selectedCat.value = null
}


const handleSearch = async () => {
  
  if(searchQuery.value != '')
  {
	  searhmade.value = 1
	  searcher.value = searchQuery.value
	  await fetchsearchProds( searchQuery.value)
	  searchmissing.value =''
	  suggestions.value = ''
	  suggestions2.value = ''
	  router.push(`/prod/viewprodbysearch/${searchQuery.value}`)
  }
  else
  {
	searchmissing.value = 'Your seach is empty'
  }
}

const handleSearch2 = async () => {
  
  if(searchQuery.value != '')
  {
	  searhmade.value = 1
	  searcher.value = searchQuery.value
	  await fetchsearchProds( searchQuery.value)
	  searchmissing.value =''
	  suggestions.value = ''
	  suggestions2.value = ''
	  router.push(`/prod/viewprodbysearch/${searchQuery.value}`)
  }
  else
  {
	searchmissing.value = ''
  }
}


const viewProductsByCat = () => {
	if (selectedCat.value) {
	router.push(`/prod/viewprodbycatid/${selectedCat.value}`)
	}

}

const viewProductsByCatAndSubcat = () => {
  
  if (selectedCat.value) 
  {
  
	  if (selectedSubCat.value) {
	  
		router.push(`/prod/viewprodbycatsub/${selectedCat.value.id}/${selectedSubCat.value.id}`);
	  } 
	  else 
	  {
		router.push(`/prod/viewprodbycatid/${selectedCat.value.id}`);
	  }
	  searchmissingcatsub.value =''
  }
  else
  {
	searchmissingcatsub.value ='Search empty';
  }
}

watch(searchQuery, (newsearchQuery) => {
//handleSearch()

})


const fetchSuggestions = async () => {


  if (searchQuery.value.length < 2) {
  
    
	suggestions.value = [];
	return;
  }
  
  try {
	const response = await $api.get(`${apiUrl}/prod/suggestions/${searchQuery.value}`, {
	  params: { query: searchQuery.value }
	});
	suggestions.value = response.data;

  } catch (error) {
	console.error('Error fetching suggestions:', error);
  }
}


const fetchSuggestions2 = async () => {


  if (searchQuery.value.length < 2) {

	suggestions2.value = [];
	return;
  }
  
  try {
	
	const response = await $api.get(`${apiUrl}/prod/suggestions/${searchQuery.value}`, {
	  params: { query: searchQuery.value }
	});
	suggestions2.value = response.data;

  } catch (error) {
	console.error('Error fetching suggestions:', error);
  }
}
 const selectSuggestion = (suggestion) => {
      searchQuery.value = suggestion.name;
      suggestions.value = []; 
	  suggestions2.value = []; 
      //handleSearch(); // Perform the search immediately
    }

 const selectSuggestion2 = (suggestion) => {
      searchQuery.value = suggestion.name;
      suggestions.value = []; 
	  suggestions2.value = []; 
      handleSearch(); // Perform the search immediately
    }

watch(() => route.params.catid, (newCatid) => {
  if (newCatid) {
    catidx.value = newCatid
	catid.value = newCatid
	selectedSubCat.value =  newCatid
	updateSelectedCategory()
    updateSelectedSubCategory()
	firsloader.value +=1
  }
  else
  {
	clearcat()
	catidx.value =''
	catid.value = ''
	selectedSubCat.value =''
	updateSelectedCategory()
    updateSelectedSubCategory()
	firsloader.value =0 
  }
})
onMounted(async () => {

	clearcat()
    fetchCats()
    fetchSubCats()
	updateSelectedCategory()
	updateSelectedSubCategory()
	if (route.params.catid) 
	{
	  console.log('yes paramter catid')
      catidx.value = route.params.catid
	  catid.value = catidx.value
      updateSelectedCategory()
      updateSelectedSubCategory()
    }
	else
	{
		catidx.value = ''
		catid.value = ''
		clearcat()
		updateSelectedCategory()
		updateSelectedSubCategory()
	}

})

const handleSelectCat = (selected) => {
 
  catid.value = selected ? selected.id : null
  searchmissingcatsub.value=null
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

watch(selectedCat, (newValue) => {
  console.log('selectedCat changed:', newValue);
  handleSelectCat(newValue);
})

watch(selectedSubCat, (newValue2) => {
  console.log('selectedCat changed:', newValue2);
  handleSelectSubCat(newValue2);
})

const fetchCats = async () => 
{
	try 
	{
		const response = await $api.get(`${apiUrl}/cat/common`);
		const catData = response.data.cats;
		console.log('Fetched cat data inmsearchabar:' + catData);
		cats.value = catData
	}
	catch (catError) 
	{
		console.error('Error fetching cat data:', catError.response ? catError.response.data : catError.message);
	}  
} 

const fetchSubCats = async (catid='') => 
{
	try 
	{
		let response = ''
		if(catid > 0)
		{
			response = await $api.get(`${apiUrl}/subcat/common/${catid}`);
		}
		else
		{
			response = await $api.get(`${apiUrl}/subcat/common`);
		}
		const subcatDatax2 = response.data.subcats;
		console.log('Fetched subcat data for navigation:', subcatDatax2);
		subcats.value = subcatDatax2;
	}
	catch (subcatError) 
	{
		console.error('searchar line 306 Error fetching subcat data:', subcatError.response ? subcatError.response.data : subcatError.message);
	}  
} 

watch(catid, (newCatid) => {
  fetchSubCats(newCatid);
})



</script>

<style scoped>

</style>

<template>
	<div class="container-fluid bg-primary mb-2 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
		<div class="container">	
			<div class="row g-2 mt-3 fullwidth">	
				<div class="col-12 d-flex justify-content-between">
					<form @submit.prevent="viewProductsByCatAndSubcat" class= 'fullwidther'>  
					<div class="col-5 d-flex d-flex theleftone">
						
							<div class="col-md-5 width200px">
								
								<select class="form-select border-0" v-model="catid">
									<option value = '' > Choose category</option>
									<option v-for="cat in cats" :value = "cat.id"> {{ cat.name }}</option>
								</select>
							
								
								<Multiselect  
								  v-model="selectedCat"
								  :options="cats"
								  label="name"
								  track-by="id"
								  placeholder="Choose category"
								  :searchable="true"
								  :close-on-select="true"
								  :allow-empty="false"
								  class="block w-full width200px"
								  @change="handleSelectCat,fetchSubcatsCommon(catid)"
								/>	
								<span v-if="searchmissingcatsub" class ='gray4 font12 bold'> {{ searchmissingcatsub }} </span>
							
							</div>
							<div class="col-md-5 width200px marginleft8"> 
								
								<select class="form-select border-0" v-model="subid">
									<option value = ''> Choose subcategory</option>
									<option v-for="subcat in subcats" :value = "subcat.id"> {{ subcat.name }}</option>
								</select>
								<!--
								:disabled="searchmissingcatsub"
								-->
								<div v-if="catidx== ''">
								<Multiselect
								  :disabled="firsloader==0"
								  v-model="selectedSubCat"
								  :options="subcats"
								  label="name"
								  track-by="id"
								  placeholder="Choose subcategory"
								  :searchable="true"
								  :close-on-select="true"
								  :allow-empty="false"
								  class="block w-full width200px"
								  @change="handleSelectSubCat"
								/>	
								</div>
								<div v-else>
								<Multiselect
								  
								  v-model="selectedSubCat"
								  :options="subcats"
								  label="name"
								  track-by="id"
								  placeholder="Choose subcategory"
								  :searchable="true"
								  :close-on-select="true"
								  :allow-empty="false"
								  class="block w-full width200px"
								  @change="handleSelectSubCat"
								/>	
								
								</div>
								
							</div>	
							<div class="col-md-2 ">
								<button class="btn btn-dark border-0 marginleft8"
								:disabled="searchmissingcatsub">Search</button>
							</div>
						
						</div>
					</form>
					
					
					<div class="col-4 therightone"> 
						<div class = 'fullwidth floatleft fullfloatlcear'>
						<form @submit.prevent="handleSearch">
							<div class="col-md-8 marginleft5 floatleft">
								<input type="text" class="form-control border-0 marginleft5 width250px" placeholder="Keyword" 
								v-model="searchQuery" @input="fetchSuggestions" />
							</div>
							<div class="col-md-3 floatleft">
								<button class="btn btn-dark border-0 maxwidth80  marginleft8">Search</button>
							</div>
						</form>
						</div>
						<div class = 'fullfloatlcear98 floatleft'  v-if="suggestions.length">
						<ul class="suggestions-list floatleft fullfloatlcear98"> 
							<li v-for="suggestion in suggestions" :key="suggestion.id" @click="selectSuggestion(suggestion)" class ='cursor'>
							  &rsaquo; {{ suggestion.name }}
							</li>
						</ul>
						</div>
					</div>
					
					<div class="col-3 therightone2 "> 
						<input  v-model="searchQuery" class="form-control border-0 marginleft8 width250px floatleft fullfloatlcear98" placeholder="Keyword" 
						@focus="handleSearch2" @input="fetchSuggestions2" /> 
					  <ul v-if="suggestions2.length" class="suggestions-list marginleft25 floatleft fullfloatlcear98">
						<li v-for="suggestion in suggestions2" :key="suggestion.id" class ='cursor' @click="selectSuggestion2(suggestion)">
						  &rsaquo; {{ suggestion.name }}
						</li>
					  </ul>

		
					

						
					</div>
	
				</div>
			</div>	
		</div>	
	</div>
       
</template>



