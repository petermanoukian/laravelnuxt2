import{o as T,u as j,a as A,r as l,k as U,l as w,c as r,b as h,d as t,e as O,f as R,g as v,v as b,t as _,h as k,j as C,m as F,_ as L,i as n}from"./BkfL23Qh.js";import{_ as q}from"./DoXzrDiw.js";import{u as H}from"./C-aMhIz_.js";import{S as W,M as z}from"./BrcG7ohK.js";const G={class:"bg-gray-100 font-family-karla flex"},I={class:"relative w-full flex flex-col h-screen overflow-y-hidden"},J={class:"w-full h-screen overflow-x-hidden border-t flex flex-col"},K={class:"w-full flex-grow p-6"},Q={key:0},X={class:"flex items-center justify-center bg-gray-100"},Y={class:"fullwidth90 bg-white p-8 shadow-md rounded-lg"},Z={class:"mb-4"},ee={class:"mb-4"},te={class:"mb-4"},se={class:"mb-4"},oe={key:0,class:"mt-2 text-sm text-red-600"},le={class:"mb-4"},ae={key:0},re=["src","alt"],ne={key:1},ie={key:0,class:"mt-2 text-sm text-red-600"},de={key:1,class:"mt-2 text-sm text-red-600"},ue={key:1},be={__name:"[id]",setup(ce){const V=w(),$=H();T(async()=>{await $.fetchUser(),P()});const N=j(),S=A(),g=l(""),d=l(""),u=l(""),c=l(null),m=l(null),p=l(""),f=l(""),x=l(""),y=S.params.id,a=l(null),{$api:B}=U(),D=w().public.apiBaseUrl,P=async()=>{try{const o=await B.get(`${D}/admin/cat/edit/${y}`);g.value=y,a.value=o.data,d.value=a.value.name,u.value=a.value.des,m.value=a.value.img}catch(o){console.error("Error fetching item:",o.response?o.response.data:o.message)}},E=async()=>{const{$api:o}=U(),e=w().public.apiBaseUrl,i=new FormData;i.append("name",d.value),i.append("des",u.value),i.append("pic1",m.value),c.value&&i.append("pic",c.value);try{const s=await o.post(`${e}/admin/cat/update/${y}`,i);console.log("Category added successfully:",s.data),x.value="categoty updated "+d.value+" ... you will be redircted in a monent ...",setTimeout(()=>{N.push("/admin/cat/viewcat")},300)}catch(s){s.response&&s.response.status===422?f.value=s.response.data.message:f.value="An unexpected error occurred."}},M=o=>{const e=o.target.files[0];e&&!e.type.startsWith("image/")?(p.value="Please upload a valid image file.",c.value=null):(p.value="",c.value=e)};return(o,e)=>{const i=L;return n(),r("div",G,[h(W),t("div",I,[e[14]||(e[14]=t("header",{class:"w-full items-center bg-white py-2 px-6 hidden sm:flex"},[t("div",{class:"w-1/2"}),t("div",{class:"relative w-1/2 flex justify-end"}," Edit Category ")],-1)),h(z),t("div",J,[t("main",K,[a.value?(n(),r("div",Q,[t("div",X,[t("div",Y,[e[11]||(e[11]=t("h1",{class:"text-2xl font-bold mb-4"},"Edit Category",-1)),t("p",Z,[h(i,{to:"/admin/cat/viewcat",class:"widthmax300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},{default:O(()=>e[4]||(e[4]=[t("i",{class:"fas fa-align-left mr-3"},null,-1),C("View categories")])),_:1})]),t("form",{onSubmit:R(E,["prevent"])},[t("div",ee,[e[5]||(e[5]=t("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Title",-1)),v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>d.value=s),type:"text",placeholder:"Name",required:"",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[b,d.value]])]),t("div",te,[e[6]||(e[6]=t("label",{for:"des",class:"block text-sm font-medium text-gray-700"}," Short Description",-1)),v(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=s=>u.value=s),class:"mt-1 block w-full px-3 py-3 textareashort border border-gray-300 rounded-md"},null,512),[[b,u.value]])]),t("div",se,[e[7]||(e[7]=t("label",{for:"pic",class:"block text-sm font-medium text-gray-700"},"Picture",-1)),t("input",{type:"file",onChange:M,class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",accept:"image/*"},null,32),p.value?(n(),r("p",oe,_(p.value),1)):k("",!0),e[8]||(e[8]=C(" Old Picture ")),v(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),type:"text",readonly:"",placeholder:"Old Picture",class:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[b,m.value]])]),v(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>g.value=s),type:"text",readonly:"",placeholder:"Old Picture",class:"mt-1 block w-full px-3 py-2 mb-4 mt-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[b,g.value]]),t("div",le,[a.value.img?(n(),r("p",ae,[t("img",{src:`${F(V).public.BaseUrl}/images/cat/thumb/${a.value.img}`,alt:a.value.name,class:"mt-2 mb-2"},null,8,re)])):(n(),r("p",ne,e[9]||(e[9]=[t("img",{src:q,alt:"Default Picture",class:"mt-2 mb-2"},null,-1)])))]),e[10]||(e[10]=t("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Update",-1)),f.value?(n(),r("p",ie,_(f.value),1)):k("",!0),x.value?(n(),r("p",de,_(x.value),1)):k("",!0)],32)])])])):(n(),r("div",ue,e[12]||(e[12]=[t("p",null,"Loading...",-1)])))]),e[13]||(e[13]=t("footer",{class:"w-full bg-white text-right p-4"},null,-1))])])])}}};export{be as default};
