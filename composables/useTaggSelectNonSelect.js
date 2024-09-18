import { ref, computed } from 'vue'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export function useTaggSelectNonSelect() {
  const { $api } = useNuxtApp()
  const apiUrl = useRuntimeConfig().public.apiBaseUrl

  const taggs = ref([])
  const taggselects = ref([])
  const taggnonselects = ref([])

  const fetchTaggsCommon = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/tagg/common`)
      taggs.value = response.data.data
		console.log('composbale line 16' + taggs.value )
    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }


  const fetchTaggsCommonselect = async (prodid = '') => {
    try {
		
		const params1 = {

		}

      // Include catid if provided
		if (prodid) {
			params1.prodid = prodid
			prodid = prodid
		}
		else
			prodid =''
		
		
      const response = await $api.get(`${apiUrl}/admin/tagg/commonselected/${prodid}`, { params1 })
      taggselects.value = response.data.data
		console.log('composbale line 41' + taggselects.value )
    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }
  
  const fetchTaggsCommonnonselect = async (prodid) => {
    try {
		
		const params2 = {

		}

      // Include catid if provided
		if (prodid) {
			params2.prodid = prodid
			prodid = prodid
		}
		else
			prodid =''	
		
      const response = await $api.get(`${apiUrl}/admin/tagg/commonnonselected/${prodid}`, { params2 })
      taggnonselects.value = response.data.data

    } catch (error) {
      console.error('Error fetching items:', error.response ? error.response.data : error.message)
    }
  }


  return {
    taggs,
	taggselects,
	taggnonselects,
    fetchTaggsCommon,
	fetchTaggsCommonselect,
	fetchTaggsCommonnonselect,

  }
}

