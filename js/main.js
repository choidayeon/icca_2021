$(function(){
			var menu = $(".header").offset().top+100;

			$(window).on("scroll",function(){
				var scrollY = window.pageYOffset;
				if(scrollY>menu){
					$("nav").addClass("head_bar");
					$("nav").css("box-shadow","2px 2px 5px rgba(0,0,0,0.1)");
				}else{
					$("nav").removeClass("head_bar");
					$("nav").css("box-shadow","none");
				}
			});

			$(".bwrap").hover(function(){
				$(this).find(".besttext").stop().slideUp();
			},function(){
				$(".besttext").stop().slideDown();
			});

			// $(".pnone").mouseover(function(){
			// 	$(".pnone").prepend("div").css("padding","0")
			// }).mouseout(function(){
			// 	$(".pnone").prepend("div").css("padding","4px")
			// });

			$(".subm").hover(function(){
				$(".subm span").addClass('active');
				$(".subm h2").css({"background":"#000","color":"#fff"});
			},function(){
				$(".subm span").removeClass('active')
				$(".subm h2").css("background","none");
			});

			$(".subc").hover(function(){
				$(".subc span").addClass('active');
				$(".subc h2").css({"background":"#000","color":"#fff"});
			},function(){
				$(".subc span").removeClass('active')
				$(".subc h2").css("background","none");
			});

			$(".subm2").hover(function(){
				$(".subm2 span").addClass('active');
				$(".subm2 h2").css({"background":"#000","color":"#fff"});
			},function(){
				$(".subm2 span").removeClass('active')
				$(".subm2 h2").css("background","none");
			});

			$(window).width("580px",function(){
				$(".orange h3").addClass("m-font");
			});
		});