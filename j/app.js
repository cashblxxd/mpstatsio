LANGS = {thousands:' ', "processing":"ÐŸÐ¾Ð´Ð¾Ð¶Ð´Ð¸Ñ‚Ðµ...","search":"ÐŸÐ¾Ð¸ÑÐº:","lengthMenu":"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ _MENU_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","info":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ _START_ Ð´Ð¾ _END_ Ð¸Ð· _TOTAL_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoEmpty":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ñ 0 Ð´Ð¾ 0 Ð¸Ð· 0 Ð·Ð°Ð¿Ð¸ÑÐµÐ¹","infoFiltered":"(Ð¾Ñ‚Ñ„Ð¸Ð»ÑŒÑ‚Ñ€Ð¾Ð²Ð°Ð½Ð¾ Ð¸Ð· _MAX_ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹)","infoPostFix":"","loadingRecords":"Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ° Ð·Ð°Ð¿Ð¸ÑÐµÐ¹...","zeroRecords":"Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚.","emptyTable":"Ð’ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ðµ Ð¾Ñ‚ÑÑƒÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ","paginate":{"first":"ÐŸÐµÑ€Ð²Ð°Ñ","previous":"ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð°Ñ","next":"Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð°Ñ","last":"ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ"},"aria":{"sortAscending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ Ð²Ð¾Ð·Ñ€Ð°ÑÑ‚Ð°Ð½Ð¸ÑŽ","sortDescending":": Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð´Ð»Ñ ÑÐ¾Ñ€Ñ‚Ð¸Ñ€Ð¾Ð²ÐºÐ¸ ÑÑ‚Ð¾Ð»Ð±Ñ†Ð° Ð¿Ð¾ ÑƒÐ±Ñ‹Ð²Ð°Ð½Ð¸ÑŽ"},"select":{"rows":{"0":"ÐšÐ»Ð¸ÐºÐ½Ð¸Ñ‚Ðµ Ð¿Ð¾ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð´Ð»Ñ Ð²Ñ‹Ð±Ð¾Ñ€Ð°","1":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð° Ð¾Ð´Ð½Ð° Ð·Ð°Ð¿Ð¸ÑÑŒ","_":"Ð’Ñ‹Ð±Ñ€Ð°Ð½Ð¾ Ð·Ð°Ð¿Ð¸ÑÐµÐ¹: %d"} }};
tableapi = 0;

var App=function(){"use strict";var e,t,i,o,n,a,r,l,s,c,d,u,p,h,f,g,m,b,v={assetsPath:"assets",imgPath:"img",jsPath:"js",libsPath:"lib",leftSidebarSlideSpeed:200,leftSidebarToggleSpeed:300,enableLeftSidebar:!0,enableSwipe:!0,swipeTreshold:100,scrollTop:!0,openRightSidebarClass:"open-right-sidebar",openLeftSidebarClass:"open-left-sidebar",disabledLeftSidebarClass:"be-left-sidebar-disabled",offCanvasLeftSidebarClass:"be-offcanvas-menu",offCanvasLeftSidebarMobileClass:"be-offcanvas-menu-sm",topHeaderMenuClass:"be-top-menu",closeRsOnClickOutside:!0,removeLeftSidebarClass:"be-nosidebar-left",collapsibleSidebarClass:"be-collapsible-sidebar",collapsibleSidebarCollapsedClass:"be-collapsible-sidebar-collapsed",openLeftSidebarOnClick:!0,transitionClass:"be-animate",openSidebarDelay:400},w={},k={};function y(e){var t=$("<div>",{class:e}).appendTo("body"),i=t.css("background-color");return t.remove(),i}function C(e){void 0!==e&&e.update()}function S(e){e.destroy()}function x(e){if(void 0!==e[0])return new PerfectScrollbar(e[0],{wheelPropagation:!1})}function A(){$(".be-scroller",n);var t=$(".be-scroller-chat",n),i=$(".be-scroller-todo",n),o=$(".be-scroller-settings",n);function a(){e.removeClass(v.openRightSidebarClass).addClass(v.transitionClass),T()}n.length>0&&($(".be-toggle-right-sidebar").on("click",function(t){s&&e.hasClass(v.openRightSidebarClass)?a():s||(e.addClass(v.openRightSidebarClass+" "+v.transitionClass),s=!0),t.preventDefault()}),$(document).on("mousedown touchstart",function(t){!$(t.target).closest(n).length&&e.hasClass(v.openRightSidebarClass)&&(v.closeRsOnClickOutside||$.isSm())&&a()})),void 0!==h&&h&&h.nodeName||!t.length||(h=x(t)),void 0!==f&&f&&f.nodeName||!i.length||(f=x(i)),void 0!==g&&g&&g.nodeName||!o.length||(g=x(o)),$(window).resize(function(){P(function(){C(h),C(f),C(g)},500,"be_rs_update_scroller")}),$('a[data-toggle="tab"]',n).on("shown.bs.tab",function(e){C(h),C(f),C(g)})}function T(){s=!0,setTimeout(function(){s=!1},v.openSidebarDelay)}function _(){var e=$(".be-right-sidebar .tab-chat"),t=$(".chat-contacts",e),i=$(".chat-window",e),o=$(".chat-messages",i),n=$(".content ul",o),a=$(".be-scroller-messages",o),r=$(".chat-input",i),l=$("input",r),s=$(".send-msg",r);function c(e,t){var i=$('<li class="'+(t?"self":"friend")+'"></li>');""!=e&&($('<div class="msg">'+e+"</div>").appendTo(i),i.appendTo(n),a.stop().animate({scrollTop:a.prop("scrollHeight")},900,"swing"),C(m))}$(".user a",t).on("click",function(t){e.hasClass("chat-opened")||(e.addClass("chat-opened"),void 0!==m&&m&&m.nodeName||(m=x(a))),t.preventDefault()}),$(".title .return",i).on("click",function(t){e.hasClass("chat-opened")&&e.removeClass("chat-opened"),M()}),l.keypress(function(e){var t=e.keyCode?e.keyCode:e.which,i=$(this).val();"13"==t&&(c(i,!0),$(this).val("")),e.stopPropagation()}),s.on("click",function(){c(l.val(),!0),l.val("")})}function M(){void 0!==c&&c&&c.nodeName||(c=x(r))}var E,P=(E={},function(e,t,i){i||(i="x1x2x3x4"),E[i]&&clearTimeout(E[i]),E[i]=setTimeout(e,t)});
return{conf:v,color:w,scroller:k,init:function(E){var B,L;(e=$("body"),t=$(".be-wrapper"),i=$(".be-top-header",t),o=$(".be-left-sidebar",t),n=$(".be-right-sidebar",t),a=$(".be-scroller-aside",t),l=$(".be-toggle-left-sidebar",i),r=$(".be-scroller-notifications",i),s=!1,$.extend(v,E),FastClick.attach(document.body),v.enableLeftSidebar?function(){var n,a,r=$(".sidebar-elements > li > a",o),c=$(".sidebar-elements li a",o),h=$(".left-sidebar-scroll",o),f=$(".left-sidebar-toggle",o),g=!!v.openLeftSidebarOnClick;function m(){return t.hasClass(v.collapsibleSidebarCollapsedClass)}function b(e,i){var n=$(i.currentTarget),a=$(e).parent(),r=$("li.open",a),l=!n.closest(o).length,s=v.leftSidebarSlideSpeed,c=n.parents().eq(1).hasClass("sidebar-elements");!$.isSm()&&m()&&(c||l)?(a.removeClass("open"),e.removeClass("visible"),r.removeClass("open").removeAttr("style")):e.slideUp({duration:s,complete:function(){a.removeClass("open"),$(this).removeAttr("style"),r.removeClass("open").removeAttr("style"),t.hasClass("be-fixed-sidebar")&&!$.isSm()&&C(d)}})}function w(e,i){var o=$(e),n=$(o).parent(),a=$(o).next(),r=v.leftSidebarSlideSpeed,l=$(i.currentTarget).parents().eq(1).hasClass("sidebar-elements"),s=n.siblings(".open");s&&b($("> ul",s),i),!$.isSm()&&m()&&l?(n.addClass("open"),a.addClass("visible"),void 0!==p&&S(p),void 0!==p&&p&&p.nodeName||(p=x(n.find(".be-scroller"))),$(window).resize(function(){P(function(){$.isXs()||void 0!==p&&C(p)},500,"am_check_phone_classes")})):a.slideDown({duration:r,complete:function(){n.addClass("open"),$(this).removeAttr("style"),t.hasClass("be-fixed-sidebar")&&!$.isSm()&&C(d)}})}t.hasClass(v.collapsibleSidebarClass)&&(a=void 0!==n?n:$(".sidebar-elements > li",o),$.each(a,function(){var e=$(this).find("> a span").html(),t=$(this).find("> ul"),i=$("> li",t);e=$('<li class="title">'+e+"</li>");var o=$('<li class="nav-items"><div class="be-scroller"><div class="content"><ul></ul></div></div></li>');t.find("> li.title").length||(t.prepend(e),i.appendTo(o.find(".content ul")),o.appendTo(t))}),$(".be-toggle-left-sidebar").on("click",function(){t.hasClass(v.collapsibleSidebarCollapsedClass)?(t.removeClass(v.collapsibleSidebarCollapsedClass),$("li.open",o).removeClass("open"),$("li.active",o).parents(".parent").addClass("active open"),o.trigger("shown.left-sidebar.collapse"),void 0!==u&&u&&u.nodeName||(u=x($(".be-scroller",o))),S(u),void 0!==p&&S(p)):(t.addClass(v.collapsibleSidebarCollapsedClass),$("li.active",o).parents(".parent").removeClass("open"),$("li.open",o).removeClass("open"),o.trigger("hidden.left-sidebar.collapse"))}),function(){for(var e=$(".sidebar-elements > li > a",o),i=0;i<=e.length;i++){var n=e[i],a=$("> span",n).text();$(n).attr({"data-toggle":"tooltip","data-placement":"right",title:a}),$(n).tooltip({trigger:"manual"})}e.on("mouseenter",function(){!$.isSm()&&t.hasClass(v.collapsibleSidebarCollapsedClass)&&$(this).tooltip("show")}),e.on("mouseleave",function(){$(this).tooltip("hide")})}(),g||(r.on("mouseover",function(e){m()&&w(this,e)}),r.on("touchstart",function(e){var t=$(this),i=t.parent(),o=t.next();m()&&!$.isSm()&&(i.hasClass("open")?b(o,e):w(this,e),$(this).next().is("ul")&&e.preventDefault())}),r.on("mouseleave",function(e){var t=$(this),i=t.parent(),o=i.find("> ul");!$.isSm()&&m()&&(o.length>0?setTimeout(function(){o.is(":hover")?o.on("mouseleave",function(){setTimeout(function(){t.is(":hover")||(b(o,e),o.off("mouseleave"))},300)}):b(o,e)},300):i.removeClass("open"))})),$(document).on("mousedown touchstart",function(e){$(e.target).closest(o).length||$.isSm()||b($("ul.visible",o),e)})),c.on("click",function(e){var t=$(this),i=t.parent(),o=t.next();t.parents().eq(1).hasClass("sidebar-elements"),i.siblings(".open"),i.hasClass("open")?b(o,e):w(this,e),t.next().is("ul")&&e.preventDefault()}),t.hasClass(v.collapsibleSidebarCollapsedClass)?$("li.active",o).parents(".parent").addClass("active"):$("li.active",o).parents(".parent").addClass("active open"),i.find(".container-fluid > .navbar-collapse").length&&o.length&&(t.addClass(v.offCanvasLeftSidebarClass).addClass(v.offCanvasLeftSidebarMobileClass),t.addClass(v.topHeaderMenuClass),l=$('<a class="nav-link be-toggle-left-sidebar" href="#"><span class="icon mdi mdi-menu"></span></a>'),$(".be-navbar-header",i).prepend(l)),t.hasClass("be-fixed-sidebar")&&($.isSm()&&!t.hasClass(v.offCanvasLeftSidebarClass)||void 0!==d&&d&&d.nodeName||(d=x(h)),$(window).resize(function(){P(function(){$.isSm()&&!t.hasClass(v.offCanvasLeftSidebarClass)?S(d):h.hasClass("ps")?C(d):void 0!==d&&d&&d.nodeName||(d=x(h))},500,"be_update_scroller")})),f.on("click",function(e){var t=$(this).next(".left-sidebar-spacer");$(this).toggleClass("open"),t.slideToggle(v.leftSidebarToggleSpeed,function(){$(this).removeAttr("style").toggleClass("open")}),e.preventDefault()}),t.hasClass(v.offCanvasLeftSidebarClass)&&(l.on("click",function(t){s&&e.hasClass(v.openLeftSidebarClass)?(e.removeClass(v.openLeftSidebarClass),T()):(e.addClass(v.openLeftSidebarClass+" "+v.transitionClass),s=!0),t.preventDefault()}),$(document).on("mousedown touchstart",function(t){$(t.target).closest(o).length||$(t.target).closest(l).length||!e.hasClass(v.openLeftSidebarClass)||(e.removeClass(v.openLeftSidebarClass),T())}))}():t.addClass(v.disabledLeftSidebarClass),n.length&&(A(),_()),v.enableSwipe&&t.swipe({allowPageScroll:"vertical",preventDefaultEvents:!1,fallbackToMouseEvents:!1,swipeLeft:function(t){!s&&n.length>0&&(e.addClass(v.openRightSidebarClass+" "+v.transitionClass),s=!0)},threshold:v.swipeTreshold}),v.scrollTop&&((B=$('<div class="be-scroll-top"></div>')).appendTo("body"),$(window).on("scroll",function(){$(this).scrollTop()>220?B.fadeIn(500):B.fadeOut(500)}),B.on("touchstart mouseup",function(e){$("html, body").animate({scrollTop:0},500),e.preventDefault()})),a.length&&(L=a,b=x(a),$(window).resize(function(){$.isSm()&&!t.hasClass(v.offCanvasLeftSidebarClass)?S(b):L.hasClass("ps")?C(b):void 0!==b&&b&&b.nodeName||(b=x(a))})),r.length&&M(),w.primary=y("clr-primary"),w.success=y("clr-success"),w.warning=y("clr-warning"),w.danger=y("clr-danger"),w.grey=y("clr-grey"),k.be_scroller_notifications=c,k.left_sidebar_scroll=d,k.be_left_sidebar_scroll=u,k.sub_menu_scroll=p,k.chat_scroll=h,k.todo_scroll=f,k.settings_scroll=g,k.messages_scroll=m,k.aside_scroll=b,k.updateScroller=C,k.destroyScroller=S,k.initScroller=x,$(".be-icons-nav .dropdown").on("shown.bs.dropdown",function(){C(c)}),
$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),
$(".modal").on("show.bs.modal",function(){$("html").addClass("be-modal-open")}),$(".modal").on("hidden.bs.modal",function(){$("html").removeClass("be-modal-open")}),"function"==typeof Swal&&t.hasClass("be-boxed-layout"))&&new MutationObserver(function(e,t){e.forEach(function(e){"attributes"==e.type&&"style"==e.attributeName&&(document.body.className.indexOf("swal2-shown")>0?i.css({marginLeft:"calc(-"+document.body.style.paddingRight+" / 2)"}):i.css({marginLeft:"0"}))})}).observe(document.body,{attributes:!0})},activeItemLeftSidebar:function(e){var t=$(e).parent(),i=$(t).parents("li");t.hasClass("active")||($("li.active",o).removeClass("active"),$(i).addClass("active"),$(t).addClass("active"))}}}();function FastClick(e,t){"use strict";var i;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],n=0,a=o.length;n<a;n++)this[o[n]]=r(this[o[n]],this);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,i,o){var n=Node.prototype.removeEventListener;"click"===t?n.call(e,t,i.hijacked||i,o):n.call(e,t,i,o)},e.addEventListener=function(t,i,o){var n=Node.prototype.addEventListener;"click"===t?n.call(e,t,i.hijacked||(i.hijacked=function(e){e.propagationStopped||i(e)}),o):n.call(e,t,i,o)}),"function"==typeof e.onclick&&(i=e.onclick,e.addEventListener("click",function(e){i(e)},!1),e.onclick=null)}function r(e,t){return function(){return e.apply(t,arguments)}}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var i,o,n,a;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),a=t.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent("mousedown",!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n),(o=document.createEvent("MouseEvents")).initMouseEvent("mouseup",!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),o.forwardedTouchEvent=!0,e.dispatchEvent(o),(i=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(e),!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,e.dispatchEvent(i)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,i;if(!(t=e.fastClickScrollParent)||!t.contains(e)){i=e;do{if(i.scrollHeight>i.offsetHeight){t=i,e.fastClickScrollParent=i;break}i=i.parentElement}while(i)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,i,o;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),i=e.targetTouches[0],deviceIsIOS){if((o=window.getSelection()).rangeCount&&!o.isCollapsed)return!0;if(!deviceIsIOS4){if(i.identifier&&i.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=i.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=i.pageX,this.touchStartY=i.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],i=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>i||Math.abs(t.pageY-this.touchStartY)>i},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,i,o,n,a,r=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(a=e.changedTouches[0],(r=document.elementFromPoint(a.pageX-window.pageXOffset,a.pageY-window.pageYOffset)||r).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=r.tagName.toLowerCase())){if(t=this.findControl(r)){if(this.focus(r),deviceIsAndroid)return!1;r=t}}else if(this.needsFocus(r))return e.timeStamp-i>100||deviceIsIOS&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(r),this.sendClick(r,e),deviceIsIOS&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(n=r.fastClickScrollParent)||n.fastClickLastScrollTop===n.scrollTop)||(this.needsClick(r)||(e.preventDefault(),this.sendClick(r,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!(this.targetElement&&!e.forwardedTouchEvent&&e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)&&(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),1))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||((t=this.onMouse(e))||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,i,o;if(void 0===window.ontouchstart)return!0;if(i=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(i>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]"))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict";function t(t){return!t||void 0!==t.allowPageScroll||void 0===t.swipe&&void 0===t.swipeStatus||(t.allowPageScroll=s),void 0!==t.click&&void 0===t.tap&&(t.tap=t.click),t||(t={}),t=e.extend({},e.fn.swipe.defaults,t),this.each(function(){var T=e(this),_=T.data(A);_||(_=new function(t,T){function _(t){if(!(!0===Ce.data(A+"_intouch")||e(t.target).closest(T.excludedElements,Ce).length>0)){var r=t.originalEvent?t.originalEvent:t;if(!r.pointerType||"mouse"!=r.pointerType||0!=T.fallbackToMouseEvents){var l,s=r.touches,c=s?s[0]:r;return $e=w,s?Se=s.length:!1!==T.preventDefaultEvents&&t.preventDefault(),pe=0,he=null,fe=null,ke=null,ge=0,me=0,be=0,ve=1,we=0,(d={})[i]=te(i),d[o]=te(o),d[n]=te(n),d[a]=te(a),ye=d,V(),Z(0,c),!s||Se===T.fingers||T.fingers===b||Y()?(Ae=ae(),2==Se&&(Z(1,s[1]),me=be=oe(xe[0].start,xe[1].start)),(T.swipeStatus||T.pinchStatus)&&(l=D(r,$e))):l=!1,!1===l?(D(r,$e=C),l):(T.hold&&(Be=setTimeout(e.proxy(function(){Ce.trigger("hold",[r.target]),T.hold&&(l=T.hold.call(Ce,r,r.target))},this),T.longTapThreshold)),J(!0),null)}}var d}function M(t){var d,u,p,h,f,v,w,$,S=t.originalEvent?t.originalEvent:t;if($e!==y&&$e!==C&&!Q()){var x,A=S.touches,_=A?A[0]:S,M=K(_);if(Te=ae(),A&&(Se=A.length),T.hold&&clearTimeout(Be),$e=k,2==Se&&(0==me?(Z(1,A[1]),me=be=oe(xe[0].start,xe[1].start)):(K(A[1]),be=oe(xe[0].end,xe[1].end),xe[0].end,xe[1].end,ke=ve<1?l:r),ve=(be/me*1).toFixed(2),we=Math.abs(me-be)),Se===T.fingers||T.fingers===b||!A||Y()){if(he=ne(M.start,M.end),fe=ne(M.last,M.end),function(e,t){if(!1!==T.preventDefaultEvents)if(T.allowPageScroll===s)e.preventDefault();else{var r=T.allowPageScroll===c;switch(t){case i:(T.swipeLeft&&r||!r&&T.allowPageScroll!=g)&&e.preventDefault();break;case o:(T.swipeRight&&r||!r&&T.allowPageScroll!=g)&&e.preventDefault();break;case n:(T.swipeUp&&r||!r&&T.allowPageScroll!=m)&&e.preventDefault();break;case a:(T.swipeDown&&r||!r&&T.allowPageScroll!=m)&&e.preventDefault()}}}(t,fe),w=M.start,$=M.end,pe=Math.round(Math.sqrt(Math.pow($.x-w.x,2)+Math.pow($.y-w.y,2))),ge=ie(),v=pe,(f=he)!=s&&(v=Math.max(v,ee(f)),ye[f].distance=v),x=D(S,$e),!T.triggerOnTouchEnd||T.triggerOnTouchLeave){var E=!0;if(T.triggerOnTouchLeave){var P={left:(h=(p=e(p=this)).offset()).left,right:h.left+p.outerWidth(),top:h.top,bottom:h.top+p.outerHeight()};d=M.end,u=P,E=d.x>u.left&&d.x<u.right&&d.y>u.top&&d.y<u.bottom}!T.triggerOnTouchEnd&&E?$e=F(k):T.triggerOnTouchLeave&&!E&&($e=F(y)),$e!=C&&$e!=y||D(S,$e)}}else D(S,$e=C);!1===x&&D(S,$e=C)}}function E(e){var t,i=e.originalEvent?e.originalEvent:e,o=i.touches;if(o){if(o.length&&!Q())return t=i,_e=ae(),Me=t.touches.length+1,!0;if(o.length&&Q())return!0}return Q()&&(Se=Me),Te=ae(),ge=ie(),O()||!R()?D(i,$e=C):T.triggerOnTouchEnd||!1===T.triggerOnTouchEnd&&$e===k?(!1!==T.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),D(i,$e=y)):!T.triggerOnTouchEnd&&X()?I(i,$e=y,p):$e===k&&D(i,$e=C),J(!1),null}function P(){Se=0,Te=0,Ae=0,me=0,be=0,ve=1,V(),J(!1)}function B(e){var t=e.originalEvent?e.originalEvent:e;T.triggerOnTouchLeave&&($e=F(y),D(t,$e))}function L(){Ce.unbind(le,_),Ce.unbind(ue,P),Ce.unbind(se,M),Ce.unbind(ce,E),de&&Ce.unbind(de,B),J(!1)}function F(e){var t=e,i=N(),o=R(),n=O();return!i||n?t=C:!o||e!=k||T.triggerOnTouchEnd&&!T.triggerOnTouchLeave?!o&&e==y&&T.triggerOnTouchLeave&&(t=C):t=y,t}function D(e,t){var i,o=e.touches;return(!(!z()||!W())||W())&&(i=I(e,t,d)),(!(!H()||!Y())||Y())&&!1!==i&&(i=I(e,t,u)),G()&&j()&&!1!==i?i=I(e,t,h):ge>T.longTapThreshold&&pe<v&&T.longTap&&!1!==i?i=I(e,t,f):!(1!==Se&&$||!(isNaN(pe)||pe<T.threshold)||!X())&&!1!==i&&(i=I(e,t,p)),t===C&&P(),t===y&&(o&&o.length||P()),i}function I(t,s,c){var g;if(c==d){if(Ce.trigger("swipeStatus",[s,he||null,pe||0,ge||0,Se,xe,fe]),T.swipeStatus&&!1===(g=T.swipeStatus.call(Ce,t,s,he||null,pe||0,ge||0,Se,xe,fe)))return!1;if(s==y&&z()){if(clearTimeout(Pe),clearTimeout(Be),Ce.trigger("swipe",[he,pe,ge,Se,xe,fe]),T.swipe&&!1===(g=T.swipe.call(Ce,t,he,pe,ge,Se,xe,fe)))return!1;switch(he){case i:Ce.trigger("swipeLeft",[he,pe,ge,Se,xe,fe]),T.swipeLeft&&(g=T.swipeLeft.call(Ce,t,he,pe,ge,Se,xe,fe));break;case o:Ce.trigger("swipeRight",[he,pe,ge,Se,xe,fe]),T.swipeRight&&(g=T.swipeRight.call(Ce,t,he,pe,ge,Se,xe,fe));break;case n:Ce.trigger("swipeUp",[he,pe,ge,Se,xe,fe]),T.swipeUp&&(g=T.swipeUp.call(Ce,t,he,pe,ge,Se,xe,fe));break;case a:Ce.trigger("swipeDown",[he,pe,ge,Se,xe,fe]),T.swipeDown&&(g=T.swipeDown.call(Ce,t,he,pe,ge,Se,xe,fe))}}}if(c==u){if(Ce.trigger("pinchStatus",[s,ke||null,we||0,ge||0,Se,ve,xe]),T.pinchStatus&&!1===(g=T.pinchStatus.call(Ce,t,s,ke||null,we||0,ge||0,Se,ve,xe)))return!1;if(s==y&&H())switch(ke){case r:Ce.trigger("pinchIn",[ke||null,we||0,ge||0,Se,ve,xe]),T.pinchIn&&(g=T.pinchIn.call(Ce,t,ke||null,we||0,ge||0,Se,ve,xe));break;case l:Ce.trigger("pinchOut",[ke||null,we||0,ge||0,Se,ve,xe]),T.pinchOut&&(g=T.pinchOut.call(Ce,t,ke||null,we||0,ge||0,Se,ve,xe))}}return c==p?s!==C&&s!==y||(clearTimeout(Pe),clearTimeout(Be),j()&&!G()?(Ee=ae(),Pe=setTimeout(e.proxy(function(){Ee=null,Ce.trigger("tap",[t.target]),T.tap&&(g=T.tap.call(Ce,t,t.target))},this),T.doubleTapThreshold)):(Ee=null,Ce.trigger("tap",[t.target]),T.tap&&(g=T.tap.call(Ce,t,t.target)))):c==h?s!==C&&s!==y||(clearTimeout(Pe),clearTimeout(Be),Ee=null,Ce.trigger("doubletap",[t.target]),T.doubleTap&&(g=T.doubleTap.call(Ce,t,t.target))):c==f&&(s!==C&&s!==y||(clearTimeout(Pe),Ee=null,Ce.trigger("longtap",[t.target]),T.longTap&&(g=T.longTap.call(Ce,t,t.target)))),g}function R(){var e=!0;return null!==T.threshold&&(e=pe>=T.threshold),e}function O(){var e=!1;return null!==T.cancelThreshold&&null!==he&&(e=ee(he)-pe>=T.cancelThreshold),e}function N(){return!(T.maxTimeThreshold&&ge>=T.maxTimeThreshold)}function H(){var e=q(),t=U(),i=null===T.pinchThreshold||we>=T.pinchThreshold;return e&&t&&i}function Y(){return!!(T.pinchStatus||T.pinchIn||T.pinchOut)}function z(){var e=N(),t=R(),i=q(),o=U(),n=O(),a=!n&&o&&i&&t&&e;return a}function W(){return!!(T.swipe||T.swipeStatus||T.swipeLeft||T.swipeRight||T.swipeUp||T.swipeDown)}function q(){return Se===T.fingers||T.fingers===b||!$}function U(){return 0!==xe[0].end.x}function X(){return!!T.tap}function j(){return!!T.doubleTap}function G(){if(null==Ee)return!1;var e=ae();return j()&&e-Ee<=T.doubleTapThreshold}function V(){_e=0,Me=0}function Q(){var e=!1;if(_e){var t=ae()-_e;t<=T.fingerReleaseThreshold&&(e=!0)}return e}function J(e){Ce&&(!0===e?(Ce.bind(se,M),Ce.bind(ce,E),de&&Ce.bind(de,B)):(Ce.unbind(se,M,!1),Ce.unbind(ce,E,!1),de&&Ce.unbind(de,B,!1)),Ce.data(A+"_intouch",!0===e))}function Z(e,t){var i={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return i.start.x=i.last.x=i.end.x=t.pageX||t.clientX,i.start.y=i.last.y=i.end.y=t.pageY||t.clientY,xe[e]=i,i}function K(e){var t=void 0!==e.identifier?e.identifier:0,i=xe[t]||null;return null===i&&(i=Z(t,e)),i.last.x=i.end.x,i.last.y=i.end.y,i.end.x=e.pageX||e.clientX,i.end.y=e.pageY||e.clientY,i}function ee(e){if(ye[e])return ye[e].distance}function te(e){return{direction:e,distance:0}}function ie(){return Te-Ae}function oe(e,t){var i=Math.abs(e.x-t.x),o=Math.abs(e.y-t.y);return Math.round(Math.sqrt(i*i+o*o))}function ne(e,t){if(l=t,(r=e).x==l.x&&r.y==l.y)return s;var r,l,c,d,u,p,h,f,g=(d=t,u=(c=e).x-d.x,p=d.y-c.y,h=Math.atan2(p,u),(f=Math.round(180*h/Math.PI))<0&&(f=360-Math.abs(f)),f);return g<=45&&g>=0?i:g<=360&&g>=315?i:g>=135&&g<=225?o:g>45&&g<135?a:n}function ae(){var e=new Date;return e.getTime()}var T=e.extend({},T),re=$||x||!T.fallbackToMouseEvents,le=re?x?S?"MSPointerDown":"pointerdown":"touchstart":"mousedown",se=re?x?S?"MSPointerMove":"pointermove":"touchmove":"mousemove",ce=re?x?S?"MSPointerUp":"pointerup":"touchend":"mouseup",de=re?x?"mouseleave":null:"mouseleave",ue=x?S?"MSPointerCancel":"pointercancel":"touchcancel",pe=0,he=null,fe=null,ge=0,me=0,be=0,ve=1,we=0,ke=0,ye=null,Ce=e(t),$e="start",Se=0,xe={},Ae=0,Te=0,_e=0,Me=0,Ee=0,Pe=null,Be=null;try{Ce.bind(le,_),Ce.bind(ue,P)}catch(t){e.error("events not supported "+le+","+ue+" on jQuery.swipe")}this.enable=function(){return this.disable(),Ce.bind(le,_),Ce.bind(ue,P),Ce},this.disable=function(){return L(),Ce},this.destroy=function(){L(),Ce.data(A,null),Ce=null},this.option=function(t,i){if("object"==typeof t)T=e.extend(T,t);else if(void 0!==T[t]){if(void 0===i)return T[t];T[t]=i}else{if(!t)return T;e.error("Option "+t+" does not exist on jQuery.swipe.options")}return null}}(this,t),T.data(A,_))})}var i="left",o="right",n="up",a="down",r="in",l="out",s="none",c="auto",d="swipe",u="pinch",p="tap",h="doubletap",f="longtap",g="horizontal",m="vertical",b="all",v=10,w="start",k="move",y="end",C="cancel",$="ontouchstart"in window,S=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!$,x=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!$,A="TouchSwipe";e.fn.swipe=function(i){var o=e(this),n=o.data(A);if(n&&"string"==typeof i){if(n[i])return n[i].apply(n,Array.prototype.slice.call(arguments,1));e.error("Method "+i+" does not exist on jQuery.swipe")}else if(n&&"object"==typeof i)n.option.apply(n,arguments);else if(!(n||"object"!=typeof i&&i))return t.apply(this,arguments);return o},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},e.fn.swipe.phases={PHASE_START:w,PHASE_MOVE:k,PHASE_END:y,PHASE_CANCEL:C},e.fn.swipe.directions={LEFT:i,RIGHT:o,UP:n,DOWN:a,IN:r,OUT:l},e.fn.swipe.pageScroll={NONE:s,HORIZONTAL:g,VERTICAL:m,AUTO:c},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:b}}),function(e){function t(i,o){if(o=o||{},(i=i||"")instanceof t)return i;if(!(this instanceof t))return new t(i,o);var n,a,r,l,s,c,d,u,p,h,f,g=(a={r:0,g:0,b:0},r=1,l=null,s=null,c=null,d=!1,u=!1,"string"==typeof(n=i)&&(n=function(e){e=e.replace(_,"").replace(M,"").toLowerCase();var t,i=!1;if(O[e])e=O[e],i=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=H.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=H.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=H.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=H.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=H.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=H.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=H.hex8.exec(e))?{r:C(t[1]),g:C(t[2]),b:C(t[3]),a:A(t[4]),format:i?"name":"hex8"}:(t=H.hex6.exec(e))?{r:C(t[1]),g:C(t[2]),b:C(t[3]),format:i?"name":"hex"}:(t=H.hex4.exec(e))?{r:C(t[1]+""+t[1]),g:C(t[2]+""+t[2]),b:C(t[3]+""+t[3]),a:A(t[4]+""+t[4]),format:i?"name":"hex8"}:!!(t=H.hex3.exec(e))&&{r:C(t[1]+""+t[1]),g:C(t[2]+""+t[2]),b:C(t[3]+""+t[3]),format:i?"name":"hex"}}(n)),"object"==typeof n&&(T(n.r)&&T(n.g)&&T(n.b)?(p=n.r,h=n.g,f=n.b,a={r:255*k(p,255),g:255*k(h,255),b:255*k(f,255)},d=!0,u="%"===String(n.r).substr(-1)?"prgb":"rgb"):T(n.h)&&T(n.s)&&T(n.v)?(l=S(n.s),s=S(n.v),a=function(t,i,o){t=6*k(t,360),i=k(i,100),o=k(o,100);var n=e.floor(t),a=t-n,r=o*(1-i),l=o*(1-a*i),s=o*(1-(1-a)*i),c=n%6;return{r:255*[o,l,r,r,s,o][c],g:255*[s,o,o,l,r,r][c],b:255*[r,r,s,o,o,l][c]}}(n.h,l,s),d=!0,u="hsv"):T(n.h)&&T(n.s)&&T(n.l)&&(l=S(n.s),c=S(n.l),a=function(e,t,i){function o(e,t,i){return 0>i&&(i+=1),i>1&&(i-=1),1/6>i?e+6*(t-e)*i:.5>i?t:2/3>i?e+6*(t-e)*(2/3-i):e}var n,a,r;if(e=k(e,360),t=k(t,100),i=k(i,100),0===t)n=a=r=i;else{var l=.5>i?i*(1+t):i+t-i*t,s=2*i-l;n=o(s,l,e+1/3),a=o(s,l,e),r=o(s,l,e-1/3)}return{r:255*n,g:255*a,b:255*r}}(n.h,l,c),d=!0,u="hsl"),n.hasOwnProperty("a")&&(r=n.a)),r=w(r),{ok:d,format:n.format||u,r:B(255,L(a.r,0)),g:B(255,L(a.g,0)),b:B(255,L(a.b,0)),a:r});this._originalInput=i,this._r=g.r,this._g=g.g,this._b=g.b,this._a=g.a,this._roundA=P(100*this._a)/100,this._format=o.format||g.format,this._gradientType=o.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=g.ok,this._tc_id=E++}function i(e,t,i){e=k(e,255),t=k(t,255),i=k(i,255);var o,n,a=L(e,t,i),r=B(e,t,i),l=(a+r)/2;if(a==r)o=n=0;else{var s=a-r;switch(n=l>.5?s/(2-a-r):s/(a+r),a){case e:o=(t-i)/s+(i>t?6:0);break;case t:o=(i-e)/s+2;break;case i:o=(e-t)/s+4}o/=6}return{h:o,s:n,l:l}}function o(e,t,i){e=k(e,255),t=k(t,255),i=k(i,255);var o,n,a=L(e,t,i),r=B(e,t,i),l=a,s=a-r;if(n=0===a?0:s/a,a==r)o=0;else{switch(a){case e:o=(t-i)/s+(i>t?6:0);break;case t:o=(i-e)/s+2;break;case i:o=(e-t)/s+4}o/=6}return{h:o,s:n,v:l}}function n(e,t,i,o){var n=[$(P(e).toString(16)),$(P(t).toString(16)),$(P(i).toString(16))];return o&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function a(e,t,i,o){return[$(x(o)),$(P(e).toString(16)),$(P(t).toString(16)),$(P(i).toString(16))].join("")}function r(e,i){i=0===i?0:i||10;var o=t(e).toHsl();return o.s-=i/100,o.s=y(o.s),t(o)}function l(e,i){i=0===i?0:i||10;var o=t(e).toHsl();return o.s+=i/100,o.s=y(o.s),t(o)}function s(e){return t(e).desaturate(100)}function c(e,i){i=0===i?0:i||10;var o=t(e).toHsl();return o.l+=i/100,o.l=y(o.l),t(o)}function d(e,i){i=0===i?0:i||10;var o=t(e).toRgb();return o.r=L(0,B(255,o.r-P(-i/100*255))),o.g=L(0,B(255,o.g-P(-i/100*255))),o.b=L(0,B(255,o.b-P(-i/100*255))),t(o)}function u(e,i){i=0===i?0:i||10;var o=t(e).toHsl();return o.l-=i/100,o.l=y(o.l),t(o)}function p(e,i){var o=t(e).toHsl(),n=(o.h+i)%360;return o.h=0>n?360+n:n,t(o)}function h(e){var i=t(e).toHsl();return i.h=(i.h+180)%360,t(i)}function f(e){var i=t(e).toHsl(),o=i.h;return[t(e),t({h:(o+120)%360,s:i.s,l:i.l}),t({h:(o+240)%360,s:i.s,l:i.l})]}function g(e){var i=t(e).toHsl(),o=i.h;return[t(e),t({h:(o+90)%360,s:i.s,l:i.l}),t({h:(o+180)%360,s:i.s,l:i.l}),t({h:(o+270)%360,s:i.s,l:i.l})]}function m(e){var i=t(e).toHsl(),o=i.h;return[t(e),t({h:(o+72)%360,s:i.s,l:i.l}),t({h:(o+216)%360,s:i.s,l:i.l})]}function b(e,i,o){i=i||6,o=o||30;var n=t(e).toHsl(),a=360/o,r=[t(e)];for(n.h=(n.h-(a*i>>1)+720)%360;--i;)n.h=(n.h+a)%360,r.push(t(n));return r}function v(e,i){i=i||6;for(var o=t(e).toHsv(),n=o.h,a=o.s,r=o.v,l=[],s=1/i;i--;)l.push(t({h:n,s:a,v:r})),r=(r+s)%1;return l}function w(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function k(t,i){var o;"string"==typeof(o=t)&&-1!=o.indexOf(".")&&1===parseFloat(o)&&(t="100%");var n,a="string"==typeof(n=t)&&-1!=n.indexOf("%");return t=B(i,L(0,parseFloat(t))),a&&(t=parseInt(t*i,10)/100),e.abs(t-i)<1e-6?1:t%i/parseFloat(i)}function y(e){return B(1,L(0,e))}function C(e){return parseInt(e,16)}function $(e){return 1==e.length?"0"+e:""+e}function S(e){return 1>=e&&(e=100*e+"%"),e}function x(t){return e.round(255*parseFloat(t)).toString(16)}function A(e){return C(e)/255}function T(e){return!!H.CSS_UNIT.exec(e)}var _=/^\s+/,M=/\s+$/,E=0,P=e.round,B=e.min,L=e.max,F=e.random;t.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var t,i,o,n=this.toRgb();return t=n.r/255,i=n.g/255,o=n.b/255,.2126*(.03928>=t?t/12.92:e.pow((t+.055)/1.055,2.4))+.7152*(.03928>=i?i/12.92:e.pow((i+.055)/1.055,2.4))+.0722*(.03928>=o?o/12.92:e.pow((o+.055)/1.055,2.4))},setAlpha:function(e){return this._a=w(e),this._roundA=P(100*this._a)/100,this},toHsv:function(){var e=o(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=o(this._r,this._g,this._b),t=P(360*e.h),i=P(100*e.s),n=P(100*e.v);return 1==this._a?"hsv("+t+", "+i+"%, "+n+"%)":"hsva("+t+", "+i+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=i(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=i(this._r,this._g,this._b),t=P(360*e.h),o=P(100*e.s),n=P(100*e.l);return 1==this._a?"hsl("+t+", "+o+"%, "+n+"%)":"hsla("+t+", "+o+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return n(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return t=this._r,i=this._g,o=this._b,n=this._a,a=e,r=[$(P(t).toString(16)),$(P(i).toString(16)),$(P(o).toString(16)),$(x(n))],a&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)&&r[3].charAt(0)==r[3].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("");var t,i,o,n,a,r},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*k(this._r,255))+"%",g:P(100*k(this._g,255))+"%",b:P(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*k(this._r,255))+"%, "+P(100*k(this._g,255))+"%, "+P(100*k(this._b,255))+"%)":"rgba("+P(100*k(this._r,255))+"%, "+P(100*k(this._g,255))+"%, "+P(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(N[n(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var i="#"+a(this._r,this._g,this._b,this._a),o=i,n=this._gradientType?"GradientType = 1, ":"";if(e){var r=t(e);o="#"+a(r._r,r._g,r._b,r._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+i+",endColorstr="+o+")"},toString:function(e){var t=!!e;e=e||this._format;var i=!1,o=this._a<1&&this._a>=0;return!t&&o&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(i=this.toRgbString()),"prgb"===e&&(i=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(i=this.toHexString()),"hex3"===e&&(i=this.toHexString(!0)),"hex4"===e&&(i=this.toHex8String(!0)),"hex8"===e&&(i=this.toHex8String()),"name"===e&&(i=this.toName()),"hsl"===e&&(i=this.toHslString()),"hsv"===e&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return t(this.toString())},_applyModification:function(e,t){var i=e.apply(null,[this].concat([].slice.call(t)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(c,arguments)},brighten:function(){return this._applyModification(d,arguments)},darken:function(){return this._applyModification(u,arguments)},desaturate:function(){return this._applyModification(r,arguments)},saturate:function(){return this._applyModification(l,arguments)},greyscale:function(){return this._applyModification(s,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(b,arguments)},complement:function(){return this._applyCombination(h,arguments)},monochromatic:function(){return this._applyCombination(v,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(f,arguments)},tetrad:function(){return this._applyCombination(g,arguments)}},t.fromRatio=function(e,i){if("object"==typeof e){var o={};for(var n in e)e.hasOwnProperty(n)&&(o[n]="a"===n?e[n]:S(e[n]));e=o}return t(e,i)},t.equals=function(e,i){return!(!e||!i)&&t(e).toRgbString()==t(i).toRgbString()},t.random=function(){return t.fromRatio({r:F(),g:F(),b:F()})},t.mix=function(e,i,o){o=0===o?0:o||50;var n=t(e).toRgb(),a=t(i).toRgb(),r=o/100;return t({r:(a.r-n.r)*r+n.r,g:(a.g-n.g)*r+n.g,b:(a.b-n.b)*r+n.b,a:(a.a-n.a)*r+n.a})},t.readability=function(i,o){var n=t(i),a=t(o);return(e.max(n.getLuminance(),a.getLuminance())+.05)/(e.min(n.getLuminance(),a.getLuminance())+.05)},t.isReadable=function(e,i,o){var n,a,r,l,s,c=t.readability(e,i);switch(a=!1,"AA"!==(l=((r=(r=o)||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==l&&(l="AA"),"small"!==(s=(r.size||"small").toLowerCase())&&"large"!==s&&(s="small"),(n={level:l,size:s}).level+n.size){case"AAsmall":case"AAAlarge":a=c>=4.5;break;case"AAlarge":a=c>=3;break;case"AAAsmall":a=c>=7}return a},t.mostReadable=function(e,i,o){var n,a,r,l,s=null,c=0;a=(o=o||{}).includeFallbackColors,r=o.level,l=o.size;for(var d=0;d<i.length;d++)(n=t.readability(e,i[d]))>c&&(c=n,s=t(i[d]));return t.isReadable(e,s,{level:r,size:l})||!a?s:(o.includeFallbackColors=!1,t.mostReadable(e,["#fff","#000"],o))};var D,I,R,O=t.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},N=t.hexNames=function(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}(O),H=(I="[\\s|\\(]+("+(D="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+D+")[,|\\s]+("+D+")\\s*\\)?",R="[\\s|\\(]+("+D+")[,|\\s]+("+D+")[,|\\s]+("+D+")[,|\\s]+("+D+")\\s*\\)?",{CSS_UNIT:new RegExp(D),rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+R),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+R),hsv:new RegExp("hsv"+I),hsva:new RegExp("hsva"+R),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):window.tinycolor=t}(Math),function(e){var t=function(t){var i,o;return o=(i=e("<div/>",{class:t}).appendTo("body")).is(":visible"),i.remove(),o};e.isBreakpoint=function(e){var i;switch(e){case"xs":i="d-block d-sm-none";break;case"sm":i="d-none d-sm-block d-md-none";break;case"md":i="d-none d-md-block d-lg-none";break;case"lg":i="d-none d-lg-block d-xl-none";break;case"xl":i="d-none d-xl-block"}return t(i)},e.isBreakpointUp=function(e){var i;switch(e){case"xs":return!0;case"sm":i="d-none d-sm-block";break;case"md":i="d-none d-md-block";break;case"lg":i="d-none d-lg-block";break;case"xl":i="d-none d-xl-block"}return t(i)},e.extend(e,{isXs:function(){return e.isBreakpoint("xs")},isSm:function(){return e.isBreakpoint("sm")},isMd:function(){return e.isBreakpoint("md")},isLg:function(){return e.isBreakpoint("lg")},isXl:function(){return e.isBreakpoint("xl")},isXsUp:function(){return e.isBreakpointUp("xs")},isSmUp:function(){return e.isBreakpointUp("sm")},isMdUp:function(){return e.isBreakpointUp("md")},isLgUp:function(){return e.isBreakpointUp("lg")},isXlUp:function(){return e.isBreakpointUp("xl")}})}(jQuery);
App=function(){"use strict";return App.dashboard=function(){var e,t,i,o,n,a,r,l,s,c,d,u,p,h,f,g,m,b;

$('[data-toggle="counter"]').each(function(e,t){var i=$(this),o="",n="",a=0,r=0,l=0,s=2.5;i.data("prefix")&&(o=i.data("prefix")),i.data("suffix")&&(n=i.data("suffix")),i.data("start")&&(a=i.data("start")),i.data("end")&&(r=i.data("end")),i.data("decimals")&&(l=i.data("decimals")),i.data("duration")&&(s=i.data("duration")),new CountUp(i.get(0),a,r,l,s,{suffix:n,prefix:o,separator:' '}).start()}),$(".toggle-loading").on("click",function(){var e=$(this).parents(".widget, .panel");e.length&&(e.addClass("be-loading-active"),setTimeout(function(){e.removeClass("be-loading-active")},3e3))}),e=App.color.primary,t=App.color.warning,i=App.color.success,o=App.color.danger,

$("#spark1").sparkline("html",{width:"85",height:"35",lineColor:e,highlightSpotColor:e,highlightLineColor:e,fillColor:!1,spotColor:!1,minSpotColor:!1,maxSpotColor:!1,lineWidth:1.15}),
$("#spark2").sparkline("html",{type:"bar",width:"85",height:"35",barWidth:3,barSpacing:3,chartRangeMin:0,barColor:t}),
$("#spark3").sparkline("html",{type:"line",width:"85",height:"35",lineHeight:20,lineColor:i,xwidth:18}),
$("#spark4").sparkline("html",{width:"85",height:"35",lineColor:o,highlightSpotColor:o,highlightLineColor:o,fillColor:!1,spotColor:!1,minSpotColor:!1,maxSpotColor:!1,lineWidth:1.15}),

a=App.color.primary,r=tinycolor(App.color.primary).lighten(13).toString(),l=tinycolor(App.color.primary).lighten(20).toString()
},App}()

function reportDate(start, end) {
    $('#daterangepicker-reports').daterangepicker({
        startDate: new Date(start),
        endDate: new Date(end),
        "minDate": "01/01/2020",
        "maxDate": moment().subtract(1, 'days'),
        "opens": "left",
        locale: {
            "format": 'DD.MM.YYYY',
            "applyLabel": "ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ",
            "cancelLabel": "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
            "fromLabel": "ÐžÑ‚",
            "toLabel": "Ð”Ð¾",
            "daysOfWeek": [
                "Ð’Ñ",
                "ÐŸÐ½",
                "Ð’Ñ‚",
                "Ð¡Ñ€",
                "Ð§Ñ‚",
                "ÐŸÑ‚",
                "Ð¡Ð±"
            ],
            "monthNames": [
                "Ð¯Ð½Ð²Ð°Ñ€ÑŒ",
                "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ",
                "ÐœÐ°Ñ€Ñ‚",
                "ÐÐ¿Ñ€ÐµÐ»ÑŒ",
                "ÐœÐ°Ð¹",
                "Ð˜ÑŽÐ½ÑŒ",
                "Ð˜ÑŽÐ»ÑŒ",
                "ÐÐ²Ð³ÑƒÑÑ‚",
                "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ",
                "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ",
                "ÐÐ¾ÑÐ±Ñ€ÑŒ",
                "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"
            ],
            "firstDay": 1
        }
    }, function(start, end) {
        var x = new URL(window.location);
        x.searchParams.set('d1', start.format('DD.MM.YYYY'));
        x.searchParams.set('d2', end.format('DD.MM.YYYY'));

        window.location = x.href;
        return false;
    });
}

function formatMoney(amount, decimalCount = 0, decimal = "", thousands = " ") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
  }
}

function initSrokChanger() {  
    $('.srokselector input').on('change', function () {
      var sr = $('input:checked').val() ^ 0;
      var disc = 1;
      if (sr==3) disc = 0.9;
      if (sr==6) disc = 0.8;
      $('.val.big').text( formatMoney(14500*sr*disc));
      $('.val.extra').text( formatMoney(28000*sr*disc));
      $('.val.middle').text( formatMoney(4800*sr*disc));
      $('.val.small').text( formatMoney(1500*sr*disc));
      if (sr!=1) 
        $('.priceval .mark').text('Ñ€ÑƒÐ±Ð»ÐµÐ¹');
      else
        $('.priceval .mark').text('Ñ€ÑƒÐ±/Ð¼ÐµÑÑÑ†')
      
    });
}

function subPromocode() {
  swal({
      title: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ‚ÐµÐºÑÑ‚ Ð¿Ñ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´Ð°",
      content: "input",
      button: {text: "ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ"}
  }).then((value) => {
      if ((value == '') || (value == null))
        return false;
      $.post('/bills/applypromo', {promo: value}, function (data) {
        if (data.result <= 0) {
          swal("ÐŸÑ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ñ‚ÐµÐºÑÑ‚Ð¾Ð¼ Ð½Ðµ Ð½Ð°Ð¹Ð´ÐµÐ½");
        } else {
          swal("ÐžÑ‚Ð»Ð¸Ñ‡Ð½Ð¾, Ð¿Ñ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´ Ð¿Ñ€Ð¸Ð¼ÐµÐ½ÐµÐ½, ÑÐµÐ¹Ñ‡Ð°Ñ Ð¾Ð±Ð½Ð¾Ð²Ð¸Ð¼ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ");
          window.location.reload();
        }
      }, 'json');
    });
  return false;
}

function initTables() {
  if (typeof(tdefOrder) == 'undefined') 
    tdefOrder = [];  
  deftableapi = $('#dtable').DataTable( {
    'language': LANGS,
    'searching': true,
    'pageLength': 25,
    "dom": 'frt<"row"<"col-2"l><"col-4"i><"col-6 text-right"p>>',
    'order': tdefOrder,
  });
}

function initSearchDaysTable() {
  $('#daysstable').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    columns: [
      {"type": "mydate" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}

function initBrandDaysTable() {
  $('#brandstable').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    columns: [
      {"type": "mydate" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}

function initBrandCategoryesTable() {
  $('#brandcats').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    columns: [
      {"type": "text" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}

function initBrandCategoryesWithPlacesTable() {
  $('#brandcats').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    columns: [
      {"type": "text" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}

function initCatSubCatsTable() {
  $('#catsubcates').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    columns: [
      {"type": "text" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}
  

function initCatBrandsTable2() {
  $('#catbrandstops').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [
      {"type": "mynums" },
      {"type": "text" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
      {"type": "mynums" },
    ],
    'order': []
  });
}

function initOZSellerDaysTable() {
  $('#ozsellerdays').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "mydate" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}

function initOZSellerBrandTable() {
  $('#ozsellerbrands').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "text" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}
 
function initOZSellerCategoryesTable() {
  $('#ozsellercategoryes').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "text" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}

function initOZBrandSellers() {
  $('#ozbrandsellers').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "text" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}  

function initOZBrandCategoryes() {
  $('#ozbrandcats').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "text" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}  

function initOZCatByBrands() {
  $('#ozcatbybrands').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "mynums" },{"type": "text" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}  

function initOZCatBySellers() {
  $('#ozcatbysellers').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "mynums" },{"type": "text" },
    {"type": "mynums" },{"type": "mynums" },{"type": "mynums" },
    {"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}  

function initOZCatByFolders() {
  $('#foldersTable').DataTable( {
    'language': LANGS,
    'searching': false,    
    'paging': false,
    'columns': [{"type": "mynums" },{"type": "text" },
    {"type": "mynums" },{"type": "mynums" },
    {"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" },{"type": "mynums" }],
    'order': []
  });
}  
  

function initBillsTable() {
  $('#billstable').DataTable( {
    'language': LANGS,
    'searching': true,    
    'paging': true,
    'pageLength': 100,
    'columns': [
    {"type": "mynums" },
    {"type": "text" },
    {"type": "mydate" },
    {"type": "text" },
    {"type": "mydate" },
    {"type": "text" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mydate" },
],
    'order': []
  });
}

function initInvoiceTable() {
    $('#invoicetable').DataTable( {
        'language': LANGS,
        'searching': true,
        'paging': true,
        'pageLength': 100,
        'columns': [
            {"type": "mynums" },
            {"type": "text" },
            {"type": "text" },
            {"type": "mydate" },
            {"type": "mydate" },
            {"type": "text" },
            {"type": "mydate" },
            {"type": "text" },
            {"type": "mynums" },
            {"type": "mynums" },
            {"type": "mydate" },
            {"type": "text" },
        ],
        'order': [[0, 'desc']]
    });
}

function initUsersTable() {
  $('#userstable').DataTable( {
    'language': LANGS,
    'searching': true,    
    'paging': true,
    'pageLength': 100,
    'columns': [
    {"type": "mynums" },
    {"type": "text" },
    {"type": "mydate" },
    {"type": "mydate" },
    {"type": "text" },
    {"type": "mydate" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "text" },
    {"type": "text" },
],
    'order': []
  });
}

function initCatBrandsTable() {
  $('#catbydays').DataTable( {
    'language': LANGS,
    'searching': true,    
    'paging': true,
    'pageLength': 100,
    'columns': [
    {"type": "mydate" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },
    {"type": "mynums" },

],
    'order': []
  });
}


window.chartColors = {
  red: 'rgb(255, 99, 132)',
  blue: 'rgb(54, 162, 235)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
  reda: 'rgba(255, 99, 132, 0.3)',
  bluea: 'rgba(54, 162, 235, 0.3)',
  orangea: 'rgba(255, 159, 64, 0.3)',
  yellowa: 'rgba(255, 205, 86, 0.3)',
  greena: 'rgba(75, 192, 192, 0.3)',
  purplea: 'rgba(153, 102, 255, 0.3)',
  greya: 'rgba(201, 203, 207,0.3)',
};
window.chartColorsArray = [
  window.chartColors.red,
  window.chartColors.orange,
  window.chartColors.yellow,
  window.chartColors.green,
  window.chartColors.blue,
  window.chartColors.reda,
  window.chartColors.orangea,
  window.chartColors.yellowa,
  window.chartColors.greena,
  window.chartColors.bluea,
];


function buildSellsByDayGraph(dbDays, dbSells, dbSum) {
  var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
        label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.reda,
        fill: true,
        data: dbSells,
        yAxisID: 'y-axis-1',
      }, {
        label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.bluea,
        fill: true,
        data: dbSum,
        yAxisID: 'y-axis-2'
      }]
    };
    $("#bydaygraphs").siblings(".mp-loader-static").remove();
  var ctx = $("#bydaygraphs");//document.getElementById('bydaygraphs').getContext('2d');

  window.myLine = Chart.Line(ctx, {
    data: ByDaysChartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      hoverMode: 'index',
      stacked: false,
      tooltips: {callbacks: {label: function(label, index) {return ' ' + formatMoney(label.yLabel) + (label.datasetIndex==1 ?' Ñ€.':' ÑˆÑ‚.');}}},
      scales: {
        yAxes: [{
          ticks: {callback: function(label, index, labels) {return formatMoney(label);}},
          type: 'linear',display: 'auto',position: 'left',id: 'y-axis-1',
          }, 
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);}},
          type: 'linear',display: 'auto',position: 'right',id: 'y-axis-2', gridLines: {drawOnChartArea: false},
          }],
       }
    }
  });
}

function initWbItemGallery() {
  var e = $(".gallery-container");
  e.masonry({columnWidth: 0, itemSelector: ".item"}),
  $("#sidebar-collapse").click(function() {e.masonry()}),
  $(".image-zoom").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom",
      zoom: {enabled: !0,duration: 300,easing: "ease-in-out",opener: function(e) {return $(e).parents("div.img")}}
  });
  e.masonry();
}

function initWbItemSellsGraph(dbDays, dbSells, dbSum, dbPricefinal, dbSumSells) {    
  var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
        label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.reda,
        fill: true,
        data: dbSells,
        yAxisID: 'y-axis-1',
      }, {
        label: 'ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.bluea,
        fill: true,
        data: dbSum,
        yAxisID: 'y-axis-2'
      }, {
        label: 'Ð¦ÐµÐ½Ð°',
        steppedLine: 'middle',
        borderColor: window.chartColors.green,
        backgroundColor: window.chartColors.greena,
        fill: true,
        data: dbPricefinal,
        hidden: true,
        yAxisID: 'y-axis-3'
      }, {
        label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°',
        borderColor: window.chartColors.purple,
        backgroundColor: window.chartColors.purplea,
        fill: true,
        data: dbSumSells,
        hidden: true,
        yAxisID: 'y-axis-4'
      }
      ]
    };
    $("#sellsGraph").siblings(".mp-loader-static").remove();
  window.myLine = Chart.Line($("#sellsGraph"), {
    data: ByDaysChartData,
    options: {
      responsive: true,
      
      maintainAspectRatio: false,
      hoverMode: 'index',
      stacked: false,
      tooltips: {
        callbacks: {label: function(label, index) {
              var t ='', e='';
              if (label.datasetIndex==0) {t = 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸'; e = 'ÑˆÑ‚';}
              if (label.datasetIndex==1) {t = 'ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº'; e = 'ÑˆÑ‚';}
              if (label.datasetIndex==2) {t = 'Ð¦ÐµÐ½Ð°'; e = 'Ñ€';}
              if (label.datasetIndex==3) {t = 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°'; e = 'Ñ€';}
              
              return t +': ' + formatMoney(label.yLabel) + ' '+e;
            }},
            mode: 'index',
            intersect: true,
        },
      scales: {
        yAxes: [{
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.red},
          type: 'linear',display: 'auto', position: 'right',id: 'y-axis-1', gridLines: {drawOnChartArea: true},
          }, 
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.blue},
          type: 'linear',display: 'auto', position: 'left',id: 'y-axis-2', gridLines: {drawOnChartArea: false},
          },
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.green},
          type: 'linear',display: 'auto', position: 'left',id: 'y-axis-3', gridLines: {drawOnChartArea: false},
          },
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.purple},
          type: 'linear',display: 'auto', position: 'right',id: 'y-axis-4', gridLines: {drawOnChartArea: false},
          }
          ],
       },
    }
  });
}

function buildWBBrandSellsByDayGraph(dbDays, dbSells, dbSum) {    
  var ByDaysChartData = {
      labels: dbDays,
      datasets: [{
        label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸',
        borderColor: window.chartColors.red,
        backgroundColor: window.chartColors.reda,
        fill: true,
        data: dbSells,
        yAxisID: 'y-axis-1',
      }, {
        label: 'ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.bluea,
        fill: true,
        data: dbSum,
        yAxisID: 'y-axis-2'
      }]
    };
  window.myLine = Chart.Line($("#sellsGraph"), {
    data: ByDaysChartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      hoverMode: 'index',
      stacked: false,
      tooltips: {
        callbacks: {label: function(label, index) {return (label.datasetIndex==1 ?' ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº:':' ÐŸÑ€Ð¾Ð´Ð°Ð¶:')+' ' + formatMoney(label.yLabel) + ' ÑˆÑ‚';}},
            mode: 'index',
            intersect: true,
        },
      scales: {
        yAxes: [{
          ticks: {callback: function(label, index, labels) {return formatMoney(label);}},
          type: 'linear',display: 'auto',position: 'left',id: 'y-axis-1',
          }, 
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);}},
          type: 'linear',display: 'auto',position: 'right',id: 'y-axis-2', gridLines: {drawOnChartArea: false},
          }],
       }
    }
  });
}

