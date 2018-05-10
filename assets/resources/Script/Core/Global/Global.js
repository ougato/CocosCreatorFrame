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

let Config = require( "Config" );
let Utils = require( "Utils" );
let Game = require( "Game" );

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

};

module.exports = Global;