"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[9537],{39537:(e,t,s)=>{s.r(t),s.d(t,{default:()=>b});var n=s(65043),r=s(22166),o=s(73216),i=s(89923);const l="error",a="success",d="inProgress";var c=s(20554),x=s(32511),h=s(64159),p=s(87569),g=s(14558),m=s(56629),u=s(70579);const f=e=>{let{title:t,children:s}=e;const[r,o]=(0,n.useState)("N/A"),[l,a]=(0,n.useState)(0),[d,c]=(0,n.useState)(0),[x,h]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{x&&m.F.admin.adminInfo({defaultOnly:!0}).then((e=>{var t;const s=null===(t=e.data.servers)||void 0===t?void 0:t.length;if(a(s||0),e.data.servers&&e.data.servers.length>0){o(e.data.servers[0].version||"N/A");const t=e.data.servers.reduce(((e,t)=>e+(t.drives?t.drives.length:0)),0);c(t)}h(!1)})).catch((()=>{h(!1)}))}),[x]),(0,u.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,u.jsx)(i._xt,{separator:!0,children:t}),(0,u.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,u.jsx)(i.xA9,{item:!0,xs:12,sx:{padding:0,marginBottom:25},children:(0,u.jsx)(i.xA9,{container:!0,sx:{padding:25},children:x?(0,u.jsx)(n.Fragment,{children:(0,u.jsx)(i.xA9,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,u.jsx)(i.aHM,{style:{width:25,height:25}})})}):(0,u.jsxs)(n.Fragment,{children:[(0,u.jsxs)(i.xA9,{item:!0,xs:12,md:4,sx:{fontSize:18,display:"flex",alignItems:"center","& svg":{marginRight:10}},children:[(0,u.jsx)(i.JUN,{})," ",(0,u.jsx)("strong",{children:l}),"\xa0nodes,\xa0",(0,u.jsx)("strong",{children:d}),"\xa0 drives"]}),(0,u.jsxs)(i.xA9,{item:!0,xs:12,md:4,sx:{fontSize:12,justifyContent:"center",alignSelf:"center",alignItems:"center",display:"flex"},children:[(0,u.jsx)("span",{style:{marginRight:20},children:(0,u.jsx)(i.mzI,{})})," ","MinIO VERSION\xa0",(0,u.jsx)("strong",{children:r})]})]})})}),s]})]})};var j=s(28481),w=s(48793),y=s(55968);const b=()=>{const e=(0,c.jL)(),t=(0,o.Zp)(),s=(0,r.d4)((e=>e.healthInfo.message)),m=(0,r.d4)((e=>e.system.serverDiagnosticStatus)),[b,v]=(0,n.useState)(!1),[S,A]=(0,n.useState)(!0),[R,C]=(0,n.useState)(""),[H,z]=(0,n.useState)("Start Health Report"),[I,J]=(0,n.useState)("Health Report"),[k,E]=(0,n.useState)(""),[B,F]=(0,n.useState)(""),N=(0,g.vf)();(0,n.useEffect)((()=>m===d?(J("Health Report in progress..."),void C("Health Report started. Please do not refresh page during diagnosis.")):m===a?(J("Health Report complete"),C("Health Report file is ready to be downloaded."),void z("Start Health Report")):m===l?(J("Error"),C("An error occurred while getting the Health Report file."),void z("Retry Health Report")):void 0),[m,b]),(0,n.useEffect)((()=>{m===a&&s!=={}&&A(!1),m===d&&A(!0),v(!1)}),[m,s]),(0,n.useEffect)((()=>{if(b){e((0,p.Zq)()),E("");const t=new URL(window.location.toString()),s=!1?"9090":t.port,n=(0,x.nw)(t.protocol),r=new URL(document.baseURI).pathname,o=new WebSocket("".concat(n,"://").concat(t.hostname,":").concat(s).concat(r,"ws/health-info?deadline=1h"));let i=null;null!==o&&(o.onopen=()=>{console.log("WebSocket Client Connected"),o.send("ok"),i=setInterval((()=>{o.send("ok")}),1e4),C("Health Report started. Please do not refresh page during diagnosis."),e((0,h.f7)(d))},o.onmessage=t=>{let s=JSON.parse(t.data.toString());s.serverHealthInfo&&e((0,p.zJ)(s.serverHealthInfo)),""!==s.encoded&&E(s.encoded),s.subnetResponse&&F(s.subnetResponse)},o.onerror=t=>{console.error("error closing websocket:",t),o.close(1e3),clearInterval(i),e((0,h.f7)(l))},o.onclose=t=>{clearInterval(i),t.code===x.Sf||t.code===x.gU||t.code===x.wU?(console.log("connection closed by server with code:",t.code),C("An error occurred while getting the Health Report file."),e((0,h.f7)(l))):(console.log("connection closed by server"),C("Health Report file is ready to be downloaded."),e((0,h.f7)(a)))})}else v(!1)}),[b,e]);return(0,n.useEffect)((()=>{e((0,h.ph)("health_info"))}),[e]),(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)(w.A,{label:"Health",actions:(0,u.jsx)(y.A,{})}),(0,u.jsxs)(i.Mxu,{children:[!N&&(0,u.jsx)(j.A,{compactMode:!0}),(0,u.jsx)(i.azJ,{withBorders:!0,children:(0,u.jsx)(f,{title:I,children:(0,u.jsx)(i.xA9,{container:!0,sx:{justifyContent:"flex-start",gap:20},children:(0,u.jsxs)(i.xA9,{item:!0,xs:12,sx:{textAlign:"center",marginBottom:25},children:[(0,u.jsx)("h2",{children:R}),(0,u.jsxs)(i.azJ,{sx:{textAlign:"center",marginBottom:25},children:[" ",""!==B&&!B.toLowerCase().includes("error")&&(0,u.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,u.jsx)("strong",{children:"Health report uploaded to SUBNET successfully!"}),"\xa0"," ",(0,u.jsxs)("strong",{children:["See the results on your"," ",(0,u.jsx)("a",{href:B,children:"SUBNET Dashboard"})," "]})]}),(""===B||B.toLowerCase().includes("error"))&&m===a&&(0,u.jsxs)(i.xA9,{item:!0,xs:12,children:[(0,u.jsx)("strong",{children:"Something went wrong uploading your Health report to SUBNET."}),"\xa0"," ",(0,u.jsxs)("strong",{children:["Log into your"," ",(0,u.jsx)("a",{href:"https://subnet.min.io",children:"SUBNET Account"})," to manually upload your Health report."]})]})]}),m===d?(0,u.jsx)(i.azJ,{sx:{paddingTop:8,paddingLeft:40},children:(0,u.jsx)(i.aHM,{style:{width:25,height:25}})}):(0,u.jsx)(n.Fragment,{children:(0,u.jsxs)(i.azJ,{sx:{display:"flex",gap:10,alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(i.azJ,{children:m!==l&&!S&&(0,u.jsx)(i.$nd,{id:"download",type:"submit",variant:"callAction",onClick:()=>(()=>{let e=document.createElement("a");e.setAttribute("href","data:application/gzip;base64,".concat(k)),e.setAttribute("download","diagnostic.json.gz"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)})(),disabled:S,label:"Download"})}),(0,u.jsx)(i.azJ,{children:(0,u.jsx)(i.$nd,{id:"start-new-diagnostic",type:"submit",variant:N?"callAction":"regular",disabled:b||!N,onClick:()=>{N?v(!0):t("/support/register")},label:H})})]})})]},"start-download")})})}),!b&&N&&(0,u.jsxs)(n.Fragment,{children:[(0,u.jsx)("br",{}),(0,u.jsx)(i.lVp,{title:"Cluster Health Report will be uploaded to SUBNET, and is viewable from your SUBNET Diagnostics dashboard.",iconComponent:(0,u.jsx)(i.mo0,{}),help:"If the Health report cannot be generated at this time, please wait a moment and try again."})]})]})]})}},28481:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(65043),r=s(73216),o=s(89923),i=s(70579);const l=e=>{let{compactMode:t=!1}=e;const s=(0,r.Zp)(),l=(0,i.jsx)(o.$nd,{id:"go-to-register",type:"submit",variant:"callAction",color:"primary",onClick:()=>s("/support/register"),children:"Register your Cluster"}),a="Please use your MinIO Subscription Network login credentials to register this cluster and enable this feature.";return t?(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(o.xA9,{sx:{"& div.leftItems":{marginBottom:0}},children:(0,i.jsx)(o.lVp,{title:(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexGrow:1},children:[(0,i.jsx)("span",{children:a})," ",l]}),iconComponent:(0,i.jsx)(o.cJw,{}),help:null})}),(0,i.jsx)("br",{})]}):(0,i.jsx)(o.azJ,{sx:{padding:"25px",border:"1px solid #eaeaea",display:"flex",alignItems:"center",justifyContent:"center",flexFlow:"row",marginBottom:"15px",["@media (max-width: ".concat(o.nmC.sm,"px)")]:{flexFlow:"column"}},children:(0,i.jsxs)(o.xA9,{container:!0,children:[(0,i.jsx)(o.xA9,{item:!0,xs:12,children:(0,i.jsx)(o.azJ,{sx:{marginRight:"8px",fontSize:"16px",fontWeight:600,display:"flex",alignItems:"center","& .min-icon":{width:"83px",height:"14px",marginLeft:"5px",marginRight:"5px"}},children:"Register your cluster"})}),(0,i.jsx)(o.xA9,{item:!0,xs:12,children:(0,i.jsx)(o.azJ,{sx:{display:"flex",flexFlow:"row",["@media (max-width: ".concat(o.nmC.sm,"px)")]:{flexFlow:"column"}},children:(0,i.jsxs)(o.azJ,{sx:{display:"flex",flexFlow:"column",flex:"2"},children:[(0,i.jsx)(o.azJ,{sx:{fontSize:"16px",display:"flex",flexFlow:"column",marginTop:"15px",marginBottom:"15px"},children:a}),(0,i.jsx)(o.azJ,{sx:{flex:"1"},children:(0,i.jsx)(o.azJ,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:l})})]})})})]})})}}}]);
//# sourceMappingURL=9537.69d1689c.chunk.js.map