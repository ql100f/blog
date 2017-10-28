<?php
use yii\helpers\Html;
use app\assets\LoveAsset;

LoveAsset::register ($this);
?>
<?php $this->beginPage()?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
<title><?= Html::encode($this->title) ?></title>
<?php 
	$this->registerMetaTag(["charset"=>Yii::$app->charset]);
	$this->registerMetaTag(["http-equiv"=>"X-UA-Compatible","content"=>"IE=Edge"]);
?>
<?php $this->head()?>
</head>
<body>
<?php $this->beginBody()?>
<header>
	<div class="header_main">
		<h1>
			<a href="index.html">千城小镇</a>
		</h1>
		<span class="title"></span><span class="picture"></span>
	</div>
</header>
<nav>
	<a href="javascript:void(0)">首页</a>
	<a href="javascript:void(0)">技术日记</a>
	<a href="javascript:void(0)">情感日记</a>
	<a href="javascript:void(0)">关于我</a>
	<span class="bar"></span>
</nav>
<div class="main">
		<?= $content ?>
</div>
<footer></footer>
<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>