<!-- components/Sidevar.vue -->

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()
const { $api } = useNuxtApp()
const apiUrl = useRuntimeConfig().public.apiBaseUrl

const cats= ref([])
const subs= ref([])
const subcats = ref([])

const fetchCats = async () => 
{
	let response =''
	try 
	{
		response = await $api.get(`${apiUrl}/cat/commonlimited`);
		const catDatax1 = response.data.cats;
		cats.value = catDatax1;
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
		let response =''
		if(catid > 0)
		{
			response = await $api.get(`${apiUrl}/subcat/commonlimited/${catid}`);
		}
		else
		{
			response = await $api.get(`${apiUrl}/subcat/commonlimited`);
		}
		const subcatDatax1 = response.data.subcats
		subs.value = subcatDatax1
		console.log('navvue subcategories ' +  subcatData)
	}
	catch (subcatError) 
	{
		console.error('Nav subcatError fetching subcat data:', subcatError.response ? subcatError.response.data : subcatError.message);
	}  
} 


const fetchSubCatsAll = async (catid='') => 
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
		const subcatDataAll = response.data.subcats;
		subcats.value = subcatDataAll;
	}
	catch (subcatError) 
	{
		console.error('subcatError fetching All fetchSubCatsAll Subcat data:', subcatError.response ? subcatError.response.data : subcatError.message);
	}  
} 



onMounted(async () => {
  
    fetchCats()
    fetchSubCats()
	fetchSubCatsAll()

})

 const getSubcatsByCatId = (catId) => {
	console.log('subcats:', subcats.value);

	let rs1 = subcats.value.filter(subcat => subcat.catid === catId)
	console.log('Line 91 computed ' + catId +  ' result ' + rs1)
	
    return subcats.value.filter(subcat => subcat.catid === catId)
 }


</script>

<template>
	<div class="container-fluid">		
		<nav class="navbar-expand-lg bg-body-tertiary">
			<div class="navbar-collapse" id="main_nav">
				<NuxtLink to="/" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
					<h1 class="m-0 text-primary">Home</h1>
			    </NuxtLink>
				
				<ul class="navbar-nav"> 
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Categories  </a>
						<ul class="dropdown-menu"> 
						  <li v-for="cat in cats" :key = "cat.id">
						  <div v-if="getSubcatsByCatId(cat.id).length && cat.subcats_count > 0 && cat.prods_count > 0">
							<NuxtLink :to="`/prod/viewprodbycatid/${cat.id}`" 
							 class="dropdown-item" > 
						   {{ cat.name }} ( {{ cat.subcats_count }} ) | ( {{ cat.prods_count }} )  &raquo; 
							</NuxtLink>
							 <ul class="submenu dropdown-menu" 
							 v-if="getSubcatsByCatId(cat.id).length && cat.subcats_count > 0 && cat.prods_count > 0">
							
							  <li v-for="subcat in getSubcatsByCatId(cat.id)" :key="subcat.id">
								<NuxtLink :to="`/prod/viewprodbycatsub/${cat.id}/${subcat.id}`" class="dropdown-item"
								v-if="getSubcatsByCatId(cat.id).length && subcat.prods_count > 0">
								  {{ subcat.name }} | ({{ subcat.prods_count }})
								</NuxtLink>
							  </li>
							 </ul>
							</div>
						  </li>
						</ul>
					</li>
				
					<li class="nav-item dropdown">
						<a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  SubCategories  </a>
						<ul class="dropdown-menu">
						   <li v-for="subcat in subs" :key = "subcat.id">
							<NuxtLink :to="`/prod/viewprodbycatsub/${subcat.catid}/${subcat.id}`" class="dropdown-item" >
						   {{ subcat.name }} ( {{ subcat.prods_count }} )</NuxtLink>
						  </li>
						</ul>
					</li>
					<li class="nav-item dropdown">
						<NuxtLink :to="`/prod/viewprod`"  class="nav-link" >  All Products  </NuxtLink>
					</li>
				</ul>
			  </div> 	   
		</nav>
	
	</div>       
</template>

<style scoped>
@media all and (min-width: 992px) 
{
	.dropdown-menu li
	{
		position: relative;
	}
	.dropdown-menu .submenu
	{ 
		display: none;
		position: absolute;
		left:100%; top:-7px;
	}
	.dropdown-menu .submenu-left
	{ 
		right:100%; left:auto;
	}
	.dropdown-menu > li:hover{ background-color: #f1f1f1 }
	.dropdown-menu > li:hover >  div > .submenu{
		display: block;
	}
}	

@media (max-width: 991px) 
{
	.dropdown-menu .dropdown-menu
	{
		margin-left:0.7rem; margin-right:0.7rem; margin-bottom: .5rem;
	}
}	
</style>