function buildWBBrandDonutSells(data, labels) {
  window.myDoughnut = new Chart($("#donutCatSells"), {type: 'doughnut',
      data: {
        datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸'}],
        labels: labels
      },
      options: {responsive: true, maintainAspectRatio: false, legend: {position: 'left'}, animation: {animateScale: true,animateRotate: true},
                tooltips: {callbacks: {
                                      label: function(label, index) {
                                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                                      }}}
                }
    })
}

function buildWBCatDonutSells(data, labels) {
    window.myDoughnut = new Chart($("#donutSells"), {type: 'doughnut',
        data: {
            datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸'}],
            labels: labels
        },
        options: {responsive: true, maintainAspectRatio: false, legend: {position: 'left'}, animation: {animateScale: true,animateRotate: true},
            tooltips: {callbacks: {
                    label: function(label, index) {
                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                    }}}
        }
    })
}

function buildWBCatDonutSumms(data, labels) {
    window.myDoughnut = new Chart($("#donutSums"), {type: 'doughnut',
        data: {
            datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°'}],
            labels: labels
        },
        options: {responsive: true, maintainAspectRatio: false, legend: {position: 'right'}, animation: {animateScale: true,animateRotate: true},
            tooltips: {callbacks: {
                    label: function(label, index) {
                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                    }}}
        }
    });
}


