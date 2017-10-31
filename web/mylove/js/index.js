$(function(){

	//焦点图幻灯
	var t = setInterval("slideProjector(2,795)",3000);
	$(".hot_pic").mouseover(function(){
		clearInterval(t);
	})
	$(".hot_pic").mouseout(function(){
		t = setInterval("slideProjector(2,795)",3000);
	})
	$(".hot_pic span").on("mouseover",function(){
		var self_index = $(this).index()-1;
		$(".hot_pic ul").css("left",-self_index*795+"px");
		$(".hot_pic span").eq(self_index).addClass("select").siblings().removeClass("select");

	})
})

// 焦点图幻灯
var i = 0;
function slideProjector(length,width){//length图片数量减1，width为一张图片宽度
	if(i<length){
		i++;
		var left = -width*i;
	}else{
		i = 0;
		var left = -width*i;
	}
	$(".hot_pic ul").css("left",left+"px");
	$(".hot_pic span").eq(i).addClass("select").siblings().removeClass("select");
}

