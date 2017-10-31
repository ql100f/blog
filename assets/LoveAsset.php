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
class LoveAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'mylove/css/common/common.css',
        'mylove/css/index.css',
        'mylove/lib/css/page.css',
    ];
    public $js = [
    		'mylove/lib/js/jquery.js',
    		'mylove/lib/js/jquery.page.js',
    		'mylove/js/common/blogInterface.js',
    		'mylove/js/common/common.js',
    		'mylove/js/common/header.js',
    		'mylove/js/common/sidebar.js',
    ];
    public $depends = [
    ];
}
