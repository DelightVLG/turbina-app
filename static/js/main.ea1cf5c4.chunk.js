(this.webpackJsonpturbina=this.webpackJsonpturbina||[]).push([[0],{64:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s.n(c),i=s(55),r=s.n(i),l=(s(64),s(13)),o="\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c\u0430",j="https://www.notion.so/de0ecc64f8134e178448dcbc6382046e",d=[{link:"https://music.yandex.ru/",name:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0443\u0437\u044b\u043a\u0430",id:0},{link:"https://www.spotify.com/ru-ru/",name:"Spotify",id:1},{link:"https://www.apple.com/ru/apple-music/",name:"Apple Music",id:2},{link:"https://vk.com/vkmusic",name:"VK Music",id:3}],u=function(){return Object(n.jsxs)("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("line",{x1:"4.9034",y1:"4.90373",x2:"14.0958",y2:"14.0961",stroke:"white",strokeWidth:"2"}),Object(n.jsx)("line",{x1:"4.90422",y1:"14.0961",x2:"14.0966",y2:"4.90373",stroke:"white",strokeWidth:"2"})]})};var m=function(){var e=s(38),t=Object(c.useState)(!0),a=Object(l.a)(t,2),i=a[0],r=a[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),m=j[0],h=j[1];return Object(n.jsxs)("div",{className:"streamings",children:[Object(n.jsx)("button",{className:e("streamings__open-btn",{"streamings__open-btn_is-clicked":m}),onClick:function(){r(!i),h(!m)},children:m?Object(n.jsx)(u,{}):"\u0421\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0438"}),Object(n.jsx)("ul",{className:e("streamings__list",{streamings__list_type_mobile:!i}),children:d.map((function(e){var t=e.id,s=e.link,c=e.name;return Object(n.jsx)("li",{className:"streamings__list-item",children:Object(n.jsxs)("a",{className:"streamings__link",rel:"noreferrer",href:s,target:"_blank",children:[c," \u2197"]})},t)}))})]})},h=s(53),b=s.n(h);s(66);var p=function(e){var t=e.title,s=e.musician,c=e.poet,a=e.curTime,i=e.duration,r=e.onClick;return Object(n.jsxs)("div",{className:"song",children:[Object(n.jsxs)("div",{className:"song__container",children:[Object(n.jsxs)("span",{className:"song__titles",children:[Object(n.jsxs)("span",{className:"song__title",children:[t," \u2014 "]}),Object(n.jsx)("span",{className:"song__title",children:s}),Object(n.jsx)("span",{className:"song__title",children:" feat. "}),Object(n.jsx)("span",{className:"song__title",children:c})]}),Object(n.jsx)("span",{className:"song__timer",children:b.a.duration(a,"seconds").format("mm:ss",{trim:!1})})]}),Object(n.jsx)("div",{className:"song__progress-bar",onClick:function(e){var t=e.target.getBoundingClientRect(),s=(e.clientX-t.left)/t.width*100;r(i/100*s)},children:Object(n.jsx)("div",{className:"song__progress-knob",style:{width:"".concat(a/i*100,"%")}})})]})};var x=function(e){var t=e.songs,s=e.changeCurSong;return Object(n.jsx)("ul",{className:"playlist",children:t.map((function(e){return Object(n.jsxs)("li",{className:"playlist__row",onClick:function(){return s(e)},children:[e.title&&Object(n.jsxs)("span",{className:"playlist__title",children:[e.title," \u2014 "]}),e.musician&&Object(n.jsx)("span",{className:"playlist__title",children:e.musician}),Object(n.jsx)("span",{className:"playlist__feat",children:" feat. "}),e.poet&&Object(n.jsx)("span",{className:"playlist__title",children:e.poet})]},e.id)}))})},O=function(){return Object(n.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 0C0.447266 0 0 0.447266 0 1V17C0 17.5527 0.447266 18 1 18H3C3.55273 18 4 17.5527 4 17V1C4 0.447266 3.55273 0 3 0H1ZM11 0C10.4473 0 10 0.447266 10 1V17C10 17.5527 10.4473 18 11 18H13C13.5527 18 14 17.5527 14 17V1C14 0.447266 13.5527 0 13 0H11Z",fill:"white"})})},_=function(){return Object(n.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 20 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M18.47 11.3307C19.668 12.1211 19.668 13.8789 18.47 14.6693L3.10149 24.81C1.77177 25.6873 6.9507e-07 24.7337 7.64706e-07 23.1406L1.65123e-06 2.85939C1.72086e-06 1.2663 1.77177 0.312659 3.10149 1.19004L18.47 11.3307Z",fill:"white"})})},f=s(38);var g=function(e){var t=e.isPlaying,s=e.handleClick;return Object(n.jsxs)("button",{className:f("play-button",{"play-button__pause":t,"play-button__play":!t}),onClick:s,children:[" ",t?Object(n.jsx)(O,{}):Object(n.jsx)(_,{})]})};var v=function(e){var t=e.lyricsShown,s=e.onClick;return Object(n.jsx)("button",{className:"switch-button",onClick:s,children:t?"\u0420\u0435\u043b\u0438\u0437\u044b":"\u0422\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438"})},N=function(){return Object(n.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM10.5867 12L7.05116 8.46447L8.46537 7.05025L12.0009 10.5858L15.5364 7.05025L16.9507 8.46447L13.4151 12L16.9507 15.5355L15.5364 16.9497L12.0009 13.4142L8.46537 16.9497L7.05116 15.5355L10.5867 12Z",fill:"white"})})},w=function(){return Object(n.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.6402 8.23178L12 7.69829L11.3598 8.23178L5.35982 13.2318L6.64018 14.7682L12 10.3017L17.3598 14.7682L18.6402 13.2318L12.6402 8.23178Z",fill:"white"})})},k=function(e){var t=e.onClick,s=e.isExpanded;return Object(n.jsx)("button",{className:"expander-button",onClick:t,children:s?Object(n.jsx)(N,{}):Object(n.jsx)(w,{})})},y=s(38);var C=function(e){var t=e.url;return Object(n.jsx)("a",{className:y({"video-button":t}),href:t,target:"_blank",rel:"noreferrer",children:t&&"\u041a\u043b\u0438\u043f"})},L=s(38);var S=function(e){var t=e.cover;return Object(n.jsx)("img",{className:L({cover:t}),src:t,alt:""})},M=s.p+"static/media/nazare.58888316.mp3",B=s.p+"static/media/gosudarstvo.ecf55fdf.mp3",H=s.p+"static/media/Letov.1d5ce73f.jpg",R=[{id:"0",title:"\u041d\u0430 \u0437\u0430\u0440\u0435",musician:"\u041c\u043e\u043d\u0435\u0442\u043e\u0447\u043a\u0430",poet:"\u0410\u043b\u044c\u044f\u043d\u0441",audio:M,cover:s.p+"static/media/Monetochka.1ed2c000.jpg",videoUrl:"https://youtu.be/BvJle-E_4JI",lyrics:"\u0420\u043e\u0432\u043d\u044b\u0439 \u0431\u0435\u0433 \u043c\u043e\u0435\u0439 \u0441\u0443\u0434\u044c\u0431\u044b\n    \u041d\u043e\u0447\u044c, \u043f\u0435\u0447\u0430\u043b\u044c \u0438 \u0431\u043b\u0435\u0441\u043a \u0434\u0443\u0448\u0438\n    \u041b\u0443\u043d\u043d\u044b\u0439 \u0441\u0432\u0435\u0442 \u0438 \u043c\u0430\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u0436\u0434\u044c\n    \u0412 \u043d\u0435\u0431\u0435\u0441\u0430\u0445\n    \u0414\u043e\u043b\u0433\u0438\u0439 \u0432\u0435\u043a \u043c\u043e\u0435\u0439 \u0437\u0432\u0435\u0437\u0434\u044b\n    \u0421\u043e\u043d\u043d\u044b\u0439 \u0431\u043b\u0435\u0441\u043a \u0437\u0435\u043c\u043d\u043e\u0439 \u0440\u043e\u0441\u044b\n    \u0413\u0440\u043e\u043c\u043a\u0438\u0439 \u0441\u043c\u0435\u0445 \u0438 \u0440\u0430\u0439\u0441\u043a\u0438\u0439 \u043c\u0435\u0434\n    \u0412 \u043d\u0435\u0431\u0435\u0441\u0430\u0445"},{id:"1",title:"\u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043e",musician:"\u0413\u0440\u0430\u0436\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043e\u0440\u043e\u043d\u0430",poet:"\u0415\u0433\u043e\u0440 \u041b\u0435\u0442\u043e\u0432",audio:B,cover:H,videoUrl:"",lyrics:"\u0420\u0436\u0430\u0432\u044b\u0439 \u0431\u0443\u043d\u043a\u0435\u0440 - \u043c\u043e\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u0430\n    \u0421\u043b\u0430\u0434\u043a\u0438\u0439 \u043f\u0440\u044f\u043d\u0438\u043a \u0437\u0430\u0441\u043e\u0445 \u0434\u0430\u0432\u043d\u043e\n    \u0421\u0430\u043f\u043e\u0433\u043e\u043c \u043c\u043e\u0435\u0433\u043e \u043d\u0430\u0440\u043e\u0434\u0430\n    \u0421\u0442\u0430\u0440\u0448\u0438\u043d\u0430 \u0442\u043e\u0440\u043c\u043e\u0437\u0438\u0442 \u0433\u043e\u0432\u043d\u043e.\n\n    \u0417\u0430\u043f\u0440\u044f\u0442\u0430\u043d\u043d\u044b\u0439 \u0437\u0430 \u0443\u0433\u043b\u043e\u043c\n    \u0423\u0431\u0438\u0442\u044b\u0439 \u043f\u043e\u043c\u043e\u0439\u043d\u044b\u043c \u0432\u0435\u0434\u0440\u043e\u043c\n    \u0414\u043e\u0431\u0440\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0443\u0448\u0435\u0434\u0448\u0438\u0439 \u0432 \u043f\u043e\u0434\u0432\u0430\u043b\n    \u0417\u0430\u0440\u0430\u043d\u0435\u0435 \u043e\u0431\u0440\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u043b\u043d\u0435\u0439\u0448\u0438\u0439 \u043f\u0440\u043e\u0432\u0430\u043b"},{id:"3",title:"\u041f\u0435\u0441\u043d\u044f",musician:"\u041c\u0443\u0437\u044b\u043a\u0430\u043d\u0442",poet:"\u041f\u043e\u044d\u0442",audio:"",cover:"",videoUrl:"",lyrics:""}],T=s(38);var V=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),s=Object(l.a)(t,2),a=s[0],i=s[1],r=Object(c.useState)(R.length<2),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(c.useState)(0),m=Object(l.a)(u,2),h=m[0],b=m[1],O=Object(c.useState)(0),_=Object(l.a)(O,2),f=_[0],N=_[1],w=Object(c.useState)(!1),y=Object(l.a)(w,2),L=y[0],M=y[1],B=Object(c.useState)(R[0]),H=Object(l.a)(B,2),V=H[0],Z=H[1],q=function(e,t){var s=!1;return function(){s||(e.apply(this,arguments),s=!0,setTimeout((function(){s=!1}),t))}}((function(e){N(e.target.currentTime)}),1e3);return Object(c.useEffect)((function(){L?e.current.play():e.current.pause(),b(e.current.duration)})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("audio",{ref:e,src:V.audio,onPlay:function(e){b(e.target.duration)},onTimeUpdate:q,children:["Your browser does not support the ",Object(n.jsx)("code",{children:"audio"})," element."]}),Object(n.jsxs)("div",{className:T("audioplayer",{audioplayer_expanded:a,audioplayer_collapsed:!a}),children:[Object(n.jsx)(g,{handleClick:function(){return M(!L)},isPlaying:L}),Object(n.jsx)(p,{title:V.title,musician:V.musician,poet:V.poet,duration:h,curTime:f,onClick:function(t){e.current.currentTime=t}}),Object(n.jsx)(k,{onClick:function(){i(!a)},isExpanded:a}),a&&Object(n.jsx)(C,{url:V.videoUrl}),a&&Object(n.jsx)(v,{lyricsShown:j,onClick:function(){d(!j)}}),a&&Object(n.jsx)(S,{cover:V.cover}),a&&Object(n.jsxs)("div",{className:"expanded-box",children:[Object(n.jsx)("h3",{className:"expanded-box__heading",children:j?"\u0422\u0435\u043a\u0441\u0442 \u043f\u0435\u0441\u043d\u0438:":"\u0420\u0435\u043b\u0438\u0437\u044b:"}),j&&Object(n.jsx)("p",{className:"expanded-box__text",children:V.lyrics}),!j&&Object(n.jsx)(x,{songs:R,changeCurSong:function(e){Z(e)}})]})]})]})},Z=function(){return Object(n.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M0 1.98864V26.1364V50H50L48.2249 0H42.3077L40.8284 17.0455H29.2899L28.4024 1.98864L20.1183 1.42045L21.3018 17.0455H8.87574L6.80473 1.42045L0 1.98864Z",fill:"white"})})};var q=function(){return Object(n.jsxs)("div",{className:"main",children:[Object(n.jsxs)("div",{className:"main__header",children:[Object(n.jsx)("a",{className:"main__logo-link",rel:"noreferrer",href:"https://marshakbooks.ru/",target:"_blank",children:Object(n.jsx)("div",{className:"main__logo",children:Object(n.jsx)(Z,{})})}),Object(n.jsx)(m,{})]}),Object(n.jsx)("div",{className:"main__name"}),Object(n.jsx)(V,{})]})},E=s(25),F=s(37);var P=function(){var e=F.a().shape({authorName:F.b().min(3,"\u041d\u0443\u0436\u043d\u043e \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0430").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"),telephone:F.b().min(11,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11 \u0446\u0438\u0444\u0440").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0439"),email:F.b().email("Email \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435"),poem:F.b().min(10,"\u041c\u0438\u043d\u0438\u043c\u0443\u043c 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u043e\u043b\u0435")});return Object(n.jsx)(E.c,{initialValues:{authorName:"",telephone:"",email:"",poem:""},validationSchema:e,onSubmit:function(e){console.log(e)},children:function(e){var t=e.errors,s=e.touched;return Object(n.jsxs)(E.b,{className:"form",name:"poem-form",children:[Object(n.jsx)("h2",{className:"form__heading",children:"\u0424\u043e\u0440\u043c\u0430"}),Object(n.jsx)("p",{className:"form__caption",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u044f\u044f \u044d\u0442\u0443 \u0444\u043e\u0440\u043c\u0443, \u0432\u044b \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435\u0441\u044c \u0447\u0430\u0441\u0442\u044c\u044e \u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),Object(n.jsx)(E.a,{className:"form__input",type:"text",name:"authorName",placeholder:"\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430"}),t.authorName&&s.authorName?Object(n.jsx)("span",{className:"form__error-text",children:t.authorName}):null,Object(n.jsx)(E.a,{className:"form__input",name:"telephone",type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),t.telephone&&s.telephone?Object(n.jsx)("span",{className:"form__error-text",children:t.telephone}):null,Object(n.jsx)(E.a,{className:"form__input",type:"email",name:"email",placeholder:"\u041f\u043e\u0447\u0442\u0430",required:!0}),t.email&&s.email?Object(n.jsx)("span",{className:"form__error-text",children:t.email}):null,Object(n.jsx)(E.a,{as:"textArea",className:"form__textarea",name:"poem",placeholder:"\u0421\u0442\u0438\u0445\u0438"}),t.poem&&s.poem?Object(n.jsx)("span",{className:"form__error-text",children:t.poem}):null,Object(n.jsxs)("div",{className:"form__checkbox-container",children:[Object(n.jsx)("input",{className:"form__checkbox",type:"checkbox",name:"checkbox",id:"checkbox",required:!0}),Object(n.jsxs)("label",{className:"form__label",htmlFor:"checkbox",children:["\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441"," ",Object(n.jsx)("a",{className:"form__link",href:"#",target:"_blank",rel:"noreferrer",children:"\u043e\u0444\u0435\u0440\u0442\u043e\u0439"})]})]}),Object(n.jsx)("button",{className:"form__submit",type:"submit",name:"",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0443"}),Object(n.jsx)("span",{className:"form__error-text"})]})}})},U=[{id:"article-project",heading:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435",paragraphs:[{id:"paragraph-project-children",text:"\u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u043d\u0430\u0448\u0438 \u0434\u0435\u0442\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043d\u0435\u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0433\u043e\u0441\u044f \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430. \u041c\u044b \u0432\u0438\u0434\u0438\u043c \u044d\u0442\u043e, \u043a\u043e\u0433\u0434\u0430 \u0440\u0435\u0431\u0451\u043d\u043e\u043a \u0447\u0442\u043e-\u0442\u043e \u043d\u0430\u043f\u0435\u0432\u0430\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0440\u0438\u0441\u0443\u0435\u0442, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0434\u0443\u043c\u044b\u0432\u0430\u0435\u0442 \u0438\u0441\u0442\u043e\u0440\u0438\u0438, \u043a\u043e\u0433\u0434\u0430 \u0440\u0430\u0437\u0433\u043e\u0432\u0430\u0440\u0438\u0432\u0430\u0435\u0442 \u0441 \u0435\u0434\u043e\u0439 \u0438 \u0438\u0433\u0440\u0443\u0448\u043a\u0430\u043c\u0438 \u2014 \u0434\u0435\u0442\u0438 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438 \u0447\u0442\u043e-\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0430\u044e\u0442. \u0420\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u0447\u0430\u0441\u0442\u043e \u043d\u0435\u0434\u043e\u043e\u0446\u0435\u043d\u0438\u0432\u0430\u044e\u0442 \u044d\u0442\u043e \u0441\u043f\u043e\u043d\u0442\u0430\u043d\u043d\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430. \u042d\u0442\u043e \u043d\u0435 \u043f\u043b\u043e\u0445\u043e, \u043f\u0440\u043e\u0441\u0442\u043e \u043c\u044b \u043f\u0440\u0438\u0432\u044b\u043a\u0430\u0435\u043c \u043a \u044d\u0442\u043e\u043c\u0443. \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u043f\u0440\u0438\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u0448\u0438\u043c \u0434\u0435\u0442\u044f\u043c."},{id:"paragraph-project-turbina",text:"\u041c\u044b \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442 \xab\u0422\u0423\u0420\u0411\u0418\u041d\u0410\xbb, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0433\u043e \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043b\u0435\u0439\u0431\u043b\u0430 \u043d\u0430 \u0431\u0430\u0437\u0435 \xab\u041c\u0430\u0440\u0448\u0430\u043a\u0430\xbb. \u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \xab\u0422\u0423\u0420\u0411\u0418\u041d\u042b\xbb \u043b\u0443\u0447\u0448\u0438\u0435 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438\u043d\u0434\u0438-\u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u044b \u043f\u0438\u0448\u0443\u0442 \u0441\u0432\u043e\u0438 \u043f\u0435\u0441\u043d\u0438 \u043d\u0430 \u0441\u0442\u0438\u0445\u0438, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u0442\u044c\u043c\u0438. \u0417\u0434\u0435\u0441\u044c \u0432\u0430\u0436\u043d\u043e \u2014 \u043c\u044b \u043d\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043d\u0430\u0448\u0438\u0445 \u0434\u0435\u0442\u0435\u0439 \u0441\u0430\u0434\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u044d\u0437\u0438\u044e, \u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c \u0441\u0442\u043e\u0438\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0438 \u0447\u0443\u0442\u043a\u0438\u043c\u0438 \u043a \u0441\u0432\u043e\u0438\u043c \u0434\u0435\u0442\u044f\u043c. \u0418\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a \u043c\u044b \u0441\u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0443\u0442 \u0431\u044b\u0442\u044c \u0434\u0435\u0442\u0441\u043a\u0438\u043c\u0438, \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u0441\u043c\u044b\u0441\u043b\u0435\u043d\u044b \u043a\u0430\u043a \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0435 \u2014 \u043f\u043e\u044d\u0437\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u043a\u0440\u0430\u0449\u0430\u0435\u0442 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e \u043c\u0435\u0436\u0434\u0443 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0441\u0442\u044c\u044e \u0438 \u0434\u0435\u0442\u0441\u0442\u0432\u043e\u043c, \u0433\u0434\u0435 \u0441\u043f\u043e\u043d\u0442\u0430\u043d\u043d\u043e\u0435 \u0434\u0435\u0442\u0441\u043a\u043e\u0435 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0431\u0435\u0441\u0441\u043e\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435, \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u043d\u043e\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u043c, \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u043d\u044b\u043c \u0434\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043c."}]},{id:"article-concept",heading:"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?",paragraphs:[{id:"paragraph-concept-process",text:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0438\u0441\u043b\u0430\u0442\u044c \u043d\u0430\u043c \u0442\u0435\u043a\u0441\u0442\u044b, \u0440\u043e\u0434\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0443 \u0432\u0430\u0448\u0438\u0445 \u0434\u0435\u0442\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0437\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u044d\u0442\u043e \u0441\u0438\u043b\u044c\u043d\u043e\u0435 \u0432\u044b\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u043d\u0438\u0435. \u041c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043f\u0443\u043b \u0442\u0430\u043a\u0438\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432 \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u0438\u0445 \u043c\u0443\u0437\u044b\u043a\u0430\u043d\u0442\u0430\u043c. \u0410\u0440\u0442\u0438\u0441\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u043c\u0443\u0437\u044b\u043a\u0443 \u043d\u0430 \u044d\u0442\u0438 \u0441\u0442\u0438\u0445\u0438. \u041c\u044b \u043f\u0440\u043e\u0434\u044e\u0441\u0438\u0440\u0443\u0435\u043c \u0432\u044b\u043f\u0443\u0441\u043a \u0442\u0440\u0435\u043a\u0430, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0441\u044a\u0451\u043c\u043a\u0438 \u043a\u043b\u0438\u043f\u0430 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. \u041c\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u043c \u0430\u0432\u0442\u043e\u0440\u0430 \u0441\u0442\u0438\u0445\u043e\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0435\u043b\u0438\u0437\u0430: \u0425\u0430\u0434\u043d \u0414\u0430\u0434\u043d feat. \u0412\u0430\u0440\u044f \u041a\u0430\u0440\u043f\u043e\u0432\u0430 \u0438 \u0424\u0435\u0434\u044f \u0411\u044b\u0441\u0442\u0440\u043e\u0432 \u2014 \u041a\u043e\u043d\u0442\u0443\u0440."}]},{id:"article-theses",heading:"\u0422\u0435\u0437\u0438\u0441\u044b",list:[{id:"thesis-creativity",text:"\u0414\u0435\u0442\u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0449\u0430\u044e\u0442 \u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0438 \u043a\u0440\u0443\u0442\u043e \u0441\u0442\u0430\u0440\u0430\u0442\u044c\u0441\u044f \u0431\u044b\u0442\u044c \u043d\u0430 \u043d\u0438\u0445 \u043f\u043e\u0445\u043e\u0436\u0438\u043c\u0438 \u0432 \u044d\u0442\u043e\u043c."},{id:"thesis-unconscious",text:"\u0414\u0435\u0442\u0441\u043a\u043e\u0435 \u0431\u0435\u0441\u0441\u043e\u0437\u043d\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u043c\u044c\u0438."},{id:"thesis-poetry",text:"\u041d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0435\u0442\u0441\u043a\u043e\u0439 \u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u043e\u0439 \u043f\u043e\u044d\u0437\u0438\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u044b\u0441\u043b\u044c \u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u043e, \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0432 \u043d\u0435\u0439."},{id:"thesis-pleasure",text:"\u0414\u0435\u0442\u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0435 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435 \u0438 \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u043e\u0442 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0438\u0445 \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043e \u0441\u0432\u0435\u0440\u0441\u0442\u043d\u0438\u043a\u0430\u043c\u0438 \u0438 \u0432\u0437\u0440\u043e\u0441\u043b\u044b\u043c\u0438."}]}],J=function(){return Object(n.jsxs)("section",{className:"content-box",children:[U&&U.map((function(e){return Object(n.jsxs)("article",{className:"article",children:[e.heading&&Object(n.jsx)("h2",{className:"article__heading",children:e.heading}),e.paragraphs&&e.paragraphs.map((function(e){return Object(n.jsx)("p",{className:"article__paragraph",children:e.text},e.id)})),e.list&&Object(n.jsx)("ul",{className:"article__list",children:e.list.map((function(e){return Object(n.jsx)("li",{className:"article__list-item",children:e.text},e.id)}))})]},e.id)})),Object(n.jsx)(P,{})]})},I=function(){return Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("p",{className:"footer__copyrights",children:"\xa9 \u041c\u0430\u0440\u0448\u0430\u043a, 2020."}),Object(n.jsxs)("p",{className:"footer__made-by",children:["\u0421\u0434\u0435\u043b\u0430\u043d\u043e \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438\xa0",Object(n.jsx)("a",{className:"footer__link",href:j,rel:"noreferrer",target:"_blank",children:o})]})]})};var A=function(){return Object(n.jsx)("body",{className:"body",children:Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)(q,{}),Object(n.jsx)(J,{}),Object(n.jsx)(I,{})]})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),W()}},[[70,1,2]]]);
//# sourceMappingURL=main.ea1cf5c4.chunk.js.map