import{x as Z,u as ee,a as te,r as o,o as le,w as c,c as _,b as n,d as t,e as L,f as se,m as d,j as k,t as m,g as R,v as F,h as D,_ as oe,i as S,k as ae,l as ue}from"./BkfL23Qh.js";import{u as ne,S as de,_ as re,a as ie}from"./44wPXJ-d.js";import{u as ce}from"./C-aMhIz_.js";import{S as me,M as pe}from"./BrcG7ohK.js";import{u as be}from"./CXs0n1RF.js";import{u as fe}from"./D1evIxhf.js";import{u as ve}from"./FFSxNxS3.js";import{s as M}from"./DzOTmNw2.js";import"./DoXzrDiw.js";const ge={class:"bg-gray-100 font-family-karla flex"},xe={class:"relative w-full flex flex-col h-screen overflow-y-hidden"},ye={class:"w-full h-screen overflow-x-hidden border-t flex flex-col"},we={class:"w-full flex-grow p-6"},he={class:"flex items-center justify-center bg-gray-100"},Ce={class:"fullwidth90 bg-white p-8 shadow-md rounded-lg"},_e={class:"mb-4"},ke={class:"mb-4"},Se={class:"mb-4"},Ve={class:"mb-4"},Ne={class:"mb-4"},Te={class:"mb-4"},Ue={class:"mb-4"},Ae={class:"mb-4"},De={key:0,class:"mt-2 text-sm text-red-600"},Me={key:0,class:"mt-2 text-sm text-red-600"},Be={key:1,class:"mt-2 text-sm text-red-600"},Pe={__name:"[subid]",setup($e){const{cats:v,fetchCatsCommon:G}=be(),{subcats:p,fetchSubcatsCommon:V}=fe(),{taggs:H,fetchTaggsCommon:q}=ve(),K=ce(),W=ee(),B=te(),g=o(""),u=o(""),r=o(""),N=o(""),b=o(""),x=o(null),y=o(""),w=o(""),T=o(""),h=o(null),f=o(null),U=o([]),C=o([]),A=o(0),P=B.params.catid,$=B.params.subid;P&&(u.value=P),$&&(r.value=$);const z=l=>{u.value=l?l.id:null,A>1&&E(),A.value+=1},J=l=>{r.value=l?l.id:null};le(async()=>{await K.fetchUser(),await G(),await V(u.value),await q(),j(),O(),I.value=ne({content:b.value,extensions:[de],onUpdate:({editor:l})=>{b.value=l.getHTML()}})});const j=()=>{if(u.value&&v.value.length){const l=Number(u.value),e=v.value.find(s=>s.id===l);h.value=e||null}},O=()=>{if(r.value&&p.value.length){const l=Number(r.value);console.log("Subcategories:",p.value),console.log("Subcategory ID to match:",l);const e=p.value.find(s=>(console.log("Checking subcategory:",s.id,"against",l),s.id===l));f.value=e||null}else console.log("Subid or subcats array is invalid")};c(A,l=>{l>1&&E()}),c(u,l=>{V(l)}),c(v,p,j),c(h,l=>{console.log("selectedCat changed:",l),z(l)}),c(f,l=>{console.log("selectedCat changed:",l),J(l)}),c(C,l=>{U.value=l.map(e=>e.id)});const E=()=>{r.value=null,f.value=null},Q=async()=>{const{$api:l}=ae(),e=ue().public.apiBaseUrl,s=new FormData;s.append("name",g.value),s.append("catid",u.value),s.append("subid",r.value),s.append("des",N.value),s.append("dess",b.value),s.append("taggid",U.value),x.value&&s.append("pic",x.value);try{const i=await l.post(`${e}/admin/prod/add`,s);console.log(" added successfully:",i.data),T.value="product added "+g.value+" ... you will be redircted in a monent ...",setTimeout(()=>{W.push("/admin/prod/viewprod")},300)}catch(i){i.response&&i.response.status===422?w.value=i.response.data.message:w.value="An unexpected error occurred."}};let I=o(null);const X=l=>{const e=l.target.files[0];e&&!e.type.startsWith("image/")?(y.value="Please upload a valid image file.",x.value=null):(y.value="",x.value=e)};return(l,e)=>{const s=oe,i=ie,Y=re;return S(),_("div",ge,[n(me),t("div",xe,[e[21]||(e[21]=t("header",{class:"w-full items-center bg-white py-2 px-6 hidden sm:flex"},[t("div",{class:"w-1/2"}),t("div",{class:"relative w-1/2 flex justify-end"}," Add Product ")],-1)),n(pe),t("div",ye,[t("main",we,[t("div",he,[t("div",Ce,[e[19]||(e[19]=t("h1",{class:"text-2xl font-bold mb-4"},"Add Product By Category Sub Category",-1)),t("p",_e,[n(s,{to:"/admin/prod/viewprod",class:"widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},{default:L(()=>e[7]||(e[7]=[t("i",{class:"fas fa-align-left mr-3"},null,-1),k("View Products")])),_:1})]),t("form",{onSubmit:se(Q,["prevent"])},[t("div",ke,[e[8]||(e[8]=t("label",{for:"catid",class:"block text-sm font-medium text-gray-700"},"Category",-1)),n(d(M),{ref:"multiselectcat",modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=a=>h.value=a),options:d(v),label:"name","track-by":"id",placeholder:"Choose category",searchable:!0,"close-on-select":!0,"allow-empty":!1,class:"mt-1 block w-full",onChange:e[1]||(e[1]=a=>d(V)(u.value))},null,8,["modelValue","options"])]),t("div",Se,[e[9]||(e[9]=t("label",{for:"subid",class:"block text-sm font-medium text-gray-700"},"SubCategory",-1)),n(d(M),{ref:"multiselectsubcat",modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=a=>f.value=a),options:d(p),label:"name","track-by":"id",placeholder:"Choose subcategory",searchable:!0,"close-on-select":!0,"allow-empty":!1,class:"mt-1 block w-full"},null,8,["modelValue","options"]),k(" subid "+m(r.value),1)]),t("div",Ve,[e[10]||(e[10]=t("label",{for:"taggid",class:"block text-sm font-medium text-gray-700"},"Tags ",-1)),n(d(M),{modelValue:C.value,"onUpdate:modelValue":e[3]||(e[3]=a=>C.value=a),options:d(H),label:"name","track-by":"id",placeholder:"Choose tags",searchable:!0,"close-on-select":!0,"allow-empty":!0,class:"mt-1 block w-full",multiple:!0},null,8,["modelValue","options"]),e[11]||(e[11]=t("br",null,null,-1)),k(" TAGS "+m(U.value)+" ",1),e[12]||(e[12]=t("br",null,null,-1)),k(" TAGID "+m(C.value)+" ",1),e[13]||(e[13]=t("br",null,null,-1))]),t("div",Ne,[e[14]||(e[14]=t("label",{for:"name",class:"block text-sm font-medium text-gray-700"}," Name",-1)),R(t("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>g.value=a),type:"text",placeholder:"Name",required:"",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"},null,512),[[F,g.value]])]),t("div",Te,[e[15]||(e[15]=t("label",{for:"des",class:"block text-sm font-medium text-gray-700"}," Short Description",-1)),R(t("textarea",{"onUpdate:modelValue":e[5]||(e[5]=a=>N.value=a),type:"text",class:"mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md"},null,512),[[F,N.value]])]),t("div",Ue,[e[16]||(e[16]=t("label",{for:"dess",class:"block text-sm font-medium text-gray-700"}," Long Description",-1)),n(Y,null,{default:L(()=>[n(i,{modelValue:b.value,"onUpdate:modelValue":e[6]||(e[6]=a=>b.value=a),class:"textarealongborder",editor:d(I)},null,8,["modelValue","editor"])]),_:1})]),t("div",Ae,[e[17]||(e[17]=t("label",{for:"pic",class:"block text-sm font-medium text-gray-700"},"Picture",-1)),t("input",{type:"file",onChange:X,class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",accept:"image/*"},null,32),y.value?(S(),_("p",De,m(y.value),1)):D("",!0)]),e[18]||(e[18]=t("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Add",-1)),w.value?(S(),_("p",Me,m(w.value),1)):D("",!0),T.value?(S(),_("p",Be,m(T.value),1)):D("",!0)],32)])])]),e[20]||(e[20]=t("footer",{class:"w-full bg-white text-right p-4"},null,-1))])])])}}},Ke=Z(Pe,[["__scopeId","data-v-bed50ebe"]]);export{Ke as default};
