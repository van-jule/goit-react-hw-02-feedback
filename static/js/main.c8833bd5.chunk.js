(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={list:"Statistics_list__3pLwf",item:"Statistics_item__1Igr8",itemResult:"Statistics_itemResult__3Bw94 Statistics_item__1Igr8"}},,function(e,t,a){e.exports={section:"Section_section__AbCA7",title:"Section_title__1BBH8"}},,,,,function(e,t,a){e.exports={wrap:"FeedbackOptions_wrap__2pjYY",button:"FeedbackOptions_button__1xSmW"}},function(e,t,a){e.exports={message:"Notification_message__3kwNP"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(5),i=a.n(n),r=(a(17),a(6)),o=a(7),l=a(8),u=a(12),b=a(11),d=(a(18),a(2)),j=a.n(d),h=a(0),m=function(e){var t=e.good,a=e.neutral,s=e.bad,c=e.total,n=e.positivePercentage;return Object(h.jsxs)("ul",{className:j.a.list,children:[Object(h.jsxs)("li",{className:j.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:j.a.item,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:j.a.item,children:["Bad: ",s]}),Object(h.jsxs)("li",{className:j.a.itemResult,children:["Total: ",c]}),Object(h.jsxs)("li",{className:j.a.itemResult,children:["Positive feedback: ",n,"%"]})]})},p=a(9),v=a.n(p),f=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{className:"wrap",children:t.map((function(e){return Object(h.jsx)("button",{className:v.a.button,type:"button",value:e,onClick:a,children:e},e)}))})},O=a(4),_=a.n(O),g=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:_.a.section,children:[t&&Object(h.jsx)("h2",{className:_.a.title,children:t}),a]})};g.defaultProps={title:"",children:[]};var x=g,k=a(10),N=a.n(k),w=function(e){var t=e.message;return Object(h.jsxs)("p",{className:N.a.message,children:[t," "]})};w.defaultProps={message:""};var S=w,P=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.value;console.log(t.target),e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(l.a)(a,[{key:"render",value:function(){for(var e=0,t=0,a=Object.values(this.state);t<a.length;t++){e+=a[t]}var s;s=e?Math.round(this.state.good/e*100):0;var c=Object.keys(this.state);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:c,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(x,{title:"Statistics",children:e?Object(h.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:s}):Object(h.jsx)(S,{message:"No feedback given"})})]})}}]),a}(s.Component),y=P;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c8833bd5.chunk.js.map