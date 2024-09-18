import { _ as _sfc_main$1 } from './Prodsopen-DAYz8xl5.mjs';
import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { useRouter, useRoute } from 'vue-router';
import { u as useNuxtApp, a as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { u as useProdopenpagination } from './useProdopenpagination-BgsRXDej.mjs';
import { u as useProdsearchopenpagination } from './useProdsearchopenpagination-B5R2kyEW.mjs';
import './Pagination-CRg8Wbcv.mjs';
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
  __name: "[subid]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute();
    const config = useRuntimeConfig();
    useNuxtApp();
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;
    const { prods, currentPage, lastPage, changePage, pageNumbers, fetchProds } = useProdopenpagination();
    useProdsearchopenpagination();
    const catidx = route.params.catid;
    const subidx = route.params.subid;
    const cat = ref(null);
    const subcat = ref(null);
    const fetchCat = async () => {
      try {
        const response = await fetch(`${apiUrl}/cat/detail/${catidx}`);
        const data = await response.json();
        cat.value = data;
      } catch (error) {
        console.error("Error fetching item:", error.response ? error.response.data : error.message);
      }
    };
    const fetchSub = async () => {
      try {
        const response = await fetch(`${apiUrl}/subcat/detail/${subidx}`);
        const data = await response.json();
        subcat.value = data;
      } catch (error) {
        console.error("Error fetching item:", error.response ? error.response.data : error.message);
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchCat()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => fetchSub()), await __temp, __restore();
    if (cat.value && subcat.value) {
      useHead({
        title: subcat.value.name + " " + cat.value.name,
        meta: [
          {
            name: "description",
            content: subcat.value.name + " " + cat.value.name + " Nuxt3 Laravel 11 MySQl API Products Page"
          },
          {
            name: "keywords",
            content: subcat.value.name + ", " + cat.value.name + ", Nuxt3 Laravel 11 MySQl API Web Development Armenia, Web Developer Lebanon"
          },
          {
            property: "og:title",
            content: subcat.value.name + " " + cat.value.name
          },
          {
            property: "og:description",
            content: subcat.value.name + " " + cat.value.name + " Nuxt3 Laravel 11 MySQl API Products Page"
          }
        ]
      });
    }
    const key = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Prodsopen = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Products</h1>`);
      if (cat.value) {
        _push(`<div><h3>Category: ${ssrInterpolate(cat.value.name)}</h3>`);
        if (cat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/cat/${cat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2 maxwidth96height300"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (subcat.value) {
        _push(`<div><h3>SubCategory: ${ssrInterpolate(subcat.value.name)}</h3>`);
        if (subcat.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/subcat/${subcat.value.img}`)}${ssrRenderAttr("alt", cat.value.name)} class="mt-2 mb-2 maxwidth96height300"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-2 row"><b>Products </b></div>`);
      if (unref(prods) && unref(prods).length > 0) {
        _push(`<div class="row g-4">`);
        _push(ssrRenderComponent(_component_Prodsopen, {
          prods: unref(prods),
          currentPage: unref(currentPage),
          lastPage: unref(lastPage),
          changePage: unref(changePage),
          pageNumbers: unref(pageNumbers),
          key: key.value.value,
          catid: unref(catidx),
          subid: unref(subidx)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="row g-4 mt-4"> Nothing found </div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/viewprodbycatsub/[catid]/[subid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_subid_-CjcciuRW.mjs.map
