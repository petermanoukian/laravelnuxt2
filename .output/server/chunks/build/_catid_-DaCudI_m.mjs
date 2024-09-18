import { _ as __nuxt_component_0$1 } from './server.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';
import { S as Sidebar, M as MobileHeader } from './MobileHeader-DadXbsen.mjs';
import { u as useCat } from './useCat-IH5I_E1g.mjs';
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
import './1-CKepcKm6.mjs';

const _sfc_main = {
  __name: "[catid]",
  __ssrInlineRender: true,
  setup(__props) {
    const { cats, fetchCatsCommon } = useCat();
    useAuthStore();
    useRouter();
    const route = useRoute();
    const catidx = route.params.catid;
    const name = ref("");
    const des = ref("");
    const catid = ref("");
    const selectedCat = ref(null);
    ref(null);
    const fileError = ref("");
    const adderror = ref("");
    const addsuc = ref("");
    if (catidx != "")
      catid.value = catidx;
    const handleSelectCat = (selected) => {
      catid.value = selected ? selected.id : null;
    };
    const updateSelectedCategory = () => {
      if (catid.value && cats.value.length) {
        const catidNumber = Number(catid.value);
        const selectedCategory = cats.value.find((cat) => cat.id === catidNumber);
        selectedCat.value = selectedCategory || null;
      }
    };
    watch(cats, updateSelectedCategory);
    watch(selectedCat, (newValue) => {
      console.log("selectedCat changed:", newValue);
      handleSelectCat(newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 font-family-karla flex" }, _attrs))}>`);
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="relative w-full flex flex-col h-screen overflow-y-hidden"><header class="w-full items-center bg-white py-2 px-6 hidden sm:flex"><div class="w-1/2"></div><div class="relative w-1/2 flex justify-end"> Add sub Category </div></header>`);
      _push(ssrRenderComponent(MobileHeader, null, null, _parent));
      _push(`<div class="w-full h-screen overflow-x-hidden border-t flex flex-col"><main class="w-full flex-grow p-6"><div class="flex items-center justify-center bg-gray-100"><div class="fullwidth90 bg-white p-8 shadow-md rounded-lg"><h1 class="text-2xl font-bold mb-4">Add Sub Category Catid ${ssrInterpolate(catid.value)}</h1><p class="mb-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/subcat/viewsubcat",
        class: "widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3"${_scopeId}></i>View subcategories`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View subcategories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><form><div class="mb-4"><label for="catid" class="block text-sm font-medium text-gray-700">Category</label>`);
      _push(ssrRenderComponent(unref(script), {
        ref: "multiselect",
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
        onChange: handleSelectCat
      }, null, _parent));
      _push(` catid ${ssrInterpolate(catid.value)} `);
      if (selectedCat.value) {
        _push(`<p>${ssrInterpolate(selectedCat.value.id)}</p>`);
      } else {
        _push(`<p>Nothin</p>`);
      }
      if ((_a = selectedCat.value) == null ? void 0 : _a.id) {
        _push(`<p>Selected Category ID: ${ssrInterpolate(selectedCat.value.id)}</p>`);
      } else {
        _push(`<p>No category selected</p>`);
      }
      _push(`</div><div class="mb-4"><label for="name" class="block text-sm font-medium text-gray-700">Title</label><input${ssrRenderAttr("value", name.value)} type="text" placeholder="Name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></div><div class="mb-4"><label for="des" class="block text-sm font-medium text-gray-700"> Short Description</label><textarea class="mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md">${ssrInterpolate(des.value)}</textarea></div><div class="mb-4"><label for="pic" class="block text-sm font-medium text-gray-700">Picture</label><input type="file" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" accept="image/*">`);
      if (fileError.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(fileError.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Admin</button>`);
      if (adderror.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(adderror.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (addsuc.value) {
        _push(`<p class="mt-2 text-sm text-red-600">${ssrInterpolate(addsuc.value)}</p>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/subcat/addsubcat/[catid].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_catid_-DaCudI_m.mjs.map
