<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/common/common.css',
        'css/index.css',
        'lib/css/page.css',
    ];
    public $js = [
    		'lib/js/jquery.js',
    		'lib/js/jquery.page.js',
    		'js/common/blogInterface.js',
    		'js/common/common.js',
    		'js/common/header.js',
    		'js/common/sidebar.js',
    		'js/index.js',
    ];
    public $depends = [
    ];
}
