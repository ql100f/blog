if(!$("aside")[0]){
	$(".main").prepend('<aside><div class="search"><input type="text" placeholder="请输入要搜索的内容"><input type="button" id="search_btn"></div><div class="classify" id="personalDetails"><h3>个人档案</h3><ul> </ul></div><div class="classify" id="blogClass"><h3>博客分类</h3><ul></ul></div><div class="show_pic"></div></aside>');
}