function buildWBCatDonutBrandSells(data, labels) {
    window.myDoughnut = new Chart($("#donutBrandSells"), {type: 'doughnut',
        data: {
            datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸'}],
            labels: labels
        },
        options: {responsive: true, maintainAspectRatio: false, legend: {position: 'left'}, animation: {animateScale: true,animateRotate: true},
            tooltips: {callbacks: {
                    label: function(label, index) {
                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                    }}}
        }
    })
}

function buildWBCatDonutBrandSumms(data, labels) {
    window.myDoughnut = new Chart($("#donutBrandSums"), {type: 'doughnut',
        data: {
            datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°'}],
            labels: labels
        },
        options: {responsive: true, maintainAspectRatio: false, legend: {position: 'right'}, animation: {animateScale: true,animateRotate: true},
            tooltips: {callbacks: {
                    label: function(label, index) {
                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                    }}}
        }
    });
}


function buildChartDoughnut(data, labels, selector, label, limit = 6) {
  if(labels.length > limit){
      labels = labels.slice(0, limit);
      labels.push("ÐžÑÑ‚Ð°Ð»ÑŒÐ½Ñ‹Ðµ");

      data = data.reduce((accum, cur, index) => {
        if(index <= limit){
          accum.push(cur)
        }else{
            accum[accum.length - 1] = accum[accum.length - 1] + cur;
        }

        return accum;
      }, []);
  }
    $(selector).siblings(".mp-loader-static").remove();
    window.myDoughnut = new Chart($(selector), {type: 'doughnut',
        data: {
            datasets: [{data: data, backgroundColor: window.chartColorsArray,label: label}],
            labels: labels
        },
        options: {responsive: true, maintainAspectRatio: false, legend: {position: 'left'}, animation: {animateScale: true,animateRotate: true},
            tooltips: {callbacks: {
                    label: function(label, index) {
                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                    }}}
        }
    })
}

