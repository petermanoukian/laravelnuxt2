import { u as useNuxtApp, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './index-DgvVPRmG.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
import { s as script } from '../_/vue-multiselect.esm.mjs';
import { u as useSubcat } from './useSubcat-DziHAppG.mjs';
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

function useTaggSelectNonSelect() {
  const { $api } = useNuxtApp();
  const apiUrl = useRuntimeConfig().public.apiBaseUrl;
  const taggs = ref([]);
  const taggselects = ref([]);
  const taggnonselects = ref([]);
  const fetchTaggsCommon = async (page = 1) => {
    try {
      const response = await $api.get(`${apiUrl}/admin/tagg/common`);
      taggs.value = response.data.data;
      console.log("composbale line 16" + taggs.value);
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
    }
  };
  const fetchTaggsCommonselect = async (prodid = "") => {
    try {
      const params1 = {};
      if (prodid) {
        params1.prodid = prodid;
        prodid = prodid;
      } else
        prodid = "";
      const response = await $api.get(`${apiUrl}/admin/tagg/commonselected/${prodid}`, { params1 });
      taggselects.value = response.data.data;
      console.log("composbale line 41" + taggselects.value);
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
    }
  };
  const fetchTaggsCommonnonselect = async (prodid) => {
    try {
      const params2 = {};
      if (prodid) {
        params2.prodid = prodid;
        prodid = prodid;
      } else
        prodid = "";
      const response = await $api.get(`${apiUrl}/admin/tagg/commonnonselected/${prodid}`, { params2 });
      taggnonselects.value = response.data.data;
    } catch (error) {
      console.error("Error fetching items:", error.response ? error.response.data : error.message);
    }
  };
  return {
    taggs,
    taggselects,
    taggnonselects,
    fetchTaggsCommon,
    fetchTaggsCommonselect,
    fetchTaggsCommonnonselect
  };
}
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    const { subcats, fetchSubcatsCommon } = useSubcat();
    const { taggselects, taggnonselects, taggs, fetchTaggsCommonselect, fetchTaggsCommonnonselect, fetchTaggsCommon } = useTaggSelectNonSelect();
    useAuthStore();
    useRouter();
    const route = useRoute();
    ref("");
    const name = ref("");
    const catid = ref("");
    const subid = ref("");
    ref(null);
    const pic1 = ref(null);
    const fileError = ref("");
    const editerror = ref("");
    const editsuc = ref("");
    const selectedCat = ref(null);
    const selectedSubCat = ref(null);
    const taggid = ref([]);
    const selectedTags = ref([]);
    const des = ref("");
    ref("");
    const firsloader = ref(0);
    route.params.id;
    ref(null);
    ref(null);
    useNuxtApp();
    useRuntimeConfig().public.apiBaseUrl;
    const handleSelectCat = (selected) => {
      catid.value = selected ? selected.id : null;
      if (firsloader > 1) {
        clearsubcat();
      }
      firsloader.value += 1;
    };
    const handleSelectSubCat = (selected) => {
      subid.value = selected ? selected.id : null;
    };
    const clearsubcat = () => {
      subid.value = null;
      selectedSubCat.value = null;
    };
    watch(firsloader, (newfirsloader) => {
      if (newfirsloader > 1) {
        clearsubcat();
      }
    });
    watch(catid, (newCatid) => {
      fetchSubcatsCommon(newCatid);
    });
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Edit Product </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><div class="flex items-center justify-center bg-gray-100"><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Edit Product </h1><p class="mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/subcat/viewsubcat",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>View Subcategories`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Subcategories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/viewprod",
        class: "marginleft8 widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>View Products`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Products")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="mb-4"><label for="catid" class="block text-sm font-medium text-gray-700">Category</label>`);
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
        class: "mt-1 block w-full"
      }, null, _parent));
      _push(` loader : ${ssrInterpolate(firsloader.value)}</div><div class="mb-4"><label for="subid" class="block text-sm font-medium text-gray-700">SubCategory</label>`);
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
        class: "mt-1 block w-full"
      }, null, _parent));
      _push(`</div><div class="mb-4"><label for="taggid" class="block text-sm font-medium text-gray-700"> Tags </label>`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: unref(taggselects),
        "onUpdate:modelValue": ($event) => isRef(taggselects) ? taggselects.value = $event : null,
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
      _push(`</div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700"> Name</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"></div><div class="mb-4"><label for="des" class="block text-sm font-medium text-gray-700"> Short Description</label><textarea type="text" class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md">${ssrInterpolate(des.value)}</textarea></div><div class="mb-4"><label for="dess" class="block text-sm font-medium text-gray-700"> Long Description</label>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div><div class="mb-4"><label for="pic" class="block text-sm font-medium text-gray-700">Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*">`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(` Old Picture <input${ssrRenderAttr("value", pic1.value)} type="text" readonly placeholder="Old Picture" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>`);
      if (editerror.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editerror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (editsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(editsuc.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></main><footer class="w-full bg-white text-right p-4"></footer></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/prod/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-cqAmYEkx.mjs.map
