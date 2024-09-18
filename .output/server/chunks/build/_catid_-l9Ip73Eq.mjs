import { u as useProdPagination, _ as _sfc_main$1 } from './useProdpagination-BE_nJY1T.mjs';
import { ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
import { u as useSubcat } from './useSubcat-DziHAppG.mjs';
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
  __name: "[catid]",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdPagination();
    const config = useRuntimeConfig();
    useRouter();
    const route = useRoute();
    const catidx = route.params.catid;
    const cat = ref(null);
    const selectedCat = ref(catidx);
    const selectedCat2 = ref(catidx);
    const selectedSubcat = ref(null);
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
      _push(`<div class="fullwidth"><h1 class="text-2xl font-bold mb-4">View By Category</h1><form><label for="catSelect">Select Category:</label><select id="catSelect" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null"${ssrIncludeBooleanAttr(Array.isArray(selectedCat.value) ? ssrLooseContain(selectedCat.value, "null") : ssrLooseEqual(selectedCat.value, "null")) ? " selected" : ""}> All categories</option><!--[-->`);
      ssrRenderList(unref(cats), (cat2) => {
        _push(`<option${ssrRenderAttr("value", cat2.id)}>${ssrInterpolate(cat2.name)}</option>`);
      });
      _push(`<!--]--></select><button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px"> View Products By category</button></form></div><div class="fullwidth mt-3"><form><label for="catSelect2">Select Category:</label><select id="catSelect2" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null"${ssrIncludeBooleanAttr(Array.isArray(selectedCat2.value) ? ssrLooseContain(selectedCat2.value, "null") : ssrLooseEqual(selectedCat2.value, "null")) ? " selected" : ""}> All categories</option><!--[-->`);
      ssrRenderList(unref(cats), (cat2) => {
        _push(`<option${ssrRenderAttr("value", cat2.id)}>${ssrInterpolate(cat2.name)}</option>`);
      });
      _push(`<!--]--></select><label for="subcatSelect">Select Subcategory:</label><select id="subcatSelect" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm width400px"><option value="null"${ssrIncludeBooleanAttr(Array.isArray(selectedSubcat.value) ? ssrLooseContain(selectedSubcat.value, "null") : ssrLooseEqual(selectedSubcat.value, "null")) ? " selected" : ""}> All Subcategories</option><!--[-->`);
      ssrRenderList(unref(subcats), (subcat) => {
        _push(`<option${ssrRenderAttr("value", subcat.id)}>${ssrInterpolate(subcat.name)}</option>`);
      });
      _push(`<!--]--></select><button type="submit" class="mt-3 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none width400px"> View Products By category and Subcategory</button></form></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/viewprodbycatid/[catid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_catid_-l9Ip73Eq.mjs.map
