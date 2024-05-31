"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[7052,5128],{12848:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(65043),o=n(33097),a=n.n(o),l=n(89923),r=n(70579);const s=e=>{let{elements:t,name:n,label:o,tooltip:s="",commonPlaceholder:c="",onChange:d,withBorder:u=!1}=e;const[p,h]=(0,i.useState)([""]),m=(0,i.createRef)();(0,i.useEffect)((()=>{if(1===p.length&&""===p[0]&&t&&""!==t){const e=t.split(",");e.push(""),h(e)}}),[t,p]),(0,i.useEffect)((()=>{if(p.length>1){const e=m.current;e&&e.scrollIntoView(!1)}}),[p,m]);const f=(0,i.useCallback)((e=>{d(e)}),[d]),x=(0,i.useRef)(!0);(0,i.useEffect)((()=>{if(x.current)return void(x.current=!1);const e=p.filter((e=>""!==e.trim())).join(",");f(e)}),[p]);const g=e=>{e.persist();let t=[...p];const n=a()(e.target,"dataset.index","0");t[parseInt(n)]=e.target.value,h(t)},v=p.map(((e,t)=>(0,r.jsx)(l.cl_,{id:"".concat(n,"-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:p[t],onChange:g,index:t,placeholder:c,overlayIcon:t===p.length-1?(0,r.jsx)(l.REV,{}):null,overlayAction:()=>{(e=>{if(""!==e[e.length-1].trim()){const t=[...e];t.push(""),h(t)}})(p)}},"csv-multi-".concat(n,"-").concat(t.toString()))));return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(l.azJ,{sx:{display:"flex"},className:"inputItem",children:[(0,r.jsxs)(l.l1Y,{sx:{alignItems:"flex-start"},children:[(0,r.jsx)("span",{children:o}),""!==s&&(0,r.jsx)(l.azJ,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,r.jsx)(l.m_M,{tooltip:s,placement:"top",children:(0,r.jsx)(l.azJ,{className:s,children:(0,r.jsx)(l.NTw,{})})})})]}),(0,r.jsxs)(l.azJ,{withBorders:u,sx:{width:"100%",overflowY:"auto",height:150,position:"relative"},children:[v,(0,r.jsx)("div",{ref:m})]})]})})}},67052:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var i=n(65043),o=n(89923),a=n(45479),l=n(73216),r=n(33097),s=n.n(r),c=n(22166),d=n(56629),u=n(53518),p=n(64159),h=n(20554),m=n(94141),f=n(77403),x=n(70579);const g=e=>{let{open:t,type:n,onCloseEndpoint:a}=e;const[l,r]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),[g,v]=(0,i.useState)(""),[b,y]=(0,i.useState)(!1),[j,k]=(0,i.useState)(["name","endpoint"]),[C,_]=(0,i.useState)(["name","endpoint","auth-token"]),E=(0,h.jL)(),S=e=>{_(C.filter((t=>t!==e)))},w=(e,t)=>{j.includes(e)&&t?k(j.filter((t=>t!==e))):t||j.includes(e)||k([...j,e])};let A="Add new Webhook",T=(0,x.jsx)(o.XC7,{});switch(n){case"logger_webhook":A="New Logger Webhook",T=(0,x.jsx)(o.D0K,{});break;case"audit_webhook":A="New Audit Webhook",T=(0,x.jsx)(o.rBG,{})}return(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)(m.A,{modalOpen:t,title:A,onClose:a,titleIcon:T,children:[(0,x.jsxs)(o.Hbc,{containerPadding:!1,withBorders:!1,children:[(0,x.jsx)(o.cl_,{id:"name",name:"name",onChange:e=>{S("name"),r(e.target.value),w("name",e.target.validity.valid)},error:j.includes("name")&&!C.includes("name")?"Invalid Name":"",label:"Name",value:l,pattern:"^(?=.*[a-zA-Z0-9]).{1,}$",required:!0}),(0,x.jsx)(o.cl_,{id:"endpoint",name:"endpoint",onChange:e=>{S("endpoint"),c(e.target.value),w("endpoint",e.target.validity.valid)},error:j.includes("endpoint")&&!C.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:s,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0}),(0,x.jsx)(o.cl_,{id:"auth-token",name:"auth-token",onChange:e=>{S("auth-token"),v(e.target.value)},label:"Auth Token",value:g})]}),b&&(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{marginBottom:10},children:(0,x.jsx)(o.z21,{})}),(0,x.jsxs)(o.xA9,{item:!0,xs:12,sx:f.Uz.modalButtonBar,children:[(0,x.jsx)(o.$nd,{id:"reset",type:"button",variant:"regular",disabled:b,onClick:a,label:"Cancel",sx:{marginRight:10}}),(0,x.jsx)(o.$nd,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:b||0!==j.length,label:"Save",onClick:()=>{if(b)return;if(0!==j.length)return;if(""===l.trim())return void k([...j,"name"]);if(""===s.trim())return void k([...j,"endpoint"]);y(!0);const e={key_values:[{key:"endpoint",value:s},{key:"auth_token",value:g}],arn_resource_id:l};d.F.configs.setConfig(n,e).then((e=>{y(!1),E((0,p.YR)(e.data.restart||!1)),e.data.restart||E((0,p.Hk)("Configuration saved successfully")),a(),E((0,p.TE)(!0))})).catch((e=>{y(!1),E((0,p.C9)((0,u.S)(e.error)))}))}})]})]})})};var v=n(58661);const b=e=>{let{modalOpen:t,onClose:n,selectedARN:a}=e;const[l,r]=(0,i.useState)(!1),s=(0,h.jL)();(0,i.useEffect)((()=>{l&&d.F.configs.resetConfig(a).then((()=>{r(!1),s((0,p.YR)(!0)),s((0,p.TE)(!0)),n()})).catch((e=>{r(!1),s((0,p.C9)((0,u.S)(e.error)))}))}),[l,s,n,a]);const c=!a.includes(":");let m="Are you sure you want to delete the Configured Endpoint";return c&&(m="Are you sure you want to reset the Default"),(0,x.jsx)(v.A,{title:c?"Reset Default Webhook":"Delete Webhook",confirmText:c?"Reset":"Delete",isOpen:t,isLoading:l,onConfirm:()=>{r(!0)},titleIcon:(0,x.jsx)(o.xWY,{}),onClose:n,confirmationContent:(0,x.jsxs)(i.Fragment,{children:["".concat(m," "),(0,x.jsx)("strong",{children:a}),"?"]})})},y=e=>{var t,n,l,r,s,c;let{open:g,type:v,endpointInfo:b,onCloseEndpoint:y}=e;const[j,k]=(0,i.useState)(""),[C,_]=(0,i.useState)(""),[E,S]=(0,i.useState)(""),[w,A]=(0,i.useState)("on"),[T,q]=(0,i.useState)(!1),[L,R]=(0,i.useState)([]),I=(0,h.jL)();(0,i.useEffect)((()=>{if(b){const e=b.key_values.find((e=>"endpoint"===e.key)),t=b.key_values.find((e=>"auth_token"===e.key)),n=b.key_values.find((e=>"enable"===e.key));let i=[];if(e){const t=e.value;""===t?i.push("endpoint"):_(t)}if(t){const e=t.value;""===e?i.push("auth-token"):S(e)}n&&"off"===n.value&&A(n.value),k(b.name||""),R(i)}}),[b]);const M=!j.includes(":"),B=b.key_values.filter((e=>!!e.env_override)),F=(0,a.uu)(B);let D="Edit Webhook",N=(0,x.jsx)(o.XC7,{});switch(v){case"logger_webhook":D="Edit ".concat(M?" the Default ":"","Logger Webhook"),N=(0,x.jsx)(o.D0K,{});break;case"audit_webhook":D="Edit ".concat(M?" the Default ":"","Audit Webhook"),N=(0,x.jsx)(o.rBG,{})}return B.length>0&&(D="View env variable Webhook"),(0,x.jsx)(i.Fragment,{children:(0,x.jsx)(m.A,{modalOpen:g,title:"".concat(D).concat(M?"":" - ".concat(j)),onClose:y,titleIcon:N,children:(0,x.jsx)(o.Hbc,{withBorders:!1,containerPadding:!1,children:B.length>0?(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(o.EmB,{label:"Enabled",sx:{width:"100%"},actionButton:(0,x.jsx)(o.xA9,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,x.jsx)(o.m_M,{tooltip:F.enable?"This value is set from the ".concat((null===(t=F.enable)||void 0===t?void 0:t.overrideEnv)||"N/A"," environment variable"):"",placement:"left",children:(0,x.jsx)(o.D0K,{style:{width:20}})})}),children:(null===(n=F.enable)||void 0===n?void 0:n.value)||"-"}),(0,x.jsx)(o.EmB,{label:"Endpoint",sx:{width:"100%"},actionButton:(0,x.jsx)(o.xA9,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,x.jsx)(o.m_M,{tooltip:F.enable?"This value is set from the ".concat((null===(l=F.endpoint)||void 0===l?void 0:l.overrideEnv)||"N/A"," environment variable"):"",placement:"left",children:(0,x.jsx)(o.D0K,{style:{width:20}})})}),children:(null===(r=F.endpoint)||void 0===r?void 0:r.value)||"-"}),(0,x.jsx)(o.EmB,{label:"Auth Token",sx:{width:"100%"},actionButton:(0,x.jsx)(o.xA9,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,x.jsx)(o.m_M,{tooltip:F.enable?"This value is set from the ".concat((null===(s=F.auth_token)||void 0===s?void 0:s.overrideEnv)||"N/A"," environment variable"):"",placement:"left",children:(0,x.jsx)(o.D0K,{style:{width:20}})})}),children:(null===(c=F.auth_token)||void 0===c?void 0:c.value)||"-"})]}):(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(o.dOG,{onChange:e=>{const t=e.target.checked?"on":"off";A(t)},id:"endpoint_enabled",name:"endpoint_enabled",label:"Enabled",value:"switch_on",checked:"on"===w}),(0,x.jsx)(o.cl_,{id:"endpoint",name:"endpoint",onChange:e=>{_(e.target.value),((e,t)=>{L.includes(e)&&t?R(L.filter((t=>t!==e))):t||L.includes(e)||R([...L,e])})("endpoint",e.target.validity.valid)},error:L.includes("endpoint")?"Invalid Endpoint set":"",label:"Endpoint",value:C,pattern:"^(https?):\\/\\/([a-zA-Z0-9\\-.]+)(:[0-9]+)?(\\/[a-zA-Z0-9\\-.\\/]*)?$",required:!0}),(0,x.jsx)(o.cl_,{id:"auth-token",name:"auth-token",onChange:e=>{S(e.target.value)},label:"Auth Token",value:E}),T&&(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{marginBottom:10},children:(0,x.jsx)(o.z21,{})}),(0,x.jsxs)(o.xA9,{item:!0,sx:f.Uz.modalButtonBar,children:[(0,x.jsx)(o.$nd,{id:"reset",type:"button",variant:"regular",disabled:T,onClick:y,label:"Cancel"}),(0,x.jsx)(o.$nd,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:T||0!==L.length,label:"Update",onClick:()=>{if(T)return;if(0!==L.length)return;if(!C||""===C.trim())return void R([...L,"endpoint"]);q(!0);const e={key_values:[{key:"endpoint",value:C},{key:"auth_token",value:E},{key:"enable",value:w}]};d.F.configs.setConfig(j,e).then((e=>{q(!1),I((0,p.YR)(e.data.restart||!1)),e.data.restart||I((0,p.Hk)("Configuration saved successfully")),y(),I((0,p.TE)(!0))})).catch((e=>{q(!1),I((0,p.C9)((0,u.S)(e.error)))}))}})]})]})})})})},j=e=>{let{setResetConfigurationOpen:t,WebhookSettingslist:n,type:a}=e;const[l,r]=(0,i.useState)(!1),[s,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)(!1),[p,h]=(0,i.useState)(""),[m,f]=(0,i.useState)(null),v=[{type:"view",onClick:e=>{e.name&&(u(!0),f(e))}},{type:"delete",onClick:e=>{e.name&&(c(!0),h(e.name))},disableButtonFunction:e=>{const t=n.find((t=>t.name===e));if(t){var i;const e=null===(i=t.key_values)||void 0===i?void 0:i.filter((e=>!!e.env_override));return!!(e&&e.length>0)}return!1}}];return(0,x.jsxs)(o.xA9,{container:!0,children:[l&&(0,x.jsx)(g,{open:l,type:a,onCloseEndpoint:()=>{r(!1)}}),s&&(0,x.jsx)(b,{modalOpen:s,onClose:()=>{c(!1),h("")},selectedARN:p,type:a}),d&&m&&(0,x.jsx)(y,{open:d,type:a,endpointInfo:m,onCloseEndpoint:()=>{u(!1),f(null)}}),(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,x.jsx)(o.$nd,{id:"newWebhook",variant:"callAction",onClick:()=>{r(!0)},children:"New Endpoint"})}),(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{padding:"0 10px 10px"},children:(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("h3",{children:"Currently Configured Endpoints"}),(0,x.jsx)(o.bQt,{columns:[{label:"Status",elementKey:"key_values",renderFunction:e=>{const t=e.find((e=>"enable"===e.key));if(null!==t&&void 0!==t&&t.env_override){const e=null!==t&&void 0!==t&&t.env_override.value&&"on"!==(null===t||void 0===t?void 0:t.env_override.value)&&null!==t&&void 0!==t&&t.env_override.value?"Disabled":"Enabled";return(0,x.jsxs)(o.xA9,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,x.jsx)(o.D0K,{style:{fill:"#052F51",width:"14px"}}),e?"Enabled":"Disabled"]})}return t&&"on"!==t.value&&t.value?(0,x.jsxs)(o.xA9,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,x.jsx)(o.lgW,{style:{fill:"#C83B51",width:14,height:14}}),"Disabled"]}):(0,x.jsxs)(o.xA9,{container:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"start",fontSize:"8px"},children:[(0,x.jsx)(o.JrA,{style:{fill:"#4CCB92",width:14,height:14}}),"Enabled"]})},width:50},{label:"Name",elementKey:"name"},{label:"Endpoint",elementKey:"key_values",renderFunction:e=>{const t=e.find((e=>"endpoint"===e.key));return t?t.env_override?t.env_override.value:t.value:""}}],itemActions:v,idField:"name",isLoading:!1,records:n,entityName:"endpoints",customPaperHeight:"calc(100vh - 750px)"})]})})]})};var k=n(5128),C=n(48967);const _=e=>{let{selectedConfiguration:t,className:n=""}=e;const r=(0,h.jL)(),m=(0,l.Zp)(),{pathname:f=""}=(0,l.zy)();let g=f.substring(f.lastIndexOf("/")+1);g="settings"===g?"region":g;const[v,b]=(0,i.useState)([]),[y,_]=(0,i.useState)(!1),[E,S]=(0,i.useState)([]),[w,A]=(0,i.useState)([]),[T,q]=(0,i.useState)(!1),[L,R]=(0,i.useState)({}),I=(0,c.d4)((e=>e.system.loadingConfigurations));(0,i.useEffect)((()=>{r((0,p.TE)(!0))}),[g,r]),(0,i.useEffect)((()=>{if(I){const e=s()(t,"configuration_id",!1);if(e)return void d.F.configs.configInfo(e).then((t=>{A(t.data);let n=s()(t.data[0],"key_values",[]);const i=a.PE[e].map((e=>{const t=n.find((t=>t.key===e.name)),i=(null===t||void 0===t?void 0:t.value)||"";return{key:e.name,value:e.customValueProcess?e.customValueProcess(i):i,env_override:null===t||void 0===t?void 0:t.env_override}}));S(i),R((0,a.uu)(i)),r((0,p.TE)(!1))})).catch((e=>{r((0,p.TE)(!1)),r((0,p.C9)((0,u.S)(e.error)))}));r((0,p.TE)(!1))}}),[I,t,r]),(0,i.useEffect)((()=>{if(y){const e={key_values:(0,a.Xm)(v)};d.F.configs.setConfig(t.configuration_id,e).then((e=>{_(!1),r((0,p.YR)(e.data.restart||!1)),r((0,p.TE)(!0)),e.data.restart||r((0,p.Hk)("Configuration saved successfully"))})).catch((e=>{_(!1),r((0,p.C9)((0,u.S)(e.error)))}))}}),[y,r,t,v,m]);const M=(0,i.useCallback)((e=>{b(e)}),[b]),B=()=>{q(!0)};return(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)("div",{onMouseMove:()=>{r((0,p.ph)("settings_".concat(t.configuration_label)))},children:[T&&(0,x.jsx)(C.A,{configurationName:t.configuration_id,closeResetModalAndRefresh:e=>{q(!1),r((0,p.YR)(e)),e&&r((0,p.TE)(!0))},resetOpen:T}),I?(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{textAlign:"center",paddingTop:"15px"},children:(0,x.jsx)(o.aHM,{})}):(0,x.jsx)(o.azJ,{sx:{padding:"15px",height:"100%"},children:"logger_webhook"===t.configuration_id||"audit_webhook"===t.configuration_id?(0,x.jsx)(j,{WebhookSettingslist:w,setResetConfigurationOpen:B,type:t.configuration_id}):(0,x.jsx)(i.Fragment,{children:(0,x.jsxs)("form",{noValidate:!0,onSubmit:e=>{e.preventDefault(),_(!0)},className:n,style:{height:"100%",display:"flex",flexFlow:"column"},children:[(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{display:"grid",gridTemplateColumns:"1fr",gap:"10px"},children:(0,x.jsx)(k.default,{fields:a.PE[t.configuration_id],onChange:M,defaultVals:E,overrideEnv:L})}),(0,x.jsxs)(o.xA9,{item:!0,xs:12,sx:{paddingTop:"15px ",textAlign:"right",maxHeight:"60px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:[(0,x.jsx)(o.$nd,{type:"button",id:"restore-defaults",variant:"secondary",onClick:B,label:"Restore Defaults"}),"\xa0 \xa0",(0,x.jsx)(o.$nd,{id:"save",type:"submit",variant:"callAction",disabled:y,label:"Save"})]})]})})})]})})},E=()=>{const{pathname:e=""}=(0,l.zy)(),t=e.substring(e.lastIndexOf("/")+1),n=a.Ck.find((e=>e.configuration_id===t)),i="".concat(t);return(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{height:"100%","& .identity_ldap, .api":{"& label":{minWidth:220,marginRight:0}}},children:n&&(0,x.jsx)(_,{className:"".concat(i),selectedConfiguration:n})})};var S=n(99161),w=n(48793),A=n(25448),T=n(56483),q=n(24241),L=n(6681);const R=()=>{const e=(0,c.wA)(),[t,n]=(0,A.A)((e=>{(0,T.OT)(new Blob([window.atob(e.value)]),"minio-server-config-".concat(q.c9.now().toFormat("LL-dd-yyyy-HH-mm-ss"),".conf"))}),(t=>{e((0,p.C9)(t))}));return(0,x.jsx)(L.A,{tooltip:"Warning! The resulting file will contain server configuration information in plain text",children:(0,x.jsx)(o.$nd,{id:"export-config",onClick:()=>{n("GET","api/v1/configs/export")},icon:(0,x.jsx)(o.JMY,{}),label:"Export",variant:"regular",disabled:t})})},I=()=>{const e=(0,l.Zp)(),t=(0,c.wA)(),n=(0,c.d4)((e=>e.system.serverNeedsRestart)),[a,r]=(0,i.useState)(void 0),s=(0,i.useRef)(null),[d,u]=(0,A.A)((e=>{t((0,p.YR)(!0)),r(!0)}),(e=>{t((0,p.C9)(e))}));(0,i.useEffect)((()=>{!n&&a&&e(0)}),[n,a,e]);return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("input",{type:"file",onChange:e=>{if(null===e||void 0===e||null===e.target.files||void 0===e.target.files)return;e.preventDefault();const[t]=e.target.files,n=new FormData,i=new Blob([t],{type:t.type});n.append("file",i,t.name),u("POST","api/v1/configs/import",n),e.target.value=""},style:{display:"none"},ref:s}),(0,x.jsx)(L.A,{tooltip:"The file must be valid and  should have valid config values",children:(0,x.jsx)(o.$nd,{id:"import-config",onClick:()=>{s&&s.current&&s.current.click()},icon:(0,x.jsx)(o.s3U,{}),label:"Import",variant:"regular",disabled:d})})]})};var M=n(55968);const B=["region"],F=["cache"],D=()=>{const{pathname:e=""}=(0,l.zy)(),t=(0,h.jL)(),n=(0,l.Zp)(),[r,s]=(0,i.useState)([]),c=(0,i.useCallback)((async()=>{d.F.configs.listConfig().then((e=>{var t;if(e&&null!==e&&void 0!==e&&e.data&&null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.configurations){var n;const t=((null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.configurations)||[]).reduce(((e,t)=>{let{key:n=""}=t;return F.includes(n)||e.push(n),e}),[]);s(t)}})).catch((e=>{t((0,p.C9)((0,u.S)(e)))}))}),[t]);(0,i.useEffect)((()=>{c(),t((0,p.ph)("settings_Region"))}),[]);const m=a.Ck.filter((e=>{let{configuration_id:t}=e;return B.includes(t)||r.includes(t)||!r.length}));return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(w.A,{label:"Configuration",actions:(0,x.jsx)(M.A,{})}),(0,x.jsxs)(o.Mxu,{children:[(0,x.jsxs)(o.xA9,{item:!0,xs:12,id:"settings-container",children:[(0,x.jsx)(o.lcx,{icon:(0,x.jsx)(o.Zes,{}),title:"MinIO Configuration:",actions:(0,x.jsxs)(o.azJ,{sx:{display:"flex",gap:10},children:[(0,x.jsx)(I,{}),(0,x.jsx)(R,{})]}),sx:{marginBottom:15}}),(0,x.jsx)(o.tUM,{currentTabOrPath:e,onTabClick:e=>{n(e)},useRouteTabs:!0,options:m.map((e=>{const{configuration_id:t,configuration_label:n,icon:i}=e;return{tabConfig:{id:"settings-tab-".concat(n),label:n,value:t,icon:i,to:(o=t,"".concat(S.zZ.SETTINGS,"/").concat(o))}};var o})),routes:(0,x.jsxs)(l.BV,{children:[m.map((e=>(0,x.jsx)(l.qh,{path:"".concat(e.configuration_id),element:(0,x.jsx)(E,{})},"configItem-".concat(e.configuration_label)))),(0,x.jsx)(l.qh,{path:"/",element:(0,x.jsx)(l.C5,{to:"".concat(S.zZ.SETTINGS,"/region")})})]})})]}),(0,x.jsx)(o.xA9,{item:!0,xs:12,sx:{paddingTop:"15px"},children:(0,x.jsx)(o.lVp,{title:"Learn more about Configurations",iconComponent:(0,x.jsx)(o.Zes,{}),help:(0,x.jsxs)(i.Fragment,{children:["MinIO supports a variety of configurations ranging from encryption, compression, region, notifications, etc.",(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),"You can learn more at our"," ",(0,x.jsx)("a",{href:"https://min.io/docs/minio/linux/reference/minio-mc-admin/mc-admin-config.html?ref=con#id4",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})]})]})}},45479:(e,t,n)=>{n.d(t,{Ck:()=>a,PE:()=>l,Qm:()=>s,Xm:()=>r,uu:()=>c});n(65043);var i=n(89923),o=n(70579);const a=[{icon:(0,o.jsx)(i.DzZ,{}),configuration_id:"region",configuration_label:"Region"},{icon:(0,o.jsx)(i.MZJ,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:(0,o.jsx)(i.loI,{}),configuration_id:"api",configuration_label:"API"},{icon:(0,o.jsx)(i.qm4,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:(0,o.jsx)(i.Pq3,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:(0,o.jsx)(i.RYV,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:(0,o.jsx)(i.D0K,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:(0,o.jsx)(i.rBG,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"},{icon:(0,o.jsx)(i.Dk$,{}),configuration_id:"audit_kafka",configuration_label:"Audit Kafka"}],l={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter custom notes if any"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt", ".log" or ".csv" -  you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*", "application/json" or "application/xml" - you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"List of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation, e.g. 2s",type:"duration",placeholder:"Enter Max Sleep Duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation, e.g. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay Multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379" - you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'Namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter custom notes if any"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_kafka:[{name:"enable",required:!1,label:"Enable",tooltip:"Enable audit_kafka target",type:"on|off",customValueProcess:e=>""===e||"on"===e?"on":"off"},{name:"brokers",required:!0,label:"Brokers",type:"csv",placeholder:"Enter Kafka Broker"},{name:"topic",required:!1,label:"Topic",type:"string",placeholder:"Enter Kafka Topic",tooltip:"Kafka topic used for bucket notifications"},{name:"sasl",required:!1,label:"Use SASL",tooltip:"Enable SASL (Simple Authentication and Security Layer) authentication",type:"on|off"},{name:"sasl_username",required:!1,label:"SASL Username",type:"string",placeholder:"Enter SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_password",required:!1,label:"SASL Password",type:"password",placeholder:"Enter SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_mechanism",required:!1,label:"SASL Mechanism",type:"string",placeholder:"Enter SASL Mechanism",tooltip:"SASL authentication mechanism"},{name:"tls",required:!1,label:"Use TLS",tooltip:"Enable TLS (Transport Layer Security)",type:"on|off"},{name:"tls_skip_verify",required:!1,label:"Skip TLS Verification",tooltip:"Trust server TLS without verification",type:"on|off"},{name:"client_tls_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_tls_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"tls_client_auth",required:!1,label:"TLS Client Auth",tooltip:"ClientAuth determines the Kafka server's policy for TLS client authorization",type:"string"},{name:"version",required:!1,label:"Version",tooltip:"Specify the version of the Kafka cluster",type:"string"}]},r=e=>e.filter((e=>""!==e.value)),s=(e,t,n)=>{const i=e.target,o=i.value;let a=[...n];return i.checked?a.push(o):a=a.filter((e=>e!==o)),t(a),a},c=e=>{let t={};return e.forEach((e=>{if(e.env_override){const n={value:e.env_override.value||"",overrideEnv:e.env_override.name||""};t={...t,[e.key]:n}}})),t}},5128:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,valueDef:()=>r});var i=n(65043),o=n(89923),a=n(12848),l=n(70579);const r=(e,t,n)=>{let i="on|off"===t?"off":"";if(n.length>0){const t=n.find((t=>t.key===e));t&&(i=t.value||"")}return i},s=e=>{let{onChange:t,fields:n,defaultVals:s,overrideEnv:c}=e;const[d,u]=(0,i.useState)([]),p=n||[],h=s||[];(0,i.useEffect)((()=>{const e=n.map((e=>({key:e.name,value:r(e.name,e.type,h)})));u(e)}),[n,s]),(0,i.useEffect)((()=>{t(d)}),[d]);const m=(e,t,n)=>{const i=[...d];t=t.trim(),i[n]={key:e,value:t},u(i)},f=(e,t)=>{const n=d[t];if(n){const t=null===c||void 0===c?void 0:c["".concat(n.key)];if(t)return(0,l.jsx)(o.EmB,{label:e.label,actionButton:(0,l.jsx)(o.xA9,{item:!0,sx:{display:"flex",justifyContent:"flex-end",paddingRight:"10px"},children:(0,l.jsx)(o.m_M,{tooltip:"This value is set from the ".concat(t.overrideEnv," environment variable"),placement:"left",children:(0,l.jsx)(o.D0K,{style:{width:20}})})}),sx:{width:"100%"},children:t.value})}switch(e.type){case"on|off":const i=n?n.value:"off";return(0,l.jsx)(o.dOG,{onChange:n=>{const i=n.target.checked?"on":"off";m(e.name,i,t)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"on"===i});case"csv":return(0,l.jsx)(a.A,{elements:n?n.value:"",label:e.label,name:e.name,onChange:n=>{let i="";i=Array.isArray(n)?n.join(","):n,m(e.name,i,t)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return(0,l.jsx)(o.hFj,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:n?n.value:"",onChange:n=>m(e.name,n.target.value,t),placeholder:e.placeholder});default:return(0,l.jsx)(o.cl_,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:n?n.value:"",onChange:n=>m(e.name,n.target.value,t),placeholder:e.placeholder})}};return(0,l.jsx)(o.Hbc,{withBorders:!1,containerPadding:!1,children:p.map(((e,t)=>(0,l.jsx)(i.Fragment,{children:f(e,t)},e.name)))})}},48967:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(65043),o=n(56629),a=n(53518),l=n(58661),r=n(89923),s=n(64159),c=n(20554),d=n(70579);const u=e=>{let{configurationName:t,closeResetModalAndRefresh:n,resetOpen:u}=e;const p=(0,c.jL)(),[h,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{h&&o.F.configs.resetConfig(t).then((()=>{m(!1),n(!0)})).catch((e=>{m(!1),p((0,s.C9)((0,a.S)(e.error)))}))}),[n,t,h,p]);return(0,d.jsx)(l.A,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:u,titleIcon:(0,d.jsx)(r.xWY,{}),isLoading:h,onConfirm:()=>{m(!0)},onClose:()=>{n(!1)},confirmationContent:(0,d.jsxs)(i.Fragment,{children:[h&&(0,d.jsx)(r.z21,{}),(0,d.jsxs)(i.Fragment,{children:["Are you sure you want to restore these configurations to default values?",(0,d.jsx)("br",{}),(0,d.jsx)("b",{style:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},children:"Please note that this may cause your system to not be accessible"})]})]})})}}}]);
//# sourceMappingURL=7052.1e7e2b40.chunk.js.map