import{x as V,i as e,c as s,d as n,b as i,e as b,t as v,_ as q,w,F as P,p as W,m as t,h as A,l as J,u as O,a as U,o as B,r as H,q as f}from"./BkfL23Qh.js";import{_ as R}from"./DoXzrDiw.js";import{_ as I}from"./DxKquJDV.js";import{u as M,a as E,_ as F}from"./DSQxNJZ1.js";import{u as Q}from"./BNM5ge7h.js";const j={props:{cat:{type:Object,required:!0},config:{type:Object,required:!0}}},Y={class:"col-lg-4 col-sm-6 wow fadeInUp mt-1 mb-1"},z={class:"graybox"},G={key:0},K=["src","alt"],T={key:1},X={class:"mb-3"};function Z(o,r,a,u,l,d){const c=q;return e(),s("div",Y,[n("div",z,[a.cat.img?(e(),s("p",G,[i(c,{to:`/prod/viewprodbycatid/${a.cat.id}`},{default:b(()=>[n("img",{src:`${a.config.public.BaseUrl}/images/cat/thumb/${a.cat.img}`,alt:a.cat.name,class:"mt-1 mb-1 maximg link1 h-32"},null,8,K)]),_:1},8,["to"])])):(e(),s("p",T,[i(c,{to:`/prod/viewprodbycatid/${a.cat.id}`},{default:b(()=>r[0]||(r[0]=[n("img",{src:R,alt:"Default Picture",class:"mt-1 mb-1 h-32 link1"},null,-1)])),_:1},8,["to"])])),n("p",null,[i(c,{to:`/prod/viewprodbycatid/${a.cat.id}`,class:"link1"},{default:b(()=>[n("b",null,"› "+v(a.cat.name),1)]),_:1},8,["to"]),i(c,{to:`/subcat/viewsubcatbycatid/${a.cat.id}`,class:"link1"},{default:b(()=>[n("h6",X,"› View Subcategories ( "+v(a.cat.subcats_count)+" )",1)]),_:1},8,["to"])])])])}const ee=V(j,[["render",Z]]),te={class:"mt-8 mb-8"},ae={class:"row"},se={key:0,class:"w-full"},ne={__name:"CatsOpen",props:{cats:{type:Array,required:!0},currentPage:{type:Number,required:!0},pageNumbers:{type:Number,required:!0},lastPage:{type:Number,required:!0},changePage:{type:Function,required:!0}},setup(o){const r=J(),a=o;return w(()=>a.cats,u=>{console.log("Items updated now:",u)}),(u,l)=>{const d=ee,c=I;return e(),s(P,null,[n("div",te,[n("div",ae,[(e(!0),s(P,null,W(o.cats,(m,_)=>(e(),s(P,{key:m.id},[i(d,{cat:m,config:t(r)},null,8,["cat","config"]),(_+1)%3===0?(e(),s("div",se,l[0]||(l[0]=[n("hr",{class:"my-4"},null,-1)]))):A("",!0)],64))),128))])]),i(c,{currentPage:o.currentPage,pageNumbers:o.pageNumbers,lastPage:o.lastPage,changePage:o.changePage,typ:"catpaginater"},null,8,["currentPage","pageNumbers","lastPage","changePage"])],64)}}},oe={class:"container-xxl py-1"},ce={class:"container"},re={key:0,class:"row g-4"},ie={key:1},ue={key:0,class:"row g-4"},le={key:1,class:"row g-4 mt-4 fullwidth margintopbottom8"},ge={class:"container"},de={key:0,class:"row g-4"},me={key:1},_e={key:0,class:"row g-4"},be={key:1,class:"row g-4 mt-4"},fe={__name:"index",setup(o){O();const r=U(),{cats:a,currentPage:u,lastPage:l,changePage:d,pageNumbers:c,loadingcats:m,fetchCats:_}=M(),{subcats:p,currentPage:N,lastPage:k,changePage:x,pageNumbers:S,loadingsubcats:L,fetchSubcats:h}=E();Q({title:"Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon",meta:[{name:"description",content:"Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3"},{name:"keywords",content:"Laravel, MySQL, PHP 8, Web Development, Nuxt 3, VueJS 3, JavaScript, Web Development Armenia, Web Developer Lebanon"},{property:"og:title",content:"Nuxt3 Laravel 11 PHP 8 VUEJS 3 MySQL Web Development Armenia Lebanon"},{property:"og:description",content:"Lebanese Armenian Web Development built with php 8.2 Laravel 11 Nucxt 3 Vue JS 3"}]}),B(async()=>{_(),h()});const y=H(0);return w(r,async(C,g)=>{_(),h()}),(C,g)=>{const $=ne,D=F;return e(),s("div",oe,[n("div",ce,[g[0]||(g[0]=n("h1",{class:"text-center mb-1 wow fadeInUp","data-wow-delay":"0.1s"},"Categories",-1)),t(m)?(e(),s("div",re," Loading... ")):(e(),s("div",ie,[t(a)&&t(a).length>0?(e(),s("div",ue,[(e(),f($,{cats:t(a),currentPage:t(u),lastPage:t(l),changePage:t(d),pageNumbers:t(c),key:y.value.value},null,8,["cats","currentPage","lastPage","changePage","pageNumbers"]))])):(e(),s("div",le," No Categories Yet "))]))]),n("div",ge,[g[1]||(g[1]=n("h1",{class:"text-center mb-1 wow fadeInUp","data-wow-delay":"0.1s"},"SubCategories",-1)),t(L)?(e(),s("div",de," Loading... ")):(e(),s("div",me,[t(p)&&t(p).length>0?(e(),s("div",_e,[(e(),f(D,{subcats:t(p),currentPage:t(N),lastPage:t(k),changePage:t(x),pageNumbers:t(S),key:y.value.value},null,8,["subcats","currentPage","lastPage","changePage","pageNumbers"]))])):(e(),s("div",be," No Subcategories currently on HomePage "))]))])])}}};export{fe as default};