function buildWBBrandDonutSumms(data, labels) {
  window.myDoughnut = new Chart($("#donutCatSums"), {type: 'doughnut',
      data: {
        datasets: [{data: data, backgroundColor: window.chartColorsArray,label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°'}],
        labels: labels
      },
      options: {responsive: true, maintainAspectRatio: false, legend: {position: 'right'}, animation: {animateScale: true,animateRotate: true},
                tooltips: {callbacks: {
                                      label: function(label, index) {
                                        return index.labels[label.index] + ": " + formatMoney(index.datasets[label.datasetIndex]['data'][label.index]);
                                      }}}
               }
    });
}

function redrawSubDirsCharts() {
  x = getDataForSubCatsPies('cnt');
  window.sellsDon.config.data.datasets[0].data = x.values;
  window.sellsDon.config.data.labels = x.labels;
  window.sellsDon.update();
  x = getDataForSubCatsPies('sm');
  window.sumsDon.config.data.datasets[0].data = x.values;
  window.sumsDon.config.data.labels = x.labels;
  window.sumsDon.update();
}

function getStocks(d, id) {
  $("#hourlyTable").hide();
  $("#hourlyStocksData").html(d);
  $(".be-loading").addClass('be-loading-active');
  $("#hourlyStocks").niftyModal();
  $.post('/getHourlyStock', {'d': d, 'i': id}, function (data) {
    var fd = data;
    var sm = 0;
    var ht = '';
    if (fd.length==0) {
      ht += "<tr><td class='text-center' colspan=7>Ð”Ð°Ð½Ð½Ñ‹Ñ… Ð¿Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ñƒ Ð·Ð° "+d+" Ð½Ð° Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ Ð½ÐµÑ‚</td></tr>";
    } else {
      for (i in fd) {
        var r = data[i];
        ht += '<tr><td>'+r['tm']+'</td><td>'+r['price']+'</td><td>'+r['pricefinal']+'</td><td>'+r['commentscount']+'</td><td>'+r['rating']+'</td><td>'+r['count']+'</td><td>'+r['sells']+'</td></tr>';
        sm += r['sells'];
        lc = r['count'];
      }
      ht += '<tr><th colspan=4>Ð˜Ñ‚Ð¾Ð³Ð¾<th><th>'+lc+'</th><th>'+sm+'</th></tr>';
    }
    $("#hourlydata").html(ht);
    $("#hourlyTable").show();
    $(".be-loading").removeClass('be-loading-active');
  }, 'json');
}

function _getStocks(d, id) {
    $("#hourlyStocksData").html(d);

    let grid = window.wbitemsalesandbalancehourly;
    $("#hourlyStocks").niftyModal();

    grid.api.setRowData([]);
    grid.api.setPinnedBottomRowData([]);
    grid.api.showLoadingOverlay();

    $.get(`/api/wb/get/item/${id}/balance_by_day?d=${d}`, function (data) {

        grid.api.hideOverlay();
        grid.api.setRowData(data);
        setTimeout(() => {grid.api.sizeColumnsToFit();});
        if(!data.length){
          grid.overlayNoRowsTemplate = "Ð”Ð°Ð½Ð½Ñ‹Ñ… Ð¿Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ñƒ Ð·Ð° "+d+" Ð½Ð° Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ Ð½ÐµÑ‚";
            grid.api.showNoRowsOverlay();
        }else{

          let summ = data.reduce(function(acc, current){
            acc.sales += current.sales;
            return acc;
          }, {sales: 0});

          grid.api.setPinnedBottomRowData([{
            tm: "Ð˜Ñ‚Ð¾Ð³Ð¾",
              price: null,
              final_price: null,
              comments: null,
              rating: null,
              balance: data[data.length - 1].balance,
              sales: summ.sales,
          }]);

        }

    }, 'json');
}

function initWBPosesInCats(cats, ticks, dbSells, dbSum, dbPricefinal, dbSumSells) {
  ds = [];
  var cnt = window.chartColorsArray.length;
  var ind = -1;
  var dels = [];
  for (c in cats) {
    ind++;
    if (ind>=cnt) ind=0;
    b = {label: c,
         borderColor: window.chartColorsArray[ind],
         data: cats[c],
         fill: false,
         hidden: null,
         yAxisID: 'y-axis',
        };
    console.log(b);
    ds.push(b);
    dels.push(c);
  }
  dels.push('ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸');
  dels.push('ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº');
  dels.push('Ð¦ÐµÐ½Ð°');
  dels.push('Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°');
  ds.push({
        label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸',borderColor: window.chartColors.red, backgroundColor: window.chartColors.reda,
        fill: true, data: dbSells,        
        hidden: true,
        yAxisID: 'y-axis-1'});
  ds.push({
        label: 'ÐžÑÑ‚Ð°Ñ‚Ð¾Ðº',
        borderColor: window.chartColors.blue,
        backgroundColor: window.chartColors.bluea, fill: true,data: dbSum,
        hidden: true,
        yAxisID: 'y-axis-2'
        });
  ds.push({
        label: 'Ð¦ÐµÐ½Ð°',
        steppedLine: 'middle',
        borderColor: window.chartColors.green,
        backgroundColor: window.chartColors.greena,
        fill: true,
        data: dbPricefinal,
        hidden: true,
        yAxisID: 'y-axis-3'});
  ds.push({
        label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°',
        borderColor: window.chartColors.purple,
        backgroundColor: window.chartColors.purplea,
        fill: true,
        data: dbSumSells,
        hidden: true,
        yAxisID: 'y-axis-4'
      });
  ds.push({
    label: 'Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ Ð²ÑÐµ',
    fill: false,
    borderColor: window.chartColors.purple,
    backgroundColor: window.chartColors.purplea,
    data: [],
  });
  const legendLength = ds.length-1;
      
  
  var ByDaysChartData = {
      labels: ticks,
      datasets: ds
    };
  window.myLine = Chart.Line($("#catsGraph"), {  
    data: ByDaysChartData,
    options: {
      responsive: true,      
      maintainAspectRatio: false,
      hoverMode: 'index',
      legend: {
          position: 'right',
          onClick: function (e, legendItem) {
            let ci = window.myLine;            
            let show = window.myLine.getVisibleDatasetCount() - 1;
            if(legendItem.datasetIndex === legendLength) {
              for (let i = 0; i < legendLength; i++) {
                ci.getDatasetMeta(i).hidden = (show == 0) ? false:true;
              }
            } else {
              ci.getDatasetMeta(legendItem.datasetIndex).hidden = ci.isDatasetVisible(legendItem.datasetIndex);
            }
            ci.config.data.datasets[legendLength].label = ( window.myLine.getVisibleDatasetCount() == 1) ? 'ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð²ÑÐµ' : 'Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ Ð²ÑÐµ';
            ci.update();
          }
        },
      stacked: false,
      scales: {
        yAxes: [{
          ticks: {},
          type: 'linear', display: 'auto', ticks: {min: 1,reverse: true}, position: 'right',id: 'y-axis', gridLines: {drawOnChartArea: true},
          },
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.red},
          type: 'linear',display: 'auto', position: 'right',id: 'y-axis-1', gridLines: {drawOnChartArea: true},
          }, 
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.blue},
          type: 'linear',display: 'auto', position: 'left',id: 'y-axis-2', gridLines: {drawOnChartArea: false},
          },
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.green},
          type: 'linear',display: 'auto', position: 'left',id: 'y-axis-3', gridLines: {drawOnChartArea: false},
          },
          {
          ticks: {callback: function(label, index, labels) {return formatMoney(label);},
          fontColor: window.chartColors.purple},
          type: 'linear',display: 'auto', position: 'right',id: 'y-axis-4', gridLines: {drawOnChartArea: false},
          }
          ]
       },
    }
  });
}


