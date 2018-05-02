/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 游戏管理器
 */

let DefView = require( "DefView" );
let DefStore = require( "DefStore" );
let Utils = require( "Utils" );

// 实例化对象
let instance = null;

let Game = cc.Class({

    /**
     * 静态
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if( instance === null ) {
                instance = new Game();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 游戏ID
        this.m_nGameId = 0;
        // 游戏语言
        this.m_strLanguage = "";
        // ...

    },

    /**
     * 初始化游戏需要的模块
     */
    init() {
        // 初始化语言
        this.initLanguage();
        // 初始化SDK
        this.initSDK();
        // 初始化网络
        this.initNet();
        // 初始化资源
        this.initRes();

        // 运行游戏
        this.run();
    },

    /**
     * 初始化语言
     */
    initLanguage() {
        let language = G.StoreManager.get( DefStore.KEY.Language );
        if( Utils.isNull( language ) ) {
            language = "CN"; // I18N文件夹里面的文件名
            G.StoreManager.set( DefStore.KEY.Language, language );
        }
        this.setLanguage( language );
    },

    /**
     * 初始化SDK
     */
    initSDK() {

    },

    /**
     * 初始化网络
     */
    initNet() {

    },

    /**
     * 初始化资源
     */
    initRes() {

    },

    /**
     * 获取语言
     * @returns {string|*}
     */
    getLanguage() {
        return this.m_strLanguage;
    },

    /**
     * 设置语言
     * @param language {string} I18N文件夹里面的文件名
     */
    setLanguage( language ) {
        this.m_strLanguage = language;
    },

    /**
     * 运行
     */
    run() {
        G.ViewManager.replaceScene( DefView.SCENE.Login );
    },

});

module.exports = Game;