import { a as useRuntimeConfig, b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, watch, mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { _ as _sfc_main$4 } from './Pagination-CRg8Wbcv.mjs';
import { u as useCatopenPagination, a as useSubcatopenpagination, _ as _sfc_main$3 } from './useSubcatopenpagination-BK5YWJRR.mjs';
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

const _sfc_main$2 = {
  props: {
    cat: {
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
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-4 col-sm-6 wow fadeInUp mt-1 mb-1" }, _attrs))}><div class="graybox">`);
  if ($props.cat.img) {
    _push(`<p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: `/prod/viewprodbycatid/${$props.cat.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", `${$props.config.public.BaseUrl}/images/cat/thumb/${$props.cat.img}`)}${ssrRenderAttr("alt", $props.cat.name)} class="mt-1 mb-1 maximg link1 h-32"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: `${$props.config.public.BaseUrl}/images/cat/thumb/${$props.cat.img}`,
              alt: $props.cat.name,
              class: "mt-1 mb-1 maximg link1 h-32"
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
      to: `/prod/viewprodbycatid/${$props.cat.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-1 mb-1 h-32 link1"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              src: _imports_0,
              alt: "Default Picture",
              class: "mt-1 mb-1 h-32 link1"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</p>`);
  }
  _push(`<p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/prod/viewprodbycatid/${$props.cat.id}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<b${_scopeId}>\u203A ${ssrInterpolate($props.cat.name)}</b>`);
      } else {
        return [
          createVNode("b", null, "\u203A " + toDisplayString($props.cat.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: `/subcat/viewsubcatbycatid/${$props.cat.id}`,
    class: "link1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h6 class="mb-3"${_scopeId}>\u203A View Subcategories ( ${ssrInterpolate($props.cat.subcats_count)} )</h6>`);
      } else {
        return [
          createVNode("h6", { class: "mb-3" }, "\u203A View Subcategories ( " + toDisplayString($props.cat.subcats_count) + " )", 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatSingleOpen.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "CatsOpen",
  __ssrInlineRender: true,
  props: {
    cats: {
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
    }
  },
  setup(__props) {
    const config = useRuntimeConfig();
    const props = __props;
    watch(() => props.cats, (newCats) => {
      console.log("Items updated now:", newCats);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CatSingleOpen = __nuxt_component_0;
      const _component_Pagination = _sfc_main$4;
      _push(`<!--[--><div class="mt-8 mb-8"><div class="row"><!--[-->`);
      ssrRenderList(__props.cats, (cat, index) => {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_CatSingleOpen, {
          cat,
          config: unref(config)
        }, null, _parent));
        if ((index + 1) % 3 === 0) {
          _push(`<div class="w-full"><hr class="my-4"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_Pagination, {
        currentPage: __props.currentPage,
        pageNumbers: __props.pageNumbers,
        lastPage: __props.lastPage,
        changePage: __props.changePage,
        typ: "catpaginater"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CatsOpen.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    const {
      cats,
      currentPage: currentCatPage,
      lastPage: lastCatPage,
      changePage: changeCatPage,
      pageNumbers: catPageNumbers,
      loadingcats,
      fetchCats
    } = useCatopenPagination();
    const {
      subcats,
      currentPage: currentSubcatPage,
      lastPage: lastSubcatPage,
      changePage: changeSubcatPage,
      pageNumbers: subcatPageNumbers,
      loadingsubcats,
      fetchSubcats
    } = useSubcatopenpagination();
    useHead({
      title: "Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon",
      meta: [
        {
          name: "description",
          content: "Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3"
        },
        {
          name: "keywords",
          content: "Laravel, MySQL, PHP 8, Web Development, Nuxt 3, VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon"
        },
        {
          property: "og:title",
          content: "Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon"
        },
        {
          property: "og:description",
          content: "Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3"
        }
      ]
    });
    const key = ref(0);
    watch(route, async (newRoute, oldRoute) => {
      fetchCats();
      fetchSubcats();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CatsOpen = _sfc_main$1;
      const _component_SubcatsOpen = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl py-1" }, _attrs))}><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">Categories</h1>`);
      if (unref(loadingcats)) {
        _push(`<div class="row g-4"> Loading... </div>`);
      } else {
        _push(`<div>`);
        if (unref(cats) && unref(cats).length > 0) {
          _push(`<div class="row g-4">`);
          _push(ssrRenderComponent(_component_CatsOpen, {
            cats: unref(cats),
            currentPage: unref(currentCatPage),
            lastPage: unref(lastCatPage),
            changePage: unref(changeCatPage),
            pageNumbers: unref(catPageNumbers),
            key: key.value.value
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="row g-4 mt-4 fullwidth margintopbottom8"> No Categories Yet </div>`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="container"><h1 class="text-center mb-1 wow fadeInUp" data-wow-delay="0.1s">SubCategories</h1>`);
      if (unref(loadingsubcats)) {
        _push(`<div class="row g-4"> Loading... </div>`);
      } else {
        _push(`<div>`);
        if (unref(subcats) && unref(subcats).length > 0) {
          _push(`<div class="row g-4">`);
          _push(ssrRenderComponent(_component_SubcatsOpen, {
            subcats: unref(subcats),
            currentPage: unref(currentSubcatPage),
            lastPage: unref(lastSubcatPage),
            changePage: unref(changeSubcatPage),
            pageNumbers: unref(subcatPageNumbers),
            key: key.value.value
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="row g-4 mt-4"> No Subcategories currently on HomePage </div>`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C0DsQ_WY.mjs.map
