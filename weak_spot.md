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