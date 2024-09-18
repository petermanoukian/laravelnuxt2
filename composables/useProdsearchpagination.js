import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useProdsearchPagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const prodsx = ref([])
  const currentPagex = ref(1)
  const lastPagex = ref(1)
  const perPagex = ref(9)
  const totalProdsx = ref(0)

  const fetchsearchProds = async (searchx = '',catid = '', subid = '',page = 1) => {
	  
    try {
      // Build the query parameters
      const params = {
        page: page,
        per_page: perPagex.value
      }

      // Include catid if provided
	  
	  if (searchx) 
	  {
        params.searchx = searchx
		searchx = searchx
      }
	  else
		searchx =''
	  
	  
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
	
	
      //const response = await $api.get(`${apiUrl}/admin/prod/search/${searchx}/${catid}/${subid}`, { params })
		const response = await $api.get(`${apiUrl}/admin/prod/search/${searchx}/${catid}/${subid}`, { params })
      // Update the state with response data
      prodsx.value = response.data.prods.data
      currentPagex.value = response.data.prods.current_page
      lastPagex.value = response.data.prods.last_page
      totalProdsx.value = response.data.prods.total
    } catch (error) {
      console.error('Error fetching subcategories:', error.response ? error.response.data : error.message)
    }
  }

  const changePagex = (searchx = null, catid = null,subid = null,page) => {
	
    if (page > 0 && page <= lastPagex.value) {
      fetchsearchProds(searchx, catid, subid, page) // Pass catid if needed
    }
  }

  // Computed property for page numbers
  const pageNumbersx = computed(() => {
    let pages = []
    for (let i = 1; i <= lastPagex.value; i++) {
      pages.push(i)
    }
    return pages
  })

  return {
    prodsx,
    currentPagex,
    lastPagex,
    perPagex,
    totalProdsx,
    fetchsearchProds,
    changePagex,
    pageNumbersx,  // Return page numbers
  }
}

