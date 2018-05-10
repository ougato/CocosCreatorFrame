/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

let DefView = require( "DefView" );
let Utils = require( "Utils" );
let DefStore = require( "DefStore" )

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
            if( !Utils.isNull( instance ) ){
                instance.destroy();
            }
        },

    },

    /**
     * 构造
     */
    ctor() {
        // 语言
        this.m_strLanguage = "CN";
        // 是否调试
        this.m_bIsDebug = false;
        // 是否热更新
        this.m_bIsHotUpdate = false;
        // 版本
        this.m_strVersion = "0.0.0.0";
        // 默认场景
        this.m_strDefaultScene = "Login";
    },

    /**
     * 销毁
     */
    destroy() {
        // 语言
        this.m_strLanguage = "";
        // 是否调试
        this.m_bIsDebug = false;
        // 是否热更新
        this.m_bIsHotUpdate = false;
        // 版本
        this.m_strVersion = "";
        // 默认场景
        this.m_strDefaultScene = "";
    },

    /**
     * 初始化游戏需要的模块
     */
    init() {
        this.initLanguage();
        this.initVersion();
    },

    /**
     * 初始化语言
     */
    initLanguage() {
        let language = G.StoreManager.get( DefStore.KEY.Language );
        if( Utils.isNull( language ) ) {
            language =  this.getLanguage(); // I18N文件夹里面的文件名（默认）
            G.StoreManager.set( DefStore.KEY.Language, language );
        }
        this.setLanguage( language );
    },

    /**
     * 初始化版本
     */
    initVersion() {
        let language = G.StoreManager.get( DefStore.KEY.Version );
        if( Utils.isNull( language ) ) {
            language = this.getVersion(); // 版本号（默认）
            G.StoreManager.set( DefStore.KEY.Version, language );
        }
        this.setVersion( language );
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
     * 获取是否调试
     * @returns {boolean|*}
     */
    getIsDebug() {
        return this.m_bIsDebug;
    },

    /**
     * 设置是否调试
     * @param isDebug {boolean}
     */
    setIsDebug( isDebug ) {
        this.m_bIsDebug = isDebug;
    },

    /**
     * 获取是否热更
     * @returns {boolean|*}
     */
    getIsHotUpdate() {
        return this.m_bIsHotUpdate;
    },

    /**
     * 设置是否热更
     * @param isHotUpdate {boolean}
     */
    setIsHotUpdate( isHotUpdate ) {
        this.m_bIsHotUpdate = isHotUpdate;
    },

    /**
     * 获取版本号
     * @returns {string|*}
     */
    getVersion() {
        return this.m_strVersion;
    },

    /**
     * 设置版本号
     * @param version {string}
     */
    setVersion( version ) {
        this.m_strVersion = version;
    },

    /**
     * 获取默认场景名
     * @returns {string|string}
     */
    getDefaultScene() {
        return this.m_strDefaultScene;
    },

    /**
     * 设置默认场景名
     * @param sceneName
     */
    setDefaultScene( sceneName ) {
        if( Utils.isNull( sceneName ) ) {
             sceneName = this.m_strDefaultScene;
        }
        this.m_strDefaultScene = sceneName;
    },
});

module.exports = Config;