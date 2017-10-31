<?php
namespace app\controllers;

use yii;
use yii\web\Controller;
use app\models\Article;
use app\models\Category;
use yii\data\Pagination;
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
		$query = Article::find()->where('status=:status',[':status'=>1])->orderBy("id desc");
		$count = $query->count();
		$page = new Pagination(['totalCount'=>$count,'pageSize'=>yii::$app->params['pageSize']]);
		$articles = $query->offset($page->offset)->limit($page->limit)->with("category")->all();
		return $this->render("index",['articles'=>$articles,'page'=>$page]);
	}
	
	
	
	public function actionDetail($id){
		$article = Article::findOne($id);
		return $this->render('detail',['article'=>$article]);
	}
	
	public function actionShow(){
		if(isset($b)){
			echo "is set";
		}else{
			echo "is not set";
		}
	}
}