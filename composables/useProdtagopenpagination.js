import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useProdtagopenpagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const prods = ref([])
  const currentPage = ref(1)
  const lastPage = ref(1)
  const perPage = ref(9)
  const totalProds = ref(0)
  const loadingprods = ref(true) 

  const fetchProds = async (tag = '',page = 1) => {
	  
	  
	console.log('the tag is ' +   tag)
	  
    try {
      // Build the query parameters
      const params = {
        page: page,
        per_page: perPage.value
      }

      // Include catid if provided
      if (tag) 
	  {
        params.tag = tag
		tag = tag
      }
	  else
		tag =''
	

	
      const response = await $api.get(`${apiUrl}/prod/viewbytag/${tag}`, { params })
      prods.value = response.data.prods.data
      currentPage.value = response.data.prods.current_page
      lastPage.value = response.data.prods.last_page
      totalProds.value = response.data.prods.total
    } 
	catch (error) 
	{
      console.error('Error fetching :', error.response ? error.response.data : error.message)
    }
	finally 
	{
		loadingprods.value = false  // Set loading to false once data is fetched
	}
	
  }

  const changePage = (tag = null,page) => {
	
    if (page > 0 && page <= lastPage.value) {
      fetchProds(tag,  page) // Pass catid if needed
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
    pageNumbers,
	loadingprods	
  }
}
