;(function(){
	
	$(function(){
		
		$("#btn").click(function(){
			var userval=$("#username").val();
		    var pswval=$("#password").val();
		    $.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:userval,password:pswval},function(data){
				  if(data==0){
				  	alert("用户名不存在");
				  }else if(data==2){
				  	alert("用户密码不符合");
				  }else{
				  	window.location.href="../index.html";
				  }
			})
		    
		})
		
	})

})(jQuery);
