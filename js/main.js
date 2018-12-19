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

			$(".subdiv h2").hover(function(){
				var i = $(this).index()
				$(".subdiv h2>span").eq(i).addClass('active');
			},function(){
				$(".subdiv h2>span").removeClass('active')
			});

			$(window).width("580px",function(){
				$(".orange h3").addClass("m-font");
			});
		});