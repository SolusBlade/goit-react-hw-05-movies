"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[100],{26:function(e,n,t){var r=t(689),i=t(36),a=t(184);n.Z=function(){var e=(0,r.s0)(),n=(0,r.TH)();return(0,a.jsxs)("button",{onClick:function(){var t=n.state;e(t)},className:"backBtn",children:[(0,a.jsx)(i.ZhP,{}),"Go back"]})}},100:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(791),i=t(689),a=t(439),s=t(182),o=t(87),c=t(565),u="MovieInfo_poster__haZsf",l="MovieInfo_movieWrap__0lyeo",f="MovieInfo_movieInfo__LxIpr",v="MovieInfo_title__oNnRW",_="MovieInfo_text__g5gK6",h="MovieInfo_list__i7jw8",m="MovieInfo_item__ZxVDU",d="MovieInfo_imgWrap__2gAyM",p="MovieInfo_nav__NGnOP",g="MovieInfo_link__KJLIh",j="MovieInfo_active__XQDP5",x=t(184),N=function(e){var n=e.isActive;return(0,s.Z)(g,n&&j)},I=function(){var e=(0,r.useState)({}),n=(0,a.Z)(e,2),t=n[0],s=n[1],g=t.poster_path,j=t.title,I=t.release_date,y=t.vote_average,b=t.overview,Z=t.genres,k=void 0===Z?[]:Z,M=(0,i.TH)(),w=M.pathname.split("/"),P=0;return P="cast"===w[w.length-1]||"reviews"===w[w.length-1]?w[w.length-2]:w[w.length-1],(0,r.useEffect)((function(){(0,c.PG)(P).then((function(e){s(e)}))}),[P]),(0,x.jsx)(x.Fragment,{children:g&&(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("div",{className:d,children:[(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/original"+g,className:u,alt:""}),(0,x.jsxs)("ul",{className:p,children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:N,state:M.state,to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.OL,{className:N,to:"reviews",state:M.state,children:"Reviews"})})]})]}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsxs)("h1",{className:v,children:[j," ",(0,x.jsxs)("span",{children:["(",parseInt(I),")"]})," "]}),(0,x.jsxs)("p",{className:_,children:["User score: ",parseInt(10*y),"%"]}),(0,x.jsx)("h2",{className:v,children:"Overview"}),(0,x.jsx)("p",{className:_,children:b}),(0,x.jsx)("h2",{className:v,children:"Genres"}),(0,x.jsx)("ul",{className:h,children:k.map((function(e){var n=e.name,t=e.id;return(0,x.jsx)("li",{className:m,children:n},t)}))})]})]})})},y=(0,r.memo)(I),b=t(26),Z=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(b.Z,{}),(0,x.jsx)(y,{}),(0,x.jsx)(i.j3,{})]})},k=(0,r.memo)(Z)},565:function(e,n,t){t.d(n,{PG:function(){return s},PK:function(){return c},PU:function(){return u},XJ:function(){return o},ay:function(){return a}});var r=t(243),i="571e3bd2c39f71ab899b0219901320b3";r.Z.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return r.Z.get("/trending/movie/day",{params:{api_key:i}}).then((function(e){return e.data}))},s=function(e){return r.Z.get("/movie/".concat(e),{params:{api_key:i}}).then((function(e){return e.data}))},o=function(e){return r.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:i}}).then((function(e){return e.data}))},c=function(e){return r.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:i}}).then((function(e){return e.data}))},u=function(e){return r.Z.get("/search/movie",{params:{query:e,api_key:i}}).then((function(e){return e.data}))}},182:function(e,n,t){function r(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.Z=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(i&&(i+=" "),i+=n);return i}}}]);
//# sourceMappingURL=100.9faa56ec.chunk.js.map