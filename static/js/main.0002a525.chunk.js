(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bordeaux","clicked":false,"image":"https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521_1280.jpg"},{"id":2,"name":"bulldog-puppy","clicked":false,"image":"https://cdn.pixabay.com/photo/2015/11/17/13/13/bulldog-1047518_1280.jpg"},{"id":3,"name":"cockapoo","clicked":false,"image":"https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg"},{"id":4,"name":"golden-puppy","clicked":false,"image":"https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"},{"id":5,"name":"mountain-dog","clicked":false,"image":"https://cdn.pixabay.com/photo/2017/03/30/03/15/dog-2187074_1280.jpg"},{"id":6,"name":"white-sheep-dog","clicked":false,"image":"https://cdn.pixabay.com/photo/2018/10/16/17/24/dog-3751980_1280.jpg"},{"id":7,"name":"maltese-puppy","clicked":false,"image":"https://cdn.pixabay.com/photo/2016/01/05/17/51/dog-1123016_1280.jpg"},{"id":8,"name":"spaniel-on-couch","clicked":false,"image":"https://cdn.pixabay.com/photo/2016/11/29/01/24/adorable-1866530_1280.jpg"},{"id":9,"name":"black-lab","clicked":false,"image":"https://cdn.pixabay.com/photo/2014/05/03/01/04/puppy-336707_1280.jpg"},{"id":10,"name":"white-beach-pup","clicked":false,"image":"https://cdn.pixabay.com/photo/2016/11/01/23/38/beach-1790049_1280.jpg"},{"id":11,"name":"golden-retriever-food-dish","clicked":false,"image":"https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816_1280.jpg"},{"id":12,"name":"shy-dog","clicked":false,"image":"https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398_1280.jpg"}]')},,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(2),i=t.n(o),r=(t(13),function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",{className:"display-4 title"},"Clicky Game"),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any image more than once!"))}),s=t(3),l=t(4),d=t(7),m=t(6),p=(t(14),function(e){return c.a.createElement("div",{className:"cards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},c.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),u=t(5),h=(t(15),function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).state={cards:u,message:"Click a card to begin",score:0,highScore:0},e.handleClick=function(a,t){var n=e.state.cards;if(t)return n.forEach((function(e,a){n[a].clicked=!1})),e.setState({card:n.sort((function(){return Math.random-.5})),message:"You guessed incorrectly!",score:0});n.forEach((function(e,t){a===e.id&&(n[t].clicked=!0)}));var c=e.state,o=c.highScore,i=c.score+1,r=i>o?i:o;return e.setState({card:n.sort((function(){return Math.random()-.5})),message:"You guessed correctly",score:i,highScore:r})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid game-board"},c.a.createElement("div",{className:"game-stats"},c.a.createElement("div",{className:"game-scores"},c.a.createElement("p",null,"Current Score: ",this.state.score," | High Score: ",this.state.highScore)),c.a.createElement("div",{className:"game-message"},c.a.createElement("p",null," ",this.state.message," "))),c.a.createElement("div",{className:"row"},this.state.cards.map((function(a){return c.a.createElement(p,{key:a.id,id:a.id,name:a.name,clicked:a.clicked,image:a.image,handleClick:e.handleClick})}))))}}]),t}(n.Component)),g=(t(16),function(){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement(r,null),c.a.createElement(h,null))}),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/clicky-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/clicky-game","/service-worker.js");f?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(a,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.0002a525.chunk.js.map