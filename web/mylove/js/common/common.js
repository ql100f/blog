var URL="http://www.blog.qc/";
$(function(){

	//导航效果
	$("nav a").on("mouseover click",function(){
		var self_index = $(this).index();
		$(".bar").animate({left:self_index*145+"px"},100)
	})

	// 点击搜索功能
    $(".search").on("click","#search_btn",function(){
    	var inputText=$.trim($(this).siblings().val());
    	if(!inputText){
    		alertBox("请输入搜索内容");
    	}else{
    		window.open(URL+"list.html?text="+inputText);
    	}
    })

    // 点击博客列表进入详情页
    // $("body").on("click","article",function(){
    // 	var this_id=$(this).attr("id");
    // 	window.open(URL+"details.html?id="+this_id);
    // })
})
// 提示框
function alertBox(text){
	if(!$("#box")[0]){
		$("body").append('<div id="box" class="box">'+text+'</div>');
	}
	setTimeout(function(){
		$("#box").remove();
	},1500)
}