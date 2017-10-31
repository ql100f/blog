<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;

$this->title = "首页";

$this->registerCssFile("mylove/css/index.css");
?>
<aside>
	<div class="search">
		<input type="text" placeholder="请输入要搜索的内容"><input type="button" id="search_btn">
	</div>
	<div class="classify" id="personalDetails">
		<h3>个人档案</h3>
		<ul>
			<li><i>◆</i><p>姓名：千城小镇</p></li>
			<li><i>◆</i><p>性别：男</p></li>
			<li><i>◆</i><p>出生日期：1988-09-02</p></li>
			<li><i>◆</i><p>居住地：北京</p></li>
			<li><i>◆</i><p>爱好：篮球</p></li>
		</ul>
	</div>
	<div class="classify" id="blogClass">
		<h3>博客分类</h3>
		<ul>
			<li><i>◆</i><a href="javascript:void(0)" id="11"><span class="class_name">程序人生</span><span class="class_number">（452633）</span></a></li>
			<li><i>◆</i><a href="javascript:void(0)" id="12"><span class="class_name">程序人生</span><span class="class_number">（452633）</span></a></li>
			<li><i>◆</i><a href="javascript:void(0)" id="13"><span class="class_name">慢生活</span><span class="class_number">（452633）</span></a></li>
			<li><i>◆</i><a href="javascript:void(0)" id="14"><span class="class_name">程序人生</span><span class="class_number">（452633）</span></a></li>
		</ul>
	</div>
	<div class="show_pic"></div>
</aside>
<div class="hot_pic">
	<ul>
		<li><img src="mylove/images/hotpt_07.png"></li>
		<li><img src="mylove/images/hotpt_08.png"></li>
		<li><img src="mylove/images/hotpt_09.png"></li>
	</ul>
	<span class="select"></span> <span></span> <span></span>
</div>
<section>
	<?php foreach($articles as $art) :?>
		<?php if(empty($art['image_url'])):?>
			<article><h2><a href=" title="<?php $art->title?>" target="_blank"><?= $art->id ?> - <?= $art->title ?></a></h2><p><?= Html::encode($art->content); ?></p><div class="tag"><span>作者：千城小镇</span><span>2017-04-07 10:36</span><span>分类 [<a target="_blank" id="11" href="http://www.blog.qc/list.html?classId=11"><?= $art->category['name'] ?></a>]</span><span class="browse">浏览（2533）</span></div></article>
		<?php else:?>
			<article id="02"><a href="" target="_blank"><img src="<?= $art->image_url ?>"></a><div class="right_main"><h2><a href="" title="<?php echo $art->title;?>"><?= $art->id ?> - <?= $art->title ?></a></h2><p><?= Html::encode($art->content); ?></p></div><div class="tag"><span>作者：千城小镇</span><span>2017-04-07 10:36</span><span>分类 [<a target="_blank" id="11" href=""><?= $art->category['name'] ?></a>]</span><span class="browse">浏览（2533）</span></div></article>
		<?php endif;?>
	<?php endforeach;?>	
</section>

<div class="page_main">
	<?php 
		echo LinkPager::widget([
			'options'=> ['class' => 'page'],
			'pagination' => $page,
			'prevPageLabel' => '上一页',
			'nextPageLabel' => '下一页',
		]);
	?>
</div>
<?php 
$this->registerJsFile('/mylove/js/index.js',['depends'=>['app\assets\LoveAsset']]);
?>