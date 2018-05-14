/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 框架入口初始化
 */

let UIBase = require( "UIBase" );
let Global = require( "Global" );

cc.Class({
    extends: UIBase,

    properties: {

    },

    /**
     * 加载视图前运行
     */
    start() {
        // 初始化
        this.init();
    },

    /**
     * 初始化
     */
    init() {
        this.initGlobal();
        this.initConfig();
        this.initNet();
        this.initGame();
    },

    /**
     * 初始化全局变量
     */
    initGlobal() {
        window.G = Global;
    },

    /**
     * 初始化配置
     */
    initConfig() {
        G.Config.getInstance().init();
    },

    /**
     * 初始化网络
     */
    initNet() {
        G.Net.getInstance().init();
    },

    /**
     * 初始化游戏
     */
    initGame() {
        G.Game.getInstance().init();
    },

    // update (dt) {},
});
