import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
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
import './1-CKepcKm6.mjs';

const _sfc_main$1 = {
  __name: "Tagg",
  __ssrInlineRender: true,
  props: {
    taggs: {
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
    const props = __props;
    watch(() => props.taggs, (newTaggs) => {
      console.log("Items updated now:", newTaggs);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="w-full mt-8 mb-8 fullwidth"><div class="grid fullwidth90"><!--[-->`);
      ssrRenderList(__props.taggs, (tagg) => {
        _push(`<div class="border fullwidth padding8"><div class="fullwidth45 floatleft">${ssrInterpolate(tagg.id)} ${ssrInterpolate(tagg.name)}</div><div class="fullwidth40floatleft">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/admin/tagg/edit/${tagg.id}`
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
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-gray-100 fullwidth margintopbottom8"><button${ssrIncludeBooleanAttr(__props.currentPage === 1) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5", { red: __props.currentPage === 1, active: __props.currentPage === 1 }])}"> &lt;&lt; Previous</button><!--[-->`);
      ssrRenderList(__props.pageNumbers, (page) => {
        _push(`<span class="marginleft5"><button class="${ssrRenderClass({ red: page === __props.currentPage, active: page === __props.currentPage })}"${ssrIncludeBooleanAttr(page === __props.currentPage) ? " disabled" : ""}>${ssrInterpolate(page)}</button></span>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(__props.currentPage === __props.lastPage) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5", { red: __props.currentPage === __props.lastPage, active: __props.currentPage === __props.lastPage }])}"> &gt;&gt; Next</button><span class="marginleft5">Page ${ssrInterpolate(__props.currentPage)} of ${ssrInterpolate(__props.lastPage)}</span></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tagg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useTaggPagination() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const taggs = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const perPage = ref(12);
  const totalTaggs = ref(0);
  const fetchTaggs = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/tagg/view?page=${page}&per_page=${perPage.value}`);
      taggs.value = response.data.data;
      currentPage.value = response.data.current_page;
      lastPage.value = response.data.last_page;
      totalTaggs.value = response.data.total;
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
    }
  };
  const changePage = (page) => {
    if (page > 0 && page <= lastPage.value) {
      currentPage.value = page;
      fetchTaggs(page);
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
    taggs,
    currentPage,
    lastPage,
    perPage,
    totalTaggs,
    fetchTaggs,
    changePage,
    pageNumbers
    // Return page numbers
  };
}
const _sfc_main = {
  __name: "viewtagg",
  __ssrInlineRender: true,
  setup(__props) {
    const { taggs, currentPage, lastPage, changePage, pageNumbers, fetchTaggs } = useTaggPagination();
    useAuthStore();
    const key = ref(0);
    useRouter();
    const route = useRoute();
    watch(route, async (newRoute, oldRoute) => {
      console.log("Route changed from", oldRoute.path, "to", newRoute.path);
      await fetchTaggs();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Tagg = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> View Tags </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-2xl font-bold mb-4">View Tags `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tagg/addtagg",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>Add Tag`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Tag")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1>`);
      _push(ssrRenderComponent(_component_Tagg, {
        taggs: unref(taggs),
        currentPage: unref(currentPage),
        lastPage: unref(lastPage),
        changePage: unref(changePage),
        pageNumbers: unref(pageNumbers),
        key: key.value.value
      }, null, _parent));
      _push(`<p>Current Route: ${ssrInterpolate(_ctx.$route.path)}</p><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/tagg/viewtagg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=viewtagg-ClzRC8HI.mjs.map
