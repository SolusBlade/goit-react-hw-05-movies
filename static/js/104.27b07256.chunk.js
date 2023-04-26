"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[104],{3026:function(e,t,n){var r=n(7689),a=n(6036),i=n(184);t.Z=function(){var e=(0,r.s0)(),t=(0,r.TH)();return(0,i.jsxs)("button",{onClick:function(){var n=t.state;e(n)},className:"backBtn",children:[(0,i.jsx)(a.ZhP,{}),"Go back"]})}},4100:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(2791),a=n(7689),i=n(9439),o=n(8182),s=n(1087),c=n(8565),l="MovieInfo_poster__haZsf",u="MovieInfo_movieWrap__0lyeo",f="MovieInfo_movieInfo__LxIpr",v="MovieInfo_title__oNnRW",m="MovieInfo_text__g5gK6",h="MovieInfo_list__i7jw8",d="MovieInfo_item__ZxVDU",p="MovieInfo_imgWrap__2gAyM",_="MovieInfo_nav__NGnOP",g="MovieInfo_link__KJLIh",j="MovieInfo_active__XQDP5",x=n(184),y=function(e){var t=e.isActive;return(0,o.Z)(g,t&&j)},b=function(){var e=(0,r.useState)({}),t=(0,i.Z)(e,2),n=t[0],o=t[1],g=n.poster_path,j=n.title,b=n.release_date,N=n.vote_average,w=n.overview,k=n.genres,I=void 0===k?[]:k,O=(0,a.TH)(),Z=O.pathname.split("/"),M=0;return M="cast"===Z[Z.length-1]||"reviews"===Z[Z.length-1]?Z[Z.length-2]:Z[Z.length-1],(0,r.useEffect)((function(){(0,c.PG)(M).then((function(e){o(e)}))}),[M]),(0,x.jsx)(x.Fragment,{children:g&&(0,x.jsxs)("div",{className:u,children:[(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{src:null!==g?"https://image.tmdb.org/t/p/original"+g:"https://cinemaone.net/images/movie_placeholder.png",className:l,alt:""}),(0,x.jsxs)("ul",{className:_,children:[(0,x.jsx)("li",{children:(0,x.jsx)(s.OL,{className:y,state:O.state,to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(s.OL,{className:y,to:"reviews",state:O.state,children:"Reviews"})})]})]}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsxs)("h1",{className:v,children:[j," ",(0,x.jsxs)("span",{children:["(",parseInt(b),")"]})," "]}),(0,x.jsxs)("p",{className:m,children:["Rating: ",parseFloat(N).toFixed(1)]}),(0,x.jsx)("h2",{className:v,children:"Overview"}),(0,x.jsx)("p",{className:m,children:w}),(0,x.jsx)("h2",{className:v,children:"Genres"}),(0,x.jsx)("ul",{className:h,children:I.map((function(e){var t=e.name,n=e.id;return(0,x.jsx)("li",{className:d,children:t},n)}))})]})]})})},N=(0,r.memo)(b),w=n(3026),k=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(w.Z,{}),(0,x.jsx)(N,{}),(0,x.jsx)(a.j3,{})]})},I=(0,r.memo)(k)},8565:function(e,t,n){n.d(t,{PG:function(){return o},PK:function(){return c},PU:function(){return l},XJ:function(){return s},ay:function(){return i},az:function(){return u}});var r=n(1243),a="571e3bd2c39f71ab899b0219901320b3";r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(e){return r.Z.get("/trending/movie/day",{params:{page:e,api_key:a}}).then((function(e){return e.data}))},o=function(e){return r.Z.get("/movie/".concat(e),{params:{api_key:a}}).then((function(e){return e.data}))},s=function(e){return r.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:a}}).then((function(e){return e.data}))},c=function(e){return r.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:a}}).then((function(e){return e.data}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("/search/movie",{params:{page:t,query:e,api_key:a}}).then((function(e){return e.data}))},u=function(e){return r.Z.get("/movie/".concat(e,"/videos"),{params:{api_key:a}}).then((function(e){return e.data}))}},8182:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},9983:function(e,t,n){n.d(t,{w_:function(){return l}});var r=n(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(a),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)},s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,a=e.attr,i=e.size,c=e.title,l=s(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,l,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=104.27b07256.chunk.js.map