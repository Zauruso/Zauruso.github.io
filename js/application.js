$(function(){$('[data-toggle="tooltip"]').tooltip(),void 0!==$.fn.slimScroll&&$(".sidebar .slimContent").slimScroll({height:"auto",color:"rgba(0,0,0,0.2)",size:"3px"}),$(".geopattern").each(function(){$(this).geopattern($(this).data("pattern-id"))});$("#nav-main").okayNav({swipe_enabled:!1});$(".donate-box").on("click",".pay_item",function(){var t=$(this).attr("data-id"),a=$(this).attr("data-src")?$(this).attr("data-src"):"assets/images/donate/"+t+"img.png",e="alipay"==t?"支付宝":"微信";$(this).addClass("checked").siblings(".pay_item").removeClass("checked"),$(".donate-payimg img").attr("src",a),$("#donate-pay_txt").text(e)}),$("[data-stick-bottom]").keepInView({fixed:!1,parentClass:"has-sticky",customClass:"sticky",trigger:"bottom",zindex:42,edgeOffset:0}),$("[data-stick-top]").keepInView({fixed:!0,parentClass:"has-sticky",customClass:"sticky",trigger:"top",zindex:42,edgeOffset:0})});