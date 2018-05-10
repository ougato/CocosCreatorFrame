/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-05
 */

/**
 * 例子
 */

let UIBase = require( "UIBase" );
let

cc.Class({
    extends: UIBase,

    properties: {
        pTitle: { default: null, type: cc.Label, tooltip: '标题' },
        pContent: { default: null, type: cc.Label, tooltip: '内容' },
    },

    // LIFE-CYCLE CALLBACKS:

    start() {

    },

    /**
     * 加载
     */
    onLoad() {
        this.initData();
        this.initView();
        this.register();
    },

    /**
     * 初始化数据
     */
    initData() {

    },

    /**
     * 初始化视图
     */
    initView() {

    },

    /**
     * 注册
     */
    register() {

    },

    // update (dt) {},
});
