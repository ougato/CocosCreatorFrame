/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 链表节点
 */

let ListNode = cc.Class({
    /**
     * 构造
     */
    ctor() {
        // 数据
        this.m_objData = null;
        // 上节点
        this.m_objPrev = null;
        // 下节点
        this.m_objNext = null;
    },

    /**
     * 设置数据
     * @param data
     */
    setData( data ) {
        this.m_objData = data;
    },

    /**
     * 获取数据
     * @returns {null}
     */
    getData() {
        return this.m_objData;
    },

    /**
     * 设置上一个节点
     * @param node
     */
    setPrev( node ) {
        this.m_objPrev = node;
    },

    /**
     * 获取上一个节点
     * @returns {null}
     */
    getPrev() {
        return this.m_objPrev;
    },

    /**
     * 设置下一个节点
     * @param node
     */
    setNext( node ) {
        this.m_objNext = node
    },

    /**
     * 获取下一个节点
     * @returns {null}
     */
    getNext() {
        return this.m_objNext;
    },

    /**
     * 销毁节点
     */
    destroy() {
        this.m_objData = null;
        this.m_objNext = null;
        this.m_objPrev = null;
    },

});

/**
 * 链表类
 */

let List = cc.Class({

    /**
     * 构造
     */
    ctor() {
        // 链表 列表
        this.m_node = null;
    },

    /**
     * 获取首节点
     * @returns {object}
     */
    getFirst() {
        let firstNode = this.m_node;
        while( !G.Utils.isNull( firstNode ) ) {
            if( G.Utils.isNull( firstNode.getPrev() ) ) {
                break;
            }
            firstNode = firstNode.getPrev();
        }
        return firstNode;
    },

    /**
     * 获取尾节点
     * @returns {object}
     */
    getLast() {
        let lastNode = this.m_node;
        while( !G.Utils.isNull( lastNode ) ) {
            if( G.Utils.isNull( lastNode.getNext() ) ) {
                break;
            }
            lastNode = lastNode.getNext();
        }
        return lastNode;
    },

    /**
     * 获取链表的大小
     * @returns {number}
     */
    getSize() {
        let node = this.getFirst();
        let size = 0;
        while( !G.Utils.isNull( node ) ) {
            ++size;
            node = node.getNext();
        }
        return size;
    },

    /**
     * 是否空链表
     */
    isEmpty() {
        return G.Utils.isNull( this.m_node );
    },

    /**
     * 插入 通过数据插入到前后链表
     * @param data 数据
     * @param about 前后（-1 前，1 后）默认后
     * @private
     */
    _insert1( data, about ) {
        let newNode = new ListNode();
        newNode.setData( data );

        let listSize = this.getSize();
        if( listSize <= 0 ) {
            this.m_node = newNode;
        } else {
            if( about < 0 ) {
                let firstNode = this.getFirst();
                firstNode.setPrev( newNode );
                newNode.setNext( firstNode );
            } else {
                let lastNode = this.getLast();
                lastNode.setNext( newNode );
                newNode.setPrev( lastNode );
            }
        }
    },

    /**
     * 插入 到node节点 前后
     * @param node
     * @param data
     * @param about
     * @private
     */
    _insert2( node, data, about ) {
        let newNode = new ListNode();
        newNode.setData( data );
        let listSize = this.getSize();
        if( listSize <= 0 ) {
            this.m_node = newNode;
        } else {
            if( about < 0 ) {
                let prevNode = node.getPrev();
                if( !G.Utils.isNull( prevNode ) ) {
                    prevNode.setNext( newNode );
                    newNode.setPrev( prevNode );
                }
                node.setPrev( newNode );
                newNode.setNext( node );
            } else {
                let nextNode = node.getNext();
                if( !G.Utils.isNull( nextNode ) ) {
                    nextNode.setPrev( newNode );
                    newNode.setNext( nextNode );
                }
                node.setNext( newNode );
                node.setPrev( node );
            }
        }
    },

    /**
     * { 重载函数 }
     * 插入节点 到 链表中
     *
     * 一、通过数据插入到前后链表
     * 参数1 data object 数据
     * 参数2 about number 前后（-1 前，1, 后）
     *
     * 二、通过节点来插入数据
     * 参数1 node object 节点
     * 参数2 data object 数据
     * 参数3 about number 前后（-1 前，1 后）
     */
    insert() {
        let arg = arguments;

        if( Utils.isObject( arg[0] ) && ( Utils.isNumber( arg[1] ) || G.Utils.isNull( arg[1] ) ) ) {
            // 通过数据插入到前后链表
            this._insert1( arg[0], arg[1] );
        } else if( Utils.isObject( arg[0] ) && Utils.isObject( arg[1] ) && ( Utils.isNumber( arg[2] ) || G.Utils.isNull( arg[2] ) ) ) {
            // 通过节点来插入数据
            if( Utils.isObject( arg[0] ) && Utils.isNumber( arg[2] ) ) {
                this._insert2( arg[0], arg[1], arg[2] );
            }
        }
    },

    /**
     * 删除链表中的节点 通过data来删除
     * @param data
     */
    delete( data ) {
        let firstNode = this.getFirst();
        let delNode = this.find( data );

        if( G.Utils.isNull( delNode ) ) {
            return ;
        }

        let prevNode = delNode.getPrev();
        if( G.Utils.isNull( prevNode ) ) {
            let nextNode = delNode.getNext();
            if( !G.Utils.isNull( nextNode ) ) {
                nextNode.setPrev( null );
            }
        } else {
            prevNode.setNext( delNode.getNext() );
        }

        let nextNode = delNode.getNext();
        if( G.Utils.isNull( nextNode ) ) {
            let prevNode = delNode.getPrev();
            if( !G.Utils.isNull( prevNode ) ) {
                prevNode.setNext( null );
            }
        } else {
            nextNode.setPrev( delNode.getPrev() );
        }

        if( firstNode === delNode ) {
            this.m_node = firstNode.getNext();
        }

        // 临界点
        if( G.Utils.isNull( delNode.getNext() ) && G.Utils.isNull( delNode.getPrev() ) ) {
            this.m_node = null;
        }

        delNode.destroy();
        delNode = null;

    },

    /**
     * 通过数据查找node
     */
    find( data ) {
        let node = this.getFirst();
        while( !G.Utils.isNull( node ) ) {
            if( node.getData() === data ) {
                break;
            }
            node = node.getNext();
        }
        return node;
    },

    /**
     * 清理链表
     */
    clear() {
        let node = this.getFirst();
        while( !G.Utils.isNull( node ) ) {
            let nextNode = node.getNext();
            node.destroy();
            node = nextNode;
        }
        this.m_node = null;
    },

    /**
     * 遍历
     */
    forEach( callback ) {
        let node = this.m_node;
        while( !G.Utils.isNull( node ) ) {
            callback( node );
            node = node.getNext();
        }
    },

});

module.exports = List;