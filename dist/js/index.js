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
    	}else{
    		$(".nav-login").hide();
    	}
    	
    })
    
    $(".sell").hover(function(){
    	if($("#mySell").css("display")=="none"){
    		$("#mySell").show();
    	}else{
    		$("#mySell").hide();
    	}
    })
})
})(jQuery);
	
