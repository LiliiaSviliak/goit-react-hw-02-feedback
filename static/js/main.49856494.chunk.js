(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){e.exports={feedback__buttons:"FeedbackOptions_feedback__buttons__2Wpz0"}},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=n(10),s=n(2),b=n(3),u=n(5),l=n(4),d=n(11),j=n.n(d),h=n(6),p=n.n(h),O=n(0),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return Object(O.jsxs)("section",{className:p.a.container,children:[Object(O.jsx)("h2",{className:p.a.main__title,children:t}),Object(O.jsx)("div",{className:p.a.feedbackButtons__container,children:n})]})}}]),n}(a.Component),v=n(12),_=n.n(v),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onLeaveFeedback,n=e.options;return Object(O.jsx)("button",{className:_.a.feedback__buttons,onClick:t,children:n})}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Good: ",t]}),Object(O.jsxs)("p",{children:["Neutral: ",n]}),Object(O.jsxs)("p",{children:["Bad: ",a]}),Object(O.jsxs)("p",{children:["Total: ",c]}),Object(O.jsxs)("p",{children:["Positive feedback: ",r,"%"]})]})}}]),n}(a.Component),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(O.jsx)("h2",{className:p.a.container,children:e})}}]),n}(a.Component),m=(n(26),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.stateKeysArray=Object.keys(e.state),e.handleStateChange=function(t){e.setState((function(e){var n=t.target.textContent.toLowerCase();return Object(o.a)({},n,e[n]+1)}))},e.capitalizeFirstLetter=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.floor(t/e.countTotalFeedback()*100)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.good,a=t.neutral,c=t.bad;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f,{title:"Please leave feedback",children:this.stateKeysArray.map((function(t){var n=j.a.generate();return Object(O.jsx)(k,{options:e.capitalizeFirstLetter(t),onLeaveFeedback:e.handleStateChange},n)}))}),n>0||a>0||c>0?Object(O.jsx)(f,{title:"Statistics",children:Object(O.jsx)(g,{good:n,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(O.jsx)(x,{message:"No feedback given"})]})}}]),n}(a.Component));i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"Section_container__2QhTq",main__title:"Section_main__title__tlkti",feedbackButtons__container:"Section_feedbackButtons__container__iX9K4"}}},[[27,1,2]]]);
//# sourceMappingURL=main.49856494.chunk.js.map