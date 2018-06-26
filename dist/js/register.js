;(function(){
	
	$(function(){
		
		$("#btn").click(function(){
			var userval=$("#username").val();
		    var pswval=$("#password").val();
		    $.get("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:userval,password:pswval},function(data){
				  if(data==0){
				  	alert("用户名重名");
				  }
				  if(data==1){
				  	window.location.href="login.html";
				  }
				  if(data==2){
				  	alert("数据库报错");
				  }
			})
		    
		})
		
	})

})(jQuery);