!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).GreenAudioPlayer=e()}}(function(){return function n(l,r,o){function u(t,e){if(!r[t]){if(!l[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(d)return d(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var a=r[t]={exports:{}};l[t][0].call(a.exports,function(e){return u(l[t][1][e]||e)},a,a.exports,n,l,r,o)}return r[t].exports}for(var d="function"==typeof require&&require,e=0;e<o.length;e++)u(o[e]);return u}({1:[function(e,t,i){"use strict";t.exports=e("./src/js/main").default},{"./src/js/main":2}],2:[function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var i=[],s=!0,a=!1,n=void 0;try{for(var l,r=e[Symbol.iterator]();!(s=(l=r.next()).done)&&(i.push(l.value),!t||i.length!==t);s=!0);}catch(e){a=!0,n=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw n}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=function(){function u(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),this.audioPlayer="string"==typeof e?document.querySelector(e):e;var i=t||{},s=this.audioPlayer.innerHTML;this.audioPlayer.classList.add("green-audio-player"),this.audioPlayer.innerHTML=u.getTemplate()+s,this.isDevice=/ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase())&&!window.MSStream,this.playPauseBtn=this.audioPlayer.querySelector(".play-pause-btn"),this.loading=this.audioPlayer.querySelector(".loading"),this.sliders=this.audioPlayer.querySelectorAll(".slider"),this.progress=this.audioPlayer.querySelector(".controls__progress"),this.volumeBtn=this.audioPlayer.querySelector(".volume__button"),this.volumeControls=this.audioPlayer.querySelector(".volume__controls"),this.volumeProgress=this.volumeControls.querySelector(".volume__progress"),this.player=this.audioPlayer.querySelector("audio"),this.currentTime=this.audioPlayer.querySelector(".controls__current-time"),this.totalTime=this.audioPlayer.querySelector(".controls__total-time"),this.speaker=this.audioPlayer.querySelector(".volume__speaker"),this.download=this.audioPlayer.querySelector(".download"),this.downloadLink=this.audioPlayer.querySelector(".download__link"),this.span=this.audioPlayer.querySelectorAll(".message__offscreen"),this.svg=this.audioPlayer.getElementsByTagName("svg"),this.img=this.audioPlayer.getElementsByTagName("img"),this.draggableClasses=["pin"],this.currentlyDragged=null,this.stopOthersOnPlay=i.stopOthersOnPlay||!1,this.enableKeystrokes=i.enableKeystrokes||!1,this.showTooltips=i.showTooltips||!1;var a=this;if(this.labels={volume:{open:"Open Volume Controls",close:"Close Volume Controls"},pause:"Pause",play:"Play",download:"Download"},this.enableKeystrokes){window.addEventListener("keydown",this.pressKb.bind(a),!1),window.addEventListener("keyup",this.unPressKb.bind(a),!1),this.sliders[0].setAttribute("tabindex",0),this.sliders[1].setAttribute("tabindex",0),this.download.setAttribute("tabindex",-1),this.downloadLink.setAttribute("tabindex",-1);for(var n=0;n<this.svg.length;n++)this.svg[n].setAttribute("tabindex",0),this.svg[n].setAttribute("focusable",!0);for(var l=0;l<this.img.length;l++)this.img[l].setAttribute("tabindex",0)}else for(var r=0;r<this.span.length;r++)this.span[r].outerHTML="";if(this.showTooltips&&(this.playPauseBtn.setAttribute("title",this.labels.play),this.volumeBtn.setAttribute("title",this.labels.volume.open),this.downloadLink.setAttribute("title",this.labels.download)),i.outlineControls&&this.audioPlayer.classList.add("player-accessible"),i.showDownloadButton&&this.showDownload(),this.initEvents(),this.directionAware(),this.overcomeIosLimitations(),"autoplay"in this.player.attributes){var o=this.player.play();void 0!==o&&o.then(function(){a.player.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z",a.playPauseBtn.setAttribute("aria-label",a.labels.pause),a.hasSetAttribute(a.playPauseBtn,"title",a.labels.pause)}).catch(function(){console.error("Green Audio Player Error: Autoplay has been prevented, because it is not allowed by this browser.")})}"preload"in this.player.attributes&&"none"===this.player.attributes.preload.value&&(this.playPauseBtn.style.visibility="visible",this.loading.style.visibility="hidden")}var e,t,i;return e=u,i=[{key:"init",value:function(t){document.querySelectorAll(t.selector).forEach(function(e){new u(e,t)})}},{key:"getTemplate",value:function(){return'\n            <div class="holder">\n                <div class="loading">\n                    <div class="loading__spinner"></div>\n                </div>\n\n                <div class="play-pause-btn" aria-label="Play" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">\n                        <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-btn__icon"/>\n                    </svg>\n                </div>\n            </div>\n\n            <div class="controls">\n                <span class="controls__current-time" aria-live="off" role="timer">00:00</span>\n                <div class="controls__slider slider" data-direction="horizontal">\n                    <div class="controls__progress gap-progress" aria-label="Time Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="slider">\n                        <div class="pin progress__pin" data-method="rewind"></div>\n                    </div>\n                </div>\n                <span class="controls__total-time">00:00</span>\n            </div>\n\n            <div class="volume">\n                <div class="volume__button" aria-label="Open Volume Controls" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                        <path class="volume__speaker" fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"/>\n                    </svg>\n                    <span class="message__offscreen">Press Enter or Space to show volume slider.</span>\n                </div>\n                <div class="volume__controls hidden">\n                    <div class="volume__slider slider" data-direction="vertical">\n                        <div class="volume__progress gap-progress" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="81" role="slider">\n                            <div class="pin volume__pin" data-method="changeVolume"></div>\n                        </div>\n                        <span class="message__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class="download">\n                <a class="download__link" href="" download="" aria-label="Download" role="button">\n                    <svg width="24" height="24" fill="#566574" enable-background="new 0 0 29.978 29.978" version="1.1" viewBox="0 0 29.978 29.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n                        <path d="m25.462 19.105v6.848h-20.947v-6.848h-4.026v8.861c0 1.111 0.9 2.012 2.016 2.012h24.967c1.115 0 2.016-0.9 2.016-2.012v-8.861h-4.026z"/>\n                        <path d="m14.62 18.426l-5.764-6.965s-0.877-0.828 0.074-0.828 3.248 0 3.248 0 0-0.557 0-1.416v-8.723s-0.129-0.494 0.615-0.494h4.572c0.536 0 0.524 0.416 0.524 0.416v8.742 1.266s1.842 0 2.998 0c1.154 0 0.285 0.867 0.285 0.867s-4.904 6.51-5.588 7.193c-0.492 0.495-0.964-0.058-0.964-0.058z"/>\n                    </svg>\n                </a>\n            </div>\n        '}},{key:"formatTime",value:function(e){var t=Math.floor(e/60),i=Math.floor(e%60);return"".concat(t<10?"0".concat(t):t,":").concat(i<10?"0".concat(i):i)}},{key:"pausePlayer",value:function(e){e.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M18 12L0 24V0",e.pause()}},{key:"playPlayer",value:function(e){e.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z",e.play()}},{key:"stopOtherPlayers",value:function(){for(var e=document.querySelectorAll(".green-audio-player audio"),t=0;t<e.length;t++)u.pausePlayer(e[t])}}],(t=[{key:"initEvents",value:function(){var a=this;a.audioPlayer.addEventListener("mousedown",function(e){if(a.isDraggable(e.target)){a.currentlyDragged=e.target;var t=a.currentlyDragged.dataset.method,i=a[t].bind(a);window.addEventListener("mousemove",i,!1),a.currentlyDragged.parentElement.parentElement===a.sliders[0]&&(a.paused=a.player.paused,!1===a.paused&&a.togglePlay()),window.addEventListener("mouseup",function(){!1!==a.currentlyDragged&&a.currentlyDragged.parentElement.parentElement===a.sliders[0]&&a.paused!==a.player.paused&&a.togglePlay(),a.currentlyDragged=!1,window.removeEventListener("mousemove",i,!1)},!1)}}),a.audioPlayer.addEventListener("touchstart",function(e){if(a.isDraggable(e.target)){var t=n(e.targetTouches,1);a.currentlyDragged=t[0];var i=a.currentlyDragged.target.dataset.method,s=a[i].bind(a);window.addEventListener("touchmove",s,!1),a.currentlyDragged.parentElement.parentElement===a.sliders[0]&&(a.paused=a.player.paused,!1===a.paused&&a.togglePlay()),window.addEventListener("touchend",function(){!1!==a.currentlyDragged&&a.currentlyDragged.parentElement.parentElement===a.sliders[0]&&a.paused!==a.player.paused&&a.togglePlay(),a.currentlyDragged=!1,window.removeEventListener("touchmove",s,!1)},!1),e.preventDefault()}}),this.playPauseBtn.addEventListener("click",this.togglePlay.bind(a)),this.player.addEventListener("timeupdate",this.updateProgress.bind(a)),this.player.addEventListener("volumechange",this.updateVolume.bind(a)),this.player.volume=.81,this.player.addEventListener("loadedmetadata",function(){a.totalTime.textContent=u.formatTime(a.player.duration)}),this.player.addEventListener("seeking",this.showLoadingIndicator.bind(a)),this.player.addEventListener("seeked",this.hideLoadingIndicator.bind(a)),this.player.addEventListener("canplay",this.hideLoadingIndicator.bind(a)),this.player.addEventListener("ended",function(){u.pausePlayer(a.player,"ended"),a.player.currentTime=0,a.playPauseBtn.setAttribute("aria-label",a.labels.play),a.hasSetAttribute(a.playPauseBtn,"title",a.labels.play)}),this.volumeBtn.addEventListener("click",this.showHideVolume.bind(a)),window.addEventListener("resize",a.directionAware.bind(a)),window.addEventListener("scroll",a.directionAware.bind(a));for(var e=0;e<this.sliders.length;e++){var t=this.sliders[e].querySelector(".pin");this.sliders[e].addEventListener("click",a[t.dataset.method].bind(a))}this.downloadLink.addEventListener("click",this.downloadAudio.bind(a))}},{key:"overcomeIosLimitations",value:function(){this.isDevice&&(this.player.addEventListener("loadedmetadata",this.hideLoadingIndicator.bind(this)),this.audioPlayer.querySelector(".volume").style.display="none",this.audioPlayer.querySelector(".controls").style.marginRight="0")}},{key:"isDraggable",value:function(e){var t=!1;if(void 0===e.classList)return!1;for(var i=0;i<this.draggableClasses.length;i++)e.classList.contains(this.draggableClasses[i])&&(t=!0);return t}},{key:"inRange",value:function(e){var t="touches"in e,i=this.getRangeBox(e),s=i.getBoundingClientRect(),a=null,n=null;if("horizontal"===i.dataset.direction){n=(a=s.x)+s.width;var l=t?e.touches[0].clientX:e.clientX;if(l<a||n<l)return!1}else{n=(a=s.top)+s.height;var r=t?e.touches[0].clientY:e.clientY;if(r<a||n<r)return!1}return!0}},{key:"updateProgress",value:function(){var e=this.player.currentTime,t=e/this.player.duration*100;this.progress.setAttribute("aria-valuenow",t),this.progress.style.width="".concat(t,"%"),this.currentTime.textContent=u.formatTime(e)}},{key:"updateVolume",value:function(){this.volumeProgress.setAttribute("aria-valuenow",100*this.player.volume),this.volumeProgress.style.height="".concat(100*this.player.volume,"%"),.5<=this.player.volume?this.speaker.attributes.d.value="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z":this.player.volume<.5&&.05<this.player.volume?this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z":this.player.volume<=.05&&(this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667")}},{key:"getRangeBox",value:function(e){var t=e.target,i=this.currentlyDragged;return"click"===e.type&&this.isDraggable(e.target)&&(t=e.target.parentElement.parentElement),"mousemove"===e.type&&(t=i.parentElement.parentElement),"touchmove"===e.type&&(t=i.target.parentElement.parentElement),t}},{key:"getCoefficient",value:function(e){var t="touches"in e,i=this.getRangeBox(e),s=i.getBoundingClientRect(),a=0;if("horizontal"===i.dataset.direction)a=((t?e.touches[0].clientX:e.clientX)-s.left)/s.width;else if("vertical"===i.dataset.direction){var n=s.height;a=1-((t?e.touches[0].clientY:e.clientY)-s.top)/n}return a}},{key:"rewind",value:function(e){this.player.seekable&&this.player.seekable.length&&this.inRange(e)&&(this.player.currentTime=this.player.duration*this.getCoefficient(e))}},{key:"showVolume",value:function(){this.volumeBtn.getAttribute("aria-attribute")===this.labels.volume.open&&(this.volumeControls.classList.remove("hidden"),this.volumeBtn.classList.add("open"),this.volumeBtn.setAttribute("aria-label",this.labels.volume.close),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close))}},{key:"showHideVolume",value:function(){this.volumeControls.classList.toggle("hidden"),this.volumeBtn.getAttribute("aria-label")===this.labels.volume.open?(this.volumeBtn.setAttribute("aria-label",this.labels.volume.close),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close),this.volumeBtn.classList.add("open")):(this.volumeBtn.setAttribute("aria-label",this.labels.volume.open),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.open),this.volumeBtn.classList.remove("open"))}},{key:"changeVolume",value:function(e){this.inRange(e)&&(this.player.volume=Math.round(50*this.getCoefficient(e))/50)}},{key:"preloadNone",value:function(){this.player.duration||(this.playPauseBtn.style.visibility="hidden",this.loading.style.visibility="visible")}},{key:"togglePlay",value:function(){this.preloadNone(),this.player.paused?(this.stopOthersOnPlay&&u.stopOtherPlayers(),u.playPlayer(this.player),this.playPauseBtn.setAttribute("aria-label",this.labels.pause),this.hasSetAttribute(this.playPauseBtn,"title",this.labels.pause)):(u.pausePlayer(this.player,"toggle"),this.playPauseBtn.setAttribute("aria-label",this.labels.play),this.hasSetAttribute(this.playPauseBtn,"title",this.labels.play))}},{key:"hasSetAttribute",value:function(e,t,i){this.showTooltips&&e.hasAttribute(t)&&e.setAttribute(t,i)}},{key:"setCurrentTime",value:function(e){var t=this.player.currentTime,i=Math.floor(this.player.duration);t+e<0&&0===t?this.player.currentTime=this.player.currentTime:t+e<0?this.player.currentTime=0:i<t+e?this.player.currentTime=i:this.player.currentTime+=e}},{key:"setVolume",value:function(e){if(!this.isDevice){var t=this.player.volume;0<=t+e&&t+e<1?this.player.volume+=e:this.player.volume=t+e<=0?0:1}}},{key:"unPressKb",value:function(e){var t=e||window.event;!this.seeking||37!==t.keyCode&&39!==t.keyCode||(this.togglePlay(),this.seeking=!1)}},{key:"pressKb",value:function(e){var t=e||window.event;switch(t.keyCode){case 13:case 32:if(document.activeElement.parentNode===this.playPauseBtn)this.togglePlay();else if(document.activeElement.parentNode===this.volumeBtn||document.activeElement===this.sliders[1]){if(document.activeElement===this.sliders[1])try{this.volumeBtn.children[0].focus()}catch(e){this.volumeBtn.focus()}this.showHideVolume()}13===t.keyCode&&this.showDownload&&document.activeElement.parentNode===this.downloadLink&&this.downloadLink.focus();break;case 37:case 39:document.activeElement===this.sliders[0]&&(37===t.keyCode?this.setCurrentTime(-5):this.setCurrentTime(5),!this.player.paused&&this.player.seeking&&(this.togglePlay(),this.seeking=!0));break;case 38:case 40:document.activeElement.parentNode!==this.volumeBtn&&document.activeElement!==this.sliders[1]||(38===t.keyCode?this.setVolume(.05):this.setVolume(-.05)),document.activeElement.parentNode===this.volumeBtn&&this.showVolume()}}},{key:"showLoadingIndicator",value:function(){this.playPauseBtn.style.visibility="hidden",this.loading.style.visibility="visible"}},{key:"hideLoadingIndicator",value:function(){this.playPauseBtn.style.visibility="visible",this.loading.style.visibility="hidden"}},{key:"showDownload",value:function(){this.download.style.display="block"}},{key:"downloadAudio",value:function(){var e=this.player.currentSrc,t=e.split("/").reverse()[0];this.downloadLink.setAttribute("href",e),this.downloadLink.setAttribute("download",t)}},{key:"directionAware",value:function(){this.volumeControls.classList.remove("top","middle","bottom"),window.innerHeight<250?this.volumeControls.classList.add("middle"):this.audioPlayer.getBoundingClientRect().top<180?this.volumeControls.classList.add("bottom"):this.volumeControls.classList.add("top")}}])&&s(e.prototype,t),i&&s(e,i),u}();i.default=a},{}]},{},[1])(1)});
