import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useTaggPagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const taggs = ref([])
  const currentPage = ref(1)
  const lastPage = ref(1)
  const perPage = ref(12)
  const totalTaggs = ref(0)

  const fetchTaggs = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/tagg/view?page=${page}&per_page=${perPage.value}`)
      taggs.value = response.data.data
	  
      currentPage.value = response.data.current_page
      lastPage.value = response.data.last_page
      totalTaggs.value = response.data.total
    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }

  const changePage = (page) => {
    if (page > 0 && page <= lastPage.value) {
      currentPage.value = page
      fetchTaggs(page)
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
    taggs,
    currentPage,
    lastPage,
    perPage,
    totalTaggs,
    fetchTaggs,
    changePage,
    pageNumbers,  // Return page numbers
  }
}

