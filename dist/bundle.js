!function(e){var t={};function n(l){if(t[l])return t[l].exports;var s=t[l]={i:l,l:!1,exports:{}};return e[l].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(l,s,function(t){return e[t]}.bind(null,s));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function l(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){this.menu=document.getElementById("bark-header__menu-slider"),this.menuController=document.getElementById("bark-header--toggle"),this.modal=document.getElementById("bark-modal"),this.modalControllers=document.getElementsByClassName("signup-modal"),this.modalCloseController=document.getElementById("bark-modal__close-btn"),this.sliderBreakpoint=767,this.sliderLgItems=document.getElementsByClassName("carousel-lg"),this.sliderSmItems=document.getElementsByClassName("item-wrap"),this.resizeTimer,this.screen={width:window.screen.width,height:window.screen.height},this.updateSlider(),this.addEventControllers()}},{key:"addEventControllers",value:function(){window.onresize=this.windowResize,this.menuController.onclick=this.toggleSlide,this.modalCloseController.onclick=this.toggleModal;for(var e=0;e<this.modalControllers.length;e++)this.modalControllers[e].onclick=this.toggleModal}},{key:"toggleSlide",value:function(){var e=s.menu.className,t=s.menuController.className;s.menu.className=e.includes("slide-down")?e.replace(" slide-down",""):e.concat(" slide-down"),s.menuController.className=t.includes("close")?t.replace(" close",""):t.concat(" close")}},{key:"toggleModal",value:function(){var e=s.modal.className;s.modal.className=e.includes("fade-in")?e.replace(" fade-in",""):e.concat(" fade-in")}},{key:"windowResize",value:function(){clearTimeout(s.resizeTimer),s.resizeTimer=setTimeout((function(){s.screen.width=window.screen.width,s.screen.height=window.screen.height,s.updateSlider()}),250)}},{key:"updateSlider",value:function(){if(this.screen.width>=this.sliderBreakpoint){for(var e=0;e<this.sliderLgItems.length;e++){var t=this.sliderLgItems[e].className;this.sliderLgItems[e].className=t.includes("carousel-item")?t:t.concat(" carousel-item")}for(e=0;e<this.sliderSmItems.length;e++){var n=this.sliderSmItems[e].className;this.sliderSmItems[e].className=n.includes("carousel-item")?n.replace("carousel-item",""):n}}else{for(e=0;e<this.sliderSmItems.length;e++){var l=this.sliderSmItems[e].className;this.sliderSmItems[e].className=l.includes("carousel-item")?l:l.concat(" carousel-item")}for(e=0;e<this.sliderLgItems.length;e++){var s=this.sliderLgItems[e].className;this.sliderLgItems[e].className=s.includes("carousel-item")?s.replace("carousel-item",""):s}}}}])&&l(t.prototype,n),i&&l(t,i),e}());window.onload=s.init()},function(e,t,n){}]);