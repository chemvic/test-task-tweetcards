"use strict";(self.webpackChunktest_task_tweetcards=self.webpackChunktest_task_tweetcards||[]).push([[37],{7037:function(e,s,t){t.r(s),t.d(s,{default:function(){return L}});var r="Tweets_users__fJFGO",a="Tweets_container__ird65",n="Tweets_users_item__rXHKR",i="Tweets_button__H9kRc",l="Tweets_buttons__5t9iO",o=t(4871),c=t(1763),u=t(9434),d=t(1360),_={card:"Card_card__IV4TN",avatar:"Card_avatar__AcpZa"},f=t(3329),w=function(e){var s=e.user,t=e.id,r=e.avatar,a=e.followers,n=e.tweets,i=e.isFollowed,l=(0,u.I0)(),c=(0,u.v9)((function(e){return e.follow[t]}));return(0,f.jsxs)("div",{className:_.card,children:[(0,f.jsx)("img",{src:r,alt:s,className:_.avatar}),(0,f.jsxs)("p",{className:_.name,children:[n," tweets"]}),(0,f.jsxs)("p",{className:_.followers,children:[a," followers"]}),(0,f.jsx)("button",{className:"button",onClick:function(){l((0,o.G)(t)),l((0,d.S)({id:t,followers:a+(c?-1:1)}))},style:{backgroundColor:c?"#5CD3A8":"#EBD8FF"},children:c?"Following":"Follow"})]})},v="LoadMoreButton_button__D1C8V",m=t(7919),h=function(){var e=(0,u.I0)(),s=(0,u.v9)((function(e){return e.currentLimit.limit}));return(0,f.jsx)("button",{type:"button",onClick:function(){e((0,m.Ec)()),e((0,c.u)(s+3))},className:v,children:"LOAD MORE"})},j=t(2791),x="Loader_loader__9ooOd",b=t(643),N=function(e){var s=e.visible;return(0,f.jsxs)("div",{className:x,children:[" ",(0,f.jsx)(b.g4,{height:"80",width:"80",radius:"9",color:"#5736A3",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:s})]})},k=t(1087),p=t(7847),C=function(e){return e.users.items},g=function(e){return e.users.isLoading},F=function(e){return e.users.error},L=function(){var e=(0,u.I0)(),s=(0,u.v9)(C),t=(0,u.v9)(g),o=(0,u.v9)(F),d=p.h.getState().currentLimit.limit;return(0,j.useEffect)((function(){e((0,c.u)(d))}),[e,d]),(0,f.jsxs)("div",{className:a,children:[t&&!o&&(0,f.jsx)(N,{visible:!0}),(0,f.jsx)("ul",{className:r,children:s.length>0&&s.map((function(e){var s=e.user,t=e.id,r=e.avatar,a=e.followers,i=e.tweets,l=e.isFollowed;return(0,f.jsx)("li",{className:n,children:(0,f.jsx)(w,{user:s,avatar:r,followers:a,tweets:i,id:t,isFollowed:l})},t)}))}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)(k.rU,{to:"/",className:i,onClick:function(){e((0,m.Q1)())},children:"Back"}),d>0&&d<12&&(0,f.jsx)(h,{})]})]})}}}]);
//# sourceMappingURL=37.8b01be0c.chunk.js.map