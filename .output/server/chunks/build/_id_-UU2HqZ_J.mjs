import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { useRouter, useRoute } from 'vue-router';
import { u as useHead } from './index-BabADJUJ.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const route = useRoute();
    const config = useRuntimeConfig();
    useNuxtApp();
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;
    const idx = route.params.id;
    const prod = ref(null);
    const fetchProd = async () => {
      try {
        const response = await fetch(`${apiUrl}/prod/detail/${idx}`);
        const data = await response.json();
        prod.value = data;
      } catch (error) {
        console.error("Error fetching item:", error.response ? error.response.data : error.message);
      }
    };
    [__temp, __restore] = withAsyncContext(() => fetchProd()), await __temp, __restore();
    if (prod.value) {
      console.log("yes prod value");
      useHead({
        title: "product details " + prod.value.name + " " + prod.value.cat.name + " " + prod.value.subcat.name,
        meta: [
          {
            name: "description",
            content: "product details " + prod.value.name + "  " + prod.value.des
          },
          {
            name: "keywords",
            content: "product details, " + prod.value.name + ", " + prod.value.cat.name + ", " + prod.value.subcat.name
          },
          {
            property: "og:title",
            content: "product details " + prod.value.name + " " + prod.value.cat.name + " " + prod.value.subcat.name
          },
          {
            property: "og:description",
            content: "product details " + prod.value.name + "  " + prod.value.des
          }
        ]
      });
    } else {
      console.log("yes");
      useHead({
        title: "product details",
        meta: [
          {
            name: "description",
            content: "product details"
          },
          {
            name: "keywords",
            content: "product details"
          },
          {
            property: "og:title",
            content: "product details"
          },
          {
            property: "og:description",
            content: "product details"
          }
        ]
      });
    }
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Product</h1>`);
      if (prod.value) {
        _push(`<div><h2>Category: `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/prod/viewprodbycatid/${prod.value.catid}`,
          class: "link1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A ${ssrInterpolate(prod.value.cat.name)}`);
            } else {
              return [
                createTextVNode(" \u203A " + toDisplayString(prod.value.cat.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h2><h3>SubCategory: `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/prod/viewprodbycatsub/${prod.value.catid}/${prod.value.subid}`,
          class: "link1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u203A ${ssrInterpolate(prod.value.subcat.name)}`);
            } else {
              return [
                createTextVNode(" \u203A " + toDisplayString(prod.value.subcat.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</h3><h4>Title: ${ssrInterpolate(prod.value.name)}</h4>`);
        if (prod.value.des !== "null" && prod.value.des !== "NULL" && prod.value.des !== "") {
          _push(`<div class="formatted-result mt-4">${(_a = prod.value.des) != null ? _a : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (prod.value.dess !== "null" && prod.value.dess !== "NULL" && prod.value.dess !== "") {
          _push(`<div class="formatted-result mt-4">${(_b = prod.value.dess) != null ? _b : ""}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (prod.value.img) {
          _push(`<p><img${ssrRenderAttr("src", `${unref(config).public.BaseUrl}/images/prod/${prod.value.img}`)}${ssrRenderAttr("alt", prod.value.name)} class="mt-2 mb-2 maxwidth96height300"></p>`);
        } else {
          _push(`<p><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2"></p>`);
        }
        if (prod.value.prodtaggs.length > 0) {
          _push(`<div><!--[-->`);
          ssrRenderList(prod.value.prodtaggs, (taggprod, index2) => {
            _push(`<span>`);
            if (taggprod.tagg) {
              _push(ssrRenderComponent(_component_NuxtLink, {
                key: taggprod.id,
                to: `/prod/tagg/${taggprod.tagg.name}`,
                class: "link1 marginright5"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(` \u203A ${ssrInterpolate(taggprod.tagg.name)}`);
                  } else {
                    return [
                      createTextVNode(" \u203A " + toDisplayString(taggprod.tagg.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/detail/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-UU2HqZ_J.mjs.map
