;(function(){
  $(function(){
  	$(".nav-top-title").click(function(){
  		if($(".nav-top-content").css("display")=="none"){
    		$(".nav-top-content").show();
    	}else{
    		$(".nav-top-content").hide();
    	}
  	})
    $(".l1").hover(function(){
    	
    	if($(".nav-login").css("display")=="none"){
    		$(".nav-login").show();
    		$(".l1 a").css("background","#fff");
    	}else{
    		$(".nav-login").hide();
    		$(".l1 a").css("background","");
    	}
    	
    })
    
    $(".sell").hover(function(){
    	if($("#mySell").css("display")=="none"){
    		$("#mySell").css("border-top","none").show();
    		$(".sell a").css("background","#fff");
    	}else{
    		$("#mySell").hide();
    		$(".sell a").css("background","");
    	}
    })
    $(".vip").hover(function(){
    	if($("#myVip").css("display")=="none"){
    		$("#myVip").css("border-top","none").show();
    		$(".vip a").css("background","#fff");
    	}else{
    		$("#myVip").hide();
    		$(".vip a").css("background","");
    	}
    })
    $(".server").hover(function(){
    	if($("#mySv").css("display")=="none"){
    		$("#mySv").css("border-top","none").show();
    		$(".server a").css("background","#fff");
    	}else{
    		$("#mySv").hide();
    		$(".server a").css("background","");
    	}
    })
    $(".gd").hover(function(){
    	if($("#myMore").css("display")=="none"){
    		$("#myMore").show();
    		$(".gd a").css("background","#fff");
    	}else{
    		$("#myMore").hide();
    		$(".gd a").css("background","");
    	}
    })
    
      var num = 0;
      $(".banner_pic li").eq(num).fadeIn();
			var timer = setInterval(function(){
				 num++;
				if(num==$(".banner_pic li").length){
					num = 0;
				  }
				$(".banner_pic li").eq(num).fadeIn().siblings().fadeOut();
				
				$(".nav li").eq(num).addClass("select").siblings().removeClass("select");
				
			},2000)
    /****************楼梯的js***********************/
   
   $(function(){
				var flag=true;//避免滚动条事件影响点击事件，声明的一个变量，所以在有滚动条事件的地方为true，而在点击事件时为false。
				//要想让图片切换就必须用动画改变高度
				$(window).scroll(function(){
					if(flag){
						var scrollTop=$(this).scrollTop();
						if(scrollTop > 300){
							$("#floorNav").fadeIn();
						}else{
							$("#floorNav").fadeOut();
						}
						$("#content li").each(function(){
							if(scrollTop >= $(this).offset().top - $(this).outerHeight()/2){//进行事件发生的判断
								var index = $(this).index();
								$("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
							}
						})
				  	}
				})
				$("#floorNav li").click(function(){
					flag=false;
					var index=$(this).index();//获取元素所代表的索引。
					console.log(index);
					$(this).addClass("hover").siblings().removeClass("hover");
					$("html,body").animate({"scrollTop":$("#content li").eq(index).offset().top},500,function(){
						flag = true;
					})
				});
				
			})
   
   
})
})(jQuery);
	
