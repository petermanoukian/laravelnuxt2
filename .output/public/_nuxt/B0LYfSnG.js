import{_ as h}from"./DUkboX38.js";import{k as b,l as w,r as o,n as x,u as N,a as k,o as S,c as p,d as _,t as A,m as a,q as L,i as c}from"./BkfL23Qh.js";import"./B7UVwuT_.js";import{u as M}from"./BNM5ge7h.js";import"./DoXzrDiw.js";import"./DxKquJDV.js";function B(){const{$api:f}=b(),v=w().public.apiBaseUrl,r=o([]),u=o(1),n=o(1),i=o(9),d=o(0),g=o(!0),P=async(e="",t=1)=>{console.log("the tag is "+e);try{const s={page:t,per_page:i.value};e?(s.tag=e,e=e):e="";const m=await f.get(`${v}/prod/viewbytag/${e}`,{params:s});r.value=m.data.prods.data,u.value=m.data.prods.current_page,n.value=m.data.prods.last_page,d.value=m.data.prods.total}catch(s){console.error("Error fetching :",s.response?s.response.data:s.message)}finally{g.value=!1}},l=(e=null,t)=>{t>0&&t<=n.value&&P(e,t)},y=x(()=>{let e=[];for(let t=1;t<=n.value;t++)e.push(t);return e});return{prods:r,currentPage:u,lastPage:n,perPage:i,totalProds:d,fetchProds:P,changePage:l,pageNumbers:y,loadingprods:g}}const I={class:"container-xxl py-1"},Q={class:"container"},W={class:"text-center mb-1"},D={key:0,class:"row g-4"},$={key:1},R={key:0,class:"row g-4"},U={key:1,class:"row g-4"},G={__name:"[tag]",setup(f){N();const v=k(),{prods:r,currentPage:u,lastPage:n,changePage:i,pageNumbers:d,loadingprods:g,fetchProds:P}=B(),l=v.params.tag;M({title:"Nuxt3 Laravel 11 MySQl API Products Page",meta:[{name:"description",content:"Nuxt3 Laravel 11 MySQl API Products Page"},{name:"keywords",content:"Nuxt3 Laravel 11 MySQl API Products Page, MySQL, PHP 8, Web Development,  VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon"},{property:"og:title",content:"Nuxt3 Laravel 11 MySQl API Products Page"},{property:"og:description",content:"Nuxt3 Laravel 11 MySQl API Products Page"}]}),S(async()=>{await P(l),new WOW().init()});const y=o(0);return(e,t)=>{const s=h;return c(),p("div",I,[_("div",Q,[t[0]||(t[0]=_("h1",{class:"text-center mb-1 wow fadeInUp","data-wow-delay":"0.1s"},"Products",-1)),_("h2",W,[_("p",null," By TAG: "+A(a(l)),1)]),a(g)?(c(),p("div",D," Loading... ")):(c(),p("div",$,[a(r)&&a(r).length>0?(c(),p("div",R,[(c(),L(s,{prods:a(r),currentPage:a(u),lastPage:a(n),changePage:a(i),pageNumbers:a(d),tag:a(l),key:y.value.value},null,8,["prods","currentPage","lastPage","changePage","pageNumbers","tag"]))])):(c(),p("div",U," Nothing found "))]))])])}}};export{G as default};
