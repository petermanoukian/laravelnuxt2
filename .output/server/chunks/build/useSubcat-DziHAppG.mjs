import { ref } from 'vue';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';

function useSubcat() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const subcats = ref([]);
  const fetchSubcatsCommon = async (catid = "") => {
    try {
      const params = {};
      let response = "";
      if (catid) {
        params.catid = catid;
        catid = catid;
        response = await $api.get(`${apiUrl}/admin/subcat/common/${catid}`, { params });
      } else {
        catid = "";
        response = await $api.get(`${apiUrl}/admin/subcat/common`, { params });
      }
      subcats.value = response.data.data;
    } catch (error) {
      console.error("Error fetching subcategories:", error.response ? error.response.data : error.message);
    }
  };
  return {
    subcats,
    fetchSubcatsCommon
  };
}

export { useSubcat as u };
//# sourceMappingURL=useSubcat-DziHAppG.mjs.map
