import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useSubcatPagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const subcats = ref([])
  const currentPage = ref(1)
  const lastPage = ref(1)
  const perPage = ref(8)
  const totalSubcats = ref(0)

  const fetchSubcats = async (catid = null, page = 1) => {
	  
    try {

		const params = {
			page: page,
			per_page: perPage.value
		  }

		  // Include catid if provided
		if (catid) {
			params.catid = catid
			catid = catid
		}
		else
			catid =''

		let response = ''
		if (catid > 0) {
		  response = await $api.get(`${apiUrl}/admin/subcat/view/${catid}`, { params })
		}

		else
		{
			response = await $api.get(`${apiUrl}/admin/subcat/view`, { params })
		}


		subcats.value = response.data.subcats.data
		currentPage.value = response.data.subcats.current_page
		lastPage.value = response.data.subcats.last_page
		totalSubcats.value = response.data.subcats.total
    } 
	catch (error) 
	{
      console.error('Error fetching subcategories:', error.response ? error.response.data : error.message)
    }
  }

  const changePage = (catid = null,page) => {
	
    if (page > 0 && page <= lastPage.value) {
      fetchSubcats(catid, page) // Pass catid if needed
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
    subcats,
    currentPage,
    lastPage,
    perPage,
    totalSubcats,
    fetchSubcats,
    changePage,
    pageNumbers,  // Return page numbers
  }
}
