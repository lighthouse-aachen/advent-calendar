(this["webpackJsonpadvent-calendar"]=this["webpackJsonpadvent-calendar"]||[]).push([[0],{34:function(e,i,n){},63:function(e,i,n){},66:function(e,i,n){"use strict";n.r(i);var t=n(2),o=n(0),a=n.n(o),d=n(8),r=n.n(d),b=n(16),l=n(14),s=n(106),c=n(104),A=(n(34),n(92)),u=n(94),g=n(95),m=n(96),h=n(97),_=n(98),p=n(27),v=n(99),x=n(100),j=n(101),k=n(102),w=n(105),y=n(91),f=n(107),P=n(35),C=n.n(P),O=a.a.forwardRef((function(e,i){return Object(t.jsx)(f.a,Object(b.a)({direction:"up",ref:i},e))})),I=Object(y.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(.5)}},small:{width:e.spacing(3),height:e.spacing(3)}}}));function T(e){var i=e.open,n=e.handleClose,d=e.hatch,r=e.imgHeight,b=e.width,c=I(),y=Object(o.useState)("EN"),f=Object(l.a)(y,2),P=f[0],T=f[1],V=Object(o.useState)(""),E=Object(l.a)(V,2),D=E[0],N=E[1],G=Object(o.useState)(""),B=Object(l.a)(G,2),H=B[0],K=B[1],R=d.video.includes("https://www.youtube.com/"),S=function(e){K(e)},F=function(e){T(e),N("DE"===e?e:"")};return Object(t.jsx)("div",{children:Object(t.jsx)(w.a,{open:0===d.wobble&&i,TransitionComponent:O,keepMounted:!0,onClose:n,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",scroll:"body",maxWidth:"sm",children:"devotion"===d.type?(console.log(d.bibleImg_en),Object(t.jsxs)(u.a,{children:[""!==d.title_en?Object(t.jsx)(g.a,{title:"EN"===P?d.title_en:d.title_de,action:Object(t.jsxs)("div",{className:c.root,style:{paddingTop:"10px"},children:[Object(t.jsx)(s.a,{onClick:function(){F("EN")},style:{backgroundColor:"DE"===D?"":"#00B32C"},variant:"rounded",sizes:"small",children:"EN"},"EN"),Object(t.jsx)(s.a,{onClick:function(){F("DE")},style:{backgroundColor:"DE"===D?"#00B32C":""},variant:"rounded",sizes:"small",children:"DE"},"DE")]})}):null,Object(t.jsxs)(m.a,{children:[Object(t.jsx)(h.a,{style:{height:r},image:"EN"===P?d.bibleImg_en:d.bibleImg_de}),Object(t.jsxs)(_.a,{children:[Object(t.jsx)(p.a,{variant:250===b?"body2":"h6",color:"textSecondary",paragraph:!0,children:"EN"===P?d.devotion_en:d.devotion_de}),Object(t.jsx)(p.a,{variant:250===b?"body2":"h6",color:"textSecondary",children:"EN"===P?d.summary_en:d.summary_de})]})]}),Object(t.jsxs)(v.a,{children:[Object(t.jsx)(x.a,{}),Object(t.jsx)(j.a,{size:"small",color:"primary",variant:"outlined",onClick:n,children:"EN"===P?"close":"schlie\xdfen"})]})]})):"animation"===d.type?Object(t.jsxs)(a.a.Fragment,{children:[Object(t.jsxs)(k.a,{id:"customized-dialog-title",onClose:n,children:[Object(t.jsx)(p.a,{children:"Please choose a language that you prefer for the content to be in"})," ",Object(t.jsx)(p.a,{children:"Bitte w\xe4hlen Sie eine Sprache aus, in der der Inhalt der Website erscheinen soll."}),Object(t.jsx)("div",{className:c.root,style:{paddingTop:"10px"},children:""===H?Object(t.jsxs)(a.a.Fragment,{children:[Object(t.jsx)(s.a,{onClick:function(){S("EN")},style:{backgroundColor:"EN"===H?"#00B32C":""},variant:"rounded",sizes:"small",children:"EN"},"EN"),Object(t.jsx)(s.a,{onClick:function(){S("DE")},style:{backgroundColor:"DE"===H?"#00B32C":""},variant:"rounded",sizes:"small",children:"DE"},"DE")]}):"EN"===H?Object(t.jsx)(s.a,{onClick:function(){S("EN")},style:{backgroundColor:"EN"===H?"#00B32C":""},variant:"rounded",sizes:"small",children:"EN"},"EN"):Object(t.jsx)(s.a,{onClick:function(){S("DE")},style:{backgroundColor:"DE"===H?"#00B32C":""},variant:"rounded",sizes:"small",children:"DE"},"DE")})]}),Object(t.jsx)(A.a,{dividers:!0,children:Object(t.jsx)("div",{className:"text",children:"EN"===H?(console.log(d.audio),Object(t.jsxs)(a.a.Fragment,{children:[Object(t.jsx)(C.a,{onInit:function(e){e.typeString("For my precious child, <br>").pauseFor(1e3).typeString(d.textAnimationPara1_en).pauseFor(2e3).typeString(d.textAnimationPara2_en).typeString("<br> ".concat(d.bibleVerse_en)).pauseFor(2e3).typeString("<br> <br>With Love,").pauseFor(1e3).typeString("<br>Your Dad in Heaven").pauseFor(3e3).callFunction((function(){n()})).start()}}),Object(t.jsx)("audio",{autoPlay:!0,children:Object(t.jsx)("source",{src:d.audio_en,type:"audio/mpeg"})})]})):"DE"===H?(console.log(H),Object(t.jsx)(C.a,{onInit:function(e){e.typeString("Hallo Volk Gottes,").pauseFor(2e3).typeString("<br>Hier ist eine Nachricht f\xfcr Sie<br><br>").pauseFor(2e3).typeString(d.textAnimation_de).typeString("<br> ".concat(d.bibleVerse_de)).pauseFor(2e3).typeString("<br> <br>Liebe,").pauseFor(1e3).typeString("<br>Gott").pauseFor(3e3).callFunction((function(){n()})).start()}})):""})})]}):R?Object(t.jsx)("div",{className:"iframe-container",children:Object(t.jsx)("iframe",{width:"max-content",height:"500px",src:d.video,title:d.id,frameborder:"0",gesture:"media",allow:"encrypted-media",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0})}):Object(t.jsx)(A.a,{style:{backgroundColor:"black"},children:Object(t.jsx)("video",{width:"100%",height:500,controls:!0,style:{backgroundColor:"black"},children:Object(t.jsx)("source",{src:"".concat(d.video,"?autoplay=false"),type:"video/mp4"})})})})})}function V(e){var i=e.width,n=e.height,o=e.imgHeight,a=e.hatch,d=e.backgroundHeight;return Object(t.jsx)(u.a,{style:{width:i,height:n},children:"video"===a.type?(console.log(a.backgroundVideo),Object(t.jsx)(m.a,{children:Object(t.jsx)(h.a,{style:{height:o},image:"video"===a.type?a.backgroundVideo:a.img})})):Object(t.jsx)(m.a,{children:Object(t.jsx)(h.a,{style:{height:d},image:a.backgroundText})})})}var E=n.p+"static/media/test1.783566e3.mp3";function D(e){var i=e.width,n=e.height,o=e.imgHeight,a=e.hatch,d=250===i;return Object(t.jsxs)(u.a,{style:{width:i,height:n},children:[Object(t.jsxs)(m.a,{children:[Object(t.jsx)(h.a,{style:{height:o},image:a.img}),Object(t.jsxs)(_.a,{children:[Object(t.jsx)(p.a,{variant:d?"body2":"h5",children:a.audioTitle}),Object(t.jsx)(p.a,{variant:d?"subtitle2":"subtitle1",color:"textSecondary",children:a.singer})]})]}),Object(t.jsx)(v.a,{style:{paddingLeft:d?"10px":"50px"},children:Object(t.jsx)("audio",{controls:!0,children:Object(t.jsx)("source",{src:E,type:"audio/mpeg"})})})]})}var N=n.p+"static/media/pict1.a0f73c90.jpg";function G(e){var i=e.width,n=e.height,o=e.hatch;return Object(t.jsx)("img",{src:N,height:n,width:i,alt:o.title})}n(63);function B(){return Object(t.jsxs)("div",{className:"snowflakes","aria-hidden":"true",children:[Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2745"}),Object(t.jsx)("div",{className:"snowflake",children:"\u2746"})]})}var H=n(48),K=n(5),R=n(103),S=n(47),F=n.n(S),M=Object(K.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var i=e.children,n=e.classes,o=e.onClose,a=Object(H.a)(e,["children","classes","onClose"]);return Object(t.jsxs)(k.a,Object(b.a)(Object(b.a)({disableTypography:!0,className:n.root},a),{},{children:[Object(t.jsx)(p.a,{variant:"h6",children:i}),o?Object(t.jsx)(R.a,{"aria-label":"close",className:n.closeButton,onClick:o,children:Object(t.jsx)(F.a,{})}):null]}))})),Z=Object(K.a)((function(e){return{root:{padding:e.spacing(2)}}}))(A.a);function q(e){var i,n=e.openError,o=e.handleErrorDialogClose,a=e.selected;return Object(t.jsxs)(w.a,{onClose:o,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(t.jsx)(M,{id:"customized-dialog-title",onClose:o,children:"Oops! / Hoppla!"}),Object(t.jsxs)(Z,{dividers:!0,children:[Object(t.jsxs)(p.a,{gutterBottom:!0,children:["The content can\u2019t be viewed yet! Please come back on the ",a.nr,Object(t.jsx)("sup",{children:"".concat((i=a.nr,["th","st","nd","rd",""][i<=0?4:i>3&&i<21||i%10>3?0:i%10]))})," of December 2020 to open content number ",a.nr]}),Object(t.jsxs)(p.a,{gutterBottom:!0,children:["Der Inhalt kann noch nicht angesehen werden! Bitte schauen am"," ",a.nr,". Dezember 2020 wieder vorbei, um den Inhalt Nummer"," ",a.nr," zu \xf6ffnen."]})]})]})}var L=function(){var e=Object(o.useState)(!1),i=Object(l.a)(e,2),n=i[0],d=i[1],r=Object(o.useState)(!1),A=Object(l.a)(r,2),u=A[0],g=A[1],m=Object(o.useState)({}),h=Object(l.a)(m,2),_=h[0],p=h[1],v=Object(o.useState)(!1),x=Object(l.a)(v,2),j=x[0],k=x[1],w=new Date,y=new Date(2020,11,25),f=Object(o.useRef)(null),P=Object(o.useState)([{id:"hatch-1",nr:1,img:"./img/1.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video1.m4v",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/opening.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-2",nr:2,img:"./img/2.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video2.m4v",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/background2.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-3",nr:3,img:"./img/3.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video3.m4v",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/background3.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-4",nr:4,img:"./img/4.jpg",bibleImg_en:"./bibleImg/devotion4_en.jpg",bibleImg_de:"./bibleImg/devotion4_de.jpeg",backgroundText:"./bibleImg/background4.jpeg",title_en:"Hope in Difficult Times",title_de:"Hoffnung in schwierigen Zeiten",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"6 Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; 7 and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",bibleContent_de:"6 Seid um nichts besorgt, sondern in allem sollen durch Gebet und Flehen mit Danksagung eure Anliegen vor Gott kundwerden; 7 und der Friede Gottes, der allen Verstand[4] \xfcbersteigt, wird eure Herzen und eure Gedanken bewahren in Christus Jesus.",devotion_en:"Very often in difficult times we start to doubt our faith and we focus on all the problems. Also we tend to focus on all the things we cannot do anymore instead of on the things we can still do. Sometimes because we don\u2019t have the funds anymore sometimes because of illness we cannot do certain things. But this bible verse tells us that God has plans for us to prosper, give hope and a future.",devotion_de:"Sehr oft beginnen wir in schwierigen Zeiten, an unserem Glauben zu zweifeln, und wir konzentrieren uns auf die Probleme. Auch neigen wir dazu, uns auf all die Dinge zu konzentrieren, die wir nicht mehr tun k\xf6nnen, anstatt auf die Dinge, die wir noch tun k\xf6nnen. Manchmal, weil wir die Mittel nicht haben, manchmal k\xf6nnen wir wegen Krankheit bestimmte Dinge nicht tun. Aber dieser Bibelvers sagt uns, dass Gott Pl\xe4ne f\xfcr uns hat, damit wir gedeihen, Hoffnung und eine Zukunft haben.",summary_en:"So we should look ahead and not back. We should look at how God is bringing us through the situation and how He is using the situation to benefit us and others. So let us worship Him for the things he has planned in our future.",summary_de:"Wir sollten also nach vorne schauen und nicht zur\xfcck. Wir sollten darauf schauen, wie Gott uns durch die Situation bringt und wie er die Situation nutzt, um uns und anderen zu n\xfctzen. Lasst uns ihn also f\xfcr die Dinge anbeten, die er f\xfcr unsere Zukunft geplant hat.",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"devotion",visible:!0},{id:"hatch-5",nr:5,img:"./img/5.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video5.m4v",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/background5.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-6",nr:6,img:"./img/6.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video6.mp4",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/background6.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-7",nr:7,img:"./img/7.jpg",bibleImg_en:"./bibleImg/devotion7_en.jpg",bibleImg_de:"./bibleImg/devotion7_de.jpg",backgroundText:"./bibleImg/background7.jpg",title_en:"God alone is my hope",title_de:"God alleine ist meine Hoffnung",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"My parents wanted to abort me, my friends in school laughed at me and I hated myself. I had no love, no hope, to the point that I considered suicide to be the only solution. But then Jesus came and brought love, hope and peace. I have found hope and life in Jesus.",devotion_de:"Meine Eltern wollten mich abtreiben, meine Freunde in der Schule lachten \xfcber mich und ich hasste mich selbst. Ich hatte keine Liebe, keine Hoffnung, bis ich dachte, dass Selbstmord die einzige L\xf6sung sei. Aber dann kam Jesus, brachte mir Liebe, Hoffnung und Frieden. Ich habe Hoffnung und Leben in Jesus gefunden.",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"devotion",visible:!0},{id:"hatch-8",nr:8,img:"./img/8.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"./video/video8.m4v",videoTitle:"",videoCreator:"",backgroundVideo:"./bibleImg/background8.jpg",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"video",visible:!0},{id:"hatch-9",nr:9,img:"./img/9.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-10",nr:10,img:"./img/10.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-11",nr:11,img:"./img/11.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-12",nr:12,img:"./img/12.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-13",nr:13,img:"./img/13.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-14",nr:14,img:"./img/14.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-15",nr:15,img:"./img/15.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-16",nr:16,img:"./img/16.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-17",nr:17,img:"./img/17.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-18",nr:18,img:"./img/18.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-19",nr:19,img:"./img/19.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-20",nr:20,img:"./img/20.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-21",nr:21,img:"./img/21.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-22",nr:22,img:"./img/22.jpeg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-23",nr:23,img:"./img/23.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0},{id:"hatch-24",nr:24,img:"./img/24.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0}]),C=Object(l.a)(P,2),O=C[0],I=C[1];function E(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}Object(o.useEffect)((function(){var e=[],i=JSON.parse(localStorage.getItem("calendar"));null===i?I(O):(i.forEach((function(i){i.nr<=8&&e.push(i)})),O.forEach((function(i){i.nr>=9&&e.push(i)})),w.getTime()===y.getTime()&&e.push({id:"hatch-25",nr:25,img:"./img/25.jpg",bibleImg_en:"",bibleImg_de:"",backgroundText:"",title_en:"",title_de:"",bibleVerse_en:"",bibleVerse_de:"",bibleContent_en:"",bibleContent_de:"",devotion_en:"",devotion_de:"",summary_en:"",summary_de:"",audio_en:"",audio_de:"",audioTitle:"",singer:"",backgroundAudio:"",video:"",videoTitle:"",videoCreator:"",backgroundVideo:"",pict:"",openingTextAnimation:"",textAnimationPara1_en:"",textAnimationPara2_en:"",textAnimationPara1_de:"",textAnimationPara2_de:"",open:!1,wobble:0,type:"",visible:!0}),I(e))}),[]),Object(o.useEffect)((function(){}),[O]);var N=function(){var e=Object(o.useState)(E()),i=Object(l.a)(e,2),n=i[0],t=i[1];return Object(o.useEffect)((function(){function e(){t(E())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,H=function(e){return!0===e.visible?e.open&&0===e.wobble&&"devotion"===e.type?Object(t.jsx)(V,{width:N<=767?250:400,height:N<=767?250:400,imgHeight:N<=767?150:200,backgroundHeight:N<=767?250:400,hatch:e}):e.open&&0===e.wobble&&"audio"===e.type?Object(t.jsx)(D,{width:N<=767?250:400,height:N<=767?250:400,imgHeight:N<=767?100:200,hatch:e}):e.open&&0===e.wobble&&"video"===e.type?Object(t.jsx)(V,{width:N<=767?250:400,height:N<=767?250:400,imgHeight:N<=767?250:400,hatch:e}):e.open&&0===e.wobble&&"pict"===e.type?Object(t.jsx)(G,{width:N<=767?250:400,height:N<=767?250:400,hatch:e}):e.open&&0===e.wobble&&"animation"===e.type?Object(t.jsx)(V,{width:N<=767?250:400,height:N<=767?250:400,imgHeight:N<=767?150:200,backgroundHeight:N<=767?250:400,hatch:e}):Object(t.jsxs)(a.a.Fragment,{children:[Object(t.jsx)("div",{className:"item",children:Object(t.jsx)(s.a,{children:e.nr})}),Object(t.jsx)("div",{ref:f,children:Object(t.jsx)("img",{src:e.img,alt:e.title,width:400,className:"itemImage"})})]}):w.getTime()!==y.getTime()?"":(O[24].visible=!0,void I(O))};return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(B,{}),Object(t.jsx)("div",{className:"over",style:{paddingTop:"10px"},children:Object(t.jsx)("img",{src:"data:image/png;base64,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",alt:"LCZ Logo",className:"logoImage"})}),Object(t.jsx)(c.a,{container:!0,direction:"row",style:{paddingTop:"20px"},spacing:2,alignItems:"center",justify:"center",children:O.map((function(e){return Object(t.jsx)(c.a,{item:!0,onClick:function(){!function(e){k(!1);var i=new Date(2020,10,e.nr);if(d(!1),i<=w){"devotion"!==e.type&&"animation"!==e.type&&"video"!==e.type||d(!0),p(e);var n=O.map((function(i){return i.id===e.id?Object(b.a)(Object(b.a)({},i),{},{open:!0,wobble:1}):i}));I(n)}else g(!0),p(e)}(e)},onAnimationEnd:function(){return function(e){k(!1);var i=O.map((function(i){return i.id===e.id?Object(b.a)(Object(b.a)({},i),{},{open:!0,wobble:0}):i}));I(i),"devotion"!==e.type&&"animation"!==e.type&&"video"!==e.type||k(!0)}(e)},wobble:e.wobble,children:H(e)},e.id)}))}),j&&n?Object(t.jsx)(T,{open:n,hatch:_,handleClose:function(){d(!1)},width:N<=767?250:400,imgHeight:N<=767?180:300}):null,u?Object(t.jsx)(q,{openError:u,handleErrorDialogClose:function(){g(!1)},selected:_}):null]})};r.a.render(Object(t.jsx)(L,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.9b63a425.chunk.js.map