/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 存储管理器
 */

let DefView = require( "DefView" );

// 实例化对象
let instance = null;

let StoreManager = cc.Class({

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
                instance = new StoreManager();
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

    },

    /**
     * 销毁
     */
    destroy() {

    },

    /**
     * 删除存储数据 通过key
     * @param key
     */
    del( key ) {
        cc.sys.localStorage.removeItem( key );
    },

    /**
     * 清理存储数据（注意：平时很少使用clear，会引起之前存储的所有数据被删除的情况）
     */
    clear() {
        cc.sys.localStorage.clear();
    },

    /**
     * 获取存储数据 通过key
     * @param key
     * @returns {*}
     */
    get( key ) {
        // 如果数据有加密，一定要解密后再返回，否则数据会出问题
        let value = cc.sys.localStorage.getItem( key )
        if( !G.Utils.isNull( value ) ) {
            value =  JSON.parse( value );
        }
        return value;
    },

    /**
     * 设置存储数据
     * @param key {string} 字符串
     * @param data {*} 数据
     */
    set( key, data ) {
        // 允许加密数据 封装他的原因就是为了调用时不让开发者手动写加密
        if( !G.Utils.isNull( data ) ) {
            let jsonData = JSON.stringify( data );
            cc.sys.localStorage.setItem( key, jsonData );
        }
    },

});

module.exports = StoreManager;