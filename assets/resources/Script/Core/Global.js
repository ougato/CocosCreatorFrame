/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 全局 对象
 */

let AudioManager = require( "AudioManager" );
let EventManager = require( "EventManager" );
let ViewManager = require( "ViewManager" );
let StoreManager = require( "StoreManager" );

let Utils = require( "Utils" );
let Config = require( "Config" );
let Game = require( "Game" );
let WebSocket = require( "WebSocket" );

let Global = {
    // 工具
    Utils: Utils,

    // 声音管理器
    AudioManager: AudioManager.getInstance(),
    // 事件管理器
    EventManager: EventManager.getInstance(),
    // 视图管理器
    ViewManager: ViewManager.getInstance(),
    // 存储管理器
    StoreManager: StoreManager.getInstance(),

    // 配置
    Config: Config.getInstance(),
    // 游戏
    Game: Game.getInstance(),
    // 网络
    Net: WebSocket.getInstance(),

};

module.exports = Global;