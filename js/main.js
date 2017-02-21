$(function(){
	"use strict";	
  
    $('.navigation').singlePageNav({
        currentClass : 'active'
    });


    $('.toggle-menu').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
        return false;
    });


    document.documentElement.scrollTop=1;
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    $(window).scroll(function(){
    	var top=$(".page-section").offset().top;
    	// 设置返回按钮的显示隐藏
   		if(obj.scrollTop>=top){
   			$(".back").fadeIn(500);
   		}else{
   			$(".back").fadeOut(500);
   		}
   		
    })
    //点击按钮，返回顶部
    $(".back").click(function(){
		$(obj).animate({scrollTop:0},500);
	})

	//技能轮播
	$(".box>img").hide().eq(0).show();
	$(".leftBtn").hide();
	$(".rightBtn").hide();
	var num=0;
	function move(type){
		type=type||"right";
		if(type=="right"){
			num++;
			if(num>=$(".box>img").length){
				num=0;
			}
		}else if(type=="left"){
			num--;
			if(num<=-1){
				num=$(".box>img").length-1;
			}
		}
		
		$(".box>img").fadeOut(300).eq(num).fadeIn(300);
		$(".btns>ul>li").removeClass("active").eq(num).addClass("active");
	}

	var t=setInterval(move,2000);

	$(".about-left")
	.mouseover(function(){
		clearInterval(t);
		$(".leftBtn").show();
		$(".rightBtn").show();
	})
	.mouseout(function(){
		t=setInterval(move,2000);
		$(".leftBtn").hide();
		$(".rightBtn").hide();
	})
	$(".leftBtn").click(function(){
		move("left");
	})
	$(".rightBtn").click(function(){
		move("right");
	})
	$(".btns>ul>li").mouseover(function(){
		$(".box>img").stop(true,true);
		var index=$(this).index();
		$(".box>img").fadeOut(300).eq(index).fadeIn(300);
		$(".btns>ul>li").removeClass("active").eq(index).addClass("active");
		num=index;
	})
})




