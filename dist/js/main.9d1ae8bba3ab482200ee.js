!function(e){function t(t){for(var i,o,l=t[0],d=t[1],c=t[2],m=0,s=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&s.push(n[o][0]),n[o]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(p&&p(t);s.length;)s.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,l=1;l<a.length;l++){var d=a[l];0!==n[d]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={2:0},r=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+"./js/"+({}[e]||e)+"."+{0:"854e8ca62ac588dafa86",1:"47af1aa9554ad81cb22e",4:"df30a43e4e285010fb0d",5:"11221687b372218e8d25",6:"390862e4b4f3db9f8a3b",7:"d41d8cd98f00b204e980"}[e]+".js"}(e);var d=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",d.name="ChunkLoadError",d.type=i,d.request=r,a[1](d)}n[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=d;r.push([36,3]),a()}({12:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return d}));var i=function(e){fetch("http://attendance.stroinova.mk.ua/testapi/yearsdata").then((function(e){return e.json()})).then((function(t){return e(n(t))}))},n=function(e){return void 0===e&&(e={}),{type:"SET_YEARS_DATA",dataForYearTables:e}},r=function(e){return void 0===e&&(e=""),{type:"ANIMATE_BUTTON",id:e}},o=function(e,t){return function(a){fetch("http://attendance.stroinova.mk.ua/testapi/save",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(i){i.ok&&(a(r(t)),setTimeout((function(){a(r(""))}),2e3),a(function(e){return{type:"SAVE_CLASS_DATA",classData:e}}(e)))}))}},l=function(e){return{type:"SET_AUTH_DATA",payload:{isAuth:e.isAuth,login:e.login,errors:e.errors}}},d=function(e){return function(t){fetch("http://attendance.stroinova.mk.ua/testapi/auth",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t(l(e)),e.isAuth&&e.login&&(sessionStorage.setItem("isAuth",e.isAuth),sessionStorage.setItem("login",e.login))}))}}},17:function(e,t,a){"use strict";var i=a(21),n=a.n(i)()(!1);n.push([e.i,'@charset "UTF-8";html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,:after,:before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-lg-4,.col-sm-4,.col-sm-6{position:relative;width:100%;padding-right:15px;padding-left:15px}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}@media (min-width:576px){.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}@media (min-width:992px){.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}}.mx-auto{margin-right:auto!important;margin-left:auto!important}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}h1,h2,h3,h4,h5,h6,ol,p,ul{margin:0;padding:0}ol,ul{list-style-type:none}a:active,a:link,a:visited{color:inherit}img{display:block}button,input{border:0;outline:0}body,html{overflow-x:hidden}body{min-height:100vh;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:300;line-height:1.1em;color:#3c4858;background-color:#dfedf7}@media (min-width:992px){body{line-height:1.5em}}@media (max-width:575px){.container{width:320px}}.main{margin-top:5px}@media (min-width:992px){.main{margin-top:10px}}@media (min-width:1200px){.main{margin-top:20px}}h1,h2,h3{font-weight:300}h1{font-size:1.4rem;line-height:1.2em}@media (max-width:767px){h1{width:100%;margin-bottom:15px}}@media (max-width:575px){h1{line-height:1.1em;margin-bottom:10px}}@media (min-width:576px){h1{font-size:1.8rem}}@media (min-width:992px){h1{font-size:2.5rem}}@media (min-width:1200px){h1{font-size:3.3125rem}}.header{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:320px;margin:0 auto;padding:10px}@media (min-width:576px){.header{width:100%;padding:10px 20px}}@media (min-width:768px){.header{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:75px}}@media (min-width:1200px){.header{min-height:83px}}.header-nav{display:flex;flex-flow:row nowrap;align-items:center;margin-left:auto}.header__icon{position:relative;top:6px;font-size:.8em}@media (max-width:575px){.header__icon{top:2px}}.button,a.button{padding:8px 20px;font-size:.875rem;color:#fff;background-color:#55b559;text-decoration:none;border-radius:6px;cursor:pointer}@media (min-width:992px){.button,a.button{padding:8px 25px;font-size:1rem}}.button:hover,a.button:hover{background-color:#60ba63}.button:active,a.button:active{background-color:#67bd6a}.item-card{position:relative;margin:40px 0 0;padding:35px 10px 15px;border-radius:6px;background:#fff;-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14)}@media (min-width:768px){.item-card{padding:35px 15px 20px}}@media (min-width:992px){.item-card{padding:50px 15px 25px}}@media (max-width:767px){.item-card:nth-of-type(2){margin-top:35px}}@media (max-width:575px){.item-card:nth-of-type(2){margin-top:30px}}.item-card__icon{position:absolute;top:0;left:10px;height:54px;border-radius:3px;padding:18px 15px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:1.2rem;text-align:center;color:#fff;cursor:pointer}@media (min-width:768px){.item-card__icon{left:25px}}@media (min-width:992px){.item-card__icon{padding:15px;font-size:1.5rem}}.item-card--orange .item-card__icon{background:-o-linear-gradient(30deg,#ffa726,#fb8c00);background:linear-gradient(60deg,#ffa726,#fb8c00);-webkit-box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(255,152,0,.4);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(255,152,0,.4)}.item-card--green .item-card__icon{background:-o-linear-gradient(30deg,#66bb6a,#43a047);background:linear-gradient(60deg,#66bb6a,#43a047);-webkit-box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(76,175,80,.4);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(76,175,80,.4)}.item-card--red .item-card__icon{background:-o-linear-gradient(30deg,#ef5350,#e53935);background:linear-gradient(60deg,#ef5350,#e53935);-webkit-box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(244,67,54,.4);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(244,67,54,.4)}.item-card__icon span{font-size:2.25rem}@media (min-width:992px){.item-card__icon span{font-size:2.5rem}}.item-card__icon i{margin-left:20px;font-size:1.2em;line-height:.8em}.item-card-table{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;font-size:.875rem;font-weight:400}@media (min-width:576px){.item-card-table{font-size:.8125rem;font-weight:300}}@media (min-width:768px){.item-card-table{font-size:.875rem;font-weight:300}}@media (min-width:992px){.item-card-table{font-size:1rem}}.item-card-table__body,.item-card-table__head{width:100%}@media (max-width:575px){.item-card-table__head{display:none}}.item-card--orange .item-card-table__head{color:#fb8c00}.item-card--green .item-card-table__head{color:#43a047}.item-card--red .item-card-table__head{color:#e53935}.item-card-table__row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #ddd}@media (max-width:575px){.item-card-table__row{padding:10px 0}}.item-card-table__body .item-card-table__row:last-child{font-weight:400}.item-card--orange .item-card-table__body .item-card-table__row:nth-of-type(2n){background-color:rgba(255,152,0,.06)}.item-card--green .item-card-table__body .item-card-table__row:nth-of-type(2n){background-color:rgba(76,175,80,.06)}.item-card--red .item-card-table__body .item-card-table__row:nth-of-type(2n){background-color:rgba(244,67,54,.06)}.item-card-table__cell{padding:7px 3px;text-align:center}@media (max-width:575px){.item-card-table__cell{padding:5px;text-align:left}}@media (min-width:992px){.item-card-table__cell{padding:8px}}.item-card-table__cell:first-child{width:11.4175%}@media (max-width:575px){.item-card-table__cell:first-child{width:100%;text-align:center;font-size:1rem}}@media (min-width:768px){.item-card-table__cell:first-child{width:9.4175%}}.item-card-table__cell:nth-of-type(2){position:relative;width:12.8738%}@media (max-width:575px){.item-card-table__cell:nth-of-type(2):before{content:"Всього: "}}@media (min-width:768px){.item-card-table__cell:nth-of-type(2){width:10.8738%}}.item-card-table__cell:nth-of-type(3){width:11.5922%}@media (max-width:575px){.item-card-table__cell:nth-of-type(3):before{content:"По хворобі: "}}@media (min-width:768px){.item-card-table__cell:nth-of-type(3){width:13.5922%}}.item-card-table__cell:nth-of-type(4){width:17.9029%}@media (max-width:575px){.item-card-table__cell:nth-of-type(4):before{content:"З поважних причин: "}}@media (min-width:768px){.item-card-table__cell:nth-of-type(4){width:19.9029%}}.item-card-table__cell:nth-of-type(5){position:relative;width:21.554%}@media (max-width:575px){.item-card-table__cell:nth-of-type(5):before{content:"Без поважних причин: "}}.item-card-table__cell:nth-of-type(6){position:relative;width:15.9223%}@media (max-width:575px){.item-card-table__cell:nth-of-type(6):before{content:"Не відвідують: "}}.item-card-table__cell:nth-of-type(7){width:8.7379%}@media (max-width:575px){.item-card-table__cell:nth-of-type(7):before{content:"Інші: "}}@media (max-width:575px){.item-card-table__cell:nth-of-type(2),.item-card-table__cell:nth-of-type(3),.item-card-table__cell:nth-of-type(4),.item-card-table__cell:nth-of-type(5),.item-card-table__cell:nth-of-type(6),.item-card-table__cell:nth-of-type(7){width:50%}}@media (min-width:992px){.item-card-table__head .item-card-table__cell:nth-of-type(5):before{content:"=";position:absolute;top:50%;right:0;transform:translate(50%,-50%)}}@media (min-width:992px){.item-card-table__head .item-card-table__cell:nth-of-type(6):before{content:"+";position:absolute;top:50%;right:0;transform:translate(50%,-50%)}}.year{margin:25px 0;border-radius:6px;-webkit-box-shadow:0 1px 4px 0 rgba(0,0,0,.14);box-shadow:0 1px 4px 0 rgba(0,0,0,.14)}.year:first-child{margin-top:0}.year__title{position:relative;padding-top:10px;padding-bottom:10px;font-size:1rem;background-color:#fff;border-radius:6px 6px 0 0;cursor:pointer}@media (min-width:576px){.year__title{font-size:1.2rem}}@media (min-width:992px){.year__title{font-size:1.5rem}}.year__title--nodata{background-color:#f2f2f2;cursor:auto}.year__title--nodata:after{content:"Дані відсутні";position:absolute;top:50%;left:50%;font-size:.8em;color:#b2b2b2;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.year__title--nodata .year__toggle{color:#b2b2b2}.year__toggle{position:absolute;top:50%;right:10px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:30px}@media (max-width:767px){.year-inner{padding-left:10px;padding-right:10px}}.year-inner>.item-card:last-child{margin-bottom:15px}@media (min-width:768px){.year-inner>.item-card:last-child{margin-bottom:20px}}@media (min-width:992px){.year-inner>.item-card:last-child{margin-bottom:30px}}.year-inner>.row{padding-bottom:20px}.year-inner>.chart-row{padding-top:8px;padding-bottom:0}@media (min-width:576px){.year-inner>.chart-row{padding-top:15px}}.alert-info{position:relative;font-size:.875rem;line-height:20px;background-color:#00cae3;color:#fff;border-radius:6px;-webkit-box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(0,188,212,.4);box-shadow:0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(0,188,212,.4)}@media (max-width:767px){.alert-info{position:fixed;left:-250px;top:calc(50vh - 120px);width:250px;padding:10px 15px;border-radius:0 6px 6px 0;z-index:999;transition:all .3s ease-in-out}.alert-info--open{left:0}}@media (min-width:768px){.alert-info{width:98%;margin:0 auto 20px;padding:10px 15px 10px 60px}}@media (min-width:992px){.alert-info{margin:5px auto 20px}}@media (min-width:1200px){.alert-info{margin:10px auto 0;padding:15px 15px 15px 60px;font-size:1rem;line-height:20px}}.alert-info i{position:absolute;left:100%;top:50%;margin-top:-15px;padding:8px;font-size:30px;background-color:inherit;border-radius:0 5px 5px 0}@media (min-width:768px){.alert-info i{display:block;left:15px;padding:0;background-color:unset;border-radius:0}}',""]),t.a=n},36:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(13),o=a(7),l=a(8),d=a(9),c=a(25),p=a(26),m=function(){return(m=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(){return(s=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},b=sessionStorage.getItem("isAuth"),f=sessionStorage.getItem("login"),x=Object(d.combineReducers)({yearsData:function(e,t){switch(void 0===e&&(e={}),t.type){case"SET_YEARS_DATA":return m(m({},e),t.dataForYearTables);case"SAVE_CLASS_DATA":var a=t.classData.formYear,i=t.classData.currentUserClass,n=t.classData.firstSemester,r=t.classData.secondSemester,o=t.classData.year,l=m({},e);l[a]=m({},e[a]),l[a].firstSemester=m({},e[a].firstSemester),l[a].secondSemester=m({},e[a].secondSemester),l[a].year=m({},e[a].year);var d=function(t){l[a][t]["Всього"]=m({},e[a][t]["Всього"]),l[a][t][i]=m({},e[a][t][i])};d("firstSemester"),d("secondSemester"),d("year");var c=function(e,t){var n,r=l[a][e]["Всього"];for(n in r){var o=l[a][e][i][n]?+l[a][e][i][n]:0;r[n]=+r[n]-o+ +t[n]}};return c("firstSemester",n),c("secondSemester",r),c("year",o),l[a].firstSemester[i]=n,l[a].secondSemester[i]=r,l[a].year[i]=o,l;default:return e}},authData:function(e,t){switch(void 0===e&&(e={isAuth:!!b,login:f||"",errors:""}),t.type){case"SET_AUTH_DATA":return s(s({},e),t.payload);default:return e}},animateButton:function(e,t){switch(void 0===e&&(e=""),t.type){case"ANIMATE_BUTTON":return t.id;default:return e}}}),h=Object(d.createStore)(x,Object(c.composeWithDevTools)(Object(d.applyMiddleware)(p.a))),u=a(20),g=a.n(u),w=a(17),y={insert:"head",singleton:!1},_=(g()(w.a,y),w.a.locals,a(2)),v=function(e){var t=e.isAuth,a=e.login,i=e.pathname,r=e.handleLogOutClick,o=n.a.createElement("div",{className:"button",onClick:r,style:{marginLeft:20}},"Вийти");return n.a.createElement("header",{className:"header"},n.a.createElement("h1",{className:"header__title"},n.a.createElement("i",{className:"header__icon material-icons"},"addchart")," ","Статистика відвідуваності учнів"),"/"===i&&!t&&n.a.createElement(l.b,{to:"/login",className:"button"},"Вхід для класних керівників"),"/"===i&&t&&n.a.createElement("div",{className:"header-nav"},n.a.createElement(l.b,{to:"/class",className:"button"},"Перейти в ",a," клас"),o),"/class"===i&&t&&n.a.createElement("div",{className:"header-nav"},n.a.createElement(l.b,{to:"/",className:"button",style:{marginLeft:12}},"На головну"),o,n.a.createElement("div",{className:"avatar"},n.a.createElement("span",{className:"avatar__name"},a))))},k=a(12),z=function(){var e=Object(o.c)((function(e){return e.authData})),t=e.isAuth,a=e.login,i=Object(_.g)().pathname,r=Object(o.b)();return n.a.createElement(v,{isAuth:t,login:a,pathname:i,handleLogOutClick:function(){r(Object(k.d)({isAuth:!1,login:"",errors:""})),sessionStorage.removeItem("isAuth"),sessionStorage.removeItem("login")}})},E=function(e){var t=e.component,a=e.path,i=Object(o.c)((function(e){return e.authData})).isAuth;return n.a.createElement(_.b,{path:a,render:function(){return i?n.a.createElement(t,null):n.a.createElement(_.a,{to:"/"})}})},S=n.a.lazy((function(){return Promise.all([a.e(1),a.e(5)]).then(a.bind(null,45))})),A=n.a.lazy((function(){return Promise.all([a.e(1),a.e(0),a.e(4)]).then(a.bind(null,53))})),j=n.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,54))})),O=n.a.lazy((function(){return a.e(7).then(a.bind(null,55))})),T=function(){var e=Object(_.g)().pathname,t=Object(o.b)();return Object(i.useEffect)((function(){t(k.b)}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(z,null),"/class"===e&&n.a.createElement(i.Suspense,{fallback:n.a.createElement("span",null,"Завантажую...")},n.a.createElement(O,null)),n.a.createElement("main",{className:"main"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement(i.Suspense,{fallback:n.a.createElement("span",null,"Завантажую...")},n.a.createElement(_.d,null,n.a.createElement(_.b,{exact:!0,path:"/",component:S}),n.a.createElement(_.b,{path:"/login",component:j}),n.a.createElement(E,{path:"/class",component:A}))))))))};r.render(i.createElement(o.a,{store:h},i.createElement(l.a,null,i.createElement(T,null))),document.getElementById("root"))}});