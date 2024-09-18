import { b as _export_sfc, a as useRuntimeConfig, _ as __nuxt_component_0$1 } from './server.mjs';
import { computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-CKepcKm6.mjs';
import { u as useAuthStore } from './auth-BCAkOG0G.mjs';
import { useRouter, useRoute } from 'vue-router';

const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    useRoute();
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const isAdmin = computed(() => authStore.user && authStore.user.levell === 1);
    const userPicUrl = computed(() => {
      return authStore.user.pic ? `${config.public.BaseUrl}/images/users/thumb/${authStore.user.pic}` : null;
    });
    const reloadCatPage = () => {
      router.push({ path: "/admin/cat/viewcat", query: { reload: Date.now() } });
    };
    const reloadSubPage = () => {
      router.push({ path: "/admin/subcat/viewsubcat", query: { reload: Date.now() } });
    };
    const reloadProdPage = () => {
      router.push({ path: "/admin/prod/viewprod", query: { reload: Date.now() } });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl" }, _attrs))} data-v-69532ff5>`);
      if (unref(authStore).user) {
        _push(`<div class="p-6" data-v-69532ff5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin",
          class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(authStore).user.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(authStore).user.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (unref(authStore).user.pic) {
          _push(`<div data-v-69532ff5><img${ssrRenderAttr("src", userPicUrl.value)} alt="User Picture" class="mt-4 mb-4 w-32 h-32 rounded-full" data-v-69532ff5></div>`);
        } else {
          _push(`<div data-v-69532ff5><img${ssrRenderAttr("src", _imports_0)} alt="Default Picture" class="mt-4 mb-4 w-32 h-32 rounded-full" data-v-69532ff5></div>`);
        }
        _push(`<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-69532ff5>Logout</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="text-white text-base font-semibold pt-3 mt-4" data-v-69532ff5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/cat/addcategory",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Add Category`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Category")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/cat/viewcat",
        onClick: reloadCatPage,
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>View Categories`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Categories")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/subcat/addsubcategory",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Add Subcategory `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Subcategory ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/subcat/viewsubcat",
        onClick: reloadSubPage,
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>View Subcategories `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Subcategories ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/addproduct",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Add Product `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Product ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/prod/viewprod",
        onClick: reloadProdPage,
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>View Products `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Products ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tagg/addtagg",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Add Tag `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Add Tag ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/tagg/viewtagg",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>View Tags `);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("View Tags ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isAdmin.value) {
        _push(`<div data-v-69532ff5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/admin/register",
          class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Add Admins`);
            } else {
              return [
                createVNode("i", { class: "fas fa-align-left mr-3" }),
                createTextVNode("Add Admins")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div data-v-69532ff5>`);
        _push(ssrRenderComponent(_component_NuxtLink, { class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`VIP`);
            } else {
              return [
                createTextVNode("VIP")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/page3",
        class: "flex items-center text-white opacity-75 hover:opacity-100 py-1 pl-4 nav-item"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fas fa-align-left mr-3" data-v-69532ff5${_scopeId}></i>Page3`);
          } else {
            return [
              createVNode("i", { class: "fas fa-align-left mr-3" }),
              createTextVNode("Page3")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></aside>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69532ff5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full bg-sidebar py-5 px-6 sm:hidden" }, _attrs))} data-v-756fbac4><nav class="flex flex-col pt-4" data-v-756fbac4><a href="index.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-tachometer-alt mr-3" data-v-756fbac4></i> Dashboard fro component mobile </a><a href="blank.html" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-sticky-note mr-3" data-v-756fbac4></i> Blank Page </a><a href="tables.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-table mr-3" data-v-756fbac4></i> Tables </a><a href="forms.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-align-left mr-3" data-v-756fbac4></i> Forms </a><a href="tabs.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-tablet-alt mr-3" data-v-756fbac4></i> Tabbed Content </a><a href="calendar.html" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-calendar mr-3" data-v-756fbac4></i> Calendar </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-cogs mr-3" data-v-756fbac4></i> Support </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-user mr-3" data-v-756fbac4></i> My Account </a><a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item" data-v-756fbac4><i class="fas fa-sign-out-alt mr-3" data-v-756fbac4></i> Sign Out </a><button class="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center" data-v-756fbac4><i class="fas fa-arrow-circle-up mr-3" data-v-756fbac4></i> Upgrade to Pro! </button></nav></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MobileHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-756fbac4"]]);

export { MobileHeader as M, Sidebar as S };
//# sourceMappingURL=MobileHeader-DadXbsen.mjs.map
