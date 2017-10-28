<?php
namespace app\controllers;

use yii\web\Controller;

/**
 * 首页
 * 
 * @author mrchen
 */
class HomeController extends Controller{
	
	public $layout = "main";
	/**
	 * 首页
	 */
	public function actionIndex(){
		echo "index";
	}
	
	
	public function actionShow(){
		return $this->render("index");
	}
}