// build time:Fri Apr 20 2018 23:25:45 GMT+0800 (CST)
$(document).ready(function(){$("img").each(function(){if($(this).parent().hasClass("fancybox"))return;if($(this).hasClass("nofancybox"))return;var a=this.alt;if(a)$(this).after('<span class="caption">'+a+"</span>");$(this).wrap('<a href="'+($(this).attr("data-src")==null?this.src:$(this).attr("data-src"))+'" title="'+a+'" class="fancybox"></a>')});$(this).find(".fancybox").each(function(){$(this).attr("rel","article")})});$(document).ready(function(){$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr("rel","gallery").fancybox({helpers:{title:{type:"inside"}}})});
//rebuild by neat 