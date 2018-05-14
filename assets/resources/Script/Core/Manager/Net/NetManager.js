/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 网络管理器
 */

let WebSocket = require( "WebSocket" );

// 实例化对象
let instance = null;

let NetManager = cc.Class({

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
                instance = new NetManager();
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

    open( netType ) {
        if( netType === DefNet.WebSocket ) {

        } else if( netType === DefNet.Socket ) {

        } else {

        }
    },

    close() {

    },

});

module.exports = EventManager;