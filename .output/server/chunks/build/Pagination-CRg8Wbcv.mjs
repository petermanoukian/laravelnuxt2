import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageNumbers: {
      type: Array,
      // Changed from Number to Array to handle multiple pages
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
    searchx: {
      type: String,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    typ: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 fullwidth margintopbottom8 pagination" }, _attrs))}>${ssrInterpolate(__props.tag)} <button${ssrIncludeBooleanAttr(__props.currentPage === 1) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === 1, active: __props.currentPage === 1 }])}"> &lt;&lt; Previous </button><!--[-->`);
      ssrRenderList(__props.pageNumbers, (page) => {
        _push(`<span class="marginleft5"><button class="${ssrRenderClass(["marginleft5 pager", { red: page === __props.currentPage, active: page === __props.currentPage }])}"${ssrIncludeBooleanAttr(page === __props.currentPage) ? " disabled" : ""}>${ssrInterpolate(page)}</button></span>`);
      });
      _push(`<!--]--><button${ssrIncludeBooleanAttr(__props.currentPage === __props.lastPage) ? " disabled" : ""} class="${ssrRenderClass(["marginleft5 pager pagerwide", { red: __props.currentPage === __props.lastPage, active: __props.currentPage === __props.lastPage }])}"> &gt;&gt; Next </button><span class="marginleft5 margintop5">Page ${ssrInterpolate(__props.currentPage)} of ${ssrInterpolate(__props.lastPage)}</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Pagination-CRg8Wbcv.mjs.map
