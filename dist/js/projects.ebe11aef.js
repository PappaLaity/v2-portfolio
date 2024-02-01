"use strict";(self["webpackChunkpappalaity_portfolio"]=self["webpackChunkpappalaity_portfolio"]||[]).push([[176],{299:function(e,t,i){i.r(t),i.d(t,{default:function(){return N}});var a=i(252);const r={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function s(e,t,i,s,n,o){const l=(0,a.up)("ContactForm"),c=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(l),(0,a.Wm)(c,{contacts:e.contacts},null,8,["contacts"])])}var n=i(508),o=i.n(n),l=i(963);const c={class:"w-full md:w-1/2"},d={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},u=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1);function m(e,t,i,r,s,n){const o=(0,a.up)("FormInput"),m=(0,a.up)("FormTextarea"),p=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[u,(0,a._)("form",{ref:"form",onSubmit:t[0]||(t[0]=(0,l.iM)(((...e)=>r.sendMail&&r.sendMail(...e)),["prevent"])),class:"form font-general-regular space-y-7"},[(0,a.Wm)(o,{label:"Full Name",inputIdentifier:"from_name",val:r.inputFieldReset},null,8,["val"]),(0,a.Wm)(o,{label:"Email",inputIdentifier:"reply_to",inputType:"email",val:r.inputFieldReset},null,8,["val"]),(0,a.Wm)(o,{label:"Subject",inputIdentifier:"subject",val:r.inputFieldReset},null,8,["val"]),(0,a.Wm)(m,{label:"Message",textareaIdentifier:"message",val:r.inputFieldReset},null,8,["val"]),(0,a._)("div",null,[(0,a.Wm)(p,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])],544)])])}var p=i(135),g=i(492),f=i(411);const x={_origin:"https://api.emailjs.com"},b=(e,t="https://api.emailjs.com")=>{x._userID=e,x._origin=t},h=(e,t,i)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class j{constructor(e){this.status=e.status,this.text=e.responseText}}const v=(e,t,i={})=>new Promise(((a,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new j(e);200===t.status||"OK"===t.text?a(t):r(t)})),s.addEventListener("error",(({target:e})=>{r(new j(e))})),s.open("POST",x._origin+e,!0),Object.keys(i).forEach((e=>{s.setRequestHeader(e,i[e])})),s.send(t)})),w=(e,t,i,a)=>{const r=a||x._userID;h(r,e,t);const s={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:i};return v("/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})},y=e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},k=(e,t,i,a)=>{const r=a||x._userID,s=y(i);h(r,e,t);const n=new FormData(s);return n.append("lib_version","3.2.0"),n.append("service_id",e),n.append("template_id",t),n.append("user_id",r),v("/api/v1.0/email/send-form",n)};var _={init:b,send:w,sendForm:k},I=i(262),P={components:{Button:p.Z,FormInput:g.Z,FormTextarea:f.Z},setup(){const e=(0,I.iH)(null),t=(0,I.iH)(null),i="dxtkSq2UcXEK16P4i",a="service_8e69o1s",r="template_7d3n7kt";_.init(i);const s=()=>{_.sendForm(a,r,e.value).then((()=>{alert("Message sent!"),t.value=" "}),(e=>{alert("Message not sent",e)}))};return{form:e,inputFieldReset:t,sendMail:s}}},D=i(744);const q=(0,D.Z)(P,[["render",m]]);var H=q,S=i(577);const F={class:"w-full md:w-1/2"},M={class:"text-left max-w-xl px-6"},T=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),C={class:"font-general-regular"},L=["data-feather"];function W(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",F,[(0,a._)("div",M,[T,(0,a._)("ul",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.contacts,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"flex",key:e.id},[(0,a._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,L),(0,a._)("a",{href:"#",class:(0,S.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,S.zw)(e.name),3)])))),128))])])])}var z={props:["contacts"]};const K=(0,D.Z)(z,[["render",W]]);var U=K,R={components:{ContactForm:H,ContactDetails:U},data:()=>({contacts:[{id:1,name:"Keur Massar, Dakar, Senegal",icon:"map-pin"},{id:2,name:"pappalaity@gmail.com",icon:"mail"},{id:3,name:"00 221 77 491 97 31",icon:"phone"}]}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const Z=(0,D.Z)(R,[["render",s]]);var N=Z},188:function(e,t,i){i.r(t),i.d(t,{default:function(){return se}});var a=i(252);const r={class:"container mx-auto mt-10 sm:mt-20"};function s(e,t,i,s,n,o){const l=(0,a.up)("ProjectHeader"),c=(0,a.up)("ProjectGallery"),d=(0,a.up)("ProjectInfo"),u=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(l,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(c,{projectImages:e.projectImages},null,8,["projectImages"]),(0,a.Wm)(d,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(u,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}var n=i(508),o=i.n(n),l=i(577);const c={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},d={class:"flex"},u={class:"flex items-center mr-10"},m=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),p={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},f=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),x={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function b(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",c,(0,l.zw)(i.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",d,[(0,a._)("div",u,[m,(0,a._)("span",p,(0,l.zw)(i.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",g,[f,(0,a._)("span",x,(0,l.zw)(i.singleProjectHeader.singleProjectTag),1)])])])}var h={props:["singleProjectHeader"]},j=i(744);const v=(0,j.Z)(h,[["render",b]]);var w=v;const y={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},k=["src"];function _(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.projectImages,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,k)])))),128))])}var I={props:["projectImages"]};const P=(0,j.Z)(I,[["render",_]]);var D=P;const q={class:"block sm:flex gap-0 sm:gap-10 mt-14"},H={class:"w-full sm:w-1/3 text-left"},S={class:"mb-7"},F={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},M={class:"leading-loose"},T={class:"mb-7"},C={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},L={class:"font-general-regular text-primary-dark dark:text-ternary-light"},W={class:"mb-7"},z={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},K={class:"font-general-regular text-primary-dark dark:text-ternary-light"},U={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},R={class:"flex items-center gap-3 mt-5"},Z=["href"],N=["data-feather"],O={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},Y={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function A(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",H,[(0,a._)("div",S,[(0,a._)("p",F,(0,l.zw)(i.projectInfo.clientHeading),1),(0,a._)("ul",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.projectInfo.companyInfos,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,a._)("span",null,(0,l.zw)(e.title)+": ",1),(0,a._)("a",{href:"#",class:(0,l.C_)("Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,l.zw)(e.details),3)])))),128))])]),(0,a._)("div",T,[(0,a._)("p",C,(0,l.zw)(i.projectInfo.objectivesHeading),1),(0,a._)("p",L,(0,l.zw)(i.projectInfo.objectivesDetails),1)]),(0,a._)("div",W,[(0,a._)("p",z,(0,l.zw)(i.projectInfo.technologies[0].title),1),(0,a._)("p",K,(0,l.zw)(i.projectInfo.technologies[0].techs.join(", ")),1)]),(0,a._)("div",null,[(0,a._)("p",U,(0,l.zw)(i.projectInfo.socialSharingsHeading),1),(0,a._)("div",R,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.projectInfo.socialSharings,(e=>((0,a.wg)(),(0,a.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,N)],8,Z)))),128))])])]),(0,a._)("div",O,[(0,a._)("p",Y,(0,l.zw)(i.projectInfo.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.projectInfo.projectDetails,(e=>((0,a.wg)(),(0,a.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,l.zw)(e.details),1)))),128))])])}var E={props:["projectInfo"],mounted(){o().replace()},updated(){o().replace()}};const V=(0,j.Z)(E,[["render",A]]);var J=V;const X={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},B={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},G={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},Q=["src","alt"];function $(e,t,i,r,s,n){return(0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("p",B,(0,l.zw)(i.relatedProject.relatedProjectsHeading),1),(0,a._)("div",G,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.relatedProject.relatedProjects,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id},[(0,a._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,Q)])))),128))])])}var ee={props:["relatedProject"]};const te=(0,j.Z)(ee,[["render",$]]);var ie=te,ae={name:"Projects",components:{ProjectHeader:w,ProjectGallery:D,ProjectInfo:J,ProjectRelatedProjects:ie},data:()=>({singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:i(35)},{id:2,title:"Kabul Project Management UI",img:i(294)},{id:3,title:"Kabul Project Management UI",img:i(687)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:5,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/c/StomanStudio"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:i(725)},{id:2,title:"Web Application",img:i(600)},{id:3,title:"UI Design",img:i(34)},{id:4,title:"Kabul Mobile App UI",img:i(687)}]}}),mounted(){o().replace()},updated(){o().replace()},methods:{}};const re=(0,j.Z)(ae,[["render",s]]);var se=re},725:function(e,t,i){e.exports=i.p+"img/mobile-project-1.8b4f9e2f.jpg"},687:function(e,t,i){e.exports=i.p+"img/mobile-project-2.9bd76372.jpg"},35:function(e,t,i){e.exports=i.p+"img/ui-project-1.96e7f21e.jpg"},34:function(e,t,i){e.exports=i.p+"img/ui-project-2.afd87ce7.jpg"},600:function(e,t,i){e.exports=i.p+"img/web-project-1.d1debdf5.jpg"},294:function(e,t,i){e.exports=i.p+"img/web-project-2.ecd6c182.jpg"}}]);
//# sourceMappingURL=projects.ebe11aef.js.map