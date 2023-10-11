"use strict";(self.webpackChunkVIP_Patient=self.webpackChunkVIP_Patient||[]).push([[579],{60044:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(1413),r=a(29439),l=(a(45852),a(38052)),s=a(62014),o=a(54420),u=a(59086),c=a(72791),i=a(72426),d=a.n(i),f=a(16945),h=a(80184),v=function(e,t,a,r){var l=d()()-d()(e.value),s=l/6e4>0&&l/6e4<t,o=(new Date).getHours(),u=(new Date).getMinutes(),i=o+":"+(0,f.v)(u),v={};return s&&r&&(v.className="current-time",v.children=(0,h.jsx)("span",{className:"time-indicator",style:{top:"".concat(100/t*function(){var t,a=e.value.getMinutes();switch(a){default:case 0:t=a+u;break;case 30:t=Math.abs(a-u)}return t}(),"%")},children:(0,h.jsx)("span",{className:"label",children:i})})),(0,c.cloneElement)(e.children,(0,n.Z)({style:(0,n.Z)({},{}),"data-time":d()(e.value).format("HH:mm")},v))},m=function(e){var t=e.label;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("h2",{children:t})})},p=a(57293),b=a(13902),x=function(e){var t,a=e.date,n=e.setter,r=d()(a).week(),l=d()().week(),s=d()(a).startOf("year").week(),o=d()(a).endOf("year").week();return t=l===r?"This week":l+1===r?"Next week":l-1===r?"Last week":"Week "+r,(0,h.jsx)(b.Z,{handler:function(e){"prev"===e.currentTarget.dataset.direction?n(d()(a).subtract(1,"week").startOf("week").toDate()):n(d()(a).add(1,"week").startOf("week").toDate())},text:t,prevDisabled:r===s,nextDisabled:r===o})},D=a(34439),y=a(17711),j=function(e){var t=e.date,a=e.setter,n=(0,y.Uo)().map((function(e,t){return{value:t,label:"".concat(e.startLong," - ").concat(e.endLong)}})),l=(0,c.useState)(n[d()(t).week()-1]),s=(0,r.Z)(l,2),o=s[0],u=s[1];return(0,h.jsx)(D.Z,{variant:"basic",options:n,value:o,changeHandler:function(e){u(e),a(d()(t).week(e.value+1).startOf("week").toDate())}})},w=function(e){var t,a=e.date,n=e.setter,r=d()(a).month(),l=d()().month();return t=l===r?"This month":l+1===r?"Next month":l-1===r?"Last month":"".concat(d()(a).format("MMMM")),(0,h.jsx)(b.Z,{handler:function(e){"prev"===e.currentTarget.dataset.direction?n(d()(a).subtract(1,"month").toDate()):n(d()(a).add(1,"month").toDate())},text:t,prevDisabled:0===r,nextDisabled:11===r})},k=function(e){var t=e.date,a=e.setter,n=(0,y.Gn)().map((function(e){return{value:e.month,label:e.formatted}})),l=(0,c.useState)(n[d()(t).month()]),s=(0,r.Z)(l,2),o=s[0],u=s[1];return(0,h.jsx)(D.Z,{variant:"basic",options:n,value:o,changeHandler:function(e){u(e);var n=d()(e.value).month();a(d()(t).set({month:n,date:1}))}})},g=a(47242),Z=a(36038),M=a(21847),S=a(57770),H=a(22172),N=a(94397),F=[{start:d()().set({hour:12,minute:30,second:0}).toDate(),end:d()().set({hour:13,minute:0,second:0}).toDate(),type:"disabled"}],A={doctor:[{name:"MRI",start:d()().set({hour:9,minute:30,second:0}).toDate(),end:d()().set({hour:10,minute:0,second:0}).toDate(),allDay:!1,type:"test"}],patient:{general:[{name:"3:00 PM  Patient Nagar",start:d()().set({hour:10,minute:0,second:0}).toDate(),end:d()().set({hour:10,minute:30,second:0}).toDate(),allDay:!1,type:"test"}],disabled:F}},T=a(61316),C=function(e){var t=e.viewChangeHandler,a=e.current,i=e.type,f=(0,N.Z)().width,b=(0,o.Zt)(d()),D=(0,c.useRef)(null),y=(0,c.useRef)(null),C=(0,c.useState)(0),E=(0,r.Z)(C,2),O=E[0],P=E[1];(0,c.useEffect)((function(){P(y.current.offsetHeight+D.current.offsetHeight)}),[y,D]);var R=(0,H.tV)(),V=(0,c.useState)(R[0]),W=(0,r.Z)(V,2),I=W[0],L=(W[1],(0,c.useState)(!1)),U=(0,r.Z)(L,2),_=U[0],z=U[1],G=(0,c.useState)(!1),q=(0,r.Z)(G,2),B=(q[0],q[1]);(0,c.useEffect)((function(){var e=(0,T.eD)();e&&e.then((function(e){console.log(e,"App ShedulerA"),B(null===e||void 0===e?void 0:e.result,"App ShedulerA")}))}),[]);var X=(0,c.useState)(d()().toDate()),$=(0,r.Z)(X,2),J=$[0],K=$[1],Q=["month","week","day"],Y=function(){return(0,h.jsx)(s.W2,{className:"tabs",children:Q.map((function(e){return(0,h.jsx)(s.ck,{children:(0,h.jsx)(s.zx,{className:a===e?"active":null,onClick:function(){return t(e)},children:e})},e)}))})},ee=function(e,t){switch(e){case"NEXT":K(d()(J).add(1,"day").toDate());break;case"PREV":K(d()(J).subtract(1,"day").toDate());break;default:K(t)}},te={as:o.f,localizer:b,startAccessor:"start",endAccessor:"end",views:Q,view:a,date:J,onView:t,onNavigate:ee,onDrillDown:function(e){return function(e){K(e),t("day")}(e)},events:"doctor"===i?A.doctor:"day"===a?A.patient.general:A.patient.disabled,backgroundEvents:"doctor"===i?F:[],min:d()().startOf("year").set({hour:9,minute:30}).toDate(),max:d()().endOf("year").set({hour:16,minute:30}).toDate(),timeslots:1,step:30,formats:{dayHeaderFormat:f<414?"dddd, MMM DD":"dddd, MMMM DD",dayFormat:function(){switch(!0){case f<768:return"D";case f<1600:return"ddd, D";default:return"dddd D MMMM"}}(),timeGutterFormat:"HH:mm"},components:{toolbar:function(e){var t=e.label,n=e.date;return(0,h.jsxs)(l.h4,{ref:y,view:a,children:["day"===a&&(0,h.jsx)(m,{label:"doctor"===i?t:"Daily appointments scheduler"}),(0,h.jsx)(Y,{}),"day"===a&&(0,h.jsx)(p.Z,{onNavigate:ee,date:n,label:t}),"week"===a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j,{date:n,setter:K}),(0,h.jsx)(x,{date:n,setter:K})]}),"month"===a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k,{date:n,setter:K}),(0,h.jsx)(w,{date:n,setter:K})]})]})},event:function(e){var t=e.event;return(0,h.jsx)(u.Z,{event:t,variant:a})},timeSlotWrapper:function(e){return v(e,30,1,!0)}},className:"calendar-".concat(a," calendar-").concat(i),messages:{showMore:function(e){return"+ ".concat(e)}},popup:!0,selectable:"patient"===i&&"day"!==a,onSelectSlot:"patient"===i&&"day"!==a&&function(){return z(!0)}};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(l.W2,{children:[(0,h.jsx)(l.SS,(0,n.Z)({},te)),"patient"===i&&"day"!==a&&(0,h.jsx)(M.Z,{elemsHeight:O,name:I.label||null,open:_,handler:z})]}),(0,h.jsx)(l.$_,{ref:D,children:(0,h.jsx)(g.Z,{children:S.U.map((function(e){var t=e.cat,a=e.color,n=e.label;return(0,h.jsx)(Z.Z,{color:a,legend:n},t)}))})})]})}},22172:function(e,t,a){a.d(t,{b_:function(){return s},i7:function(){return u},oF:function(){return o},tV:function(){return c}});var n=a(96576),r=a(52899),l=a(80184),s=[{value:"work",label:"Work"},{value:"travel",label:"Travel"},{value:"family",label:"Family"},{value:"other",label:"Other"}],o=[{value:"all",label:"All Departments"},{value:"family",label:"Family Doctors"},{value:"therapy",label:"Therapists"},{value:"dent",label:"Dentists"},{value:"cardio",label:"Cardiologists"}],u=[{value:"all",label:"All My Tests"},{value:"blood",label:"Blood Count"},{value:"xray",label:"X-Ray"},{value:"ecg",label:"ECG"},{value:"ct",label:"CT Scan"},{value:"mri",label:"MRI"},{value:"ultrasound",label:"Ultrasound"},{value:"prenatal",label:"Prenatal Testing"}],c=function(){var e=[];return n.q.forEach((function(t){e.push({value:t.id,label:(0,l.jsxs)("div",{className:"user-option",children:[(0,l.jsx)(r.Z,{avatar:t.avatar,alt:t.name,size:40}),(0,l.jsx)("span",{children:t.name})]})})})),e}},95579:function(e,t,a){a.r(t);var n=a(29439),r=a(71508),l=a(75846),s=a(72791),o=a(80184);t.default=function(){var e=(0,s.useState)("day"),t=(0,n.Z)(e,2),a=t[0],u=t[1],c="";switch(a){case"week":c="Upcoming Appointments";break;case"month":c="Appointments Archive";break;default:c="Today appointments"}return(0,o.jsx)(r.Z,{title:c,hasBadge:"day"===a,qty:2,children:(0,o.jsx)(l.Z,{current:a,handler:u})})}},16945:function(e,t,a){function n(e){return e>999&&e<1e6?(e/1e3).toFixed(1)+"k":e>1e6?(e/1e6).toFixed(1)+"m":e<900?e:void 0}function r(e){return e<10?"0"+e:e}a.d(t,{t:function(){return n},v:function(){return r}})},75846:function(e,t,a){var n=a(249),r=a(60044),l=a(80184);t.Z=function(e){var t=e.handler,a=e.current;return(0,l.jsx)(n.Z,{name:"DoctorCalendar",children:(0,l.jsx)(r.Z,{current:a,viewChangeHandler:t,type:"doctor"})})}}}]);
//# sourceMappingURL=579.a9532b53.chunk.js.map