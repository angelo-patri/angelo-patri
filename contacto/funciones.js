var SF_Opts = {"social":{"facebook":"https:\/\/www.facebook.com\/sfasanfranciscodeasis\/"},"search":"hidden","blur":"","fade":"no","test_mode":"","hide_def":"","mob_nav":"","sidebar_style":"side","sidebar_behaviour":"slide","alt_menu":"","sidebar_pos":"right","width_panel_1":"275","width_panel_2":"250","width_panel_3":"250","width_panel_4":"200","base_color":"#336600","opening_type":"click","sub_type":"yes","sub_opening_type":"hover","label":"metro","label_top":"20px","label_size":"53px","label_vis":"visible","item_padding":"15","bg":"","path":"http:\/\/donbosco-sanluis.edu.pe\/portal\/wp-content\/plugins\/superfly-menu\/img\/","menu":"{\"46\":{\"term_id\":46,\"name\":\"Men\u00fa Movil\",\"loc\":{\"pages\":{\"8\":1,\"10\":1,\"11\":1,\"12\":1,\"23\":1,\"40\":1,\"47\":1,\"58\":1,\"93\":1,\"102\":1,\"138\":1,\"140\":1,\"182\":1,\"217\":1,\"221\":1,\"226\":1},\"cposts\":{\"codeus_news\":1,\"essential_grid\":1,\"codeus_portfolios\":1},\"cats\":{\"1\":1,\"4\":1,\"5\":1,\"6\":1},\"taxes\":{},\"langs\":{},\"wp_pages\":{\"front\":1,\"home\":1,\"archive\":1,\"single\":1,\"forbidden\":1,\"search\":1},\"ids\":[\"\"]},\"isDef\":true}}","togglers":"","subMenuSupport":"","subMenuSelector":"sub-menu, children","activeClassSelector":"current-menu-item","allowedTags":"DIV, NAV, UL, OL, LI, A, P, H1, H2, H3, H4, SPAN","menuData":[],"siteBase":"http:\/\/donbosco-sanluis.edu.pe\/portal","plugin_ver":"4.1.5"};

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

var SFM_template ="<div class=\"\n        sfm-rollback\n        sfm-color1\n        sfm-theme-none        sfm-label-visible        sfm-label-metro                        \"\n        style=\"\">\n    <div class='sfm-navicon-button x sf_label_default '><div class=\"sfm-navicon\"><\/div>    <\/div>\n<\/div>\n<div id=\"sfm-sidebar\" style=\"opacity:0\" class=\"sfm-theme-none sfm-hl-semi sfm-indicators\">\n    <div class=\"sfm-scroll-wrapper\">\n        <div class=\"sfm-scroll\">\n            <div class=\"sfm-sidebar-close\"><\/div>\n            <div class=\"sfm-logo sfm-no-image\">\n                                                                <div class=\"sfm-title\"><\/div>\n            <\/div>\n            <nav class=\"sfm-nav\">\n                <div class=\"sfm-va-middle\">\n                    <ul id=\"sfm-nav\" class=\"menu\"><li id=\"menu-item-244\" class=\"menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-244\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/\">Inicio<\/a><\/li>\n<li id=\"menu-item-250\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item menu-item-250\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/\">Nosotros<\/a>\n<ul class=\"sub-menu\">\n\t<li id=\"menu-item-252\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-252\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/quienes-somos\/\">Qui\u00e9nes Somos<\/a><\/li>\n\t<li id=\"menu-item-251\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-251\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/mision-y-vision\/\">Misi\u00f3n y Visi\u00f3n<\/a><\/li>\n\t<li id=\"menu-item-253\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-253\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/nosotros\/valores\/\">Valores<\/a><\/li>\n<\/ul>\n<\/li>\n<li id=\"menu-item-249\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-249\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/niveles\/\">Niveles<\/a><\/li>\n<li id=\"menu-item-255\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-255\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/proyecto-educativo\/\">Proyecto Educativo<\/a><\/li>\n<li id=\"menu-item-245\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-245\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/admision-2021\/\">Admisi\u00f3n 2021<\/a><\/li>\n<li id=\"menu-item-247\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-247\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/galeria-de-fotos\/\">Galer\u00eda de Fotos<\/a><\/li>\n<li id=\"menu-item-248\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-248\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/galeria-videos\/\">Galer\u00eda V\u00eddeos<\/a><\/li>\n<li id=\"menu-item-254\" class=\"menu-item menu-item-type-post_type menu-item-object-page menu-item-254\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/noticias\/\">Noticias<\/a><\/li>\n<li id=\"menu-item-246\" class=\"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-12 current_page_item menu-item-246\"><a href=\"http:\/\/donbosco-sanluis.edu.pe\/portal\/contacto\/\" aria-current=\"page\">Contacto<\/a><\/li>\n<\/ul>                    <div class=\"widget-area\"><\/div>\n                <\/div>\n            <\/nav>\n            <ul class=\"sfm-social\"><\/ul>\n                    <\/div>\n    <\/div>\n    <div class=\"sfm-sidebar-bg\"><\/div>\n    <div class=\"sfm-view sfm-view-level-custom\">\n        <span class=\"sfm-close\"><\/span>\n            <\/div>\n<\/div>\n<div id=\"sfm-overlay-wrapper\"><div id=\"sfm-overlay\"><\/div><\/div>"

document.write('<style>.noscript { display: none; }</style>');

if(jQuery('body').hasClass('lazy-enabled') && jQuery(window).width() <= 800) {
    jQuery('body').removeClass('lazy-enabled')
}

var map;
function initialize() {
    var styles = [];
       var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
      var myLatlng = new google.maps.LatLng(-12.0805605,-77.0039372);
      var myLatlng2 = new google.maps.LatLng(-12.055698,-77.041618);
  var myOptions = {
    zoom: 17,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
  }
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"IEP. Angelo Petri &#8211; San Luis"
  });

  var marker2 = new google.maps.Marker({
    position: myLatlng2,
    title:"IEP. Angelo Petri &#8211; San Luis"
  });

  marker.setIcon('http://donbosco-sanluis.edu.pe/portal/wp-content/themes/colegio/images/mapt.png');
  marker.setMap(map);

  marker2.setIcon('http://donbosco-sanluis.edu.pe/portal/wp-content/themes/colegio/images/mapt.png');
  marker2.setMap(map);

  var zoomLevel;
  map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initialize);

var wpcf7 = {"apiSettings":{"root":"http:\/\/donbosco-sanluis.edu.pe\/portal\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"Por favor, prueba que no eres un robot."}}};
