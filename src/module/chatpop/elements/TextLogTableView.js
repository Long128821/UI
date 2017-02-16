/**
 * Func:历史信息TableView
 */
var TextLogTableView= {
    initTextLogTableView:function(){
        var PanelListSize= JinHuaChatPopLogic.panel_log.getContentSize();

        //创建TableView区域大小(子节点的宽度，Panel的高度)
        //如果不是以子节点宽度作为Panel的宽度,而是以Panel的宽度作为宽度，那么
        var tableView = new cc.TableView(this, cc.size(PanelListSize.width* 0.8, PanelListSize.height* 0.8));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
        tableView.setDelegate(this);//设置回调函数的路径(this.tableCellTouched)
        tableView.setPosition(cc.p(PanelListSize.width* 0.05,PanelListSize.height* 0.12));
        JinHuaChatPopLogic.panel_log.addChild(tableView, 2);
        //重新加载数据
        tableView.reloadData();

        JinHuaChatPopLogic.m_curTextLogTableView= tableView;
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx){
        var panelSize= JinHuaChatPopLogic.panel_log.getContentSize();
        var textSize= cc.LabelTTF.create("Test", "Arial", 17);
        return cc.size(panelSize.width, textSize.height+ 2);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx){
        var arrChatLog= ProfileJinHuaChatPop.getChatLog();
        var chatLogLength= ProfileJinHuaChatPop.getChatLogLength();
        idx= chatLogLength- 1- idx;

        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        var text= arrChatLog[idx].nickName+":"+arrChatLog[idx].msg;
        var msg= cc.LabelTTF.create(text,"Arial",17);
        //设置文本自动换行区域
        //0.8- 左边的空白区域
        //Todo：超长自动换行(注释原因:如果字符串比较短的话，不是从中间放大)
        var PanelListSize= JinHuaChatPopLogic.panel_log.getContentSize();
        var width= PanelListSize.width* (0.8- 0.05);
        msg._setBoundingWidth(parseInt(width));
        msg.setPosition(cc.p(msg.width* 0.5,msg.height* 0.5));
        cell.addChild(msg);
        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function(table){
        return ProfileJinHuaChatPop.getChatLogLength()
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