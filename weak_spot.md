# mysql

### 新建表
```
create table bb_user(
	`id` int(11) unsigned not null auto_increment primary key comment '主键ID',
	`user_name` varchar(30) not null default '' comment '用户名'
)engine=InnoDB default charset=utf8;
```
### 添加字段
```
alter table `bb_user` add column `password` char(32) not null default '' comment '密码' after userName;
```

### 修改字段名称
```
alter table `bb_user` change `userName` `user_name` varchar(30) not null default '' comment '用户名';
```











# yii2

### yii2查询构造器中的关联用法
```
$query = (new \yii\db\Query())
            ->select('a.id as id,title,create_time,modify_time,username,name')
            ->from('yii_article AS a')
            ->leftJoin('yii_user AS u','u.id = a.user_id')
            ->leftJoin('yii_category AS c','c.id = a.category_id')
            ->where(['c.name'=>'新闻分类'])
            ->limit(4)
            ->orderBy('id DESC')
            ->All();
```
### 关联查询




### 分页





#PHP

get_class(); -> 返回定义它的类（获取当前所在的类名）

get_called_class(); -> 返回调用它的类


isset() -> 存在且不为Null返回true
empty() -> 判断变量是否为空或为0  -> "" "0" 0 false null array() var $var; -> 为true 


匿名函数


















