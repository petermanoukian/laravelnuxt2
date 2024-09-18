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
import { u as useTagg } from './useTagg-CFGFZvBJ.mjs';
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
  __name: "[catid]",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    const { taggs, fetchTaggsCommon } = useTagg();
    useAuthStore();
    useRouter();
    const route = useRoute();
    const name = ref("");
    const catid = ref("");
    const subid = ref("");
    const des = ref("");
    ref("");
    ref(null);
    const fileError = ref("");
    const adderror = ref("");
    const addsuc = ref("");
    const selectedCat = ref(null);
    const selectedSubCat = ref(null);
    const taggid = ref([]);
    const selectedTags = ref([]);
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
    watch(selectedTags, (newTags) => {
      taggid.value = newTags.map((tag) => tag.id);
    });
    watch(catid, (newCatid) => {
      fetchSubcatsCommon(newCatid);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))} data-v-0f590072>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden" data-v-0f590072><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex" data-v-0f590072><div class="w-1/2" data-v-0f590072></div><div class="relative w-1/2 flex justify-end" data-v-0f590072> Add Product </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col" data-v-0f590072><main class="w-full flex-grow p-6" data-v-0f590072><div class="flex items-center justify-center bg-gray-100" data-v-0f590072><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg" data-v-0f590072><h1 class="text-2xl font-bold mb-4" data-v-0f590072>Add Product By Category</h1><p class="mb-4" data-v-0f590072>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/viewprod",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-0f590072${_scopeId}></i>View Products`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form data-v-0f590072><div class="mb-4" data-v-0f590072><label for="catid" class="block text-sm font-medium text-gray-700" data-v-0f590072>Category</label>`);
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
      _push(` catid ${ssrInterpolate(catid.value)}</div><div class="mb-4" data-v-0f590072><label for="subid" class="block text-sm font-medium text-gray-700" data-v-0f590072>SubCategory</label>`);
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
      _push(` subid ${ssrInterpolate(subid.value)}</div><div class="mb-4" data-v-0f590072><label for="taggid" class="block text-sm font-medium text-gray-700" data-v-0f590072> Tags </label>`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: selectedTags.value,
        "onUpdate:modelValue": ($event) => selectedTags.value = $event,
        options: unref(taggs),
        label: "name",
        "track-by": "id",
        placeholder: "Choose tags",
        searchable: true,
        "close-on-select": true,
        "allow-empty": true,
        class: "mt-1 block w-full",
        multiple: true
      }, null, _parent));
      _push(`</div><div class="mb-4" data-v-0f590072><label for="name" class="block text-sm font-medium text-gray-700" data-v-0f590072> Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" data-v-0f590072></div><div class="mb-4" data-v-0f590072><label for="des" class="block text-sm font-medium text-gray-700" data-v-0f590072> Short Description</label><textarea type="text" class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md" data-v-0f590072>${ssrInterpolate(des.value)}</textarea></div><div class="mb-4" data-v-0f590072><label for="dess" class="block text-sm font-medium text-gray-700" data-v-0f590072> Long Description</label>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="mb-4" data-v-0f590072><label for="pic" class="block text-sm font-medium text-gray-700" data-v-0f590072>Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*" data-v-0f590072>`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-0f590072>${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-0f590072>Add</button>`);
      if (adderror.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-0f590072>${ssrInterpolate(adderror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (addsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600" data-v-0f590072>${ssrInterpolate(addsuc.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></main><footer class="w-full bg-white text-right p-4" data-v-0f590072></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/addprodbycatid/[catid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _catid_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f590072"]]);

export { _catid_ as default };
//# sourceMappingURL=_catid_-O8IqHEWr.mjs.map
