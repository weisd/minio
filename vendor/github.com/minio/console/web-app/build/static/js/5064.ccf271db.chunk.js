"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5064],{75064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(65043),s=n(73216),l=n(89923),i=n(77403),c=n(77938),r=n(99161),o=n(64159),d=n(20554),u=n(22166),h=n(46537),x=n(48793),p=n(56629),g=n(53518),m=n(55968),j=n(69772),b=n(6681),v=n(64681),f=n(29977),S=n(33097),k=n.n(S),C=n(94141),y=n(96512),_=n(70579);const A=e=>{var t;let{open:n,closeModalAndRefresh:s,buckets:i}=e;const c=(0,d.jL)(),[r,u]=(0,a.useState)(!1),[h,x]=(0,a.useState)(!0),[m,j]=(0,a.useState)([]),[b,v]=(0,a.useState)(""),[f,S]=(0,a.useState)(""),[A,E]=(0,a.useState)(""),[T,B]=(0,a.useState)(""),[w,R]=(0,a.useState)(!1),[L,N]=(0,a.useState)(!1),[I,F]=(0,a.useState)("0"),[M,z]=(0,a.useState)("0"),[U,K]=(0,a.useState)("expiry"),[V,D]=(0,a.useState)("0"),[O,P]=(0,a.useState)("0"),[J,W]=(0,a.useState)(!1),[q,$]=(0,a.useState)(null);(0,a.useEffect)((()=>{h&&p.F.admin.tiersList().then((e=>{const t=k()(e.data,"items",[]);if(null!==t&&t.length>=1){const e=t.map((e=>{const t=e.type,n=k()(e,"".concat(t,".name"),"");return{label:n,value:n}}));j(e),e.length>0&&E(e[0].value)}x(!1)})).catch((e=>{x(!1),c((0,o.Dy)((0,g.S)(e.error)))}))}),[h,c]),(0,a.useEffect)((()=>{let e=!0;"expiry"!==U&&""===A&&(e=!1),W(e)}),[U,V,O,A]);const G=e=>{let{errString:t}=e;switch(t){case"":return(0,_.jsx)(l.azJ,{sx:{paddingTop:5,color:"#42C91A"},children:(0,_.jsx)(l.C1y,{})});case"n/a":return null;default:if(t)return(0,_.jsx)(l.azJ,{sx:{paddingTop:5,color:"#C72C48"},children:(0,_.jsx)(l.m_M,{tooltip:t,placement:"top",children:(0,_.jsx)(l.cJw,{})})})}return null};return(0,_.jsx)(C.A,{modalOpen:n,onClose:()=>{s(!1)},title:"Set Lifecycle to multiple buckets",children:(0,_.jsx)(l.sQ4,{loadingStep:r||h,wizardSteps:[{label:"Lifecycle Configuration",componentRender:(0,_.jsx)(a.Fragment,{children:(0,_.jsxs)(l.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,_.jsx)(l.xA9,{item:!0,xs:12,children:(0,_.jsx)(l.EmB,{label:"Local Buckets to replicate",sx:{maxWidth:"440px",width:"100%"},children:i.join(", ")})}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsxs)("fieldset",{className:"inputItem",children:[(0,_.jsx)("legend",{children:"Lifecycle Configuration"}),(0,_.jsx)(l.z6M,{currentValue:U,id:"quota_type",name:"quota_type",label:"ILM Rule",onChange:e=>{K(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]}),"expiry"===U?(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(l.cl_,{type:"number",id:"expiry_days",name:"expiry_days",onChange:e=>{D(e.target.value)},label:"Expiry Days",value:V,min:"0"}),(0,_.jsx)(l.cl_,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:e=>{F(e.target.value)},label:"Non-current Expiration Days",value:I,min:"0"})]}):(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(l.cl_,{type:"number",id:"transition_days",name:"transition_days",onChange:e=>{P(e.target.value)},label:"Transition Days",value:O,min:"0"}),(0,_.jsx)(l.cl_,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:e=>{z(e.target.value)},label:"Non-current Transition Days",value:M,min:"0"}),(0,_.jsx)(l.cl_,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:e=>{B(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:T}),(0,_.jsx)(l.l6P,{label:"Storage Class",id:"storage_class",name:"storage_class",value:A,onChange:e=>{E(e)},options:m})]})]}),(0,_.jsxs)("fieldset",{className:"inputItem",children:[(0,_.jsx)("legend",{children:"File Configuration"}),(0,_.jsx)(l.cl_,{id:"prefix",name:"prefix",onChange:e=>{v(e.target.value)},label:"Prefix",value:b}),(0,_.jsx)(y.A,{name:"tags",label:"Tags",elements:f,onChange:e=>{S(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0}),(0,_.jsx)(l.dOG,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:w,onChange:e=>{R(e.target.checked)},label:"Expired Object Delete Marker"}),(0,_.jsx)(l.dOG,{value:"expired_delete_all",id:"expired_delete_all",name:"expired_delete_all",checked:L,onChange:e=>{N(e.target.checked)},label:"Expired All Versions"})]})]})}),buttons:[{type:"custom",label:"Create Rules",enabled:!h&&!r&&J,action:e=>{let t={};if("expiry"===U){t={...{expiry_days:parseInt(V)},noncurrentversion_expiration_days:parseInt(I)}}else{t={...{transition_days:parseInt(O)},noncurrentversion_transition_days:parseInt(M),noncurrentversion_transition_storage_class:T,storage_class:A}}const n={buckets:i,type:U,prefix:b,tags:f,expired_object_delete_marker:w,expired_object_delete_all:L,...t};p.F.buckets.addMultiBucketLifecycle(n).then((t=>{u(!1),$(t.data),e("++")})).catch((e=>{u(!1),c((0,o.Dy)((0,g.S)(e.error)))}))}}]},{label:"Results",componentRender:(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("h3",{children:"Multi Bucket lifecycle Assignments Results"}),(0,_.jsx)(l.xA9,{container:!0,children:(0,_.jsxs)(l.xA9,{item:!0,xs:12,children:[(0,_.jsx)("h4",{children:"Buckets Results"}),null===q||void 0===q||null===(t=q.results)||void 0===t?void 0:t.map((e=>(0,_.jsxs)(l.azJ,{sx:{display:"grid",gridTemplateColumns:"45px auto",alignItems:"center",justifyContent:"stretch"},children:[G({errString:e.error||""}),(0,_.jsx)("span",{children:e.bucketName})]})))]})})]}),buttons:[{type:"custom",label:"Done",enabled:!r,action:()=>s(!0)}]}],forModal:!0})})};var E=n(18218),T=n(94574),B=n(35475),w=n(56483),R=n(80882);const L=T.Ay.div((e=>{let{theme:t}=e;return{border:"".concat(k()(t,"borderColor","#eaeaea")," 1px solid"),borderRadius:3,padding:15,cursor:"pointer","&.disabled":{backgroundColor:k()(t,"signalColors.danger","red")},"&:hover":{backgroundColor:k()(t,"boxBackground","#FBFAFA")},"& .bucketTitle":{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:10,"& h1":{padding:0,margin:0,marginBottom:5,fontSize:22,color:k()(t,"screenTitle.iconColor","#07193E"),["@media (max-width: ".concat(l.nmC.md,"px)")]:{marginBottom:0}}},"& .bucketDetails":{display:"flex",gap:40,"& span":{fontSize:14},["@media (max-width: ".concat(l.nmC.md,"px)")]:{flexFlow:"column-reverse",gap:5}},"& .bucketMetrics":{display:"flex",alignItems:"center",marginTop:20,gap:25,borderTop:"".concat(k()(t,"borderColor","#E2E2E2")," 1px solid"),paddingTop:20,"& svg.bucketIcon":{color:k()(t,"screenTitle.iconColor","#07193E"),fill:k()(t,"screenTitle.iconColor","#07193E")},"& .metric":{"& .min-icon":{color:k()(t,"fontColor","#000"),width:13,marginRight:5}},"& .metricLabel":{fontSize:14,fontWeight:"bold",color:k()(t,"fontColor","#000")},"& .metricText":{fontSize:24,fontWeight:"bold"},"& .unit":{fontSize:12,fontWeight:"normal"},["@media (max-width: ".concat(l.nmC.md,"px)")]:{marginTop:8,paddingTop:8}}}})),N=e=>{var t,n;let{bucket:i,onSelect:o,selected:d,bulkSelect:u}=e;const h=(0,s.Zp)(),[x,p]=(0,a.useState)(!1),g=(0,w.nO)("".concat(i.size)||"0"),m=g.split(" ")[0],j=g.split(" ")[1],b=k()(i,"details.quota.quota","0"),v=(0,w.GT)(b,!0,!1),f=(0,c._)(i.name,r.pC[r.ac.BUCKET_ADMIN])&&!1;return(0,_.jsxs)(L,{onClick:()=>{!x&&h("/buckets/".concat(i.name,"/admin"))},id:"manageBucket-".concat(i.name),className:"bucket-item ".concat(f?"disabled":""),children:[(0,_.jsxs)(l.azJ,{className:"bucketTitle",children:[u&&(0,_.jsx)(l.azJ,{onClick:e=>{e.stopPropagation()},children:(0,_.jsx)(l.Sc0,{checked:d,id:"select-".concat(i.name),label:"",name:"select-".concat(i.name),onChange:e=>{o(e)},value:i.name})}),(0,_.jsxs)("h1",{children:[i.name," ",f]})]}),(0,_.jsxs)(l.azJ,{className:"bucketDetails",children:[(0,_.jsxs)("span",{id:"created-".concat(i.name),children:[(0,_.jsx)("strong",{children:"Created:"})," ",i.creation_date?new Date(i.creation_date).toString():"n/a"]}),(0,_.jsxs)("span",{id:"access-".concat(i.name),children:[(0,_.jsx)("strong",{children:"Access:"})," ",(e=>{var t,n,a,s,l,i;return null===(t=e.rw_access)||void 0===t||!t.read||null!==(n=e.rw_access)&&void 0!==n&&n.write?null!==(a=e.rw_access)&&void 0!==a&&a.read||null===(s=e.rw_access)||void 0===s||!s.write?null!==(l=e.rw_access)&&void 0!==l&&l.read&&null!==(i=e.rw_access)&&void 0!==i&&i.write?"R/W":"":"W":"R"})(i)]})]}),(0,_.jsxs)(l.azJ,{className:"bucketMetrics",children:[(0,_.jsx)(B.N_,{to:"/buckets/".concat(i.name,"/admin"),children:(0,_.jsx)(l.brV,{className:"bucketIcon",style:{height:48,width:48}})}),(0,_.jsxs)(l.xA9,{item:!0,className:"metric",onMouseEnter:()=>{var e;return(null===(e=i.details)||void 0===e?void 0:e.versioning)&&p(!0)},onMouseLeave:()=>{var e;return(null===(e=i.details)||void 0===e?void 0:e.versioning)&&p(!1)},children:[(null===(t=i.details)||void 0===t?void 0:t.versioning)&&(0,_.jsxs)(l.V7x,{content:R.p,placement:"top",children:[(0,_.jsx)(l.wNL,{})," "]}),!(null!==(n=i.details)&&void 0!==n&&n.versioning)&&(0,_.jsx)(l.wNL,{}),(0,_.jsx)("span",{className:"metricLabel",children:"Usage"}),(0,_.jsxs)("div",{className:"metricText",children:[m,(0,_.jsx)("span",{className:"unit",children:j}),"0"!==b&&(0,_.jsxs)(a.Fragment,{children:[" ","/ ",v.total,(0,_.jsx)("span",{className:"unit",children:v.unit})]})]})]}),(0,_.jsxs)(l.xA9,{item:!0,className:"metric",children:[(0,_.jsx)(l.Sxe,{}),(0,_.jsx)("span",{className:"metricLabel",children:"Objects"}),(0,_.jsx)("div",{className:"metricText",children:i.objects?(0,w.Af)(i.objects):0})]})]})]})};var I=n(23758);const F=e=>{let{open:t,closeModalAndRefresh:n,buckets:s}=e;const i=(0,d.jL)(),[c,r]=(0,a.useState)([]),[u,h]=(0,a.useState)(!1),[x,m]=(0,a.useState)(!1),[j,b]=(0,a.useState)(""),[v,f]=(0,a.useState)(""),[S,y]=(0,a.useState)(""),[A,E]=(0,a.useState)(""),[T,B]=(0,a.useState)(!0),[R,L]=(0,a.useState)("async"),[N,F]=(0,a.useState)("100"),[M,z]=(0,a.useState)("Gi"),[U,K]=(0,a.useState)("60"),[V,D]=(0,a.useState)([]),[O,P]=(0,a.useState)([]),[J,W]=(0,a.useState)([]),q=O.map((e=>({label:e,value:e})));(0,a.useEffect)((()=>{if(0===V.length){const e=[],t=[];s.forEach((n=>{e.push(n),t.push("")})),D(t),r(e)}}),[s,V.length]);const $=e=>{let{errString:t}=e;switch(t){case"":return(0,_.jsx)(l.azJ,{sx:{color:"#42C91A"},children:(0,_.jsx)(l.C1y,{})});case"n/a":return null;default:if(t)return(0,_.jsx)(l.azJ,{sx:{color:"#C72C48"},children:(0,_.jsx)(l.m_M,{tooltip:t,placement:"top",children:(0,_.jsx)(l.cJw,{})})})}return null},G=(e,t)=>{const n=[...V];n[e]=t,D(n)},Y=e=>{let t=[...c],n=[...V];null===e||void 0===e||e.forEach((e=>{const a=k()(e,"errorString","");if(!a||""===a){const a=t.indexOf(e.originBucket||"");t.splice(a,1),n.splice(a,1)}})),r(t),D(n)};return(0,_.jsx)(C.A,{modalOpen:t,onClose:()=>{n(!1)},title:"Set Multiple Bucket Replication",children:(0,_.jsx)(l.sQ4,{loadingStep:u||x,wizardSteps:[{label:"Remote Configuration",componentRender:(0,_.jsx)(a.Fragment,{children:(0,_.jsxs)(l.Hbc,{containerPadding:!1,withBorders:!1,children:[(0,_.jsx)(l.EmB,{label:"Local Buckets to replicate",sx:{maxWidth:"440px",width:"100%"},children:c.join(", ")}),(0,_.jsx)("h4",{children:"Remote Endpoint Configuration"}),(0,_.jsxs)("span",{style:{fontSize:14},children:["Please avoid the use of root credentials for this feature",(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]}),(0,_.jsx)(l.cl_,{id:"accessKey",name:"accessKey",onChange:e=>{b(e.target.value)},label:"Access Key",value:j}),(0,_.jsx)(l.cl_,{id:"secretKey",name:"secretKey",onChange:e=>{f(e.target.value)},label:"Secret Key",value:v}),(0,_.jsx)(l.cl_,{id:"targetURL",name:"targetURL",onChange:e=>{y(e.target.value)},placeholder:"play.min.io:9000",label:"Target URL",value:S}),(0,_.jsx)(l.dOG,{checked:T,id:"useTLS",name:"useTLS",label:"Use TLS",onChange:e=>{B(e.target.checked)},value:"yes"}),(0,_.jsx)(l.cl_,{id:"region",name:"region",onChange:e=>{E(e.target.value)},label:"Region",value:A}),(0,_.jsx)(l.l6P,{id:"replication_mode",name:"replication_mode",onChange:e=>{L(e)},label:"Replication Mode",value:R,options:[{label:"Asynchronous",value:"async"},{label:"Synchronous",value:"sync"}]}),"async"===R&&(0,_.jsx)(l.cl_,{type:"number",id:"bandwidth_scalar",name:"bandwidth_scalar",onChange:e=>{e.target.validity.valid&&F(e.target.value)},label:"Bandwidth",value:N,min:"0",pattern:"[0-9]*",overlayObject:(0,_.jsx)(I.A,{id:"quota_unit",onUnitChange:e=>{z(e)},unitSelected:M,unitsList:(0,w.l9)(["Ki"]),disabled:!1})}),(0,_.jsx)(l.cl_,{id:"healthCheck",name:"healthCheck",onChange:e=>{K(e.target.value)},label:"Health Check Duration",value:U})]})}),buttons:[{type:"custom",label:"Next",enabled:!x,action:e=>{const t={accessKey:j,secretKey:v,targetURL:S,useTLS:T};m(!0),p.F.listExternalBuckets.listExternalBuckets(t).then((t=>{const n=k()(t.data,"buckets",[]);if(n&&n.length>0){const e=n.map((e=>e.name));P(e)}e("++"),m(!1)})).catch((e=>{m(!1),i((0,o.Dy)((0,g.S)(e.error)))}))}}]},{label:"Bucket Assignments",componentRender:(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("h3",{children:"Remote Bucket Assignments"}),(0,_.jsx)("span",{style:{fontSize:14},children:"Please select / type the desired remote bucket were you want the local data to be replicated."}),(0,_.jsx)(l.azJ,{sx:{display:"grid",gridTemplateColumns:"auto auto 45px",alignItems:"center",justifyContent:"stretch","& .hide":{opacity:0,transitionDuration:"0.3s"}},children:c.map(((e,t)=>{const n=(e=>{if(J&&J.length>0){const t=J.find((t=>t.originBucket===e));if(t){return k()(t,"errorString","")||""}}return"n/a"})(e);return(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("div",{className:""===n?"hide":"",children:e}),(0,_.jsx)("div",{className:""===n?"hide":"",children:(s=t,O.length>0?(0,_.jsx)(a.Fragment,{children:(0,_.jsx)(l.l6P,{label:"",id:"assign-bucket-".concat(s),name:"assign-bucket-".concat(s),value:V[s],onChange:e=>{G(s,e)},options:q,disabled:u})}):(0,_.jsx)(a.Fragment,{children:(0,_.jsx)(l.cl_,{id:"assign-bucket-".concat(s),name:"assign-bucket-".concat(s),label:"",onChange:e=>{G(s,e.target.value)},value:V[s],disabled:u})}))}),(0,_.jsx)("div",{className:""===n?"hide":"",children:J&&J.length>0&&(0,_.jsx)($,{errString:n})})]},"buckets-assignation-".concat(t.toString(),"-").concat(e));var s}))})]}),buttons:[{type:"back",label:"Back",enabled:!0},{type:"next",label:"Create",enabled:!u,action:()=>{h(!0);const e=c.map(((e,t)=>({originBucket:e,destinationBucket:V[t]}))),t="".concat(T?"https://":"http://").concat(S),a=parseInt(U),s={accessKey:j,secretKey:v,targetURL:t,region:A,bucketsRelation:e,syncMode:R,bandwidth:"async"===R?parseInt((0,w.q5)(N,M,!0)):0,healthCheckPeriod:a};p.F.bucketsReplication.setMultiBucketReplication(s).then((e=>{h(!1);const t=e.data.replicationState;W(t);const a=null===t||void 0===t?void 0:t.filter((e=>e.errorString&&""!==e.errorString));0===(null===a||void 0===a?void 0:a.length)?n(!0):setTimeout((()=>{Y(t)}),500)})).catch((e=>{h(!1),i((0,o.Dy)((0,g.S)(e.error)))}))}}]}],forModal:!0})})},M=()=>{const e=(0,d.jL)(),t=(0,s.Zp)(),[n,S]=(0,a.useState)([]),[k,C]=(0,a.useState)(!0),[y,T]=(0,a.useState)(""),[B,w]=(0,a.useState)([]),[R,L]=(0,a.useState)(!1),[I,M]=(0,a.useState)(!1),[z,U]=(0,a.useState)(!1),[K,V]=(0,a.useState)(!1),D=(0,u.d4)(h.s$),O=!(null===D||void 0===D||!D.includes("object-browser-only"));(0,a.useEffect)((()=>{e((0,o.ph)("ob_bucket_list"))}),[e]),(0,a.useEffect)((()=>{if(k){(()=>{C(!0),p.F.buckets.listBuckets().then((t=>{t.data?(C(!1),S(t.data.buckets||[])):t.error&&(C(!1),e((0,o.C9)((0,g.S)(t.error))))}))})()}}),[k,e]);const P=n.filter((e=>""===y||e.name.indexOf(y)>=0)),J=n.length>0,W=e=>{const t=e.target,n=t.value,a=t.checked;let s=[...B];return a?s.push(n):s=s.filter((e=>e!==n)),w(s),s};(0,a.useEffect)((()=>{var e=!1;B.forEach((t=>{(0,E.A)(t,r.pC[r.ac.BUCKET_LIFECYCLE],!0)?U(!0):e=!0})),U(!e)}),[B]);const q=(0,E.A)("*",[r.OV.S3_CREATE_BUCKET]),$=(0,E.A)("*",[r.OV.S3_LIST_BUCKET,r.OV.S3_ALL_LIST_BUCKET]);return(0,_.jsxs)(a.Fragment,{children:[R&&(0,_.jsx)(F,{open:R,buckets:B,closeModalAndRefresh:e=>{L(!1),e&&w([])}}),I&&(0,_.jsx)(A,{buckets:B,closeModalAndRefresh:e=>{M(!1),e&&w([])},open:I}),!O&&(0,_.jsx)(x.A,{label:"Buckets",actions:(0,_.jsx)(m.A,{})}),(0,_.jsxs)(l.Mxu,{children:[(0,_.jsxs)(l.xA9,{item:!0,xs:12,sx:i._0.actionsTray,children:[O&&(0,_.jsx)(l.xA9,{item:!0,xs:!0,children:(0,_.jsx)(j.A,{marginRight:15,marginTop:10})}),J&&(0,_.jsx)(v.A,{onChange:T,placeholder:"Search Buckets",value:y,sx:{minWidth:380,["@media (max-width: ".concat(l.nmC.md,"px)")]:{minWidth:220}}}),(0,_.jsxs)(l.xA9,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:5},children:[!O&&(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)(b.A,{tooltip:J?K?"Unselect Buckets":"Select Multiple Buckets":"",children:(0,_.jsx)(l.$nd,{id:"multiple-bucket-seection",onClick:()=>{V(!K),w([])},icon:(0,_.jsx)(l.IN,{}),variant:K?"callAction":"regular",disabled:!J})}),K&&(0,_.jsx)(b.A,{tooltip:J?B.length===P.length?"Unselect All Buckets":"Select All Buckets":"",children:(0,_.jsx)(l.$nd,{id:"select-all-buckets",onClick:()=>{if(B.length===P.length)return void w([]);const e=P.map((e=>e.name));w(e)},icon:(0,_.jsx)(l.nhX,{}),variant:"regular"})}),(0,_.jsx)(b.A,{tooltip:J?z?0===B.length?K?"Please select at least one bucket on which to configure Lifecycle":"Use the Select Multiple Buckets button to choose buckets on which to configure Lifecycle":"Set Lifecycle":(0,r.vj)(r.pC[r.ac.BUCKET_LIFECYCLE],"configure lifecycle for the selected buckets"):"",children:(0,_.jsx)(l.$nd,{id:"set-lifecycle",onClick:()=>{M(!0)},icon:(0,_.jsx)(l.oVU,{}),variant:"regular",disabled:0===B.length||!z})}),(0,_.jsx)(b.A,{tooltip:J?0===B.length?K?"Please select at least one bucket on which to configure Replication":"Use the Select Multiple Buckets button to choose buckets on which to configure Replication":"Set Replication":"",children:(0,_.jsx)(l.$nd,{id:"set-replication",onClick:()=>{L(!0)},icon:(0,_.jsx)(l.hwo,{}),variant:"regular",disabled:0===B.length})})]}),(0,_.jsx)(b.A,{tooltip:"Refresh",children:(0,_.jsx)(l.$nd,{id:"refresh-buckets",onClick:()=>{C(!0)},icon:(0,_.jsx)(l.fNY,{}),variant:"regular"})}),!O&&(0,_.jsx)(b.A,{tooltip:q?"":(0,r.vj)([r.OV.S3_CREATE_BUCKET],"create a bucket"),children:(0,_.jsx)(l.$nd,{id:"create-bucket",onClick:()=>{t(r.zZ.ADD_BUCKETS)},icon:(0,_.jsx)(l.REV,{}),variant:"callAction",disabled:!q,label:"Create Bucket"})})]})]}),k&&(0,_.jsx)(l.z21,{}),!k&&(0,_.jsxs)(l.xA9,{item:!0,xs:12,sx:{marginTop:25,height:"calc(100vh - 211px)","&.isEmbedded":{height:"calc(100vh - 128px)"}},className:O?"isEmbedded":"",children:[0!==P.length&&(0,_.jsx)(f.A,{rowRenderFunction:e=>{const t=P[e]||null;return t?(0,_.jsx)(N,{bucket:t,onSelect:W,selected:B.includes(t.name),bulkSelect:K}):null},totalItems:P.length}),0===P.length&&""!==y&&(0,_.jsx)(l.xA9,{container:!0,children:(0,_.jsx)(l.xA9,{item:!0,xs:8,children:(0,_.jsx)(l.lVp,{iconComponent:(0,_.jsx)(l.brV,{}),title:"No Results",help:(0,_.jsx)(a.Fragment,{children:"No buckets match the filtering condition"})})})}),!J&&(0,_.jsx)(l.xA9,{container:!0,children:(0,_.jsx)(l.xA9,{item:!0,xs:8,children:(0,_.jsx)(l.lVp,{iconComponent:(0,_.jsx)(l.brV,{}),title:"Buckets",help:(0,_.jsxs)(a.Fragment,{children:["MinIO uses buckets to organize objects. A bucket is similar to a folder or directory in a filesystem, where each bucket can hold an arbitrary number of objects.",(0,_.jsx)("br",{}),$?"":(0,_.jsxs)(a.Fragment,{children:[(0,_.jsx)("br",{}),(0,r.vj)([r.OV.S3_LIST_BUCKET,r.OV.S3_ALL_LIST_BUCKET],"view the buckets on this server"),(0,_.jsx)("br",{})]}),(0,_.jsxs)(c.R,{scopes:[r.OV.S3_CREATE_BUCKET],resource:r.Ms,children:[(0,_.jsx)("br",{}),"To get started,\xa0",(0,_.jsx)(l.t53,{onClick:()=>{t(r.zZ.ADD_BUCKETS)},children:"Create a Bucket."})]})]})})})})]})]})]})}},23758:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(65043),s=n(89923),l=n(94574),i=n(33097),c=n.n(i),r=n(70579);const o=l.Ay.button((e=>{let{theme:t}=e;return{border:"1px solid ".concat(c()(t,"borderColor","#E2E2E2")),borderRadius:3,color:c()(t,"secondaryText","#5B5C5C"),backgroundColor:c()(t,"boxBackground","#FBFAFA"),fontSize:12}})),d=e=>{let{id:t,unitSelected:n,unitsList:l,disabled:i=!1,onUnitChange:c}=e;const[d,u]=a.useState(null),h=Boolean(d),x=e=>{u(null),""!==e&&c&&c(e)};return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(o,{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:e=>{u(e.currentTarget)},disabled:i,type:"button",children:n}),(0,r.jsx)(s.Vey,{id:"upload-main-menu",options:l,selectedOption:"",onSelect:e=>x(e),hideTriggerAction:()=>{x("")},open:h,anchorEl:d,anchorOrigin:"end"})]})}},96512:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(65043),s=n(33097),l=n.n(s),i=n(93950),c=n.n(i),r=n(89923),o=n(70579);const d=e=>{let{elements:t,name:n,label:s,tooltip:i="",keyPlaceholder:d="",valuePlaceholder:u="",onChange:h,withBorder:x=!1}=e;const[p,g]=(0,a.useState)([""]),[m,j]=(0,a.useState)([""]),b=(0,a.createRef)();(0,a.useEffect)((()=>{if(1===p.length&&""===p[0]&&1===m.length&&""===m[0]&&t&&""!==t){const e=t.split("&");let n=[],a=[];e.forEach((e=>{const t=e.split("=");2===t.length&&(n.push(t[0]),a.push(t[1]))})),n.push(""),a.push(""),g(n),j(a)}}),[p,m,t]),(0,a.useEffect)((()=>{const e=b.current;e&&p.length>1&&e.scrollIntoView(!1)}),[p]);const v=(0,a.useRef)(!0);(0,a.useLayoutEffect)((()=>{v.current?v.current=!1:k()}),[p,m]);const f=e=>{e.persist();let t=[...p];const n=l()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,g(t)},S=e=>{e.persist();let t=[...m];const n=l()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,j(t)},k=c()((()=>{let e="";p.forEach(((t,n)=>{if(p[n]&&m[n]){let a="".concat(t,"=").concat(m[n]);0!==n&&(a="&".concat(a)),e="".concat(e).concat(a)}})),h(e)}),500),C=m.map(((e,t)=>(0,o.jsxs)(r.xA9,{item:!0,xs:12,className:"lineInputBoxes inputItem",children:[(0,o.jsx)(r.cl_,{id:"".concat(n,"-key-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:p[t],onChange:f,index:t,placeholder:d}),(0,o.jsx)("span",{className:"queryDiv",children:":"}),(0,o.jsx)(r.cl_,{id:"".concat(n,"-value-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:m[t],onChange:S,index:t,placeholder:u,overlayIcon:t===m.length-1?(0,o.jsx)(r.REV,{}):null,overlayAction:()=>{(()=>{if(""!==p[p.length-1].trim()&&""!==m[m.length-1].trim()){const e=[...p],t=[...m];e.push(""),t.push(""),g(e),j(t)}})()}})]},"query-pair-".concat(n,"-").concat(t.toString()))));return(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)(r.xA9,{item:!0,xs:12,sx:{"& .lineInputBoxes":{display:"flex"},"& .queryDiv":{alignSelf:"center",margin:"-15px 4px 0",fontWeight:600}},className:"inputItem",children:[(0,o.jsxs)(r.l1Y,{children:[s,""!==i&&(0,o.jsx)(r.azJ,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,o.jsx)(r.m_M,{tooltip:i,placement:"top",children:(0,o.jsx)(r.NTw,{style:{width:13,height:13}})})})]}),(0,o.jsxs)(r.azJ,{withBorders:x,sx:{padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},children:[C,(0,o.jsx)("div",{ref:b})]})]})})}}}]);
//# sourceMappingURL=5064.ccf271db.chunk.js.map