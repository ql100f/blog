var class_id=localStorage.getItem("classId");
$(function(){
	
	// 显示面包屑
	var class_show=localStorage.getItem("className");
	$(".class_show").text(class_show);
	// 渲染博客列表
	blogList(1);
})

