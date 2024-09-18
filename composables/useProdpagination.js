import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useProdPagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const prods = ref([])
  const currentPage = ref(1)
  const lastPage = ref(1)
  const perPage = ref(8)
  const totalProds = ref(0)

  const fetchProds = async (catid = '', subid = '',page = 1) => {
	  
    try {
      // Build the query parameters
      const params = {
        page: page,
        per_page: perPage.value
      }

      // Include catid if provided
      if (catid) 
	  {
        params.catid = catid
		catid = catid
      }
	  else
		catid =''
	
	  if (subid) 
	  {
        params.subid = subid
		subid = subid
      }
	  else
		subid =''
	  let response = ''
	  if(catid !="" && subid != "")
	  {
		response = await $api.get(`${apiUrl}/admin/prod/view/${catid}/${subid}`, { params })
	  }
	  else if(catid !="" && subid == "")
	  {
		response = await $api.get(`${apiUrl}/admin/prod/view/${catid}`, { params })  
	  }
	  else
	  {
		response = await $api.get(`${apiUrl}/admin/prod/view`, { params })    
	  }
      
      prods.value = response.data.prods.data
      currentPage.value = response.data.prods.current_page
      lastPage.value = response.data.prods.last_page
      totalProds.value = response.data.prods.total
	  console.log('prod pagination JS ' + response.data.prods.data)
    } 
	catch (error) 
	{
      console.error('Error fetching Products:', error.response ? error.response.data : error.message)
    }
  }

  const changePage = (catid = null,subid = null,page) => {
	
    if (page > 0 && page <= lastPage.value) {
      fetchProds(catid, subid, page) // Pass catid if needed
    }
  }

  // Computed property for page numbers
  const pageNumbers = computed(() => {
    let pages = []
    for (let i = 1; i <= lastPage.value; i++) {
      pages.push(i)
    }
    return pages
  })

  return {
    prods,
    currentPage,
    lastPage,
    perPage,
    totalProds,
    fetchProds,
    changePage,
    pageNumbers,  // Return page numbers
  }
}
