<?php
namespace app\models;

use yii;
use yii\db\ActiveRecord;
class Article extends ActiveRecord{
	/**
	 * 处理方法名与model不一致的问题
	 * 目前的规范为：
	 * 分层+项目名缩写_对象名
	 * 基础服务:b
	 * 综合服务:s
	 * webapp服务:a
	 */
	public static function tableName(){
		return "bb_article";
	}
	
	
	public function getCategory(){
		return $this->hasOne(Category::className(),['id'=>'category_id'])->asArray();
	}
	
	public function lists(){
		$sql = <<<SQL
SELECT
	a.id,
	a.title,
	a.content,
	a.image_url,
	a.create_time,
	c.`name` AS categoryName,
	u. NAME AS userName
FROM
	`bb_article` AS a
LEFT JOIN bb_category AS c ON a.category_id = c.id
LEFT JOIN bb_user AS u ON a.user_id = u.id
order by a.id desc
SQL;
		$articles = Yii::$app->db->createCommand($sql)->queryAll();
		return $articles;
	}

}