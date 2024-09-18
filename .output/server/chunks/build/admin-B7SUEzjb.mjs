import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { u as useHead } from './index-BabADJUJ.mjs';
import { b as _export_sfc } from './server.mjs';
import '@unhead/shared';
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
import 'vue-router';
import 'axios';

const _sfc_main = {
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Nuxt3 Laravel 11 Admin",
      meta: [
        {
          name: "description",
          content: "Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3"
        },
        {
          name: "keywords",
          content: "Nuxt3 Laravel 11 Admin"
        },
        {
          property: "og:title",
          content: "Nuxt3 Laravel 11 Admin"
        },
        {
          property: "og:description",
          content: "Nuxt3 Laravel 11 Admin"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-2475c760>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2475c760"]]);

export { admin as default };
//# sourceMappingURL=admin-B7SUEzjb.mjs.map
