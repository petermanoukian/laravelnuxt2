import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
    const id = route.params.id;
    const cat = ref(null);
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> View Category Detail </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6">`);
      if (cat.value) {
        _push(`<div><h1>Category Detail ${ssrInterpolate(cat.value.name)}</h1><p>Category ID: ${ssrInterpolate(unref(id))}</p>`);
        if (cat.value.des !== "null" && cat.value.des !== "NULL" && cat.value.des !== "") {
          _push(`<div class="formatted-result mt-4">${(_a = cat.value.des) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (cat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/cat/${cat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2 maxwidth96height400"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><p>Loading...</p></div>`);
      }
      _push(`<p class="mb-4 mt-4">`);
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
      _push(`</p></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/cat/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CpeRK-1g.mjs.map
