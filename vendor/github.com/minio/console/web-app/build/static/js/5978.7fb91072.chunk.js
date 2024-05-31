"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[5978],{55978:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(65043),s=n(73216),l=n(89923),o=n(99161),a=n(64159),r=n(20554),c=n(58661),d=n(25448),p=n(94574),x=n(33097),m=n.n(x),h=n(94141),u=n(77403),j=n(70579);const g=p.Ay.div((e=>{let{theme:t}=e;return{"& .alertText":{color:m()(t,"signalColors.danger","#C51B3F")}}})),f=e=>{let{editSite:t={},onClose:n,onComplete:s}=e;const o=(0,r.jL)(),[c,p]=(0,i.useState)(""),[x,m]=(0,d.A)((e=>{e.success?o((0,a.Hk)(e.status)):o((0,a.C9)({errorMessage:"Error",detailedError:e.status})),s()}),(e=>{o((0,a.C9)(e)),s()}));let f=!1;try{new URL(c),f=!0}catch(b){f=!1}return(0,j.jsxs)(h.A,{title:"Edit Replication Endpoint ",modalOpen:!0,titleIcon:(0,j.jsx)(l.qUP,{}),onClose:n,children:[(0,j.jsxs)(g,{children:[(0,j.jsxs)(l.azJ,{sx:{display:"flex",flexFlow:"column",marginBottom:"15px"},children:[(0,j.jsxs)(l.azJ,{sx:{marginBottom:"10px"},children:[(0,j.jsx)("strong",{children:"Site:"})," ","  ",t.name]}),(0,j.jsxs)(l.azJ,{sx:{marginBottom:"10px"},children:[(0,j.jsx)("strong",{children:"Current Endpoint:"})," ","  ",t.endpoint]})]}),(0,j.jsxs)(l.xA9,{item:!0,xs:12,children:[(0,j.jsx)(l.l1Y,{sx:{marginBottom:5},children:"New Endpoint:"}),(0,j.jsx)(l.cl_,{id:"edit-rep-peer-endpoint",name:"edit-rep-peer-endpoint",placeholder:"https://dr.minio-storage:9000",onChange:e=>{p(e.target.value)},label:"",value:c})]}),(0,j.jsxs)(l.xA9,{item:!0,xs:12,sx:{marginBottom:15,fontStyle:"italic",display:"flex",alignItems:"center",fontSize:"12px",marginTop:2},children:[(0,j.jsx)("strong",{children:"Note:"}),"\xa0",(0,j.jsx)("span",{className:"alertText",children:"Access Key and Secret Key should be same on the new site/endpoint."})]})]}),(0,j.jsxs)(l.xA9,{item:!0,xs:12,sx:u.Uz.modalButtonBar,children:[(0,j.jsx)(l.$nd,{id:"close",type:"button",variant:"regular",onClick:n,label:"Cancel"}),(0,j.jsx)(l.$nd,{id:"update",type:"button",variant:"callAction",disabled:x||!f,onClick:()=>{m("PUT","api/v1/admin/site-replication",{endpoint:c,name:t.name,deploymentId:t.deploymentID})},label:"Update"})]})]})},b=p.Ay.div((e=>{let{theme:t}=e;return{display:"flex",gap:10,"& .currentIndicator":{"& .min-icon":{width:12,height:12,fill:m()(t,"signalColors.good","#4CCB92")}},"& .endpointName":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}})),y=e=>{let{sites:t,onDeleteSite:n,onRefresh:s}=e;const[o,a]=(0,i.useState)(""),[r,d]=(0,i.useState)(null),p=[{label:"Site Name",elementKey:"name"},{label:"Endpoint",elementKey:"endpoint",renderFullObject:!0,renderFunction:e=>(0,j.jsxs)(b,{children:[e.isCurrent?(0,j.jsx)(l.m_M,{tooltip:"This site/cluster",placement:"top",children:(0,j.jsx)(l.azJ,{className:"currentIndicator",children:(0,j.jsx)(l.GQ2,{})})}):null,(0,j.jsx)(l.m_M,{tooltip:e.endpoint,children:(0,j.jsx)(l.azJ,{className:"endpointName",children:e.endpoint})})]})}],x=[{type:"edit",onClick:e=>d(e),tooltip:"Edit Endpoint"},{type:"delete",onClick:e=>a(e.name),tooltip:"Delete Site"}];return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(l.bQt,{columns:p,records:t,itemActions:x,idField:"name",customPaperHeight:"calc(100vh - 660px)",sx:{marginBottom:20}}),""!==o&&(0,j.jsx)(c.A,{title:"Delete Replication Site",confirmText:"Delete",isOpen:""!==o,titleIcon:(0,j.jsx)(l.xWY,{}),isLoading:!1,onConfirm:()=>{n(!1,[o])},onClose:()=>{a("")},confirmationContent:(0,j.jsxs)(i.Fragment,{children:["Are you sure you want to remove the replication site:"," ",(0,j.jsx)("strong",{children:o}),"?"]})}),null!==r&&(0,j.jsx)(f,{onComplete:()=>{d(null),s()},editSite:r,onClose:()=>{d(null)}})]})};var S=n(6681),C=n(48793),A=n(55968);const I=()=>{const e=(0,r.jL)(),t=(0,s.Zp)(),[n,p]=(0,i.useState)([]),[x,m]=(0,i.useState)(!1),[h,u]=(0,d.A)((e=>{const{sites:t,name:n}=e,i=t.findIndex((e=>e.name===n));if(-1!==i){let e=t[i];e={...e,isCurrent:!0},t.splice(i,1,e)}t.sort(((e,t)=>e.name===n?-1:t.name===n?1:0)),p(t)}),(e=>{p([])})),g=()=>{u("GET","api/v1/admin/site-replication")},[f,b]=(0,d.A)((t=>{m(!1),e((0,a.Hk)("Successfully deleted.")),g()}),(t=>{e((0,a.C9)(t))})),I=function(){b("DELETE","api/v1/admin/site-replication",{all:arguments.length>0&&void 0!==arguments[0]&&arguments[0],sites:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]})};(0,i.useEffect)((()=>{g()}),[]);const v=null===n||void 0===n?void 0:n.length;return(0,i.useEffect)((()=>{e((0,a.ph)("site-replication"))}),[]),(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(C.A,{label:"Site Replication",actions:(0,j.jsx)(A.A,{})}),(0,j.jsxs)(l.Mxu,{children:[(0,j.jsx)(l._xt,{separator:!!v,sx:{marginBottom:15},actions:(0,j.jsxs)(l.azJ,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8},children:[v?(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(S.A,{tooltip:"Delete All",children:(0,j.jsx)(l.$nd,{id:"delete-all",label:"Delete All",variant:"secondary",disabled:f,icon:(0,j.jsx)(l.ucK,{}),onClick:()=>{m(!0)}})}),(0,j.jsx)(S.A,{tooltip:"Replication Status",children:(0,j.jsx)(l.$nd,{id:"replication-status",label:"Replication Status",variant:"regular",icon:(0,j.jsx)(l.YkU,{}),onClick:e=>{e.preventDefault(),t(o.zZ.SITE_REPLICATION_STATUS)}})})]}):null,(0,j.jsx)(S.A,{tooltip:"Add Replication Sites",children:(0,j.jsx)(l.$nd,{id:"add-replication-site",label:"Add Sites",variant:"callAction",disabled:f,icon:(0,j.jsx)(l.REV,{}),onClick:()=>{t(o.zZ.SITE_REPLICATION_ADD)}})})]}),children:v?"List of Replicated Sites":""}),v?(0,j.jsx)(y,{sites:n,onDeleteSite:I,onRefresh:g}):null,h?(0,j.jsx)(l.azJ,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc( 100vh - 450px )"},children:(0,j.jsx)(l.aHM,{style:{width:16,height:16}})}):null,v||h?null:(0,j.jsx)(l.xA9,{container:!0,children:(0,j.jsx)(l.xA9,{item:!0,xs:8,children:(0,j.jsx)(l.lVp,{title:"Site Replication",iconComponent:(0,j.jsx)(l.pHQ,{}),help:(0,j.jsxs)(i.Fragment,{children:["This feature allows multiple independent MinIO sites (or clusters) that are using the same external IDentity Provider (IDP) to be configured as replicas.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"To get started,"," ",(0,j.jsx)(l.t53,{isLoading:!1,label:"",onClick:()=>{t(o.zZ.SITE_REPLICATION_ADD)},children:"Add a Replication Site"}),".",(0,j.jsx)("br",{}),"You can learn more at our"," ",(0,j.jsx)("a",{href:"https://min.io/docs/minio/linux/operations/install-deploy-manage/multi-site-replication.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})})}),v&&!h?(0,j.jsx)(l.lVp,{title:"Site Replication",iconComponent:(0,j.jsx)(l.pHQ,{}),help:(0,j.jsxs)(i.Fragment,{children:["This feature allows multiple independent MinIO sites (or clusters) that are using the same external IDentity Provider (IDP) to be configured as replicas. In this situation the set of replica sites are referred to as peer sites or just sites.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"Initially, only one of the sites added for replication may have data. After site-replication is successfully configured, this data is replicated to the other (initially empty) sites. Subsequently, objects may be written to any of the sites, and they will be replicated to all other sites.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"All sites must have the same deployment credentials (i.e. MINIO_ROOT_USER, MINIO_ROOT_PASSWORD).",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"All sites must be using the same external IDP(s) if any.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"For SSE-S3 or SSE-KMS encryption via KMS, all sites must have access to a central KMS deployment server.",(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),"You can learn more at our"," ",(0,j.jsx)("a",{href:"https://github.com/minio/minio/tree/master/docs/site-replication?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})}):null,x?(0,j.jsx)(c.A,{title:"Delete All",confirmText:"Delete",isOpen:!0,titleIcon:(0,j.jsx)(l.xWY,{}),isLoading:!1,onConfirm:()=>{const e=n.map((e=>e.name));I(!0,e)},onClose:()=>{m(!1)},confirmationContent:(0,j.jsx)(i.Fragment,{children:"Are you sure you want to remove all the replication sites?."})}):null]})]})}}}]);
//# sourceMappingURL=5978.7fb91072.chunk.js.map