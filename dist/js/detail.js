;(function(){
	$(function(){
		var goodsid = location.search.split("=")[1];
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:goodsid},function(data){
						console.log(data);
				var str = `<div id="midpic">
				<img src="${data[0].goodsListImg}"/>
				<div id="zoom"></div>
				</div>
				<ul id="smallpic">
					<li><img src="${data[0].goodsListImg}"></li>
					
				</ul>
				<div id="bigpic">
					<img src="${data[0].goodsListImg}" alt="" />
				</div>`
					$("#main-left").html(str);
					
				
				
				var str2=`<div class="title">
					<span>[包邮]</span>
					<a href="">${data[0].goodsName}</a>
					<span>${data[0].detail}</span>
				</div>
				<div class="title2">
					<a href="">本品为限时优惠，每人限购5件</a>
					<span>买1件，减￥11元，更多优惠 立即参加 </span>
				</div>
				<div class="price-box">
					<div class="price-tit">
						<span>售价</span>
						<span>￥<em>${data[0].price}</em></span>
						<span><i>${data[0].discount}</i>折</span>
					</div>
					<div class="youhui">
						<span>优惠</span>
						<span>满减</span>
						<span>每满200减20·不封顶</span>
					</div>
					<div class="lingquan">
						<span>买赠</span>
						<span>买此产品送一,数量有限</span>
					</div>
				</div>
				<br /><br />
				<div class="num">
					<p>数量</p>
					<div>
						<input type="button" class="btn1" value="-" />
						<strong class="numshu">1</strong>
						<input type="button" class="btn2" value="+" />
					</div>
				</div>
				<p data-id="${data[0].goodsID}" class="add">加入购物车</p>
				<a class="chakan">查看购物车</a>`;
				$(".main-right").html(str2);
				
				
						$(".chakan").click(function(){
							window.location.href="cart.html";
						})
						
	/******************原生生成放大镜****************************/
	var oZoomBox = document.getElementById("main-left");
			var oMidArea = document.getElementById("midpic");
			var oZoom = document.getElementById("zoom");
			var oBigArea = document.getElementById("bigpic");
			var oBigImg = oBigArea.children[0];
			
			oMidArea.onmouseover = function(){
				oZoom.style.display = "block";
				oBigArea.style.display = "block";
			}
			oMidArea.onmouseout = function(){
				oZoom.style.display = "none";
				oBigArea.style.display = "none";
			}
			oMidArea.onmousemove = function(e){
				var evt = e || event;
				var _left = evt.pageX -oZoomBox.offsetLeft - oZoom.offsetWidth/2;
				var _top = evt.pageY - oZoomBox.offsetTop -oZoom.offsetHeight/2;
				
				
				if(_left<=0){
					_left = 0;
				}
				if(_left >= oMidArea.offsetWidth-oZoom.offsetWidth){
					_left = oMidArea.offsetWidth-oZoom.offsetWidth;
				}
				
				if(_top<=0){
					_top = 0;
				}
				
				if(_top>=oMidArea.offsetHeight-oZoom.offsetHeight){
					_top=oMidArea.offsetHeight-oZoom.offsetHeight;
				}
				oZoom.style.left = _left + "px";
				oZoom.style.top = _top + "px";
				
				//大图移动
				oBigImg.style.left = -oZoom.offsetLeft/oMidArea.offsetWidth*oBigImg.offsetWidth + "px";
				oBigImg.style.top = -oZoom.offsetTop/oMidArea.offsetHeight*oBigImg.offsetHeight + "px";
				
			}
				/*********************加减数量**********************/	
				
				   var num=$(".numshu").text();
					$(".btn1").click(function(){
						num--;
						$(".numshu").text(num);
						if(num<1){
							alert("请添加商品数量");
						}
					});
					
					$(".btn2").click(function(){
						num++;
						$(".numshu").text(num);
					});
					
					/******************添加购物车时，商品数量的累加******************************/
					$(".add").click(function(){
							var goodsID = $(this).attr("data-id");
							console.log(goodsID)
							$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
								console.log(data)
								if(data!=0){
									for(var i=0;i<data.length;i++){
									if(data[i].goodsID==goodsID){
										 num = Number(data[i].number)+ Number(num)
										 console.log(num)
										$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsID,number:num},function(data){
										console.log(data);
										if(data==0){
											alert("添加失败");
										}
										if(data == 1){
											alert("添加成功");
										}
									})
									}else{
										$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsID,number:num},function(data){
										
										if(data==0){
											alert("添加失败");
										}
										if(data == 1){
											alert("添加成功");
										}
									})
									}
								}
								}else{
									console.log(222)
									$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:goodsID,number:num},function(data){
										
										if(data==0){
											alert("添加失败");
										}
										if(data == 1){
											alert("添加成功");
										}
									})
								}
								
									
									
								
							})
				})
	
		});
	})
	
})(jQuery);


