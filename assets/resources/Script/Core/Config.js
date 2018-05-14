/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

let DefView = require( "DefView" );
let DefStore = require( "DefStore" );

// 实例化对象
let instance = null;

let Config = cc.Class({

    /**
     * 静态
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if (instance === null) {
                instance = new Config();
            }
            return instance;
        },

        /**
         * 销毁实例
         */
        destroy() {
            if( !G.Utils.isNull( instance ) ){
                instance.destroy();
            }
        },

    },

    /**
     * 构造
     */
    ctor() {
        // 语言
        this.language = "ZH";
        // 是否调试
        this.isDebug = false;
        // 是否热更新
        this.isHotUpdate = false;
        // 版本
        this.version = "0.0.0.0";
        // 默认场景
        this.defaultScene = "Login";
        // 国际语言
        this.i18n = null;
    },

    /**
     * 销毁
     */
    destroy() {
        // 语言
        this.language = "";
        // 是否调试
        this.isDebug = false;
        // 是否热更新
        this.isHotUpdate = false;
        // 版本
        this.version = "";
        // 默认场景
        this.defaultScene = "";
        // 国际语言
        this.i18n = null;
    },

    /**
     * 初始化游戏需要的模块
     */
    init() {
        this.initLanguage();
        this.initVersion();
        this.initI18N();
    },

    /**
     * 初始化语言
     */
    initLanguage() {
        let language = G.StoreManager.get( DefStore.KEY.Language );
        if( G.Utils.isNull( language ) ) {
            language =  this.getLanguage(); // I18N文件夹里面的文件名（默认）
            G.StoreManager.set( DefStore.KEY.Language, language );
        }
        this.setLanguage( language );
    },

    /**
     * 初始化版本
     */
    initVersion() {
        let version = G.StoreManager.get( DefStore.KEY.Version );
        if( G.Utils.isNull( version ) ) {
            version = this.getVersion(); // 版本号（默认）
            G.StoreManager.set( DefStore.KEY.Version, version );
        }
        this.setVersion( version );
    },

    /**
     * 初始化国际语言
     */
    initI18N() {
        let i18n = require( this.getLanguage() );
        this.setI18N( i18n );
    },

    /**
     * 获取语言
     * @returns {string|*}
     */
    getLanguage() {
        return this.language;
    },

    /**
     * 设置语言
     * @param language {string} I18N文件夹里面的文件名
     */
    setLanguage( language ) {
        this.language = language;
    },

    /**
     * 获取是否调试
     * @returns {boolean|*}
     */
    getIsDebug() {
        return this.isDebug;
    },

    /**
     * 设置是否调试
     * @param isDebug {boolean}
     */
    setIsDebug( isDebug ) {
        this.isDebug = isDebug;
    },

    /**
     * 获取是否热更
     * @returns {boolean|*}
     */
    getIsHotUpdate() {
        return this.isHotUpdate;
    },

    /**
     * 设置是否热更
     * @param isHotUpdate {boolean}
     */
    setIsHotUpdate( isHotUpdate ) {
        this.isHotUpdate = isHotUpdate;
    },

    /**
     * 获取版本号
     * @returns {string|*}
     */
    getVersion() {
        return this.version;
    },

    /**
     * 设置版本号
     * @param version {string}
     */
    setVersion( version ) {
        this.version = version;
    },

    /**
     * 获取默认场景名
     * @returns {string|string}
     */
    getDefaultScene() {
        return this.defaultScene;
    },

    /**
     * 设置默认场景名
     * @param sceneName
     */
    setDefaultScene( sceneName ) {
        if( G.Utils.isNull( sceneName ) ) {
             sceneName = this.defaultScene;
        }
        this.defaultScene = sceneName;
    },

    /**
     * 获取国际语言
     * @returns {null}
     */
    getI18N() {
        return this.i18n;
    },

    /**
     * 设置国际语言
     * @param i18n
     */
    setI18N( i18n ) {
        this.i18n = i18n;
    },

});

module.exports = Config;