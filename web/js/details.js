$(function(){
	var urlContent=window.location.search.substr(1);
	var reg=/^[^=]*(?==)/;
	var reg2=/=[\S]+/;
	var thisIndex=urlContent.match(reg2).index;
	var	result=urlContent.slice(thisIndex+1);
	showDetail(result);
	$("body").on("click",".related_articles p a",function(){
		var this_id=$(this).attr("id");
		// showDetail(this_id)
		window.open(URL+"details.html?id="+this_id,"_self");
	})
	// $("body").on("click",".WeChat",function(){
	// 	var _title = $(".detail h3").html();
	// 	var _content=$(".content").text().slice(0,60)+"...";
	// 	var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
	// 	    _shareUrl += 'url=' + encodeURIComponent(document.location);   //参数url设置分享的内容链接|默认当前页location
	// 	    _shareUrl += '&showcount=' + 0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
	// 	    _shareUrl += '&desc=' + encodeURIComponent('千城小镇的技术博客');    //参数desc设置分享的描述，可选参数
	// 	    _shareUrl += '&summary=' + encodeURIComponent(_content);    //参数summary设置分享摘要，可选参数
	// 	    _shareUrl += '&title=' + encodeURIComponent(_title);    //参数title设置分享标题，可选参数
	// 	    // _shareUrl += '&site=' + encodeURIComponent("来源");   //参数site设置分享来源，可选参数
	// 	    _shareUrl += '&pics=' + encodeURIComponent("http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE&hs=0&pn=0&spn=0&di=5650758410&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3828611558%2C1523969192&os=4293685362%2C1723209123&simid=4153150379%2C659937565&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc8177f3e6709c93d72318d2d993df8dcd000542c.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3F8l9b9mlb8c9cnand09b_z%26e3Bip4s&gsm=0");   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
	//     window.open(_shareUrl,'_blank');
	// })
	$("body").on("click",".microblog",function(){
		var _title = $(".detail h3").html();
		var _shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey ，必选参数
    		_shareUrl += '&url='+ encodeURIComponent(document.location);     //参数url设置分享的内容链接|默认当前页location，可选参数
    		_shareUrl += '&title=' + encodeURIComponent(_title);    //参数title设置分享的标题|默认当前页标题，可选参数
		    // _shareUrl += '&source=' + encodeURIComponent(_source||'');
		    // _shareUrl += '&sourceUrl=' + encodeURIComponent(_sourceUrl||'');
		    // _shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
		    // _shareUrl += '&pic=' + encodeURIComponent(_pic||'');  //参数pic设置图片链接|默认为空，可选参数
     window.open(_shareUrl,'_blank');    
	})
	$("body").on("click",".space",function(){
		var _title = $(".detail h3").html();
		var _content=$(".content").text().slice(0,60)+"...";
		var _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
		    _shareUrl += 'url=' + encodeURIComponent(document.location);   //参数url设置分享的内容链接|默认当前页location
		    _shareUrl += '&showcount=' + 0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
		    _shareUrl += '&desc=' + encodeURIComponent('千城小镇的技术博客');    //参数desc设置分享的描述，可选参数
		    _shareUrl += '&summary=' + encodeURIComponent(_content);    //参数summary设置分享摘要，可选参数
		    _shareUrl += '&title=' + encodeURIComponent(_title);    //参数title设置分享标题，可选参数
		    // _shareUrl += '&site=' + encodeURIComponent("来源");   //参数site设置分享来源，可选参数
		    _shareUrl += '&pics=' + encodeURIComponent("http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE&hs=0&pn=0&spn=0&di=5650758410&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=3828611558%2C1523969192&os=4293685362%2C1723209123&simid=4153150379%2C659937565&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fc8177f3e6709c93d72318d2d993df8dcd000542c.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3F8l9b9mlb8c9cnand09b_z%26e3Bip4s&gsm=0");   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
	    window.open(_shareUrl,'_blank');
	})
	$("body").on("click",".people",function(){
		var _title = $(".detail h3").html();
		var _content=$(".content").text().slice(0,60)+"...";
		var _shareUrl = 'http://share.renren.com/share/buttonshare.do?';
    		_shareUrl += 'link=' + encodeURIComponent(location.href);   //分享的链接
    		_shareUrl += '&title=' + encodeURIComponent(_title);     //分享的标题
    	window.open(_shareUrl,'_blank');
	})
	
})
// 显示博客详情
function showDetail(blogId){
	$.ajax({
		url:blogDetailsUrl,
		type:"get",
		data:{blogId:blogId},
		dataType:"json",
		success:function(result){
			if(result.rlt){
				var data = result.data;
				$(".class_show").text(data.title);
				$("body").on("click",".class_show",function(){
					window.open(URL+"details.html?id="+data.id,"_self")
				})
				var str = '<h3>'+data.title+'</h3><div class="show_tag"><span class="author">作者：'+data.author+'</span><span class="time">'+data.time+'</span><span class="Categories">分类 [<a href="'+URL+'list.html?classId='+data.CategoriesId+'" id="'+data.CategoriesId+'">'+data.Categories+'</a>]</span><span class="browse">浏览：（'+data.browse+'）</span></div><div class="content">'+data.content+'</div><div class="related_articles"><div class="title"><h4>相关文章</h4><div class="share"><span>分享到：</span><div class="bdsharebuttonbox" data-tag="share_1"><a class="bds_weixin" data-cmd="weixin"></a></div><a href="javascript:;" class="microblog"></a><a href="javascript:;" class="space"></a><a href="javascript:;" class="people"></a></div></div><p><a href="javascript:void(0)" title="'+data.previous.title+'" id="'+data.previous.id+'">上一篇：'+data.previous.title+'</a></p><p><a href="javascript:void(0)" title="'+data.next.title+'" id="'+data.next.id+'">下一篇：'+data.next.title+'</a></p></div>';
				$(".detail").empty().html(str);
			}else{
				lertBox(result.msg);
			}
		},
		error:function(result){
			alertBox(result.msg);
		}
	})
}