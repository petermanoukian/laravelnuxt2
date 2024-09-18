import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useCatPagination() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const cats = ref([])
  const currentPage = ref(1)
  const lastPage = ref(1)
  const perPage = ref(12)
  const totalCats = ref(0)

  const fetchCats = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/cat/view?page=${page}&per_page=${perPage.value}`)
      cats.value = response.data.data
	  
      currentPage.value = response.data.current_page
      lastPage.value = response.data.last_page
      totalCats.value = response.data.total
    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }

  const changePage = (page) => {
    if (page > 0 && page <= lastPage.value) {
      currentPage.value = page
      fetchCats(page)
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
    cats,
    currentPage,
    lastPage,
    perPage,
    totalCats,
    fetchCats,
    changePage,
    pageNumbers,  // Return page numbers
  }
}

