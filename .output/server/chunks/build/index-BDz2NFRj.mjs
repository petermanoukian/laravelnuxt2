import { b as _export_sfc, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DgvVPRmG.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
import { u as useSubcat } from './useSubcat-DziHAppG.mjs';
import { s as script } from '../_/vue-multiselect.esm.mjs';
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
import '@tiptap/pm/state';
import '@tiptap/pm/model';
import '@tiptap/pm/transform';
import '@tiptap/pm/commands';
import '@tiptap/pm/schema-list';
import '@tiptap/pm/dropcursor';
import '@tiptap/pm/gapcursor';
import '@tiptap/pm/history';
import './1-CKepcKm6.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    useAuthStore();
    useRouter();
    const route = useRoute();
    const name = ref("");
    const catid = ref("");
    const subid = ref("");
    const des = ref("");
    const dess = ref("");
    ref(null);
    const fileError = ref("");
    const adderror = ref("");
    const addsuc = ref("");
    const selectedCat = ref(null);
    const selectedSubCat = ref(null);
    const firsloader = ref(0);
    const catidx = route.params.catid;
    if (catidx) {
      catid.value = catidx;
    }
    const clearsubcat = () => {
      subid.value = null;
      selectedSubCat.value = null;
    };
    ref(null);
    const handleSelectCat = (selected) => {
      catid.value = selected ? selected.id : null;
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
    watch(cats, subcats, updateSelectedCategory, updateSelectedSubCategory);
    watch(selectedCat, (newValue) => {
      console.log("selectedCat changed:", newValue);
      handleSelectCat(newValue);
    });
    watch(selectedSubCat, (newValue2) => {
      console.log("selectedCat changed:", newValue2);
      handleSelectSubCat(newValue2);
    });
    watch(catid, (newCatid) => {
      fetchSubcatsCommon(newCatid);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))} data-v-bfadcf64>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden" data-v-bfadcf64><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex" data-v-bfadcf64><div class="w-1/2" data-v-bfadcf64></div><div class="relative w-1/2 flex justify-end" data-v-bfadcf64> Add Product By Category </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col" data-v-bfadcf64><main class="w-full flex-grow p-6" data-v-bfadcf64><div class="flex items-center justify-center bg-gray-100" data-v-bfadcf64><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg" data-v-bfadcf64><h1 class="text-2xl font-bold mb-4" data-v-bfadcf64>Add Product By Category </h1><p class="mb-4" data-v-bfadcf64>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/viewprod",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-bfadcf64${_scopeId}></i>View Products`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form data-v-bfadcf64><div class="mb-4" data-v-bfadcf64><label for="catid" class="block text-sm font-medium text-gray-700" data-v-bfadcf64>Category</label>`);
      _push(ssrRenderComponent(unref(script), {
        ref: "multiselectcat",
        modelValue: selectedCat.value,
        "onUpdate:modelValue": ($event) => selectedCat.value = $event,
        options: unref(cats),
        label: "name",
        "track-by": "id",
        placeholder: "Choose category",
        searchable: true,
        "close-on-select": true,
        "allow-empty": false,
        class: "mt-1 block w-full",
        onChange: ($event) => unref(fetchSubcatsCommon)(catid.value)
      }, null, _parent));
      _push(` catid ${ssrInterpolate(catid.value)} `);
      if (selectedCat.value) {
        _push(`<p data-v-bfadcf64>${ssrInterpolate(selectedCat.value.id)}</p>`);
      } else {
        _push(`<p data-v-bfadcf64>Nothing cat</p>`);
      }
      if ((_a = selectedCat.value) == null ? void 0 : _a.id) {
        _push(`<p data-v-bfadcf64>Selected Category ID: ${ssrInterpolate(selectedCat.value.id)}</p>`);
      } else {
        _push(`<p data-v-bfadcf64>No category selected</p>`);
      }
      _push(`</div><div class="mb-4" data-v-bfadcf64><label for="subid" class="block text-sm font-medium text-gray-700" data-v-bfadcf64>SubCategory</label>`);
      _push(ssrRenderComponent(unref(script), {
        ref: "multiselectsubcat",
        modelValue: selectedSubCat.value,
        "onUpdate:modelValue": ($event) => selectedSubCat.value = $event,
        options: unref(subcats),
        label: "name",
        "track-by": "id",
        placeholder: "Choose subcategory",
        searchable: true,
        "close-on-select": true,
        "allow-empty": false,
        class: "mt-1 block w-full",
        onChange: handleSelectSubCat
      }, null, _parent));
      _push(` subid ${ssrInterpolate(subid.value)} `);
      if (selectedSubCat.value) {
        _push(`<p data-v-bfadcf64>${ssrInterpolate(selectedSubCat.value.id)}</p>`);
      } else {
        _push(`<p data-v-bfadcf64>Nothin sub</p>`);
      }
      if ((_b = selectedSubCat.value) == null ? void 0 : _b.id) {
        _push(`<p data-v-bfadcf64>Selected Category ID: ${ssrInterpolate(selectedSubCat.value.id)}</p>`);
      } else {
        _push(`<p data-v-bfadcf64>No subcategory selected</p>`);
      }
      _push(`</div><div class="mb-4" data-v-bfadcf64><label for="name" class="block text-sm font-medium text-gray-700" data-v-bfadcf64> Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" data-v-bfadcf64></div><div class="mb-4" data-v-bfadcf64><label for="des" class="block text-sm font-medium text-gray-700" data-v-bfadcf64> Short Description</label><textarea type="text" class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md" data-v-bfadcf64>${ssrInterpolate(des.value)}</textarea></div><div class="mb-4" data-v-bfadcf64><label for="dess" class="block text-sm font-medium text-gray-700" data-v-bfadcf64> Long Description</label>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`<div class="formatted-result" data-v-bfadcf64>${(_a2 = dess.value) != null ? _a2 : ""}</div></div><div class="mb-4" data-v-bfadcf64><label for="pic" class="block text-sm font-medium text-gray-700" data-v-bfadcf64>Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" data-v-bfadcf64>`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-bfadcf64>${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-bfadcf64>Add</button>`);
      if (adderror.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-bfadcf64>${ssrInterpolate(adderror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (addsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-bfadcf64>${ssrInterpolate(addsuc.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></main><footer class="w-full bg-white text-right p-4" data-v-bfadcf64></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/addprodbycatidsubid/[catid]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfadcf64"]]);

export { index as default };
//# sourceMappingURL=index-BDz2NFRj.mjs.map
