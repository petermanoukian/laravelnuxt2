import{_ as b}from"./DUkboX38.js";import{_ as N}from"./DoXzrDiw.js";import{u as A,a as B,k as C,l as m,r as p,Y as S,o as $,c as o,d as r,t as D,m as a,h as I,q as L,i as t}from"./BkfL23Qh.js";import{u as M}from"./BNM5ge7h.js";import{u as U}from"./6xvS7Wmo.js";import{u as Q}from"./CsnH1xnu.js";import"./B7UVwuT_.js";import"./DxKquJDV.js";const R={class:"container-xxl py-1"},E={class:"container"},V={key:0},W={key:0},j=["src","alt"],q={key:1},H={key:1,class:"row g-4"},J={key:2,class:"row g-4"},ee={__name:"index",async setup(O){let i,l;A();const d=B(),g=m();C();const _=m().public.apiBaseUrl,{prods:c,currentPage:v,lastPage:h,changePage:y,pageNumbers:f,fetchProds:P}=U();Q();const u=d.params.catid,e=p(null),w=async()=>{try{const s=await(await fetch(`${_}/cat/detail/${u}`)).json();e.value=s,JSON.stringify(e.value)}catch(n){console.error("Error fetching item:",n.response?n.response.data:n.message)}};[i,l]=S(()=>w()),await i,l(),e.value&&M({title:e.value.name,meta:[{name:"description",content:e.value.name+" Nuxt3 Laravel 11 MySQl API Products Page"},{name:"keywords",content:e.value.name+", Nuxt3 Laravel 11 MySQl API Web Development Armenia, Web Developer Lebanon"},{property:"og:title",content:e.value.name},{property:"og:description",content:e.value.name+" Nuxt3 Laravel 11 MySQl API Products Page"}]}),$(async()=>{await P(u)});const x=p(0);return(n,s)=>{const k=b;return t(),o("div",R,[r("div",E,[s[1]||(s[1]=r("h1",{class:"text-center mb-1 wow fadeInUp","data-wow-delay":"0.1s"},"Products",-1)),e.value.value?(t(),o("div",V,[r("h3",null,"Category: "+D(e.value.name),1),e.value.img?(t(),o("p",W,[r("img",{src:`${a(g).public.BaseUrl}/images/cat/${e.value.img}`,alt:e.value.name,class:"mt-2 mb-2 maxwidth96height300"},null,8,j)])):(t(),o("p",q,s[0]||(s[0]=[r("img",{src:N,alt:"Default Picture",class:"mt-2 mb-2"},null,-1)])))])):I("",!0),a(c)&&a(c).length>0?(t(),o("div",H,[(t(),L(k,{prods:a(c),currentPage:a(v),lastPage:a(h),changePage:a(y),pageNumbers:a(f),key:x.value.value},null,8,["prods","currentPage","lastPage","changePage","pageNumbers"]))])):(t(),o("div",J," Nothing found "))])])}}};export{ee as default};
