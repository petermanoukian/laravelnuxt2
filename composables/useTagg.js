import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useTagg() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const taggs = ref([])


	const fetchTaggsCommon = async () => {
	  try {
		const response = await $api.get(`${apiUrl}/admin/tagg/common`)
		taggs.value = response.data.data
	  } catch (error) {
		console.error('Error fetching items:', error.response ? error.response.data : error.message)
	  }
	}



  return {
    taggs,
    fetchTaggsCommon,

  }
}

