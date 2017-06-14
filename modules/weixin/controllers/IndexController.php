<?php
namespace app\modules\weixin\controllers;

use yii\web\Controller;

class IndexController extends Controller{
	
	public function actionIndex(){
		echo "微信模块的Index控制器的index方法";
	}
	
	
	public function actionShow(){
		$name = "微信";
		$time = time();
		return $this->render('index',['name'=>$name,'time'=>$time]);
	}
	
}