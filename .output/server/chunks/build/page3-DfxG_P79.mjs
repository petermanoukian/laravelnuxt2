import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import './server.mjs';
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
import 'vue-router';
import 'axios';
import './1-CKepcKm6.mjs';

const _sfc_main = {
  __name: "page3",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> page 3 </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><h1 class="text-3xl text-black pb-6">Page 3</h1></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/page3.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=page3-DfxG_P79.mjs.map
