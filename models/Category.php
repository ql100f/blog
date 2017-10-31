<?php
namespace app\models;

use yii\db\ActiveRecord;
class Category extends ActiveRecord{
	
	public static function tableName(){
		return "bb_category";
	}
	
	public function getArticles(){
		return $this->hasMany(Article::className(), ['category_id'=>'id']);
	}
}