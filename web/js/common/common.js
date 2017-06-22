var URL="http://www.blog.qc/";
$(function(){

	//导航效果
	$("nav a").on("mouseover click",function(){
		var self_index = $(this).index();
		$(".bar").animate({left:self_index*145+"px"},100)
	})

	// 显示个人资料
	$.ajax({
		url:personalDetailsUrl,
		type:"get",
		dataType:"json",
		success:function(result){
			if(result.rlt){
				var str="<li><i>◆</i><p>姓名："+result.data.name+"</p></li><li><i>◆</i><p>性别："+result.data.sex+"</p></li><li><i>◆</i><p>出生日期："+result.data.time+"</p></li><li><i>◆</i><p>居住地："+result.data.address+"</p></li><li><i>◆</i><p>爱好："+result.data.hobby+"</p></li>";
				$("#personalDetails ul").empty().html(str);
			}else{
				alertBox(result.msg);
			}
		},
		error:function(result){
			alertBox(result.msg);
		}
	})

	// 显示博客分类
	$.ajax({
		url:blogClassUrl,
		type:"get",
		dataType:"json",
		success:function(result){
			if(result.rlt){
				var str="";
				$.each(result.data,function(i,item){
					str += '<li><i>◆</i><a href="javascript:void(0)" id="'+item.id+'"><span class="class_name">'+item.name+'</span><span class="class_number">（'+item.number+'）</span></a></li>';
				})
				$("#blogClass ul").empty().html(str);
			}else{
				alertBox(result.msg);
			}
		},
		error:function(result){
			alertBox(result.msg);
		}
	})

	// 点击博客分类
	$("#blogClass").on("click","a",function(){
		var class_name = $(this).children(".class_name").text();
		var class_id = $(this).attr("id");
		localStorage.setItem("className",class_name);
		localStorage.setItem("classId",class_id);
		window.open("list.html?classId="+class_id);
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

// 获得博客列表
function blogList(page){
	// location.search是从当前URL的?号开始的字符串 
	var urlContent=window.location.search.substr(1);
	var reg=/^[^=]*(?==)/;
	if(!urlContent.match(reg)){
		data={page:page};
	}else if(urlContent.match(reg)=="text"){
		var reg2=/=[\S]+/;
		var thisIndex=urlContent.match(reg2).index;
		var	result=urlContent.slice(thisIndex+1);
		data={page:page,text:result};
		$(".class_show").text("搜索结果");
	}else{
		var reg2=/=[\S]+/;
		var thisIndex=urlContent.match(reg2).index;
		var	result=urlContent.slice(thisIndex+1);
		data={page:page,classShow:result};
	}
	$.ajax({
		url:blogListUrl,
		type:"get",
		dataType:"json",
		data:data,
		success:function(result){
			if(result.rlt){
				var str="";
				$.each(result.data,function(i,item){
					if(!item.picture){
						str += '<article id="'+item.id+'"><h2><a href="'+URL+'details.html?id='+item.id+'" title="'+item.title+'" target="_blank">'+item.title+'</a></h2><p>'+item.content+'</p><div class="tag"><span>作者：'+item.author+'</span><span>'+item.time+'</span><span>分类 [<a target="_blank" id="'+item.CategoriesId+'" href="'+URL+'list.html?classId='+item.CategoriesId+'">'+item.Categories+'</a>]</span><span class="browse">浏览（'+item.browse+'）</span></div></article>';
					}else{
						str += '<article id="'+item.id+'"><a href="'+URL+'details.html?id='+item.id+'" target="_blank"><img src="'+item.picture+'"></a><div class="right_main"><h2><a href="'+URL+'details.html?id='+item.id+'" title="'+item.title+'">'+item.title+'</a></h2><p>'+item.content+'</p></div><div class="tag"><span>作者：'+item.author+'</span><span>'+item.time+'</span><span>分类 [<a target="_blank" id="'+item.CategoriesId+'" href="'+URL+'list.html?classId='+item.CategoriesId+'">'+item.Categories+'</a>]</span><span class="browse">浏览（'+item.browse+'）</span></div></article>';

					}
				})
				$(".main section").empty().html(str);
				// 页码 
				$(".page").remove();
    			$(".page_main").append('<div class="page"></div>');
				$(".page").createPage({  
			        pageCount:result.totalpage,  
			        current:page,  
			        backFn:function(pageIndex){  
			       			blogList(pageIndex);
			        }  
			    });  
			}else{
				alertBox(result.msg);
			}
		},
		error:function(result){
			alertBox(result.msg);
		}
	})  
}

// 提示框
function alertBox(text){
	if(!$("#box")[0]){
		$("body").append('<div id="box" class="box">'+text+'</div>');
	}
	setTimeout(function(){
		$("#box").remove();
	},1500)
}