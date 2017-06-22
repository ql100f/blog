<?php

/* @var $this \yii\web\View */
/* @var $content string */

use yii\helpers\Html;
use app\assets\AppAsset;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta charset="utf-8">
	<title>我的博客</title>
	<?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>
<header><div class="header_main"><h1><a href="index.html">千城小镇</a></h1><span class="title"></span><span class="picture"></span></div></header><nav><a href="javascript:void(0)">首页</a><a href="javascript:void(0)">技术日记</a><a href="javascript:void(0)">情感日记</a><a href="javascript:void(0)">关于我</a><span class="bar"></span></nav>
	<div class="main">
		<aside><div class="search"><input type="text" placeholder="请输入要搜索的内容"><input type="button" id="search_btn"></div><div class="classify" id="personalDetails"><h3>个人档案</h3><ul> </ul></div><div class="classify" id="blogClass"><h3>博客分类</h3><ul></ul></div><div class="show_pic"></div></aside>
		<div class="hot_pic">
			<ul>
				<li><img src="images/hotpt_07.png"></li>
				<li><img src="images/hotpt_08.png"></li>
				<li><img src="images/hotpt_09.png"></li>
			</ul>
			<span class="select"></span>
			<span></span>
			<span></span>
		</div>                                                     
		<section>
		</section>
		<div class="page_main"><div class="page"></div></div>

	</div>
	<footer></footer>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>