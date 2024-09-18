import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useCat() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const cats = ref([])


  const fetchCatsCommon = async () => {
    try {
      const response = await $api.get(`${apiUrl}/admin/cat/common`)
      cats.value = response.data.cats
		console.log('cats' + cats.value + apiUrl)
    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }

  return {
    cats,
    fetchCatsCommon,
  }
}