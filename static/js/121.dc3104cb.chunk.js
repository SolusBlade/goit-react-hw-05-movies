"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[121],{121:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(439),i=a(791),r=a(689),c=a(565),o="MovieReview_item__IMJya",s="MovieReview_list__hbRhP",u="MovieReview_avatar__KNERk",h="MovieReview_textWrap__lz7pb",v="MovieReview_sectionTitle__GkEIZ",l="MovieReview_title__5UPR3",_="MovieReview_text__nFhRU",p=a(184),m=function(){var e=(0,i.useState)([]),t=(0,n.Z)(e,2),a=t[0],m=t[1],d=(0,r.TH)().pathname.split("/"),f=d[d.length-2];return(0,i.useEffect)((function(){(0,c.PK)(f).then((function(e){m(e.results)}))}),[f]),(0,p.jsxs)(p.Fragment,{children:[0===a.length&&(0,p.jsx)("h2",{className:v,children:"We don't have any reviews for this movie"}),a.length>0&&(0,p.jsx)("ul",{className:s,children:a.map((function(e){var t=e.author,a=e.author_details,n=e.content,i=e.id;return(0,p.jsxs)("li",{className:o,children:[(0,p.jsx)("img",{src:null===a.avatar_path||void 0===a.avatar_path?"https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=":a.avatar_path.includes("/https")?a.avatar_path.slice(1):"https://image.tmdb.org/t/p/original"+a.avatar_path,className:u,width:50,height:50,alt:""}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("h2",{className:l,children:t}),(0,p.jsx)("p",{className:_,children:n})]})]},i)}))})]})},d=(0,i.memo)(m)},565:function(e,t,a){a.d(t,{PG:function(){return c},PK:function(){return s},PU:function(){return u},XJ:function(){return o},ay:function(){return r}});var n=a(243),i="571e3bd2c39f71ab899b0219901320b3";n.Z.defaults.baseURL="https://api.themoviedb.org/3";var r=function(){return n.Z.get("/trending/movie/day",{params:{api_key:i}}).then((function(e){return e.data}))},c=function(e){return n.Z.get("/movie/".concat(e),{params:{api_key:i}}).then((function(e){return e.data}))},o=function(e){return n.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:i}}).then((function(e){return e.data}))},s=function(e){return n.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:i}}).then((function(e){return e.data}))},u=function(e){return n.Z.get("/search/movie",{params:{query:e,api_key:i}}).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=121.dc3104cb.chunk.js.map