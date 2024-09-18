import { _ as _sfc_main$1 } from './Prodsopen-DAYz8xl5.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { u as useProdopenpagination } from './useProdopenpagination-BgsRXDej.mjs';
import { u as useProdsearchopenpagination } from './useProdsearchopenpagination-B5R2kyEW.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
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
import 'axios';
import './1-CKepcKm6.mjs';
import './Pagination-CRg8Wbcv.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdopenpagination();
    useProdsearchopenpagination();
    useHead({
      title: "Nuxt3 Laravel 11 MySQl API Products Page",
      meta: [
        {
          name: "description",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        },
        {
          name: "keywords",
          content: "Nuxt3 Laravel 11 MySQl API Products Page, MySQL, PHP 8, Web Development,  VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon"
        },
        {
          property: "og:title",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        },
        {
          property: "og:description",
          content: "Nuxt3 Laravel 11 MySQl API Products Page"
        }
      ]
    });
    const key = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Prodsopen = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1>`);
      if (unref(prods) && unref(prods).length > 0) {
        _push(`<div class="row g-4">`);
        _push(ssrRenderComponent(_component_Prodsopen, {
          prods: unref(prods),
          currentPage: unref(currentPage),
          lastPage: unref(lastPage),
          changePage: unref(changePage),
          pageNumbers: unref(pageNumbers),
          key: key.value.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="row g-4"> Nothing found </div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CYcmrKpN.mjs.map
