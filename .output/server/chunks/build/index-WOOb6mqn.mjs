import { u as useProdPagination, _ as _sfc_main$1 } from './useProdpagination-BE_nJY1T.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
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
import 'axios';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdPagination();
    const config = useRuntimeConfig();
    useRouter();
    const route = useRoute();
    const catidx = route.params.catid;
    const cat = ref(null);
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    useAuthStore();
    const key = ref(0);
    watch(route, async (newRoute, oldRoute) => {
      console.log("Route changed from", oldRoute.path, "to", newRoute.path);
      await fetchprods(catidx);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdsAdmin = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> View products by Category </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-2xl font-bold mb-4">View Products By category ${ssrInterpolate(unref(catidx))}</h1>`);
      if (cat.value) {
        _push(`<div><h1>Category Detail ${ssrInterpolate(cat.value.name)}</h1>`);
        if (cat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/cat/thumb/${cat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><p>Loading category...</p></div>`);
      }
      _push(ssrRenderComponent(_component_ProdsAdmin, {
        prods: unref(prods),
        currentPage: unref(currentPage),
        lastPage: unref(lastPage),
        changePage: unref(changePage),
        pageNumbers: unref(pageNumbers),
        key: key.value.value,
        catid: unref(catidx)
      }, null, _parent));
      _push(`<p>Current Route: ${ssrInterpolate(_ctx.$route.path)}</p><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Refresh Route</button></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/viewprodbycatidsubid/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-WOOb6mqn.mjs.map
