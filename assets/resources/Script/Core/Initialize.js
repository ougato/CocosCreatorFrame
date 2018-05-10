/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 框架入口初始化
 */

let UIBase = require( "UIBase" );
let Global = require( "Global" );
let Config = require( "Config" );
let Game = require( "Game" );

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
        Config.getInstance().init();
    },

    /**
     * 初始化游戏
     */
    initGame() {
        Game.getInstance().init();
    },

    // update (dt) {},
});
