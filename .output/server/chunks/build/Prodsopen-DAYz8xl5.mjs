import { a as useRuntimeConfig, b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { watch, unref, useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { _ as _sfc_main$2 } from './Pagination-CRg8Wbcv.mjs';

const _sfc_main$1 = {
  props: {
    prod: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-4 col-sm-6 wow fadeInUp mt-1 mb-1" }, _attrs))}><div class="graybox"><p class="pless"> Category : `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/prod/viewprodbycatid/${$props.prod.catid}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u203A ${ssrInterpolate($props.prod.cat.name)}`);
      } else {
        return [
          createTextVNode(" \u203A " + toDisplayString($props.prod.cat.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><p class="pless"> SubCategory : `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/prod/viewprodbycatsub/${$props.prod.catid}/${$props.prod.subid}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u203A ${ssrInterpolate($props.prod.subcat.name)}`);
      } else {
        return [
          createTextVNode(" \u203A " + toDisplayString($props.prod.subcat.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p>`);
  if ($props.prod.img) {
    _push(`<p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/prod/detail/${$props.prod.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", `${$props.config.public.BaseUrl}/images/prod/thumb/${$props.prod.img}`)}${ssrRenderAttr("alt", $props.prod.name)} class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: `${$props.config.public.BaseUrl}/images/prod/thumb/${$props.prod.img}`,
              alt: $props.prod.name,
              class: "mt-2 mb-2 w-32 h-32"
            }, null, 8, ["src", "alt"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p>`);
  } else {
    _push(`<p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/prod/detail/${$props.prod.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-2 mb-2 w-32 h-32"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_0,
              alt: "Default Picture",
              class: "mt-2 mb-2 w-32 h-32"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p>`);
  }
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/prod/detail/${$props.prod.id}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3${_scopeId}>\u203A ${ssrInterpolate($props.prod.name)}</h3>`);
      } else {
        return [
          createVNode("h3", null, "\u203A " + toDisplayString($props.prod.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($props.prod.des !== "null" && $props.prod.des !== "NULL" && $props.prod.des !== "") {
    _push(`<div class="formatted-result">${(_a = $props.prod.des) != null ? _a : ""}</div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.prod.prodtaggs.length > 0) {
    _push(`<div><!--[-->`);
    ssrRenderList($props.prod.prodtaggs, (taggprod, index2) => {
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
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProdSingleOpen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Prodsopen",
  __ssrInlineRender: true,
  props: {
    prods: {
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
    },
    catid: {
      type: Number,
      required: false
    },
    subid: {
      type: Number,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    searchx: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const props = __props;
    watch(() => props.prods, (newProds) => {
      console.log("Items updated now:", newProds);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProdSingleOpen = __nuxt_component_0;
      const _component_Pagination = _sfc_main$2;
      _push(`<!--[--><div class="mt-8 mb-8"><div class="row"><!--[-->`);
      ssrRenderList(__props.prods, (prod, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_ProdSingleOpen, {
          prod,
          config: unref(config)
        }, null, _parent));
        if ((index + 1) % 3 === 0) {
          _push(`<div class="w-full"><hr class="my-4"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div> search ${ssrInterpolate(__props.searchx)} tag ${ssrInterpolate(__props.tag)} `);
      _push(ssrRenderComponent(_component_Pagination, {
        currentPage: __props.currentPage,
        pageNumbers: __props.pageNumbers,
        lastPage: __props.lastPage,
        changePage: __props.changePage,
        catid: __props.catid,
        subid: __props.subid,
        searchx: __props.searchx,
        tag: __props.tag,
        typ: "prodpaginater"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Prodsopen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Prodsopen-DAYz8xl5.mjs.map
