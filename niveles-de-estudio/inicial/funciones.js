window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11.2.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/11.2.0\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/donbosco-sanluis.edu.pe\/portal\/bootstrap\/js\/wp-emoji-release.min.js?ver=5.1.9"}};
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])?!1:!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55358,56760,9792,65039],[55358,56760,8203,9792,65039])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
var SFM_is_mobile = (function () {
    var n = navigator.userAgent;
    var reg = new RegExp('Android\s([0-9\.]*)')
    var match = n.toLowerCase().match(reg);
    var android =  match ? parseFloat(match[1]) : false;
    if (android && android < 3.6) return

    return n.match(/Android|BlackBerry|IEMobile|iPhone|iPad|iPod|Opera Mini/i)
})();

var SFM_skew_disabled = (function($){
    var window_width = $(window).width();
    var sfm_width = 275;
    if(sfm_width * 2 >= window_width){
        return true;
    }
    return false;
})(jQuery);

(function(){
    var mob_bar = '';
    var pos = 'right';
    var iconbar = '';
    var classes = SFM_is_mobile ? (mob_bar ? 'sfm-mobile sfm-mob-nav' : 'sfm-mobile'): 'sfm-no-mobile';
    classes += ' sfm-pos-' + pos;
    classes += iconbar ? ' sfm-bar' : '';
    classes += SFM_skew_disabled ? ' sfm-skew-disabled' : '';
    document.getElementsByTagName('html')[0].className = document.getElementsByTagName('html')[0].className + ' ' + classes;
})()

(function (){
    var insertListener = function(event){
        if (event.animationName == "bodyArrived") {
            afterContentArrived();
        }
    }
    var timer, _timer;
    var transition = '';

    if (document.addEventListener && false) {
        document.addEventListener("animationstart", insertListener, false); // standard + firefox
        document.addEventListener("MSAnimationStart", insertListener, false); // IE
        document.addEventListener("webkitAnimationStart", insertListener, false); // Chrome + Safari
    } else {
        timer = setInterval(function(){
            if (document.body) { //
                clearInterval(timer);
                afterContentArrived();
            }
        },14);
    }

    function afterContentArrived() {
        clearTimeout(_timer);

        if (window.jQuery) {
            jQuery('body').fadeIn();
            jQuery(document).trigger('sfm_doc_body_arrived');
            window.SFM_EVENT_DISPATCHED = true;
        } else {
            _timer = setTimeout(function(){
                afterContentArrived();
            },14);
        }
    }
})()
var SFM_template ="<div class=\"\n        sfm-rollback\n        sfm-color1\n        sfm-theme-none        sfm-label-visible        sfm-label-metro                        \"\n        style=\"\">\n    <div class='sfm-navicon-button x sf_label_default '><div class=\"sfm-navicon\"><\/div>    <\/div>\n<\/div>\n<div id=\"sfm-sidebar\" style=\"opacity:0\" class=\"sfm-theme-none sfm-hl-semi sfm-indicators\">\n    <div class=\"sfm-scroll-wrapper\">\n        <div class=\"sfm-scroll\">\n            <div class=\"sfm-sidebar-close\"><\/div>\n            <div class=\"sfm-logo sfm-no-image\">\n                                                                <div class=\"sfm-title\"><\/div>\n            <\/div>\n            <nav class=\"sfm-nav\">\n                <div class=\"sfm-va-middle\">\n                    <ul id=\"sfm-nav\" class=\"menu\"><li id=\"menu-item-244\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-244\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/\">Inicio<\/a><\/li>\n<li id=\"menu-item-250\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item menu-item-250\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/\">Nosotros<\/a>\n<ul class=\"sub-menu\">\n\t<li id=\"menu-item-252\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-252\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/quienes-somos\/\">Qui\u00e9nes Somos<\/a><\/li>\n\t<li id=\"menu-item-251\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-251\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/mision-y-vision\/\">Misi\u00f3n y Visi\u00f3n<\/a><\/li>\n\t<li id=\"menu-item-253\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-253\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/valores\/\">Valores<\/a><\/li>\n<\/ul>\n<\/li>\n<li id=\"menu-item-249\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-249\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/niveles\/\">Niveles<\/a><\/li>\n<li id=\"menu-item-255\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-255\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/proyecto-educativo\/\">Proyecto Educativo<\/a><\/li>\n<li id=\"menu-item-245\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-245\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/admision-2021\/\">Admisi\u00f3n 2021<\/a><\/li>\n<li id=\"menu-item-247\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-247\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/galeria-de-fotos\/\">Galer\u00eda de Fotos<\/a><\/li>\n<li id=\"menu-item-248\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-248\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/galeria-videos\/\">Galer\u00eda V\u00eddeos<\/a><\/li>\n<li id=\"menu-item-254\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-254\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/noticias\/\">Noticias<\/a><\/li>\n<li id=\"menu-item-246\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-246\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/contacto\/\">Contacto<\/a><\/li>\n<\/ul>                    <div class=\"widget-area\"><\/div>\n                <\/div>\n            <\/nav>\n            <ul class=\"sfm-social\"><\/ul>\n                    <\/div>\n    <\/div>\n    <div class=\"sfm-sidebar-bg\"><\/div>\n    <div class=\"sfm-view sfm-view-level-custom\">\n        <span class=\"sfm-close\"><\/span>\n            <\/div>\n<\/div>\n<div id=\"sfm-overlay-wrapper\"><div id=\"sfm-overlay\"><\/div><\/div>"
	
document.write('<style>.noscript { display: none; }</style>');

if(jQuery('body').hasClass('lazy-enabled') && jQuery(window).width() <= 800) {
    jQuery('body').removeClass('lazy-enabled')
}

var wpcf7 = {"apiSettings":{"root":"http:\/\/donbosco-sanluis.edu.pe\/portal\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"Por favor, prueba que no eres un robot."}}};