function imAlive() {
  setTimeout(function() {$.post('/imalive',{},function(){})}, 2000);
  
}

function initMetas() {
  $.fn.dataTable.ext.errMode = 'none';
  $.fn.dataTable.ext.type.order['mynums-pre'] = function ( d ) {
    d = d.replace(/[ ÑˆÑ‚ÐµÐ´Ñ€ÑƒÐ±]+?/g, "");
    d = d.replace(/,/g, ".");
    d = parseFloat(d);
    return d;
  };  
  $.fn.dataTable.ext.type.order['mydate-pre'] = function ( d ) {
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    var x = new Date(d.replace(pattern,'$3-$2-$1'));
    if (x.getDate() == NaN)
      x = new Date('1970-01-01');
    return x
  };  
}


function buildTrandByWeeksGraph(labels,sells,sellssum,items,brands,sumperitem) {
  ds = [];
  dels = [];
  ds.push({label: 'ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸',
         borderColor: window.chartColors.red,
         backgroundColor: window.chartColors.reda,
         data: sells,
         fill: true,
         hidden: null,
         yAxisID: 'axsells',
        });
  ds.push({label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°',
         borderColor: window.chartColors.blue,
         backgroundColor: window.chartColors.bluea,
         data: sellssum,
         fill: true,
         hidden: null,
         yAxisID: 'axsellssum',
        });
  ds.push({label: 'Ð§Ð¸ÑÐ»Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð¾Ð²',
         borderColor: window.chartColors.orange,
         backgroundColor: window.chartColors.orangea,
         data: items,
         fill: true,
         hidden: null,
         yAxisID: 'axitems',
        });
  ds.push({label: 'Ð§Ð¸ÑÐ»Ð¾ Ð±Ñ€ÐµÐ½Ð´Ð¾Ð²',
         borderColor: window.chartColors.green,
         backgroundColor: window.chartColors.greena,
         data: brands,
         fill: true,
         hidden: null,
         yAxisID: 'axbrands',
        });
  ds.push({label: 'Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ° Ð½Ð° Ñ‚Ð¾Ð²Ð°Ñ€',
         borderColor: window.chartColors.purple,
         backgroundColor: window.chartColors.purplea,
         data: sumperitem,
         fill: true,
         hidden: null,
         yAxisID: 'axrubperitem',
        });
  dels.push('ÐŸÑ€Ð¾Ð´Ð°Ð¶Ð¸');        
  dels.push('Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ°');        
  dels.push('Ð§Ð¸ÑÐ»Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð¾Ð²');        
  dels.push('Ð§Ð¸ÑÐ»Ð¾ Ð±Ñ€ÐµÐ½Ð´Ð¾Ð²');        
  dels.push('Ð’Ñ‹Ñ€ÑƒÑ‡ÐºÐ° Ð½Ð° Ñ‚Ð¾Ð²Ð°Ñ€');        
  var ByDaysChartData = {
      labels: labels,
      datasets: ds
      };
    $("#trandsGraph").siblings(".mp-loader-static").remove();
  window.myLine = Chart.Line($("#trandsGraph"), {  
    data: ByDaysChartData,
    options: {
      responsive: true,      
      maintainAspectRatio: false,
      hoverMode: 'index',
      legend: {position: 'right'},
      stacked: false,
      tooltips: {
        callbacks: {label: function(label, index) {
              return dels[label.datasetIndex] +': ' + formatMoney(label.yLabel);
            }},
            mode: 'index',
            intersect: true,
        },
      scales: {
        yAxes: [
          {ticks: {fontColor: window.chartColors.red}, type: 'linear', display: 'auto', position: 'left',id: 'axsells', gridLines: {drawOnChartArea: true}},
          {ticks: {fontColor: window.chartColors.blue}, type: 'linear', display: 'auto', position: 'right',id: 'axsellssum', gridLines: {drawOnChartArea: true}},
          {ticks: {fontColor: window.chartColors.orange}, type: 'linear', display: 'auto', position: 'left',id: 'axitems', gridLines: {drawOnChartArea: true}},
          {ticks: {fontColor: window.chartColors.green}, type: 'linear', display: 'auto', position: 'left',id: 'axbrands', gridLines: {drawOnChartArea: true}},
          {ticks: {fontColor: window.chartColors.purple}, type: 'linear', display: 'auto', position: 'right',id: 'axrubperitem', gridLines: {drawOnChartArea: true}},
          
        ]
       },
    }
  });
  
}

