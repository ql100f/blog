<?php
use yii\helpers\Html; 
use yii\web\View; 

$this->registerCssFile("/mylove/css/detail.css");
$this->title = "wkwkw";
?>
<div class="tip"><p><a href="index.html">首页</a><span>></span><a href="" class="class_show">文章</a></p></div>                                               
<div class="detail">
	<h3>这里是标题</h3>
	<div class="show_tag">
		<span class="author">作者：千场面</span>
		<span class="time">2017-8-8</span><span class="Categories">分类 [<a href="/" id="/">JAVA</a>]</span><span class="browse">浏览：（200）</span>
	</div>
	<div class="content">这里是内容</div>
	<div class="related_articles">
		<div class="title">
			<h4>相关文章</h4>
			<div class="share">
				<span>分享到：</span>
				<div class="bdsharebuttonbox" data-tag="share_1">
					<a class="bds_weixin" data-cmd="weixin"></a>
				</div>
				<a href="javascript:;" class="microblog"></a>
				<a href="javascript:;" class="space"></a>
				<a href="javascript:;" class="people"></a>
			</div>
		</div>
		<p><a href="javascript:void(0)" title="这是一个美丽的传说" id="1">上一篇：这是一个美丽的传说</a></p>
		<p><a href="javascript:void(0)" title="这是一个美丽的传说" id="2">下一篇：这个传说中有你有他</a></p></div>
</div>
<?php 
$js = <<<JS
		window._bd_share_config = {
			common : {
				bdText : "自定义题目",	
				bdDesc : "自定义描述",	
				bdUrl : 'document.location.href', 	
				bdPic : '自定义分享图片'
			},
			share : [{
				"bdSize" : 16
			}],
			slide : [{	   
				bdImg : 0,
				bdPos : "right",
				bdTop : 100
			}],
			image : [{
				viewType : 'list',
				viewPos : 'top',
				viewColor : 'black',
				viewSize : '16',
				viewList : ['weixin']
			}],
			selectShare : [{
				"bdselectMiniList" : ['weixin']
			}]
		}
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
JS;
$this->registerJs($js);
$this->registerJsFile("/mylove/js/detail.js",['depends'=>['app\assets\LoveAsset']]);

?>