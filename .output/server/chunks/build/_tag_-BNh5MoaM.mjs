import { _ as _sfc_main$1 } from './Prodsopen-DAYz8xl5.mjs';
import { ref, mergeProps, unref, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import './1-CKepcKm6.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './Pagination-CRg8Wbcv.mjs';
import 'axios';

function useProdtagopenpagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const prods = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(9);
  const totalProds = ref(0);
  const loadingprods = ref(true);
  const fetchProds = async (tag = "", page = 1) => {
    console.log("the tag is " + tag);
    try {
      const params = {
        page,
        per_page: perPage.value
      };
      if (tag) {
        params.tag = tag;
        tag = tag;
      } else
        tag = "";
      const response = await $api.get(`${apiUrl}/prod/viewbytag/${tag}`, { params });
      prods.value = response.data.prods.data;
      currentPage.value = response.data.prods.current_page;
      lastPage.value = response.data.prods.last_page;
      totalProds.value = response.data.prods.total;
    } catch (error) {
      console.error("Error fetching :", error.response ? error.response.data : error.message);
    } finally {
      loadingprods.value = false;
    }
  };
  const changePage = (tag = null, page) => {
    if (page > 0 && page <= lastPage.value) {
      fetchProds(tag, page);
    }
  };
  const pageNumbers = computed(() => {
    let pages = [];
    for (let i = 1; i <= lastPage.value; i++) {
      pages.push(i);
    }
    return pages;
  });
  return {
    prods,
    currentPage,
    lastPage,
    perPage,
    totalProds,
    fetchProds,
    changePage,
    pageNumbers,
    loadingprods
  };
}
const _sfc_main = {
  __name: "[tag]",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    const { prods, currentPage, lastPage, changePage, pageNumbers, loadingprods, fetchProds } = useProdtagopenpagination();
    const tag = route.params.tag;
    useHead({
      title: "Nuxt3 Laravel 11 MySQl API Products Page",
      meta: [
        {
          name: "description",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        },
        {
          name: "keywords",
          content: "Nuxt3 Laravel 11 MySQl API Products Page, MySQL, PHP 8, Web Development,  VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon"
        },
        {
          property: "og:title",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        },
        {
          property: "og:description",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        }
      ]
    });
    const key = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Prodsopen = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1><h2 class="text-center mb-1"><p> By TAG: ${ssrInterpolate(unref(tag))}</p></h2>`);
      if (unref(loadingprods)) {
        _push(`<div class="row g-4"> Loading... </div>`);
      } else {
        _push(`<div>`);
        if (unref(prods) && unref(prods).length > 0) {
          _push(`<div class="row g-4">`);
          _push(ssrRenderComponent(_component_Prodsopen, {
            prods: unref(prods),
            currentPage: unref(currentPage),
            lastPage: unref(lastPage),
            changePage: unref(changePage),
            pageNumbers: unref(pageNumbers),
            tag: unref(tag),
            key: key.value.value
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="row g-4"> Nothing found </div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/tagg/[tag].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_tag_-BNh5MoaM.mjs.map
