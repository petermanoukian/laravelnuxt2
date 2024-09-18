import { ref, computed } from 'vue';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';

function useProdsearchopenpagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const prodsx = ref([]);
  const currentPagex = ref(1);
  const lastPagex = ref(1);
  const perPagex = ref(8);
  const totalProdsx = ref(0);
  const fetchsearchProds = async (searchx = "", catid = "", subid = "", page = 1) => {
    try {
      const params = {
        page,
        per_page: perPagex.value
      };
      if (searchx) {
        params.searchx = searchx;
        searchx = searchx;
      } else
        searchx = "";
      if (catid) {
        params.catid = catid;
        catid = catid;
      } else
        catid = "";
      if (subid) {
        params.subid = subid;
        subid = subid;
      } else
        subid = "";
      let response = await $api.get(`${apiUrl}/prod/search/${searchx}`, { params });
      prodsx.value = response.data.prods.data;
      currentPagex.value = response.data.prods.current_page;
      lastPagex.value = response.data.prods.last_page;
      totalProdsx.value = response.data.prods.total;
      console.log("Line 158 prodearchA " + prodsx.value + " B " + response.data.prods.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error.response ? error.response.data : error.message);
    }
  };
  const changePagex = (searchx = null, catid = null, subid = null, page) => {
    if (page > 0 && page <= lastPagex.value) {
      fetchsearchProds(searchx, catid, subid, page);
    }
  };
  const pageNumbersx = computed(() => {
    let pages = [];
    for (let i = 1; i <= lastPagex.value; i++) {
      pages.push(i);
    }
    return pages;
  });
  return {
    prodsx,
    currentPagex,
    lastPagex,
    perPagex,
    totalProdsx,
    fetchsearchProds,
    changePagex,
    pageNumbersx
    // Return page numbers
  };
}

export { useProdsearchopenpagination as u };
//# sourceMappingURL=useProdsearchopenpagination-B5R2kyEW.mjs.map
