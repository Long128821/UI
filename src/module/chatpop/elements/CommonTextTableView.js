/**
 * Func:牌桌聊天-左侧通用消息列表
 */
var CommonTextTableView= {
    initCommonTextTableView:function(){
        var textureSize= cc.Sprite.create("#table2.png").getContentSize();
        var PanelListSize= JinHuaChatPopLogic.panel_common.getContentSize();
        //创建TableView区域大小(子节点的宽度，Panel的高度)
        //如果不是以子节点宽度作为Panel的宽度,而是以Panel的宽度作为宽度，那么
        var tableView = new cc.TableView(this, cc.size(textureSize.width, PanelListSize.height));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
        tableView.setDelegate(this);//设置回调函数的路径(this.tableCellTouched)
        tableView.setPosition(cc.p(textureSize.width* 0.1,textureSize.height* 0.25));
        tableView.setTouchEnabled(true);
        JinHuaChatPopLogic.panel_common.addChild(tableView, 2);
        //重新加载数据
        tableView.reloadData();

        JinHuaChatPopLogic.m_curCommonTextTableView= tableView;
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx){
        var PanelListSize= JinHuaChatPopLogic.panel_common.getContentSize();
        return cc.size(PanelListSize.width, 85);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx){
        idx= JinHuaChatPopLogic.m_curChatCommonTextTable.length- 1- idx;
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        var sprite = new cc.Sprite("#table2.png");
        var bgSize= sprite.getContentSize();
        sprite.setPosition(bgSize.width* 0.5, bgSize.height* 0.5);
        cell.addChild(sprite);


        var msg= cc.LabelTTF.create(JinHuaChatPopLogic.m_curChatCommonTextTable[idx],"Arial",17);
        msg.setPosition(cc.p(bgSize.width* 0.5, bgSize.height* 0.5));
        //设置文本自动换行区域
        //1- 左右两边的空白区域
        var width= bgSize.width* (1- 0.05* 2);
        msg._setBoundingWidth(width);
        sprite.addChild(msg);
        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function(table){
        return JinHuaChatPopLogic.m_curChatCommonTextTable.length;
    },
    //触摸结束-重写TableView的tableCellAtIndex函数
    tableCellTouched:function(table, cell){
        if(!Common.judgeValueIsEffect(JinHuaChatPopLogic.m_curCommonTextTableView)) return;
        if(!JinHuaChatPopLogic.m_curCommonTextTableView.isVisible()) return;

        var ID= JinHuaChatPopLogic.m_curChatCommonTextTable.length- 1- cell.getIdx();
        JinHuaChatPopLogic.onSendText(JinHuaChatPopLogic.m_curChatCommonTextTable[ID]);
    },
    //高亮状态
    tableCellHighlight:function(table, cell){
        cell.stopAllActions();
        cell.runAction(cc.scaleTo(0.1, 1.1));
    },
    //取消高亮状态
    tableCellUnhighlight:function(table, cell){
        cell.stopAllActions();
        cell.runAction(cc.scaleTo(0.1, 1));
    }
};