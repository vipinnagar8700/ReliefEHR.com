"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[236],{64489:function(e,t,i){var r=i(28789),n=i(33926),a=i(14161),s=i(80184),l=r.default.li.withConfig({componentId:"sc-19cl7e9-0"})([""," gap:12px;align-items:center;.label{font-size:",";text-transform:uppercase;}.progressbar{height:","px;width:6px;.MuiLinearProgress-bar{transform:translateY(","%) !important;}}"],a.fU.col,a.iH[10],(function(e){return e.barHeight}),(function(e){return 100-e.value}));t.Z=function(e){var t=e.label,i=e.value,r=e.barHeight,a=void 0===r?75:r,o=e.color;return(0,s.jsxs)(l,{value:i,barHeight:a,children:[(0,s.jsx)(n.Z,{value:i,color:o}),(0,s.jsx)("span",{className:"label",children:t})]})}},33926:function(e,t,i){var r=i(1413),n=i(14161),a=i(57482),s=i(28789),l=i(80184);t.Z=function(e){var t=e.color,i=void 0===t?n.O9.blue:t,o=e.value,c=e.style,d=void 0===c?{}:c,u=(0,s.useTheme)().theme;return(0,l.jsx)(a.Z,{className:"progressbar",variant:"determinate","aria-label":o,value:o,sx:(0,r.Z)((0,r.Z)({backgroundColor:"light"===u?"#E4EAF0":n._4.highlight,height:6,borderRadius:2},d),{},{"& .MuiLinearProgress-bar":{backgroundColor:i,borderRadius:2}})})}},22426:function(e,t,i){i.d(t,{m:function(){return c}});var r=i(37762),n=i(45987),a=i(28789),s=i(14161),l=i(80184),o=["active","payload","tooltip","arrow","multi"],c=a.default.div.withConfig({componentId:"sc-anniqo-0"})(["font-family:",";font-size:",";color:#fff;box-shadow:0 1px 8px rgba(65,77,85,0.4);border-radius:8px;background-color:",";height:20px;padding:0 8px;display:flex;"," line-height:1;position:relative;text-transform:uppercase;&.multiple{flex-direction:column;gap:10px;padding:10px;height:auto;.item{display:flex;align-items:center;gap:8px;.color{width:6px;height:6px;border-radius:50%;}}}&:before{content:'';position:absolute;left:50%;bottom:-3px;transform:translateX(-50%) rotate(-45deg);width:8px;height:8px;background-color:",";display:",";}"],s.Rq.accent,s.iH[10],s.R2.text,s.fU.center,s.R2.text,(function(e){return e.arrow?"block":"none"}));t.Z=function(e){var t=e.active,i=e.payload,a=e.tooltip,s=e.arrow,d=void 0!==s&&s,u=e.multi,h=void 0!==u&&u,p=(0,n.Z)(e,o);if(h){if(!t||!a)return null;var x,f=(0,r.Z)(i);try{for(f.s();!(x=f.n()).done;){var g=x.value;if(g.dataKey===a)return(0,l.jsx)(c,{arrow:d,children:g.value})}}catch(v){f.e(v)}finally{f.f()}return null}return t&&i[0]?(0,l.jsxs)(c,{arrow:d,children:[" ",i[0].value," ",p.right&&i[0].dataKey]}):null}},80879:function(e,t,i){var r=i(62014),n=i(17350),a=i(25984),s=i(80184);t.Z=function(e){var t=e.current,i=e.handler,l=(0,n.Z)().periods;return(0,s.jsx)(r.W2,{children:l.map((function(e){return(0,s.jsx)(r.ck,{children:(0,s.jsx)(r.zx,{className:t===e&&"active",onClick:function(){return i(e)},children:e})},(0,a.x0)(4))}))})}},90004:function(e,t,i){var r=i(45987),n=i(51899),a=i(66150),s=i(80184),l=["title","handler","sidePadding","children","disabled"];t.Z=function(e){var t=e.title,i=e.handler,o=e.sidePadding,c=e.children,d=e.disabled,u=(0,r.Z)(e,l);return(0,s.jsxs)(a.Z,{title:t,sidePadding:o,style:u.style,className:"nav",children:[(0,s.jsxs)(n.JL,{children:[(0,s.jsx)("button",{onClick:i,"data-direction":"prev",className:d?"disabled":"","aria-label":"Previous",children:(0,s.jsx)("i",{className:"icon icon-chevron-left"})}),(0,s.jsx)("button",{onClick:i,"data-direction":"next",className:d?"disabled":"","aria-label":"Next",children:(0,s.jsx)("i",{className:"icon icon-chevron-right"})})]}),c]})}},17350:function(e,t,i){var r=i(29439),n=i(72791);t.Z=function(){var e=["year","month","week"],t=(0,n.useState)(e[0]),i=(0,r.Z)(t,2),a=i[0],s=i[1];return{period:a,periods:e,setPeriod:s,setPeriodIndex:function(t){return s(e[t])}}}},21236:function(e,t,i){i.r(t),i.d(t,{default:function(){return ue}});var r=i(71508),n=i(1413),a=i(93433),s=i(29439),l=(i(45852),i(249)),o=i(66150),c=i(54420),d=i(57293),u=i(59086),h=i(15691),p=i(34439),x=i(21119),f=i(28789),g=i(65484),v=i.n(g),m=i(14161),b=i(80184),k=f.default.div.withConfig({componentId:"sc-194jn8l-0"})([".icon{position:absolute;color:",";display:flex;",";width:100%;height:100%;background-color:",";}"],m.O9.blue,m.fU.center,v()("theme",{light:m.R2.highlight,dark:m._4.highlight})),j=function(e){var t=e.children;return(0,b.jsxs)(k,{children:[(0,b.jsx)("i",{className:"icon icon-plus-circle"}),t]})},y=i(38052),w=v()("theme",{light:"#DCE2E8",dark:"#25292D"}),Z=(0,f.default)(y.SS).withConfig({componentId:"sc-ezu0vk-0"})([".navigator{height:50px;margin:0 2px;gap:0;padding:0;.arrows{width:63px;gap:8px;}.label{flex-grow:1;border-left:1px solid ",";height:100%;}.arrows,.label{display:flex;",";}","{.arrows{width:83px;}}}.rbc-time-header{display:none;}.rbc-time-gutter{.icon{display:none;}}.rbc-day-slot{border-top:",";cursor:pointer;&:after{content:'';display:block;position:absolute;left:0;height:20px;bottom:-20px;border-left:1px solid ",";}}.rbc-time-view{padding-bottom:20px;}.rbc-event-content{position:relative;.event:hover .cover{opacity:1;visibility:visible;}.isEnded{opacity:1;}}"],w,m.fU.center,m.AV.tablet,v()("theme",{light:m.Sz.dashedLight,dark:m.Sz.dashedDark}),v()("theme",{light:"#DCE2E8",dark:"#25292D"})),C=f.default.div.withConfig({componentId:"sc-ezu0vk-1"})(["position:relative;flex-grow:1;.backdrop{position:absolute;top:0;left:0;width:100%;height:100%;visibility:hidden;&.visible{visibility:visible;.popup{visibility:visible;opacity:1;}}}.popup{position:absolute;top:calc(50% + ","px + 50px);left:50%;transform:translate(-50%,calc(-50% - ","px - 50px));background-color:",";padding:20px;border-radius:8px;width:240px;",";gap:20px;z-index:50;visibility:hidden;opacity:0;transition:all var(--transition);box-shadow:",";margin-left:42px;.footer{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;}}"],(function(e){return e.headerHeight}),(function(e){return e.headerHeight/2}),v()("theme",{light:m.R2.widgetBg,dark:m._4.bodyBg}),m.fU.col,m.Sz.widgetShadow),z=i(72426),O=i.n(z),S=i(72791),D=i(57770),R=function(){var e=(0,c.Zt)(O()),t=(0,S.useState)(null),i=(0,s.Z)(t,2),r=i[0],f=i[1],g=(0,S.useState)(O()().toDate()),v=(0,s.Z)(g,2),m=v[0],k=v[1],y=(0,S.useState)(""),w=(0,s.Z)(y,2),z=w[0],R=w[1],H=(0,S.useState)(!1),P=(0,s.Z)(H,2),N=P[0],A=P[1],I=(0,S.useState)({start:Date.now(),end:Date.now()}),U=(0,s.Z)(I,2),E=U[0],_=U[1],K=(0,S.useRef)(null),V=(0,S.useState)(0),M=(0,s.Z)(V,2),T=M[0],L=M[1];(0,S.useEffect)((function(){L(K.current.offsetHeight)}),[K]);var B=[{name:"Ultrasound diagnostics",start:O()().set({hour:13,minute:30,second:0}).toDate(),end:O()().set({hour:14,minute:0,second:0}).toDate(),allDay:!1,type:"test"}],F=(0,S.useState)(B),W=(0,s.Z)(F,2),q=W[0],G=W[1],X=function(){R(""),f(null),A(!1)},J=function(e,t){switch(e){case"NEXT":k(O()(m).add(1,"day").toDate());break;case"PREV":k(O()(m).subtract(1,"day").toDate());break;default:k(t)}},Y={as:c.f,date:m,localizer:e,startAccessor:"start",endAccessor:"end",defaultView:"day",onNavigate:J,step:30,timeslots:1,events:q,min:O()().set({hour:9,minute:0,second:0}).toDate(),max:O()().set({hour:16,minute:30,second:0}).toDate(),formats:{dayHeaderFormat:"dddd, MMMM DD",timeGutterFormat:"HH:mm"},components:{toolbar:function(e){var t=e.date,i=e.label;return(0,b.jsx)(d.Z,{onNavigate:J,date:t,label:i})},event:function(e){var t=e.event;return(0,b.jsx)(u.Z,{event:t,variant:"day"})},timeSlotWrapper:function(e){var t=e.children;return(0,b.jsx)(j,{children:t})}},selectable:!0,onSelectSlot:function(e){return function(e){_(e),A(!0)}(e)},onSelectEvent:function(e){!function(e){var t=q.filter((function(t){return t!==e}));G(t)}(e)}};return(0,b.jsxs)(l.Z,{name:"AppointmentsScheduler",children:[(0,b.jsx)(o.Z,{title:"Daily appointments scheduler",elRef:K}),(0,b.jsxs)(C,{headerHeight:T,children:[(0,b.jsx)(Z,(0,n.Z)({},Y)),(0,b.jsx)("div",{className:N?"backdrop visible":"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&A(!1)},children:(0,b.jsxs)("form",{className:"popup",onSubmit:function(e){e.preventDefault(),""!==z&&null!==r&&G([].concat((0,a.Z)(q),[{name:z,start:E.start,end:E.end,allDay:!1,type:r.value}])),X()},children:[(0,b.jsx)(h.Z,{name:"title",placeholder:"Title",value:z,handler:function(e){return R(e.target.value)}}),(0,b.jsx)(p.Z,{variant:"basic",options:function(){var e=[];return D.U.forEach((function(t){e.push({value:t.cat,label:t.label})})),e}(),value:r,changeHandler:function(e){return f(e)},placeholder:"Type"}),(0,b.jsxs)("div",{className:"footer",children:[(0,b.jsx)(x.Z,{text:"Add",type:"submit"}),(0,b.jsx)(x.Z,{text:"Cancel",type:"button",handler:X})]})]})})]})]})},H=i(45987),P=i(20760),N=i(80879),A=i(20601),I=i(5749),U=i(64694),E=i(41048),_=i(94783),K=i(35667),V=i(40835),M=i(22426),T=i(17350),L=i(84483),B=[{cured:314,sick:170},{cured:200,sick:240},{cured:265,sick:400},{cured:156,sick:210},{cured:412,sick:300},{cured:504,sick:200},{cured:311,sick:600},{cured:300,sick:80},{cured:156,sick:210},{cured:412,sick:300},{cured:156,sick:550},{cured:412,sick:140}],F=[{cured:360,sick:210},{cured:380,sick:250},{cured:400,sick:320},{cured:450,sick:190},{cured:300,sick:450},{cured:350,sick:220},{cured:400,sick:500},{cured:380,sick:150},{cured:250,sick:330},{cured:450,sick:250},{cured:350,sick:400},{cured:500,sick:200}],W=[{cured:400,sick:250},{cured:280,sick:200},{cured:420,sick:190},{cured:310,sick:180},{cured:330,sick:210},{cured:380,sick:200},{cured:250,sick:500},{cured:220,sick:378},{cured:280,sick:180},{cured:394,sick:200},{cured:90,sick:351},{cured:154,sick:110}],q=["cx","cy","fill"],G=f.default.div.withConfig({componentId:"sc-g4k4xw-0"})(["height:250px;position:relative;.average{position:absolute;bottom:0;left:0;z-index:1;.h1{color:",";}}","{height:100%;}"],v()("theme",{light:m.R2.text,dark:"#fff"}),m.AV.tablet),X=function(){var e=(0,f.useTheme)().theme,t=(0,S.useState)((0,T.Z)().period),i=(0,s.Z)(t,2),r=i[0],n=i[1],a=(0,S.useRef)(),c=(0,L.Z)(a),d=function(){switch(r){default:case"year":return B;case"month":return F;case"week":return W}}(),u=function(t){var i=t.cx,r=t.cy,n=t.fill,a=(0,H.Z)(t,q),s=a.dom===a.dataKey;return(0,b.jsxs)("svg",{width:"10",height:"217",viewBox:"0 0 10 222",x:i,y:r,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s&&(0,b.jsx)("path",{d:"M5 25V215",stroke:"url(#dashed)",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"8 8"}),(0,b.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z",fill:s?n:"none"}),(0,b.jsx)("defs",{children:(0,b.jsxs)("linearGradient",{id:"dashed",x1:"5.30334",y1:"179.114",x2:"5.30334",y2:"63.8445",gradientUnits:"userSpaceOnUse",children:[(0,b.jsx)("stop",{stopColor:"light"===e?m.R2.widgetBg:m._4.widgetBg}),(0,b.jsx)("stop",{offset:"1",stopColor:"light"===e?m.O9.light_gray:m.O9.dark})]})})]})};return(0,b.jsxs)(l.Z,{name:"DiseaseRate",children:[(0,b.jsx)(o.Z,{title:"Disease rate",flex:"column",elRef:a,children:(0,b.jsx)(N.Z,{current:r,handler:n})}),(0,b.jsx)(P.Z,{height:c,style:{overflow:"hidden"},children:(0,b.jsxs)(G,{children:[(0,b.jsx)(A.h,{width:"100%",height:"100%",children:(0,b.jsxs)(I.G,{margin:!1,data:d,children:[(0,b.jsx)(U.b,{dataKey:"cured",shape:u,children:d.map((function(e,t){return(0,b.jsx)(E.b,{fill:m.O9.green,dom:e.cured>e.sick?"cured":"sick",dataKey:"cured"},"cell-".concat(t))}))}),(0,b.jsx)(U.b,{dataKey:"sick",shape:u,children:d.map((function(e,t){return(0,b.jsx)(E.b,{fill:m.O9.peach,dom:e.sick>e.cured?"sick":"cured",dataKey:"sick"},"cell-".concat(t))}))}),(0,b.jsx)(_.d,{y:300,stroke:m.O9.green,strokeWidth:2,strokeDasharray:"2 2"}),(0,b.jsx)(K.u,{cursor:!1,content:(0,b.jsx)(M.Z,{})})]})}),(0,b.jsxs)("div",{className:"average",children:[(0,b.jsx)(V.ZP,{className:"h1",end:{year:64.27,month:85.93,week:71.34}["".concat(r)],duration:1.5,decimals:2,separator:"."}),(0,b.jsx)("span",{children:"patient disease rate"})]})]})})]})},J=i(90004),Y=i(47242),Q=i(36038),$=i(54875),ee=i(40557),te=i(54561),ie=f.default.div.withConfig({componentId:"sc-49i4e4-0"})(["",";",";height:100%;"],m.fU.col,m.fU.between),re=function(){var e=(0,S.useState)(null),t=(0,s.Z)(e,2),i=t[0],r=t[1],n=(0,f.useTheme)().theme,a=(0,T.Z)().periods,o=(0,te.Z)(a),c=o.index,d=o.navigate,u=[{name:"0-9",values:[8,5,10],fill:m.O9.green,label:"green"},{name:"10-16",values:[10,7,12],fill:m.O9.peach,label:"peach"},{name:"17-24",values:[9,15,13],fill:m.O9.azure,label:"azure"},{name:"25-30",values:[14,8,15],fill:m.O9.purple,label:"purple"},{name:"31-40",values:[13,7,15],fill:m.O9.pink,label:"pink"}];return(0,b.jsxs)(l.Z,{name:"PatientsPolarPie",children:[(0,b.jsx)(J.Z,{handler:d,title:"Patients age"}),(0,b.jsx)(P.Z,{children:(0,b.jsxs)(ie,{children:[(0,b.jsxs)($.B,{innerRadius:"10%",outerRadius:"100%",barSize:8,data:u,width:265,height:265,children:[(0,b.jsx)(ee.G,{minAngle:15,background:{fill:"light"===n?m.O9.light_gray:m.O9.dark},clockWise:!0,dataKey:"values[".concat(c,"]"),onMouseOver:function(){return r("values[".concat(c,"]"))}}),(0,b.jsx)(K.u,{cursor:!1,content:(0,b.jsx)(M.Z,{tooltip:i})})]}),(0,b.jsx)(Y.Z,{children:u.map((function(e){return(0,b.jsx)(Q.Z,{color:e.label,legend:e.name},e.name)}))})]})})]})},ne=i(4942),ae=f.default.div.withConfig({componentId:"sc-1e5bz72-0"})(["margin:0 2px 20px;min-height:40px;padding:10px 22px;background-color:",";border-radius:8px;display:flex;align-items:center;font-size:",";gap:14px;.highlight{font-family:",";font-size:",";font-weight:500;}","{font-size:",";min-height:60px;.highlight{font-size:",";}}","{.highlight{font-size:",";}}"],v()("theme",{light:m.R2.bodyBg,dark:m._4.highlight}),m.iH[12],m.Rq.accent,m.iH[14],m.AV.tablet,m.iH[14],m.iH[20],m.AV.laptopL,m.iH[24]),se=f.default.ul.withConfig({componentId:"sc-1e5bz72-1"})(["margin:0 24px;display:flex;justify-content:space-between;"]),le=i(64489),oe=i(17711),ce=function(){var e,t=O()().week()-1,i=O()().week()-2,r=O()().week()-3,n=[t,i,r],a=(0,te.Z)(n),s=a.index,o=a.navigate,c=function(e){return e/3},d=(e={},(0,ne.Z)(e,t,{sun:124.87,mon:81.12,tue:155,wed:268.14,thu:120,fri:20.11,sat:69.96}),(0,ne.Z)(e,i,{sun:204.11,mon:20.58,tue:104,wed:55.32,thu:302.8,fri:89.11,sat:0}),(0,ne.Z)(e,r,{sun:84.19,mon:120.9,tue:23.87,wed:90.8,thu:150.31,fri:47.19,sat:167.96}),e);return(0,b.jsxs)(l.Z,{name:"PaymentsOverview",children:[(0,b.jsx)(J.Z,{title:"Payments",handler:o}),(0,b.jsxs)(P.Z,{sidePadding:!0,style:{justifyContent:"space-between"},children:[(0,b.jsxs)(ae,{children:[(0,b.jsxs)("span",{className:"highlight",children:["\u20ac ",function(e){var t=0;for(var i in e)t+=e[i];return t.toFixed(2)}(d[n[s]])]})," was earned ",function(e){var i=(0,oe.Uo)();if(e===t)return"last week";for(var r=0;r<i.length;r++)if(i[r].week===e)return"".concat(i[r].startShort," - ").concat(i[r].endShort)}(n[s])]}),(0,b.jsx)(se,{children:Object.keys(d[n[s]]).map((function(e){var t=d[n[s]][e];return(0,b.jsx)(le.Z,{label:e,value:c(t),barHeight:188,color:t<50?m.O9.red:m.O9.purple},e)}))})]})]})},de=i(96027),ue=function(){return(0,b.jsxs)(r.Z,{title:"Dashboard",children:[(0,b.jsx)("div",{children:(0,b.jsx)(R,{})},"app-scheduler"),(0,b.jsx)("div",{children:(0,b.jsx)(X,{})},"disease"),(0,b.jsx)("div",{children:(0,b.jsx)(re,{})},"patients-radial"),(0,b.jsx)("div",{children:(0,b.jsx)(ce,{})},"pay-overview"),(0,b.jsx)("div",{children:(0,b.jsx)(de.Z,{})},"radar")]})}},96027:function(e,t,i){var r=i(1413),n=i(45987),a=i(28789),s=i(14161),l=i(249),o=i(13902),c=i(77941),d=i(20601),u=i(64621),h=i(36846),p=i(87997),x=i(5618),f=i(35667),g=i(22426),v=i(54561),m=i(17350),b=i(94397),k=i(80184),j=["payload","x","y","cx","cy"],y=a.default.div.withConfig({componentId:"sc-14eodre-0"})(["",";gap:14px;justify-content:flex-end;height:100%;.chart{height:250px;flex-grow:1;padding:24px 24px 0;}.navigator{margin:0 2px 2px;}","{.chart{height:300px;}}"],s.fU.col,s.AV.mobileL);t.Z=function(){var e=(0,m.Z)().periods,t=(0,v.Z)(e),i=t.index,w=t.navigate,Z=(0,a.useTheme)().theme,C=(0,b.Z)().width;return(0,k.jsx)(l.Z,{name:"RadarAreaChart",children:(0,k.jsxs)(y,{children:[(0,k.jsx)("div",{className:"chart",children:(0,k.jsx)(d.h,{height:"100%",width:"100%",children:(0,k.jsxs)(u.H,{data:[{type:"diagnostics",value:[40,54,65]},{type:"checkup",value:[70,22,46]},{type:"tests",value:[18,41,60]},{type:"consultation",value:[70,25,67]},{type:"injury",value:[30,70,50]},{type:"viruses",value:[40,19,80]}],outerRadius:C<414?80:110,height:250,children:[(0,k.jsx)(h.n,{stroke:"light"===Z?s.O9.light_gray:s.O9.dark}),(0,k.jsx)(p.I,{dataKey:"type",tick:function(e){return function(e){var t=e.payload,i=e.x,a=e.y,l=e.cx,o=e.cy,d=(0,n.Z)(e,j);return(0,k.jsx)(c.x,(0,r.Z)((0,r.Z)({},d),{},{verticalAnchor:"middle",textAnchor:"middle",y:a+(a-o)/9,x:i+(i-l)/9,fill:"light"===Z?s.R2.text:s._4.text,children:t.value}))}(e)},style:{textTransform:"uppercase",fontFamily:s.Rq.accent,fontSize:s.iH[10]},cx:"50%",cy:"50%"}),(0,k.jsx)(x.F,{dataKey:"value[".concat(i,"]"),strokeWidth:4,stroke:s.O9.azure,fill:s.O9.azure,fillOpacity:.1,activeDot:{r:4,fill:s.O9.azure,stroke:s.O9.azure}}),(0,k.jsx)(f.u,{content:(0,k.jsx)(g.Z,{}),cursor:!1})]})})}),(0,k.jsx)(o.Z,{handler:w,text:e[i],style:{textTransform:"capitalize"}})]})})}}}]);
//# sourceMappingURL=236.ff8a5c75.chunk.js.map