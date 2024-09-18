import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, computed, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';

const _sfc_main$1 = {
  __name: "SubCatSingleAdmin",
  __ssrInlineRender: true,
  props: {
    subcat: {
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
        to: `/admin/subcat/detail/${__props.subcat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A ${ssrInterpolate(__props.subcat.name)}`);
          } else {
            return [
              createTextVNode(" \u203A " + toDisplayString(__props.subcat.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p> Category : ${ssrInterpolate(__props.subcat.cat.name)}</p>`);
      if (__props.subcat.img) {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/subcat/detail/${__props.subcat.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `${__props.config.public.BaseUrl}/images/subcat/thumb/${__props.subcat.img}`)}${ssrRenderAttr("alt", __props.subcat.name)} class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: `${__props.config.public.BaseUrl}/images/subcat/thumb/${__props.subcat.img}`,
                  alt: __props.subcat.name,
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
          to: `/admin/subcat/detail/${__props.subcat.id}`
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
        to: `/admin/subcat/edit/${__props.subcat.id}`
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
        to: `/admin/prod/addprodbycatidsubid/${__props.subcat.catid}/${__props.subcat.id}`
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
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/viewprodbycatidsubid/${__props.subcat.catid}/${__props.subcat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A View Products ( ${ssrInterpolate(__props.subcat.prods_count)} ) `);
          } else {
            return [
              createTextVNode(" \u203A View Products ( " + toDisplayString(__props.subcat.prods_count) + " ) ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      if (isAdmin.value) {
        _push(`<p><button class="buttonwhite margintop5"> \u203A Delete SubCategory </button></p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubCatSingleAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SubcatsAdmin",
  __ssrInlineRender: true,
  props: {
    subcats: {
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
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const props = __props;
    watch(() => props.subcats, (newSubcats) => {
      console.log("Items updated now:", newSubcats);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubCatSingleAdmin = _sfc_main$1;
      _push(`<!--[--><div class="w-full mt-8 mb-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(__props.subcats, (subcat) => {
        _push(ssrRenderComponent(_component_SubCatSingleAdmin, {
          key: subcat.id,
          subcat,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubcatsAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useSubcatPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const subcats = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(8);
  const totalSubcats = ref(0);
  const fetchSubcats = async (catid = null, page = 1) => {
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
      let response = "";
      if (catid > 0) {
        response = await $api.get(`${apiUrl}/admin/subcat/view/${catid}`, { params });
      } else {
        response = await $api.get(`${apiUrl}/admin/subcat/view`, { params });
      }
      subcats.value = response.data.subcats.data;
      currentPage.value = response.data.subcats.current_page;
      lastPage.value = response.data.subcats.last_page;
      totalSubcats.value = response.data.subcats.total;
    } catch (error) {
      console.error("Error fetching subcategories:", error.response ? error.response.data : error.message);
    }
  };
  const changePage = (catid = null, page) => {
    if (page > 0 && page <= lastPage.value) {
      fetchSubcats(catid, page);
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
    subcats,
    currentPage,
    lastPage,
    perPage,
    totalSubcats,
    fetchSubcats,
    changePage,
    pageNumbers
    // Return page numbers
  };
}

export { _sfc_main as _, useSubcatPagination as u };
//# sourceMappingURL=useSubcatpagination-6N8a4jLl.mjs.map
