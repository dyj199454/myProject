;(function(){
	$(function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
					console.log(data);
					var str="";
					for(var i=0;i<data.length;i++){
						str+=`<table class="orders-table">
						<tbody>
							<tr class="cart_sub_list">
								<td><input type="checkbox" /></td>
								<td>
									<a href="detail.html?id=${data[i].goodsID}"><img src="${data[i].goodsListImg}"/></a>
									<a href="detail.html?id=${data[i].goodsID}"><span style="">${data[i].goodsName}</span></a>
									<span>${data[i].discount}折</span>
								</td>
								<td><span>￥</span>${data[i].price}</td>
								<td>${data[i].number}</td>
								<td data-id="${data[i].goodsID}" id="btn">删除</td>
							</tr>
						</tbody>
						</table>`;
						$("#cart_list").html(str);
						console.log(data[i].number);
					}
					/*************************删除商品*************************/
					$("#btn").unbind("click").click(function(){

						$(this).parent().parent().parent().remove();
						$.getJSON("http://datainfo.duapp.com/shopdata/updatecar.php?callback=?",{userID:$.cookie("username"),goodsID:$(this).attr("data-id"),number:0},function(data){
				           console.log("aaa");
						})

					})
					
					
					
					
					
					/*****************************全选******************************/
					$("#checkAll").click(function(){
						$("td input").prop("checked",$(this).prop("checked"));
					})
					$("td input").click(function(){
						if($("td input:checked").length == $("td input").length){
							$("#checkAll").prop("checked",true);
						}else{
							$("#checkAll").prop("checked",false);
						}
					})
				

			})

	})
})(jQuery);
