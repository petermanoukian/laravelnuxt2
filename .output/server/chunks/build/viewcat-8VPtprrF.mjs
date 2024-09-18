import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext, computed, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
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

const _sfc_main$2 = {
  __name: "CatSingleAdmin",
  __ssrInlineRender: true,
  props: {
    cat: {
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
        to: `/admin/cat/detail/${__props.cat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A ${ssrInterpolate(__props.cat.name)} ${ssrInterpolate(__props.cat.id)}`);
          } else {
            return [
              createTextVNode(" \u203A " + toDisplayString(__props.cat.name) + " " + toDisplayString(__props.cat.id), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.cat.img) {
        _push(`<p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/cat/detail/${__props.cat.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `${__props.config.public.BaseUrl}/images/cat/thumb/${__props.cat.img}`)}${ssrRenderAttr("alt", __props.cat.name)} class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: `${__props.config.public.BaseUrl}/images/cat/thumb/${__props.cat.img}`,
                  alt: __props.cat.name,
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
          to: `/admin/cat/detail/${__props.cat.id}`
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
        to: `/admin/cat/edit/${__props.cat.id}`
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
        to: `/admin/subcat/viewsubcatbycatid/${__props.cat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A View Subcategories ( ${ssrInterpolate(__props.cat.subcats_count)} ) `);
          } else {
            return [
              createTextVNode(" \u203A View Subcategories ( " + toDisplayString(__props.cat.subcats_count) + " ) ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/subcat/addsubcat/${__props.cat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A Add Subcategories `);
          } else {
            return [
              createTextVNode(" \u203A Add Subcategories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/viewprodbycatid/${__props.cat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A View Products ( ${ssrInterpolate(__props.cat.prods_count)} ) `);
          } else {
            return [
              createTextVNode(" \u203A View Products ( " + toDisplayString(__props.cat.prods_count) + " ) ", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/admin/prod/addprodbycatid/${__props.cat.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u203A Add Products `);
          } else {
            return [
              createTextVNode(" \u203A Add Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p>`);
      if (isAdmin.value) {
        _push(`<p><button class="buttonwhite margintop5"> \u203A Delete Category </button></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatSingleAdmin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CatsAdmin",
  __ssrInlineRender: true,
  props: {
    cats: {
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
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const props = __props;
    watch(() => props.cats, (newCats) => {
      console.log("Items updated now:", newCats);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CatSingleAdmin = _sfc_main$2;
      _push(`<!--[--><div class="w-full mt-8 mb-8"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2"><!--[-->`);
      ssrRenderList(__props.cats, (cat) => {
        _push(ssrRenderComponent(_component_CatSingleAdmin, {
          key: cat.id,
          cat,
          config: unref(config)
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="bg-gray-100 fullwidth margintopbottom8 pagination"><button${ssrIncludeBooleanAttr(__props.currentPage === 1) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === 1, active: __props.currentPage === 1 }])}"> &lt;&lt; Previous</button><!--[-->`);
      ssrRenderList(__props.pageNumbers, (page) => {
        _push(`<span class="marginleft5"><button class="${ssrRenderClass(["marginleft5 pager", { red: page === __props.currentPage, active: page === __props.currentPage }])}"${ssrIncludeBooleanAttr(page === __props.currentPage) ? " disabled" : ""}>${ssrInterpolate(page)}</button></span>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(__props.currentPage === __props.lastPage) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === __props.lastPage, active: __props.currentPage === __props.lastPage }])}"> &gt;&gt; Next</button><span class="marginleft5">Page ${ssrInterpolate(__props.currentPage)} of ${ssrInterpolate(__props.lastPage)}</span></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatsAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useCatPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const cats = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(12);
  const totalCats = ref(0);
  const fetchCats = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/cat/view?page=${page}&per_page=${perPage.value}`);
      cats.value = response.data.data;
      currentPage.value = response.data.current_page;
      lastPage.value = response.data.last_page;
      totalCats.value = response.data.total;
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
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
    pageNumbers
    // Return page numbers
  };
}
const _sfc_main = {
  __name: "viewcat",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, currentPage, lastPage, changePage, pageNumbers, fetchCats } = useCatPagination();
    const key = ref(0);
    useRouter();
    const route = useRoute();
    const message = ref(route.query.message || "");
    useAuthStore();
    watch(route, async (newRoute, oldRoute) => {
      console.log("Route changed from", oldRoute.path, "to", newRoute.path);
      await fetchCats();
    });
    watch(() => route.query.message, (newMessage) => {
      message.value = newMessage;
      if (message.value) {
        const element = (void 0).getElementById("scrollhere");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_CatsAdmin = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> View Categories </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-2xl font-bold mb-4">View Categories `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/cat/addcategory",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>Add Category`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Category")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1>`);
      if (message.value) {
        _push(`<div class="bold red font18">${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CatsAdmin, {
        cats: unref(cats),
        currentPage: unref(currentPage),
        lastPage: unref(lastPage),
        changePage: unref(changePage),
        pageNumbers: unref(pageNumbers),
        key: key.value.value
      }, null, _parent));
      if (message.value) {
        _push(`<div class="bold red font18" id="scrollhere">${ssrInterpolate(message.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p>Current Route: ${ssrInterpolate(_ctx.$route.path)}</p><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/cat/viewcat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=viewcat-8VPtprrF.mjs.map
