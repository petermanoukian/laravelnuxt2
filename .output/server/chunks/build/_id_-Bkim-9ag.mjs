import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useAuthStore();
    useRouter();
    const route = useRoute();
    const id1 = ref("");
    const name = ref("");
    const des = ref("");
    ref(null);
    const pic1 = ref(null);
    const fileError = ref("");
    const editerror = ref("");
    const editsuc = ref("");
    route.params.id;
    const cat = ref(null);
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Edit Category </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6">`);
      if (cat.value) {
        _push(`<div><div class="flex items-center justify-center bg-gray-100"><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Edit Category</h1><p class="mb-4">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/cat/viewcat",
          class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>View categories`);
            } else {
              return [
                createVNode("i", { class: "fas fa-align-left mr-3" }),
                createTextVNode("View categories")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><form><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Title</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="des" class="block text-sm font-medium text-gray-700"> Short Description</label><textarea class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md">${ssrInterpolate(des.value)}</textarea></div><div class="mb-4"><label for="pic" class="block text-sm font-medium text-gray-700">Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*">`);
        if (fileError.value) {
          _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(fileError.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(` Old Picture <input${ssrRenderAttr("value", pic1.value)} type="text" readonly placeholder="Old Picture" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><input${ssrRenderAttr("value", id1.value)} type="text" readonly placeholder="Old Picture" class="mt-1 block w-full px-3 py-2 mb-4 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"><div class="mb-4">`);
        if (cat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/cat/thumb/${cat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>`);
        if (editerror.value) {
          _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editerror.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (editsuc.value) {
          _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editsuc.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div></div>`);
      } else {
        _push(`<div><p>Loading...</p></div>`);
      }
      _push(`</main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/cat/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Bkim-9ag.mjs.map
