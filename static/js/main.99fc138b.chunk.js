(this["webpackJsonpmessage-board"]=this["webpackJsonpmessage-board"]||[]).push([[0],{20:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t(9),a=t.n(o),i=t(4),u=t(2),s=t(3);function d(){var n=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  font-size: 2rem;\n"]);return d=function(){return n},n}function b(){var n=Object(u.a)(["\n  color: red;\n"]);return b=function(){return n},n}function f(){var n=Object(u.a)(["\n  white-space: pre-wrap;\n  word-break: break-word;\n"]);return f=function(){return n},n}function j(){var n=Object(u.a)(["\n  color: #666;\n  font-size: 0.75rem;\n"]);return j=function(){return n},n}function m(){var n=Object(u.a)(["\n  margin: 0;\n  font-size: 1.25rem;\n"]);return m=function(){return n},n}function l(){var n=Object(u.a)(["\n  margin-bottom: 1rem;\n"]);return l=function(){return n},n}function h(){var n=Object(u.a)(["\n  padding: 1rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.25);\n  margin-bottom: 1rem;\n"]);return h=function(){return n},n}function O(){var n=Object(u.a)(["\n  padding: 1rem 0;\n  /* background-color: #fafafa;\n  padding: 1rem 2rem;\n  border-radius: 1rem;\n  margin-bottom: 2.5rem;\n  box-shadow: 0 0 1rem rgba(0,0,0,0.125); */\n"]);return O=function(){return n},n}function g(){var n=Object(u.a)(["\n  appearance: none;\n  background: none;\n  cursor: pointer;\n  display: inline-block;\n  padding: .75rem 1.5rem;\n  border: 1px solid #666;\n  border-radius: 32rem;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: 700;\n  line-height: 1.5;\n"]);return g=function(){return n},n}function p(){var n=Object(u.a)(["\n  resize: none;\n  background: none;\n  padding: 1rem;\n  /* border: none; */\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n"]);return p=function(){return n},n}function v(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 2rem;\n"]);return v=function(){return n},n}function x(){var n=Object(u.a)(["\n  color: #333;\n"]);return x=function(){return n},n}function w(){var n=Object(u.a)(["\n  max-width: 40rem;\n  margin: 0 auto;\n"]);return w=function(){return n},n}var k="https://student-json-api.lidemy.me/comments",y=s.a.div(w()),S=s.a.h1(x()),z=s.a.form(v()),J=s.a.textarea(p()),A=s.a.button(g()),B=s.a.div(O()),D=s.a.div(h()),E=s.a.div(l()),L=s.a.p(m()),M=s.a.time(j()),N=s.a.div(f()),_=s.a.p(b()),C=s.a.div(d());function F(n){var e=n.author,t=n.time,c=n.children;return Object(r.jsxs)(D,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(L,{children:e}),Object(r.jsx)(M,{children:t})]}),Object(r.jsx)(N,{children:c})]})}var I=function(){var n=Object(c.useState)(null),e=Object(i.a)(n,2),t=e[0],o=e[1],a=Object(c.useState)(null),u=Object(i.a)(a,2),s=u[0],d=u[1],b=Object(c.useState)(),f=Object(i.a)(b,2),j=f[0],m=f[1],l=Object(c.useState)(),h=Object(i.a)(l,2),O=h[0],g=h[1],p=Object(c.useState)(!1),v=Object(i.a)(p,2),x=v[0],w=v[1],D=function(){return fetch("".concat(k,"?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){o(n)})).catch((function(n){d(n.message)}))};return Object(c.useEffect)((function(){D()}),[]),Object(r.jsxs)(y,{children:[x&&Object(r.jsx)(C,{children:"Loading..."}),Object(r.jsx)(S,{children:"Message Board"}),Object(r.jsxs)(z,{onSubmit:function(n){n.preventDefault(),x||(w(!0),fetch("".concat(k),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:"my name",body:j})}).then((function(n){return n.json()})).then((function(n){w(!1),0!==n.ok?(m(""),D()):g(n.message)})).catch((function(n){w(!1),g(n.message)})))},children:[Object(r.jsx)(J,{value:j,onChange:function(n){m(n.target.value)},onFocus:function(){g(null)},row:4}),Object(r.jsx)("div",{children:Object(r.jsx)(A,{children:"submit"})}),O&&Object(r.jsx)(_,{children:O})]}),s&&Object(r.jsxs)(_,{children:["Something went wrong. ",s.toString()]}),t&&0===t.length&&Object(r.jsx)("p",{children:"No Message"}),Object(r.jsx)(B,{children:t&&t.map((function(n){return Object(r.jsx)(F,{author:n.nickname,time:new Date(n.createdAt).toLocaleString(),children:n.body},n.id)}))})]})};a.a.render(Object(r.jsx)(I,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.99fc138b.chunk.js.map