"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return v}});var r=t(439),a=t(952),u=t(791),c=t(689),s="Reviews_reviewsContainer__bHfUv",i="Reviews_reviewsAuthor__vf7dl",o="Reviews_reviewsContent__uAAxd",f="Reviews_reviewsList__hDAQA",p=t(184),v=function(){var e=(0,u.useState)([]),n=(0,r.Z)(e,2),t=n[0],v=n[1],l=(0,c.UO)().movieId;if((0,u.useEffect)((function(){(0,a.Jh)(l).then(v)}),[l]),t)return(0,p.jsx)("div",{className:s,children:(0,p.jsx)("ul",{className:f,children:0===t.length?"Sorry, we don't have reviews for this movie":t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{className:i,children:["Author: ",n]}),(0,p.jsx)("p",{className:o,children:t})]},r)}))})})}},952:function(e,n,t){t.d(n,{Df:function(){return i},IQ:function(){return p},Jh:function(){return v},Pg:function(){return o},Wf:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(243),s="1d2ce5babf28ef05892bea5e31f7dd12";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.7ee1bc49.chunk.js.map