function initRegionToStore(regions, stores, regionToStore){
    stores.forEach(function(s){
      $("#storeList").append("<a href='#' data-id='"+s.id+"' class='list-group-item list-group-item-action pl-2 pr-2 pt-2 pb-2'>" + s.name + "</a>");
    });
    regions.forEach(function(s){
      $("#regionList").append("<a href='#' data-id='"+s.id+"' class='list-group-item list-group-item-action pl-2 pr-2 pt-2 pb-2'>" + s.name + "</a>");
    });


    [{
        list: 'storeList',
        key: 'storeId',
        map: 'regionId',
        available: 'availableRegions',
        notAvailable: 'notAvailableRegions',
        ref: regions,
    },{
        list: 'regionList',
        key: 'regionId',
        map: 'storeId',
        available: 'availableStores',
        notAvailable: 'notAvailableStores',
        ref: stores,
    }].forEach(function(tab){

        $('#' + tab.list + ' a').click(function(event){
            event.preventDefault();
            $('#' + tab.list + ' a.active').removeClass('active');
            $(this).addClass('active');
            var id = $(this).data('id');

            var ids = regionToStore.filter(function(rs){
                return rs[tab.key] == id;
            }).map(function(rs){
                return rs[tab.map];
            });


            var available = [], notAvailable = [];

            tab.ref.forEach(function(r){
                if(ids.indexOf(r.id) !== -1){
                    available.push(r)
                }else{
                    notAvailable.push(r);
                }
            });

            $('#' + tab.available).empty();
            $('#' + tab.notAvailable).empty();
            available.forEach(function(r){
                $('#' + tab.available).append("<li data-id='"+r.id+"' class='list-group-item pl-2 pr-2 pt-2 pb-2'>" + r.name + "</li>");
            });
            notAvailable.forEach(function(r){
                $('#' + tab.notAvailable).append("<li data-id='"+r.id+"' class='list-group-item pl-2 pr-2 pt-2 pb-2'>" + r.name + "</li>");
            });


        });

    });

    $('#storeList a[data-id="2737"]').click();
    $('#regionList a[data-id="3929"]').click();
}

function initNoteToItem(mp, sku){
    const btn = $("#itemNoteSaveBtn"), textarea = $("#itemNote");

    $(btn).click(() =>{
        save();
    });

    $(textarea).focusout(() =>{
        save();
    });


    function save(){
        $(btn).prop('disabled', true);
        $(btn).text("Ð¡Ð¾Ñ…Ñ€Ð°Ð½ÑÑŽ ...");
        $.post('/api/favorite_items/note', {mp: mp, sku: sku, note: $(textarea).val()}, function (data) {
            $(btn).prop('disabled', false);
            $(btn).text("Ð¡Ð¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ");
        }, 'json');
    }
}

function addItemToGroup(mp, sku){
    $.post('/api/groups/item', {mp: mp, sku: sku, group: $("#fRubricSelect").val(), name: $("#fNewRubric").val()}, function (data) {
        window.location.reload();
    }, 'json');
}

function removeItemToGroup(groupId, id){

    $.ajax({
        url: `/api/groups/${groupId}/item/${id}`,
        type: 'DELETE',
        success: function(data) {
            $(`#gr${id}`).remove();
        }
    });
}
