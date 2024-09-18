import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, computed, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';

const _sfc_main$1 = {
  __name: "ProdAdminSingle",
  __ssrInlineRender: true,
  props: {
    prod: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    useRouter();
    useRoute();
    const authStore = useAuthStore();
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    const isAdmin = computed(() => authStore.user && authStore.user.levell === 1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 border rounded" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/detail/${__props.prod.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A ${ssrInterpolate(__props.prod.name)}`);
          } else {
            return [
              createTextVNode(" \u203A " + toDisplayString(__props.prod.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p> Category: ${ssrInterpolate(__props.prod.cat.name)}</p><p> SubCategory: ${ssrInterpolate(__props.prod.subcat.name)}</p>`);
      if (__props.prod.img) {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/detail/${__props.prod.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `${__props.config.public.BaseUrl}/images/prod/thumb/${__props.prod.img}`)}${ssrRenderAttr("alt", __props.prod.name)} class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: `${__props.config.public.BaseUrl}/images/prod/thumb/${__props.prod.img}`,
                  alt: __props.prod.name,
                  class: "mt-2 mb-2 w-32 h-32"
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p>`);
      } else {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/prod/detail/${__props.prod.id}`
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
          _: 1
        }, _parent));
        _push(`</p>`);
      }
      _push(`<p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/edit/${__props.prod.id}`
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
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/addprodbycatidsubid/${__props.prod.catid}/${__props.prod.subid}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A Add By Cat/Subcategory`);
          } else {
            return [
              createTextVNode(" \u203A Add By Cat/Subcategory")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/viewprodbycatidsubid/${__props.prod.catid}/${__props.prod.subid}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A View By Cat/Subcategory`);
          } else {
            return [
              createTextVNode(" \u203A View By Cat/Subcategory")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      if (isAdmin.value) {
        _push(`<p><button class="buttonwhite margintop5"> \u203A Delete </button></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProdAdminSingle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ProdsAdmin",
  __ssrInlineRender: true,
  props: {
    prods: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    pageNumbers: {
      type: Number,
      required: true
    },
    lastPage: {
      type: Number,
      required: true
    },
    changePage: {
      type: Function,
      required: true
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
    watch(() => props.prods, (newProds) => {
      console.log("Items updated now:", newProds);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdAdminSingle = _sfc_main$1;
      _push(`<!--[--> Admin Products <div class="w-full mt-8 mb-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(__props.prods, (prod) => {
        _push(ssrRenderComponent(_component_ProdAdminSingle, {
          key: prod.id,
          prod,
          config: unref(config)
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="bg-gray-100 fullwidth margintopbottom8 pagination"> catid : ${ssrInterpolate(__props.catid)} <button${ssrIncludeBooleanAttr(__props.currentPage === 1) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === 1, active: __props.currentPage === 1 }])}"> &lt;&lt; Previous</button><!--[-->`);
      ssrRenderList(__props.pageNumbers, (page) => {
        _push(`<span class="marginleft5"><button class="${ssrRenderClass(["marginleft5 pager", { red: page === __props.currentPage, active: page === __props.currentPage }])}"${ssrIncludeBooleanAttr(page === __props.currentPage) ? " disabled" : ""}>${ssrInterpolate(page)}</button></span>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(__props.currentPage === __props.lastPage) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === __props.lastPage, active: __props.currentPage === __props.lastPage }])}"> &gt;&gt; Next</button><span class="marginleft5">Page ${ssrInterpolate(__props.currentPage)} of ${ssrInterpolate(__props.lastPage)}</span></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProdsAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useProdPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const prods = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(8);
  const totalProds = ref(0);
  const fetchProds = async (catid = "", subid = "", page = 1) => {
    try {
      const params = {
        page,
        per_page: perPage.value
      };
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
      let response = "";
      if (catid != "" && subid != "") {
        response = await $api.get(`${apiUrl}/admin/prod/view/${catid}/${subid}`, { params });
      } else if (catid != "" && subid == "") {
        response = await $api.get(`${apiUrl}/admin/prod/view/${catid}`, { params });
      } else {
        response = await $api.get(`${apiUrl}/admin/prod/view`, { params });
      }
      prods.value = response.data.prods.data;
      currentPage.value = response.data.prods.current_page;
      lastPage.value = response.data.prods.last_page;
      totalProds.value = response.data.prods.total;
      console.log("prod pagination JS " + response.data.prods.data);
    } catch (error) {
      console.error("Error fetching Products:", error.response ? error.response.data : error.message);
    }
  };
  const changePage = (catid = null, subid = null, page) => {
    if (page > 0 && page <= lastPage.value) {
      fetchProds(catid, subid, page);
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
    pageNumbers
    // Return page numbers
  };
}

export { _sfc_main as _, useProdPagination as u };
//# sourceMappingURL=useProdpagination-BE_nJY1T.mjs.map
