!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";e.__esModule=!0;var r,i,o,u,a=n(1);r="Blinker",i=new a.GameOfLifeEngine([[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1],[!1,!0,!0,!0,!1],[!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1]]),o=document.createElement("DIV"),(u=document.createElement("H1")).textContent=r,o.append(u),o.append(i.canvas),document.body.appendChild(o),i.startLife()},function(t,e,n){"use strict";var r;e.__esModule=!0,function(t){t.COLOR="#111",t[t.WIDTH=15]="WIDTH",t[t.HEIGHT=15]="HEIGHT",t[t.MARGIN=3]="MARGIN"}(r||(r={}));var i={getCoordinateX:function(t){return(r.MARGIN+r.WIDTH)*t+r.MARGIN},getCoordinateY:function(t){return(r.MARGIN+r.HEIGHT)*t+r.MARGIN}},o=function(){function t(t){var e=document.createElement("canvas"),n=e.getContext("2d"),o=t.map((function(t){return t.length})).reduce((function(t,e){return Math.min(t,e)})),u=t.length;if(!n)throw"Failed to create context";e.width=i.getCoordinateX(o),e.height=i.getCoordinateY(u),n.fillStyle=r.COLOR,this.x=o,this.y=u,this.life=t,this.canvas=e,this.context=n}return t.prototype.clear=function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.drawDot=function(t,e){this.context.fillRect(i.getCoordinateX(t),i.getCoordinateY(e),r.WIDTH,r.HEIGHT)},t.prototype.drawDots=function(){var t=this;this.clear(),this.life.forEach((function(e,n){e.forEach((function(e,r){return e&&t.drawDot(r,n)}))}))},t.prototype.isSurviveNextGeneration=function(t,e,n){var r=this.life,i=this.x-1,o=this.y-1,u=Number(0<e&&0<t&&r[e-1][t-1])+Number(0<e&&r[e-1][t])+Number(0<e&&t<i&&r[e-1][t+1])+Number(0<t&&r[e][t-1])+Number(t<i&&r[e][t+1])+Number(e<o&&0<t&&r[e+1][t-1])+Number(e<o&&r[e+1][t])+Number(e<o&&t<i&&r[e+1][t+1]);return n&&(2===u||3===u)||!n&&3===u},t.prototype.startLife=function(){var t=this;this.stopLife(),this.intervalKey=window.setInterval((function(){t.drawDots();var e=t.life;t.life=e.map((function(e,n){return e.map((function(e,r){return t.isSurviveNextGeneration(r,n,e)}))}))}),500)},t.prototype.stopLife=function(){null!==this.intervalKey&&(clearInterval(this.intervalKey),this.intervalKey=null)},t}();e.GameOfLifeEngine=o}]);