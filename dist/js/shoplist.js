;(function(){
	$(function(){
		var classid = location.search.split("=")[1];//搜索类的id；
					$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:classid},function(data){
						//console.log(data);
						var str = "";
						$.each(data,function(index,item){
							str += `<dl>
							<a href="detail.html?id=${item.goodsID}">
							<dt><img src="${item.goodsListImg}"></dt>
							<dd><span>￥</span>${item.price}<span>${item.discount}</span><span>折</span></dd>
							<dd>${item.goodsName}</dd>
							</a>
							</dl>`
						})
						$("#shop_list").html(str);
					});
	})
})(jQuery);
