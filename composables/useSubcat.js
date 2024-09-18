import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useSubcat() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const subcats = ref([])


  const fetchSubcatsCommon = async (catid = '') => {
	 
	  
    try {
      // Build the query parameters
      const params = {

      }

      let response = ''
      // Include catid if provided
      if (catid) {
        params.catid = catid
		catid = catid
		response = await $api.get(`${apiUrl}/admin/subcat/common/${catid}`, { params })
      }
	  else{
		catid =''
		response = await $api.get(`${apiUrl}/admin/subcat/common`, { params })
	  }
      
      subcats.value = response.data.data
    } catch (error) {
      console.error('Error fetching subcategories:', error.response ? error.response.data : error.message)
    }
  }



  return {
    subcats,
    fetchSubcatsCommon,
  }
}
