"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[2138],{48967:(e,i,t)=>{t.d(i,{A:()=>p});var r=t(65043),n=t(56629),s=t(53518),l=t(58661),a=t(89923),o=t(64159),c=t(20554),d=t(70579);const p=e=>{let{configurationName:i,closeResetModalAndRefresh:t,resetOpen:p}=e;const x=(0,c.jL)(),[u,h]=(0,r.useState)(!1);(0,r.useEffect)((()=>{u&&n.F.configs.resetConfig(i).then((()=>{h(!1),t(!0)})).catch((e=>{h(!1),x((0,o.C9)((0,s.S)(e.error)))}))}),[t,i,u,x]);return(0,d.jsx)(l.A,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:p,titleIcon:(0,d.jsx)(a.xWY,{}),isLoading:u,onConfirm:()=>{h(!0)},onClose:()=>{t(!1)},confirmationContent:(0,d.jsxs)(r.Fragment,{children:[u&&(0,d.jsx)(a.z21,{}),(0,d.jsxs)(r.Fragment,{children:["Are you sure you want to restore these configurations to default values?",(0,d.jsx)("br",{}),(0,d.jsx)("b",{style:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},children:"Please note that this may cause your system to not be accessible"})]})]})})}},38392:(e,i,t)=>{t.d(i,{A:()=>a});var r=t(65043),n=t(89923),s=t(70579);const l=e=>{let{icon:i,description:t}=e;return(0,s.jsxs)(n.azJ,{sx:{display:"flex","& .min-icon":{marginRight:"10px",height:"23px",width:"23px",marginBottom:"10px"}},children:[i," ",(0,s.jsx)("div",{style:{fontSize:"14px",fontStyle:"italic",color:"#5E5E5E"},children:t})]})},a=e=>{let{helpText:i,docLink:t,docText:a,contents:o}=e;return(0,s.jsxs)(n.azJ,{sx:{flex:1,border:"1px solid #eaeaea",borderRadius:"2px",display:"flex",flexFlow:"column",padding:"20px"},children:[(0,s.jsxs)(n.azJ,{sx:{fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center",marginBottom:"16px",paddingBottom:"20px","& .min-icon":{height:"21px",width:"21px",marginRight:"15px"}},children:[(0,s.jsx)(n.nag,{}),(0,s.jsx)("div",{children:i})]}),(0,s.jsxs)(n.azJ,{sx:{fontSize:"14px",marginBottom:"15px"},children:[o.map(((e,i)=>(0,s.jsxs)(r.Fragment,{children:[e.icon&&(0,s.jsx)(n.azJ,{sx:{paddingBottom:"20px"},children:(0,s.jsx)(l,{icon:e.icon,description:e.iconDescription})}),(0,s.jsx)(n.azJ,{sx:{paddingBottom:"20px"},children:e.text})]},"feature-item-".concat(i)))),(0,s.jsx)(n.azJ,{sx:{paddingBottom:"20px"},children:(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener",children:a})})]})]})}},2138:(e,i,t)=>{t.r(i),t.d(i,{default:()=>D});var r=t(65043),n=t(89923),s=t(56629),l=t(53518),a=t(20554),o=t(64159),c=t(42349),d=t(48793),p=t(38392),x=t(22166),u=t(24241),h=t(70579);const m=e=>{let{name:i}=e;return(0,h.jsxs)("h4",{children:[(0,h.jsx)(n.FUY,{style:{transform:"rotateZ(90deg)"}}),i]})},g=e=>{let{blockName:i,results:t}=e;return(0,h.jsxs)(r.Fragment,{children:[(0,h.jsxs)("strong",{children:[i,":"]}),(0,h.jsx)("ul",{children:t.map(((e,t)=>(0,h.jsx)("li",{children:e},"policy-".concat(i,"-").concat(t))))})]})},f=e=>{var i,t,s,l,a,o;let{entityName:c,results:d}=e,p=0;switch(c){case"Group":p=(null===(i=d.groups)||void 0===i?void 0:i.length)||0;break;case"Policy":p=(null===(t=d.policies)||void 0===t?void 0:t.length)||0;break;case"User":p=(null===(s=d.users)||void 0===s?void 0:s.length)||0}return(0,h.jsxs)(n.azJ,{className:"resultElement",sx:{marginTop:50,"&:first-of-type":{marginTop:0}},children:[(0,h.jsxs)(n._xt,{separator:!0,sx:{fontSize:12},icon:(0,h.jsx)(n.Xk0,{style:{width:17,height:17}}),actions:(0,h.jsxs)(n.azJ,{sx:{fontSize:14},children:[(0,h.jsx)("strong",{children:p})," Entit",1===p?"y":"ies"," Found"]}),children:[c," Mappings"]}),(0,h.jsxs)(n.azJ,{className:"resultsList",sx:{h4:{borderBottom:"#e2e2e2 1px solid",padding:"12px 0",margin:0,marginBottom:15,display:"flex",alignItems:"center","& svg":{marginRight:10,fill:"#3C77A7"}}},children:["Group"===c&&(null===(l=d.groups)||void 0===l?void 0:l.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(m,{name:e.group||""}),e.policies&&(0,h.jsx)(g,{blockName:"Policies",results:e.policies})]},"policy-res-".concat(i))))),"User"===c&&(null===(a=d.users)||void 0===a?void 0:a.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(m,{name:e.user||""}),e.policies&&(0,h.jsx)(g,{blockName:"Policies",results:e.policies})]},"users-res-".concat(i))))),"Policy"===c&&(null===(o=d.policies)||void 0===o?void 0:o.map(((e,i)=>(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(m,{name:e.policy||""}),e.groups&&(0,h.jsx)(g,{blockName:"Groups",results:e.groups}),e.users&&(0,h.jsx)(g,{blockName:"Users",results:e.users})]},"policy-map-".concat(i)))))]})]})};var y=t(42967);const j=()=>{const e=(0,a.jL)(),[i,t]=(0,r.useState)(!1),[c,d]=(0,r.useState)([""]),[p,m]=(0,r.useState)([""]),[g,j]=(0,r.useState)(null),b=(0,x.d4)((e=>e.createUser.selectedPolicies));return(0,h.jsxs)(n.azJ,{sx:{marginTop:15,paddingTop:0},children:[(0,h.jsxs)(n.xA9,{container:!0,sx:{marginTop:5},children:[(0,h.jsxs)(n.xA9,{item:!0,sm:12,md:6,lg:5,sx:{padding:10,paddingTop:0},children:[(0,h.jsx)(n._xt,{children:"Query Filters"}),(0,h.jsxs)(n.azJ,{sx:{padding:"0 10px",display:"flex",flexDirection:"column",gap:40},children:[(0,h.jsxs)(n.azJ,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)(n.azJ,{sx:{display:"flex"},children:(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Users"})}),(0,h.jsx)(n.azJ,{sx:{overflowY:"auto",minHeight:50,maxHeight:250,"& > div > div":{width:"100%"}},children:c.map(((e,i)=>(0,h.jsx)(n.cl_,{id:"search-user-".concat(i),value:e,onChange:e=>{const t=[...c];t[i]=e.target.value,d(t)},overlayIcon:c.length===i+1?(0,h.jsx)(n.REV,{}):(0,h.jsx)(n.YPx,{}),overlayAction:()=>{((e,i)=>{if(e){const e=[...c,""];return void d(e)}const t=c.filter(((e,t)=>t!==i));d(t)})(c.length===i+1,i)}},"search-user-".concat(i))))})]}),(0,h.jsxs)(n.azJ,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Groups"}),(0,h.jsx)(n.azJ,{sx:{overflowY:"auto",minHeight:50,maxHeight:"calc(100vh - 340px)","& > div > div":{width:"100%"}},children:p.map(((e,i)=>(0,h.jsx)(n.cl_,{id:"search-group-".concat(i),value:e,onChange:e=>{const t=[...p];t[i]=e.target.value,m(t)},overlayIcon:p.length===i+1?(0,h.jsx)(n.REV,{}):(0,h.jsx)(n.YPx,{}),overlayAction:()=>{((e,i)=>{if(e){const e=[...p,""];return void m(e)}const t=p.filter(((e,t)=>t!==i));m(t)})(p.length===i+1,i)}},"search-group-".concat(i))))})]}),(0,h.jsxs)(n.azJ,{sx:{padding:"10px 26px"},withBorders:!0,children:[(0,h.jsx)("h4",{style:{margin:0,marginBottom:10,fontSize:14},children:"Policies"}),(0,h.jsx)(n.azJ,{sx:{minHeight:265,maxHeight:"calc(100vh - 740px)"},children:(0,h.jsx)(y.A,{selectedPolicy:b,noTitle:!0})})]})]})]}),(0,h.jsx)(n.xA9,{item:!0,sm:12,md:6,lg:7,sx:{padding:10,paddingTop:0,display:"flex",flexDirection:"column"},children:i?(0,h.jsx)(n.azJ,{sx:{textAlign:"center"},children:(0,h.jsx)(n.aHM,{})}):(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n._xt,{actions:(0,h.jsx)(n.azJ,{sx:{display:"flex",flexDirection:"row",alignItems:"center",fontSize:14},children:null!==g&&void 0!==g&&g.timestamp?(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.b1c,{style:{width:14,height:14,marginRight:5,fill:"#BEBFBF"}}),u.c9.fromISO(g.timestamp).toFormat("D HH:mm:ss")]}):""}),children:"Query Results"}),g?(0,h.jsxs)(n.azJ,{sx:{backgroundColor:"#FBFAFA",padding:"8px 22px",flexGrow:1,overflowY:"auto"},children:[!g.groups&&!g.users&&!g.policies&&(0,h.jsx)(n.azJ,{sx:{textAlign:"center"},children:(0,h.jsx)("h4",{children:"No Results Available"})}),!!g.groups&&(0,h.jsx)(f,{results:g,entityName:"Group"}),!!g.users&&(0,h.jsx)(f,{results:g,entityName:"User"}),!!g.policies&&(0,h.jsx)(f,{results:g,entityName:"Policy"})]}):(0,h.jsx)(n.azJ,{sx:{textAlign:"center"},children:"No query results yet"})]})})]}),(0,h.jsx)(n.xA9,{container:!0,children:(0,h.jsx)(n.xA9,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-start",marginTop:45,padding:"0 20px"},children:(0,h.jsx)(n.$nd,{id:"search-entity",type:"button",variant:"callAction",onClick:()=>{t(!0);let i={},r=b.filter((e=>""!==e)),n=c.filter((e=>""!==e)),a=p.filter((e=>""!==e));r.length>0&&(i.policies=r),n.length>0&&(i.users=n),a.length>0&&(i.groups=a),s.F.ldapEntities.getLdapEntities(i).then((e=>{j(e.data),t(!1)})).catch((i=>{e((0,o.C9)((0,l.S)(i.error))),t(!1)}))},icon:(0,h.jsx)(n.WIv,{}),children:"Search"})})})]})};var b=t(48967),v=t(55968);const C=["server_addr","lookup_bind_dn","user_dn_search_base_dn","user_dn_search_filter"],D=()=>{const e=(0,a.jL)(),i=c.Lq,[t,x]=(0,r.useState)(!0),[u,m]=(0,r.useState)(!1),[g,f]=(0,r.useState)(!1),[y,D]=(0,r.useState)({}),[_,A]=(0,r.useState)({}),[k,S]=(0,r.useState)(void 0),[w,P]=(0,r.useState)(!1),[E,I]=(0,r.useState)(!1),[O,z]=(0,r.useState)("configuration"),[L,F]=(0,r.useState)(!1),N=()=>{w&&k&&q(k),P(!w)},q=e=>{let i={},t={};if(e&&e.length>0){const r=e.find((e=>"enable"===e.key));let n=0,s=0;e.forEach((e=>{e.env_override?(i[e.key]=e.env_override.value,t[e.key]=e.env_override.name):i[e.key]=e.value,C.includes(e.key)&&(e.value&&""!==e.value&&"off"!==e.value||e.env_override&&""!==e.env_override.value&&"off"!==e.env_override.value)&&n++,C.includes(e.key)&&e.env_override&&s++}));const l=0!==n;l&&(r&&"off"!==r.value||!r)?m(!0):m(!1),0!==s&&F(!0),f(l)}A(t),D(i)};(0,r.useEffect)((()=>{t&&s.F.configs.configInfo("identity_ldap").then((e=>{e.data.length>0&&(S(e.data[0].key_values),q(e.data[0].key_values||[])),x(!1)})).catch((i=>{x(!1),e((0,o.C9)((0,l.S)(i.error)))}))}),[e,t]);return(0,r.useEffect)((()=>{e((0,o.ph)("LDAP"))}),[]),(0,h.jsxs)(n.xA9,{item:!0,xs:12,children:[E&&(0,h.jsx)(b.A,{configurationName:"identity_ldap",closeResetModalAndRefresh:async i=>{I(!1),i&&(e((0,o.YR)(i)),S(void 0),D({}),m(!1),f(!1),P(!1))},resetOpen:E}),(0,h.jsx)(d.A,{label:"LDAP",actions:(0,h.jsx)(v.A,{})}),(0,h.jsx)(n.Mxu,{variant:"constrained",children:(0,h.jsx)(n.tUM,{horizontal:!0,options:[{tabConfig:{id:"configuration",label:"Configuration"},content:(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.lcx,{icon:null,title:w?"Edit Configuration":"",actions:w?null:(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)(n.m_M,{tooltip:L?"Configuration cannot be edited in this module as LDAP environment variables are set for this MinIO instance.":"",children:(0,h.jsx)(n.$nd,{id:"edit",type:"button",variant:"callAction",icon:(0,h.jsx)(n.qUP,{}),onClick:N,label:"Edit Configuration",disabled:t||L})}),g&&(0,h.jsx)(n.m_M,{tooltip:L?"Configuration cannot be disabled / enabled in this module as LDAP environment variables are set for this MinIO instance.":"",children:(0,h.jsx)(n.$nd,{id:"is-configuration-enabled",onClick:()=>(i=>{const t={key_values:[{key:"enable",value:i?"on":"off"}]};s.F.configs.setConfig("identity_ldap",t).then((i=>{m(!u),e((0,o.YR)(i.data.restart||!1)),i.data.restart||e((0,o.Hk)("Configuration saved successfully"))})).catch((i=>{e((0,o.C9)((0,l.S)(i.error)))}))})(!u),label:u?"Disable LDAP":"Enable LDAP",variant:u?"secondary":"regular",disabled:L})}),(0,h.jsx)(n.$nd,{id:"refresh-idp-config",onClick:()=>x(!0),label:"Refresh",icon:(0,h.jsx)(n.fNY,{})})]})}),(0,h.jsx)("br",{}),t?(0,h.jsx)(n.azJ,{sx:{display:"flex",justifyContent:"center",marginTop:10},children:(0,h.jsx)(n.aHM,{})}):(0,h.jsx)(r.Fragment,{children:w?(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(n.Hbc,{helpBox:(0,h.jsx)(p.A,{helpText:"Learn more about LDAP Configurations",contents:c.iT,docLink:"https://min.io/docs/minio/linux/operations/external-iam.html?ref=con#minio-external-iam-ad-ldap",docText:"Learn more about LDAP Configurations"}),children:[w&&g?(0,h.jsx)(n.azJ,{sx:{marginBottom:15},children:(0,h.jsx)(n.lVp,{title:(0,h.jsx)(n.azJ,{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},children:"Lookup Bind Password must be re-entered to change LDAP configurations"}),iconComponent:(0,h.jsx)(n.cJw,{}),help:null})}):null,Object.entries(i).map((e=>{let[i,t]=e;return((e,i)=>"toggle"===i.type?(0,h.jsx)(n.dOG,{indicatorLabels:["Enabled","Disabled"],checked:"on"===y[e],value:"is-field-enabled",id:"is-field-enabled",name:"is-field-enabled",label:i.label,tooltip:i.tooltip,onChange:i=>D({...y,[e]:i.target.checked?"on":"off"}),description:"",disabled:!w},e):(0,h.jsx)(n.cl_,{id:e,required:i.required,name:e,label:i.label,tooltip:i.tooltip,error:i.hasError(y[e],w),value:y[e]?y[e]:"",onChange:i=>D({...y,[e]:i.target.value}),placeholder:i.placeholder,disabled:!w,type:i.type},e))(i,t)})),(0,h.jsxs)(n.azJ,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",marginTop:"20px",gap:"15px"},children:[w&&g&&(0,h.jsx)(n.$nd,{id:"clear",type:"button",variant:"secondary",onClick:()=>I(!0),label:"Reset Configuration"}),(0,h.jsx)(n.$nd,{id:"cancel",type:"button",variant:"regular",onClick:N,label:"Cancel"}),(0,h.jsx)(n.$nd,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:t||!(()=>{for(const[e,t]of Object.entries(i))if(t.required&&(void 0===y[e]||null===y[e]||""===y[e]))return!1;return!0})(),label:"Save",onClick:()=>{const t=Object.keys(i).map((e=>({key:e,value:y[e]})));s.F.configs.setConfig("identity_ldap",{key_values:t}).then((i=>{P(!1),S(t),q(t),e((0,o.YR)(i.data.restart||!1)),D({...y,lookup_bind_password:""}),i.data.restart||e((0,o.Hk)("Configuration saved successfully"))})).catch((i=>{e((0,o.C9)((0,l.S)(i.error)))}))}})]})]})}):(0,h.jsx)(r.Fragment,{children:(0,h.jsxs)(n.azJ,{sx:{display:"grid",gridTemplateColumns:"1fr",gridAutoFlow:"dense",gap:3,padding:"15px",border:"1px solid #eaeaea","@media (min-width: 576px)":{gridTemplateColumns:"2fr 1fr",gridAutoFlow:"row"}},children:[(0,h.jsx)(n.mZW,{label:"LDAP Enabled",value:u?"Yes":"No"}),g&&(0,h.jsx)(r.Fragment,{children:Object.entries(i).map((e=>{let[i,t]=e;if(!t.editOnly){let e=t.label,r=y[i]?y[i]:"";return _[i]&&(e=(0,h.jsxs)(n.azJ,{sx:{display:"flex",alignItems:"center",gap:5,"& .min-icon":{height:20,width:20},"& span":{height:20,display:"flex",alignItems:"center"}},children:[(0,h.jsx)("span",{children:t.label}),(0,h.jsx)(n.m_M,{tooltip:"This value is set from the ".concat(_[i]," environment variable"),placement:"right",children:(0,h.jsx)("span",{className:"muted",children:(0,h.jsx)(n.D0K,{})})})]}),r=(0,h.jsx)("i",{children:(0,h.jsx)("span",{className:"muted",children:r})})),(0,h.jsx)(n.mZW,{label:e,value:r},i)}return null}))})]})})})]})},{tabConfig:{id:"entities",label:"Entities",disabled:!g||!u},content:(0,h.jsx)(r.Fragment,{children:g&&(0,h.jsx)(n.azJ,{children:(0,h.jsx)(j,{})})})}],currentTabOrPath:O,onTabClick:e=>{z(e),P(!1)}})})]})}},42349:(e,i,t)=>{t.d(i,{G5:()=>l,Lq:()=>o,Vb:()=>a,iT:()=>s});var r=t(89923),n=t(70579);const s=[{text:"MinIO supports using an Active Directory or LDAP (AD/LDAP) service for external management of user identities. Configuring an external IDentity Provider (IDP) enables Single-Sign On (SSO) workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:(0,n.jsx)(r.Tir,{}),iconDescription:"Create Configurations"},{text:"MinIO queries the configured Active Directory / LDAP server to verify the credentials specified by the application and optionally return a list of groups in which the user has membership. MinIO supports two modes (Lookup-Bind Mode and Username-Bind Mode) for performing these queries",icon:null,iconDescription:""},{text:"MinIO recommends using Lookup-Bind mode as the preferred method for verifying AD/LDAP credentials. Username-Bind mode is a legacy method retained for backwards compatibility only.",icon:null,iconDescription:""}],l=[{text:"MinIO supports using an OpenID Connect (OIDC) compatible IDentity Provider (IDP) such as Okta, KeyCloak, Dex, Google, or Facebook for external management of user identities.",icon:(0,n.jsx)(r.XAi,{}),iconDescription:"Create Configurations"},{text:"Configuring an external IDP enables Single-Sign On workflows, where applications authenticate against the external IDP before accessing MinIO.",icon:null,iconDescription:""}],a={config_url:{required:!0,hasError:(e,i)=>!e&&i?"Config URL is required":"",label:"Config URL",tooltip:"Config URL for identity provider configuration",placeholder:"https://identity-provider-url/.well-known/openid-configuration",type:"text",editOnly:!1},client_id:{required:!0,hasError:(e,i)=>!e&&i?"Client ID is required":"",label:"Client ID",tooltip:"Identity provider Client ID",placeholder:"Enter Client ID",type:"text",editOnly:!1},client_secret:{required:!0,hasError:(e,i)=>!e&&i?"Client Secret is required":"",label:"Client Secret",tooltip:"Identity provider Client Secret",placeholder:"Enter Client Secret",type:"password",editOnly:!0},claim_name:{required:!1,label:"Claim Name",tooltip:"Claim from which MinIO will read the policy or role to use",placeholder:"Enter Claim Name",type:"text",hasError:(e,i)=>"",editOnly:!1},display_name:{required:!1,label:"Display Name",tooltip:"",placeholder:"Enter Display Name",type:"text",hasError:(e,i)=>"",editOnly:!1},claim_prefix:{required:!1,label:"Claim Prefix",tooltip:"",placeholder:"Enter Claim Prefix",type:"text",hasError:(e,i)=>"",editOnly:!1},scopes:{required:!1,label:"Scopes",tooltip:"",placeholder:"openid,profile,email",type:"text",hasError:(e,i)=>"",editOnly:!1},redirect_uri:{required:!1,label:"Redirect URI",tooltip:"",placeholder:"https://console-endpoint-url/oauth_callback",type:"text",hasError:(e,i)=>"",editOnly:!1},role_policy:{required:!1,label:"Role Policy",tooltip:"",placeholder:"readonly",type:"text",hasError:(e,i)=>"",editOnly:!1},claim_userinfo:{required:!1,label:"Claim User Info",tooltip:"",placeholder:"Claim User Info",type:"toggle",hasError:(e,i)=>"",editOnly:!1},redirect_uri_dynamic:{required:!1,label:"Redirect URI Dynamic",tooltip:"",placeholder:"Redirect URI Dynamic",type:"toggle",hasError:(e,i)=>"",editOnly:!1}},o={server_insecure:{required:!0,hasError:(e,i)=>!e&&i?"Server Address is required":"",label:"Server Insecure",tooltip:"Disable SSL certificate verification ",placeholder:"myldapserver.com:636",type:"toggle",editOnly:!1},server_addr:{required:!0,hasError:(e,i)=>!e&&i?"Server Address is required":"",label:"Server Address",tooltip:'AD/LDAP server address e.g. "myldapserver.com:636"',placeholder:"myldapserver.com:636",type:"text",editOnly:!1},lookup_bind_dn:{required:!0,hasError:(e,i)=>!e&&i?"Lookup Bind DN is required":"",label:"Lookup Bind DN",tooltip:"DN (Distinguished Name) for LDAP read-only service account used to perform DN and group lookups",placeholder:"cn=admin,dc=min,dc=io",type:"text",editOnly:!1},lookup_bind_password:{required:!0,hasError:(e,i)=>!e&&i?"Lookup Bind Password is required":"",label:"Lookup Bind Password",tooltip:"Password for LDAP read-only service account used to perform DN and group lookups",placeholder:"admin",type:"password",editOnly:!0},user_dn_search_base_dn:{required:!0,hasError:(e,i)=>!e&&i?"User DN Search Base DN is required":"",label:"User DN Search Base",tooltip:"",placeholder:"DC=example,DC=net",type:"text",editOnly:!1},user_dn_search_filter:{required:!0,hasError:(e,i)=>!e&&i?"User DN Search Filter is required":"",label:"User DN Search Filter",tooltip:"",placeholder:"(sAMAcountName=%s)",type:"text",editOnly:!1},group_search_base_dn:{required:!1,hasError:(e,i)=>"",label:"Group Search Base DN",tooltip:"",placeholder:"ou=swengg,dc=min,dc=io",type:"text",editOnly:!1},group_search_filter:{required:!1,hasError:(e,i)=>"",label:"Group Search Filter",tooltip:"",placeholder:"(&(objectclass=groupofnames)(member=%d))",type:"text",editOnly:!1}}},42967:(e,i,t)=>{t.d(i,{A:()=>u});var r=t(65043),n=t(89923),s=t(8185),l=t(64681),a=t(64159),o=t(20554),c=t(62560),d=t(22166),p=t(56629),x=t(70579);const u=e=>{let{noTitle:i=!1}=e;const t=(0,o.jL)(),[u,h]=(0,r.useState)([]),[m,g]=(0,r.useState)(!1),[f,y]=(0,r.useState)(""),j=(0,d.d4)((e=>e.createUser.selectedPolicies)),b=(0,r.useCallback)((()=>{g(!0),p.F.policies.listPolicies().then((e=>{var i;const t=null!==(i=e.data.policies)&&void 0!==i?i:[];g(!1),h(t.sort(s.Hw))})).catch((e=>{g(!1),t((0,a.Dy)(e))}))}),[t]);(0,r.useEffect)((()=>{g(!0)}),[]),(0,r.useEffect)((()=>{m&&b()}),[m,b]);const v=u.filter((e=>e.name.includes(f)));return(0,x.jsxs)(n.xA9,{item:!0,xs:12,className:"inputItem",children:[m&&(0,x.jsx)(n.z21,{}),u.length>0?(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)(n.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(l.A,{placeholder:"Start typing to search for a Policy",onChange:e=>{y(e)},value:f,label:i?"":"Assign Policies"})}),(0,x.jsx)(n.bQt,{columns:[{label:"Policy",elementKey:"name"}],onSelect:e=>{const i=e.target,r=i.value,n=i.checked;let s=[...j];n?s.push(r):s=s.filter((e=>e!==r)),s=s.filter((e=>""!==e)),t((0,c.Gy)(s))},selectedItems:j,isLoading:m,records:v,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,x.jsx)(n.azJ,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},8185:(e,i,t)=>{t.d(i,{Hw:()=>n,LA:()=>r,SO:()=>s,rY:()=>l});const r=(e,i)=>{if(e.accessKey&&i.accessKey){if(e.accessKey>i.accessKey)return 1;if(e.accessKey<i.accessKey)return-1}return 0},n=(e,i)=>e.name>i.name?1:e.name<i.name?-1:0,s=(e,i)=>e>i?1:e<i?-1:0,l=(e,i)=>e.policy>i.policy?1:e.policy<i.policy?-1:0}}]);
//# sourceMappingURL=2138.7da0f275.chunk.js.map