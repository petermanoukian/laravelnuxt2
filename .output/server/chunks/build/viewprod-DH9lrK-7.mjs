import { u as useProdPagination, _ as _sfc_main$2 } from './useProdpagination-BE_nJY1T.mjs';
import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, watch, mergeProps, unref, useSSRContext, computed, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
import { u as useSubcat } from './useSubcat-DziHAppG.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'axios';

const _sfc_main$1 = {
  __name: "Prodsearch",
  __ssrInlineRender: true,
  props: {
    prodsx: {
      type: Array,
      required: true
    },
    currentPagex: {
      type: Number,
      required: true
    },
    pageNumbersx: {
      type: Number,
      required: true
    },
    lastPagex: {
      type: Number,
      required: true
    },
    changePagex: {
      type: Function,
      required: true
    },
    searchx: {
      type: String,
      required: false
    },
    catid: {
      type: Number,
      required: false
    },
    subid: {
      type: Number,
      required: false
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const props = __props;
    watch(() => props.prodsx, (newProdsx) => {
      console.log("Items updated now:", newProdsx);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="w-full mt-8 mb-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(__props.prodsx, (prod) => {
        _push(`<div class="p-2 border rounded">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/detail/${prod.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A ${ssrInterpolate(prod.name)}`);
            } else {
              return [
                createTextVNode(" \u203A " + toDisplayString(prod.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p> Category : ${ssrInterpolate(prod.cat.name)}</p><p> SubCategory : ${ssrInterpolate(prod.subcat.name)}</p>`);
        if (prod.img) {
          _push(`<p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/admin/prod/detail/${prod.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/prod/thumb/${prod.img}`)}${ssrRenderAttr("alt", prod.name)} class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: `${unref(config).public.BaseUrl}/images/prod/thumb/${prod.img}`,
                    alt: prod.name,
                    class: "mt-2 mb-2 w-32 h-32"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</p>`);
        } else {
          _push(`<p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/admin/prod/detail/${prod.id}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "Default Picture",
                    class: "mt-2 mb-2 w-32 h-32"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</p>`);
        }
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/edit/${prod.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A Edit `);
            } else {
              return [
                createTextVNode(" \u203A Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p><p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/addprodbycatidsubid/${prod.catid}/${prod.subid}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A Add Products`);
            } else {
              return [
                createTextVNode(" \u203A Add Products")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p><p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/viewprodbycatidsubid/${prod.catid}/${prod.subid}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A View Products`);
            } else {
              return [
                createTextVNode(" \u203A View Products")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</p></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-gray-100 fullwidth margintopbottom8"> catid : ${ssrInterpolate(__props.catid)} <button${ssrIncludeBooleanAttr(__props.currentPagex === 1) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5", { red: __props.currentPagex === 1, active: __props.currentPagex === 1 }])}"> &lt;&lt; Previous</button><!--[-->`);
      ssrRenderList(__props.pageNumbersx, (page) => {
        _push(`<span class="marginleft5"><button class="${ssrRenderClass({ red: page === __props.currentPagex, active: page === __props.currentPagex })}"${ssrIncludeBooleanAttr(page === __props.currentPagex) ? " disabled" : ""}>${ssrInterpolate(page)}</button></span>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(__props.currentPagex === __props.lastPagex) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5", { red: __props.currentPagex === __props.lastPagex, active: __props.currentPagex === _ctx.lastPage }])}"> &gt;&gt; Next</button><span class="marginleft5">Page ${ssrInterpolate(__props.currentPagex)} of ${ssrInterpolate(__props.lastPagex)}</span></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Prodsearch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useProdsearchPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const prodsx = ref([]);
  const currentPagex = ref(1);
  const lastPagex = ref(1);
  const perPagex = ref(9);
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
      const response = await $api.get(`${apiUrl}/admin/prod/search/${searchx}/${catid}/${subid}`, { params });
      prodsx.value = response.data.prods.data;
      currentPagex.value = response.data.prods.current_page;
      lastPagex.value = response.data.prods.last_page;
      totalProdsx.value = response.data.prods.total;
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
const _sfc_main = {
  __name: "viewprod",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdPagination();
    const { prodsx, currentPagex, lastPagex, changePagex, pageNumbersx, fetchsearchProds } = useProdsearchPagination();
    useRouter();
    const route = useRoute();
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    const selectedCat = ref(null);
    const selectedCat2 = ref(null);
    const selectedSubcat = ref(null);
    const searchQuery = ref("");
    var searcher = ref("");
    const searhmade = ref(0);
    const suggestions = ref([]);
    const suggestions2 = ref([]);
    const searchmissing = ref("");
    const handleSearch = async () => {
      if (searchQuery.value != "") {
        searhmade.value = 1;
        searcher.value = searchQuery.value;
        await fetchsearchProds(searchQuery.value);
        searchmissing.value = "";
        suggestions.value = "";
        suggestions2.value = "";
      } else {
        searchmissing.value = "Your seach is empty";
      }
    };
    useAuthStore();
    const key = ref(0);
    watch(route, async (newRoute, oldRoute) => {
      console.log("Route changed from", oldRoute.path, "to", newRoute.path);
      fetchProds();
    });
    watch(searchQuery, (newsearchQuery) => {
      handleSearch();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdsAdmin = _sfc_main$2;
      const _component_Prodsearch = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> View All products </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><div class="fullwidth mb-2"><div class="halfwidth48 floatleft"><h1 class="text-2xl font-bold mb-4">View By Category</h1><form class="floatleft"><label for="catSelect">Select Category:</label><select id="catSelect" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null" disabled${ssrIncludeBooleanAttr(Array.isArray(selectedCat.value) ? ssrLooseContain(selectedCat.value, "null") : ssrLooseEqual(selectedCat.value, "null")) ? " selected" : ""}> Choose category</option><!--[-->`);
      ssrRenderList(unref(cats), (cat) => {
        _push(`<option${ssrRenderAttr("value", cat.id)}>${ssrInterpolate(cat.name)}</option>`);
      });
      _push(`<!--]--></select><button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px"> View Products By category</button></form></div><div class="halfwidth48 floatleft"><h1 class="text-2xl font-bold mb-4">View By Category and Subcategory</h1><form class="floatleft"><label for="catSelect2">Select Category:</label><select id="catSelect2" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null" disabled${ssrIncludeBooleanAttr(Array.isArray(selectedCat2.value) ? ssrLooseContain(selectedCat2.value, "null") : ssrLooseEqual(selectedCat2.value, "null")) ? " selected" : ""}> Choose Category</option><!--[-->`);
      ssrRenderList(unref(cats), (cat) => {
        _push(`<option${ssrRenderAttr("value", cat.id)}>${ssrInterpolate(cat.name)}</option>`);
      });
      _push(`<!--]--></select><label for="subcatSelect">Select Subcategory:</label><select id="subcatSelect" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null" disabled${ssrIncludeBooleanAttr(Array.isArray(selectedSubcat.value) ? ssrLooseContain(selectedSubcat.value, "null") : ssrLooseEqual(selectedSubcat.value, "null")) ? " selected" : ""}> Choose subcategory</option><!--[-->`);
      ssrRenderList(unref(subcats), (subcat) => {
        _push(`<option${ssrRenderAttr("value", subcat.id)}>${ssrInterpolate(subcat.name)}</option>`);
      });
      _push(`<!--]--></select><button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px"> View Products By category and Subcategory</button></form></div></div><div class="fullwidth mt-2 floatleft"><hr class="hr1"></div><div class="fullwidth mt-6"><div class="halfwidth48 floatleft"><form><input${ssrRenderAttr("value", searchQuery.value)} placeholder="Search products..." class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm width400px"><button type="submit" class="mt-3 block px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px">Search</button></form>`);
      if (suggestions.value.length) {
        _push(`<ul class="suggestions-list marginleft25"><!--[-->`);
        ssrRenderList(suggestions.value, (suggestion) => {
          _push(`<li class="cursor"> \u203A ${ssrInterpolate(suggestion.name)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      if (searchmissing.value) {
        _push(`<span class="red"> NO SEARCH ${ssrInterpolate(searchmissing.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="halfwidth48 floatleft"><input${ssrRenderAttr("value", searchQuery.value)} placeholder="Search products directly..." class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px">`);
      if (suggestions2.value.length) {
        _push(`<ul class="suggestions-list marginleft25"><!--[-->`);
        ssrRenderList(suggestions2.value, (suggestion) => {
          _push(`<li class="cursor"> \u203A ${ssrInterpolate(suggestion.name)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="fullwidth mt-3"><h1 class="text-2xl font-bold mb-4">View All Products </h1>`);
      if (searhmade.value == 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProdsAdmin, {
          prods: unref(prods),
          currentPage: unref(currentPage),
          lastPage: unref(lastPage),
          changePage: unref(changePage),
          pageNumbers: unref(pageNumbers),
          key: key.value.value
        }, null, _parent));
        _push(`<p>Current Route: ${ssrInterpolate(_ctx.$route.path)}</p><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Page</button></div>`);
      } else {
        _push(`<div> search done : By 1) : ${ssrInterpolate(searchQuery.value)} 2) ${ssrInterpolate(unref(searcher))} <br> Has seach been made: ${ssrInterpolate(searhmade.value)} `);
        _push(ssrRenderComponent(_component_Prodsearch, {
          prodsx: unref(prodsx),
          currentPagex: unref(currentPagex),
          lastPagex: unref(lastPagex),
          changePagex: unref(changePagex),
          pageNumbersx: unref(pageNumbersx),
          searchx: searchQuery.value,
          key: key.value.value
        }, null, _parent));
        _push(`<p>Current Route: ${ssrInterpolate(_ctx.$route.path)}</p><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Page</button></div>`);
      }
      _push(`</div></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/viewprod.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=viewprod-DH9lrK-7.mjs.map
