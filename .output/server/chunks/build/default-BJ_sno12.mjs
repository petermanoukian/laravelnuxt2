import { b as _export_sfc, u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { useSSRContext, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter, useRoute } from 'vue-router';
import { s as script } from '../_/vue-multiselect.esm.mjs';
import { u as useProdsearchopenpagination } from './useProdsearchopenpagination-B5R2kyEW.mjs';
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

const _sfc_main$3 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    const cats = ref([]);
    const subs = ref([]);
    const subcats = ref([]);
    const getSubcatsByCatId = (catId) => {
      console.log("subcats:", subcats.value);
      let rs1 = subcats.value.filter((subcat) => subcat.catid === catId);
      console.log("Line 91 computed " + catId + " result " + rs1);
      return subcats.value.filter((subcat) => subcat.catid === catId);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))} data-v-b6179c5c><nav class="navbar-expand-lg bg-body-tertiary" data-v-b6179c5c><div class="navbar-collapse" id="main_nav" data-v-b6179c5c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 class="m-0 text-primary" data-v-b6179c5c${_scopeId}>Home</h1>`);
          } else {
            return [
              createVNode("h1", { class: "m-0 text-primary" }, "Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="navbar-nav" data-v-b6179c5c><li class="nav-item dropdown" data-v-b6179c5c><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-v-b6179c5c> Categories </a><ul class="dropdown-menu" data-v-b6179c5c><!--[-->`);
      ssrRenderList(cats.value, (cat) => {
        _push(`<li data-v-b6179c5c>`);
        if (getSubcatsByCatId(cat.id).length && cat.subcats_count > 0 && cat.prods_count > 0) {
          _push(`<div data-v-b6179c5c>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/prod/viewprodbycatid/${cat.id}`,
            class: "dropdown-item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(cat.name)} ( ${ssrInterpolate(cat.subcats_count)} ) | ( ${ssrInterpolate(cat.prods_count)} ) \xBB `);
              } else {
                return [
                  createTextVNode(toDisplayString(cat.name) + " ( " + toDisplayString(cat.subcats_count) + " ) | ( " + toDisplayString(cat.prods_count) + " ) \xBB ", 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (getSubcatsByCatId(cat.id).length && cat.subcats_count > 0 && cat.prods_count > 0) {
            _push(`<ul class="submenu dropdown-menu" data-v-b6179c5c><!--[-->`);
            ssrRenderList(getSubcatsByCatId(cat.id), (subcat) => {
              _push(`<li data-v-b6179c5c>`);
              if (getSubcatsByCatId(cat.id).length && subcat.prods_count > 0) {
                _push(ssrRenderComponent(_component_NuxtLink, {
                  to: `/prod/viewprodbycatsub/${cat.id}/${subcat.id}`,
                  class: "dropdown-item"
                }, {
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(`${ssrInterpolate(subcat.name)} | (${ssrInterpolate(subcat.prods_count)}) `);
                    } else {
                      return [
                        createTextVNode(toDisplayString(subcat.name) + " | (" + toDisplayString(subcat.prods_count) + ") ", 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ul>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li class="nav-item dropdown" data-v-b6179c5c><a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-v-b6179c5c> SubCategories </a><ul class="dropdown-menu" data-v-b6179c5c><!--[-->`);
      ssrRenderList(subs.value, (subcat) => {
        _push(`<li data-v-b6179c5c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/prod/viewprodbycatsub/${subcat.catid}/${subcat.id}`,
          class: "dropdown-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(subcat.name)} ( ${ssrInterpolate(subcat.prods_count)} )`);
            } else {
              return [
                createTextVNode(toDisplayString(subcat.name) + " ( " + toDisplayString(subcat.prods_count) + " )", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></li><li class="nav-item dropdown" data-v-b6179c5c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/prod/viewprod`,
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` All Products `);
          } else {
            return [
              createTextVNode(" All Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></nav></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b6179c5c"]]);
const _sfc_main$2 = {
  __name: "Searchbar",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    const { $api } = useNuxtApp();
    const apiUrl = useRuntimeConfig().public.apiBaseUrl;
    useProdsearchopenpagination();
    const catid = ref("");
    const subid = ref("");
    const cats = ref([]);
    const subcats = ref([]);
    const selectedCat = ref(null);
    ref(null);
    const selectedSubCat = ref(null);
    const firsloader = ref(0);
    const searchQuery = ref("");
    ref("");
    ref(0);
    const suggestions = ref([]);
    const suggestions2 = ref([]);
    ref("");
    const searchmissingcatsub = ref("");
    const catidx = ref(route.params.catid || "");
    const clearsubcat = () => {
      subid.value = null;
      selectedSubCat.value = null;
    };
    const clearcat = () => {
      catid.value = null;
      selectedCat.value = null;
    };
    watch(searchQuery, (newsearchQuery) => {
    });
    watch(() => route.params.catid, (newCatid) => {
      if (newCatid) {
        catidx.value = newCatid;
        catid.value = newCatid;
        selectedSubCat.value = newCatid;
        updateSelectedCategory();
        updateSelectedSubCategory();
        firsloader.value += 1;
      } else {
        clearcat();
        catidx.value = "";
        catid.value = "";
        selectedSubCat.value = "";
        updateSelectedCategory();
        updateSelectedSubCategory();
        firsloader.value = 0;
      }
    });
    const handleSelectCat = (selected) => {
      catid.value = selected ? selected.id : null;
      searchmissingcatsub.value = null;
      firsloader.value += 1;
    };
    const handleSelectSubCat = (selected) => {
      subid.value = selected ? selected.id : null;
    };
    const updateSelectedCategory = () => {
      if (catid.value && cats.value.length) {
        const catidNumber = Number(catid.value);
        const selectedCategory = cats.value.find((cat) => cat.id === catidNumber);
        selectedCat.value = selectedCategory || null;
      }
    };
    const updateSelectedSubCategory = () => {
      if (subid.value && subcats.value.length) {
        const subcatidNumber = Number(subid.value);
        const selectedSubCategory = subcats.value.find((sub) => sub.id === subcatidNumber);
        selectedSubCat.value = selectedSubCategory || null;
      }
    };
    watch(firsloader, (newfirsloader) => {
      if (newfirsloader > 1) {
        clearsubcat();
      }
    });
    watch(selectedCat, (newValue) => {
      console.log("selectedCat changed:", newValue);
      handleSelectCat(newValue);
    });
    watch(selectedSubCat, (newValue2) => {
      console.log("selectedCat changed:", newValue2);
      handleSelectSubCat(newValue2);
    });
    const fetchSubCats = async (catid2 = "") => {
      try {
        let response = "";
        if (catid2 > 0) {
          response = await $api.get(`${apiUrl}/subcat/common/${catid2}`);
        } else {
          response = await $api.get(`${apiUrl}/subcat/common`);
        }
        const subcatDatax2 = response.data.subcats;
        console.log("Fetched subcat data for navigation:", subcatDatax2);
        subcats.value = subcatDatax2;
      } catch (subcatError) {
        console.error("searchar line 306 Error fetching subcat data:", subcatError.response ? subcatError.response.data : subcatError.message);
      }
    };
    watch(catid, (newCatid) => {
      fetchSubCats(newCatid);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid bg-primary mb-2 wow fadeIn",
        "data-wow-delay": "0.1s",
        style: { "padding": "35px" }
      }, _attrs))}><div class="container"><div class="row g-2 mt-3 fullwidth"><div class="col-12 d-flex justify-content-between"><form class="fullwidther"><div class="col-5 d-flex d-flex theleftone"><div class="col-md-5 width200px"><select class="form-select border-0"><option value=""${ssrIncludeBooleanAttr(Array.isArray(catid.value) ? ssrLooseContain(catid.value, "") : ssrLooseEqual(catid.value, "")) ? " selected" : ""}> Choose category</option><!--[-->`);
      ssrRenderList(cats.value, (cat) => {
        _push(`<option${ssrRenderAttr("value", cat.id)}>${ssrInterpolate(cat.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: selectedCat.value,
        "onUpdate:modelValue": ($event) => selectedCat.value = $event,
        options: cats.value,
        label: "name",
        "track-by": "id",
        placeholder: "Choose category",
        searchable: true,
        "close-on-select": true,
        "allow-empty": false,
        class: "block w-full width200px",
        onChange: ($event) => _ctx.fetchSubcatsCommon(catid.value)
      }, null, _parent));
      if (searchmissingcatsub.value) {
        _push(`<span class="gray4 font12 bold">${ssrInterpolate(searchmissingcatsub.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-5 width200px marginleft8"><select class="form-select border-0"><option value=""${ssrIncludeBooleanAttr(Array.isArray(subid.value) ? ssrLooseContain(subid.value, "") : ssrLooseEqual(subid.value, "")) ? " selected" : ""}> Choose subcategory</option><!--[-->`);
      ssrRenderList(subcats.value, (subcat) => {
        _push(`<option${ssrRenderAttr("value", subcat.id)}>${ssrInterpolate(subcat.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (catidx.value == "") {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(script), {
          disabled: firsloader.value == 0,
          modelValue: selectedSubCat.value,
          "onUpdate:modelValue": ($event) => selectedSubCat.value = $event,
          options: subcats.value,
          label: "name",
          "track-by": "id",
          placeholder: "Choose subcategory",
          searchable: true,
          "close-on-select": true,
          "allow-empty": false,
          class: "block w-full width200px",
          onChange: handleSelectSubCat
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(script), {
          modelValue: selectedSubCat.value,
          "onUpdate:modelValue": ($event) => selectedSubCat.value = $event,
          options: subcats.value,
          label: "name",
          "track-by": "id",
          placeholder: "Choose subcategory",
          searchable: true,
          "close-on-select": true,
          "allow-empty": false,
          class: "block w-full width200px",
          onChange: handleSelectSubCat
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="col-md-2"><button class="btn btn-dark border-0 marginleft8"${ssrIncludeBooleanAttr(searchmissingcatsub.value) ? " disabled" : ""}>Search</button></div></div></form><div class="col-4 therightone"><div class="fullwidth floatleft fullfloatlcear"><form><div class="col-md-8 marginleft5 floatleft"><input type="text" class="form-control border-0 marginleft5 width250px" placeholder="Keyword"${ssrRenderAttr("value", searchQuery.value)}></div><div class="col-md-3 floatleft"><button class="btn btn-dark border-0 maxwidth80 marginleft8">Search</button></div></form></div>`);
      if (suggestions.value.length) {
        _push(`<div class="fullfloatlcear98 floatleft"><ul class="suggestions-list floatleft fullfloatlcear98"><!--[-->`);
        ssrRenderList(suggestions.value, (suggestion) => {
          _push(`<li class="cursor"> \u203A ${ssrInterpolate(suggestion.name)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-3 therightone2"><input${ssrRenderAttr("value", searchQuery.value)} class="form-control border-0 marginleft8 width250px floatleft fullfloatlcear98" placeholder="Keyword">`);
      if (suggestions2.value.length) {
        _push(`<ul class="suggestions-list marginleft25 floatleft fullfloatlcear98"><!--[-->`);
        ssrRenderList(suggestions2.value, (suggestion) => {
          _push(`<li class="cursor"> \u203A ${ssrInterpolate(suggestion.name)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Searchbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn",
        "data-wow-delay": "0.1s"
      }, _attrs))} data-v-62e39725><div class="container py-5" data-v-62e39725><div class="row g-5" data-v-62e39725><div class="col-lg-3 col-md-6" data-v-62e39725><h5 class="text-white mb-4" data-v-62e39725>Web Developer</h5><a class="btn btn-link text-white-50" href="" data-v-62e39725>About </a><a class="btn btn-link text-white-50" href="" data-v-62e39725>Contact Us</a><a class="btn btn-link text-white-50" href="" data-v-62e39725>Web Development</a></div><div class="col-lg-9 col-md-6" data-v-62e39725><p data-v-62e39725>Laravel 1 Nuxt Demo - PHP 8.2 MySQL , Lebanese Armenian Web Site Developer, JavaScript, Jquery, CSS, Boostrap and tailwind css HTML 5, CSS 3 Both back end and frotn end web site developmentr</p></div></div></div><div class="container" data-v-62e39725><div class="copyright" data-v-62e39725><div class="row" data-v-62e39725><div class="col-md-12 text-center text-md-start mb-3 mb-md-0" data-v-62e39725> Laravel 1 Nuxt Demo - PHP 8.2 MySQL - Design Provided By <a class="border-bottom" href="https://htmlcodex.com" target="_blank" data-v-62e39725>HTML Codex</a></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-62e39725"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
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
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "true" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@700;800&display=swap" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" },
        { rel: "stylesheet", href: "/css/bootstrap.css" },
        { rel: "stylesheet", href: "/css/style.css" },
        { rel: "stylesheet", href: "/lib/animate/animate.min.css" },
        { rel: "stylesheet", href: "/lib/owlcarousel/assets/owl.carousel.min.css" },
        { rel: "stylesheet", href: "/css/css.css" }
      ],
      script: [
        { src: "https://code.jquery.com/jquery-3.4.1.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" },
        { src: "/lib/wow/wow.js" },
        { src: "/lib/easing/easing.min.js" },
        { src: "/lib/waypoints/waypoints.min.js" },
        { src: "/js/main.js" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Nav = __nuxt_component_0;
      const _component_Searchbar = _sfc_main$2;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-xxl bg-white p-0" }, _attrs))} data-v-a1efaeeb>`);
      _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(ssrRenderComponent(_component_Searchbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1efaeeb"]]);

export { _default as default };
//# sourceMappingURL=default-BJ_sno12.mjs.map
