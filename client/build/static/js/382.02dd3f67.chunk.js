"use strict";(self.webpackChunkmydashboard=self.webpackChunkmydashboard||[]).push([[382],{6382:function(e,s,t){t.r(s);var n=t(2791),r=t(9434),a=t(1803),i=t(34),c=t(184);s.default=function(){(0,n.useEffect)((function(){(0,a.wE)("Canceled")}),[]);var e=(0,r.v9)((function(e){return e.task.Canceled}));return(0,c.jsx)("div",{className:"dashboard",children:(0,c.jsxs)("div",{className:"dashboard__wrapper",children:[(0,c.jsxs)("div",{className:"dashboard__search__task",children:[(0,c.jsx)("div",{className:"task__status__title",children:(0,c.jsx)("h2",{children:"Cancle Task"})}),(0,c.jsxs)("div",{className:"task__search__bar",children:[(0,c.jsx)("input",{type:"text",placeholder:"search or type"}),(0,c.jsx)("span",{children:(0,c.jsx)("i",{class:"ri-search-line"})})]})]}),(0,c.jsx)("div",{className:"todo__task-wrapper",children:e.map((function(e,s){return(0,c.jsx)(i.Z,{item:e},s)}))})]})})}},34:function(e,s,t){t.d(s,{Z:function(){return d}});t(2791);var n=t(1803),r=t(1830),a=t.n(r);var i=t(184),c=void 0,d=function(e){var s=e.item;return(0,i.jsx)("div",{className:"todo__card",children:(0,i.jsxs)("div",{className:"todo__card-bottom",children:[(0,i.jsx)("h4",{children:s.title}),(0,i.jsx)("p",{className:"todo__description",children:s.description}),(0,i.jsxs)("div",{className:"todo__card-other",children:[(0,i.jsxs)("div",{className:"todo__card-icons",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)("i",{className:"ri-calendar-2-line"}),s.createdDate]}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{onClick:function(e,t){(function(e,s){return a().fire({title:"Change Status",input:"select",inputOptions:{New:"New",Completed:"Completed",Progress:"Progress",Canceled:"Canceled"},inputValue:s}).then((function(s){return(0,n.Zr)(e,s.value).then((function(e){return e}))}))})(e,t).then((function(e){!0===e&&("New"===s.status?(0,n.wE)("New"):"Completed"===s.status?(0,n.wE)("Completed"):"Progress"===s.status?(0,n.wE)("Progress"):(0,n.wE)("Canceled"))}))}.bind(c,s._id,s.status),className:"ri-edit-2-line task__edit"})}),(0,i.jsx)("p",{children:(0,i.jsx)("i",{onClick:function(e){(function(e){return a().fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes Delete it !"}).then((function(s){if(s.isConfirmed)return(0,n.zP)(e).then((function(e){return e}))}))})(e).then((function(e){!0===e&&("New"===s.status?(0,n.wE)("New"):"Completed"===s.status?(0,n.wE)("Completed"):"Progress"===s.status?(0,n.wE)("Progress"):(0,n.wE)("Canceled"))}))}.bind(c,s._id),className:"ri-delete-bin-5-line task__delete"})})]}),(0,i.jsx)("span",{className:"task__status",style:"New"===s.status?{background:"rgb(230, 252, 178)"}:"Completed"===s.status?{background:"rgb(151, 255, 174)"}:"Progress"===s.status?{background:"rgb(82, 242, 253)"}:{background:"rgb(253, 82, 82)"},children:s.status})]})]})})}}}]);
//# sourceMappingURL=382.02dd3f67.chunk.js.map