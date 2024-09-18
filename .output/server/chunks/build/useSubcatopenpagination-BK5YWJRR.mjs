import { u as useNuxtApp, a as useRuntimeConfig, b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, ref, computed, watch, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { _ as _sfc_main$2 } from './Pagination-CRg8Wbcv.mjs';

const _sfc_main$1 = {
  props: {
    subcat: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-1 mb-1 col-lg-4 col-sm-6 wow fadeInUp" }, _attrs))}><div class="graybox"><p> Category : `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/prod/viewprodbycatid/${$props.subcat.catid}`
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.subcat.cat.name)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.subcat.cat.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p>`);
  if ($props.subcat.img) {
    _push(`<p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/prod/viewprodbycatsub/${$props.subcat.catid}/${$props.subcat.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", `${$props.config.public.BaseUrl}/images/subcat/thumb/${$props.subcat.img}`)}${ssrRenderAttr("alt", $props.subcat.name)} class="mt-1 mb-1 maximg link1 h-32"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: `${$props.config.public.BaseUrl}/images/subcat/thumb/${$props.subcat.img}`,
              alt: $props.subcat.name,
              class: "mt-1 mb-1 maximg link1 h-32"
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
      to: `/prod/viewprodbycatsub/${$props.subcat.catid}/${$props.subcat.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-1 mb-1 h-32 link1"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_0,
              alt: "Default Picture",
              class: "mt-1 mb-1 h-32 link1"
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
    to: `/prod/viewprodbycatsub/${$props.subcat.catid}/${$props.subcat.id}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b${_scopeId}>\u203A ${ssrInterpolate($props.subcat.name)}</b>`);
      } else {
        return [
          createVNode("b", null, "\u203A " + toDisplayString($props.subcat.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubCatSingleOpen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "SubcatsOpen",
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
      const _component_SubCatSingleOpen = __nuxt_component_0;
      const _component_Pagination = _sfc_main$2;
      _push(`<!--[--><div class="fullwidth row mt-8 mb-8"><!--[-->`);
      ssrRenderList(__props.subcats, (subcat, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_SubCatSingleOpen, {
          subcat,
          catid: __props.catid,
          config: unref(config)
        }, null, _parent));
        if ((index + 1) % 3 === 0) {
          _push(`<div class="w-full"><hr class="my-4"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Pagination, {
        currentPage: __props.currentPage,
        pageNumbers: __props.pageNumbers,
        lastPage: __props.lastPage,
        changePage: __props.changePage,
        typ: "subcatpaginater",
        catid: __props.catid
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubcatsOpen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
function useCatopenPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const cats = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(12);
  const totalCats = ref(0);
  const loadingcats = ref(true);
  const fetchCats = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/cat/view?page=${page}&per_page=${perPage.value}`);
      cats.value = response.data.data;
      currentPage.value = response.data.current_page;
      lastPage.value = response.data.last_page;
      totalCats.value = response.data.total;
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
    } finally {
      loadingcats.value = false;
    }
  };
  const changePage = (page) => {
    if (page > 0 && page <= lastPage.value) {
      currentPage.value = page;
      fetchCats(page);
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
    cats,
    currentPage,
    lastPage,
    perPage,
    totalCats,
    fetchCats,
    changePage,
    pageNumbers,
    loadingcats
  };
}
function useSubcatopenpagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const subcats = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(9);
  const totalSubcats = ref(0);
  const loadingsubcats = ref(true);
  const fetchSubcats = async (catid = null, page = 1) => {
    try {
      const params = {
        page,
        per_page: perPage.value
      };
      let response = "";
      if (catid > 0) {
        params.catid = catid;
        catid = catid;
        response = await $api.get(`${apiUrl}/subcat/view/${catid}`, { params });
      } else {
        catid = "";
        response = await $api.get(`${apiUrl}/subcat/view`, { params });
      }
      console.log("subcat response " + response);
      subcats.value = response.data.subcats.data;
      console.log("subcat response 2" + response.data.subcats.data);
      currentPage.value = response.data.subcats.current_page;
      lastPage.value = response.data.subcats.last_page;
      totalSubcats.value = response.data.subcats.total;
    } catch (error) {
      console.error("Error fetching subcategories:", error.response ? error.response.data : error.message);
    } finally {
      loadingsubcats.value = false;
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
    pageNumbers,
    loadingsubcats
  };
}

export { _sfc_main as _, useSubcatopenpagination as a, useCatopenPagination as u };
//# sourceMappingURL=useSubcatopenpagination-BK5YWJRR.mjs.map
