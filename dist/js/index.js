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
})
})(jQuery);
	
