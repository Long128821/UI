var arrActivityLists= [
    "res/ui_hall_tuiguang_yibudaowei.png",
    "res/ui_hall_tuiguang_fuxinggaozhao.png",

    "res/ui_hall_tuiguangfenye_dangqianye.png",
    "res/ui_hall_tuiguangfenye_yemadi.png"
];

var activitySize= cc.size(454, 190);
var offset= 20;

var ActivityLists= {
    m_parent:null,//视图
    m_tableViewPos:cc.p(0,0),//视图列表位置
    m_curActivityID:0,//当前活动ID
    m_activityCnt:arrActivityLists.length-2,//当前活动数量
    m_arrActivityList:[],//活动列表
    m_arrRadioButton:[],//单选框按钮
    m_tableView:null,
    init:function(parent, pos){
        this.m_parent= parent;
        this.m_tableViewPos= pos;
        this.preLoad();
    },
    preLoad:function(){
        var self= this;
        this.m_arrRadioButton= [];
        this.m_arrActivityList= [];
        this.m_curActivityID= 0;
        cc.loader.load(arrActivityLists, function(){}, function(){
            self.initActivityLists();
            self.initRadioButton();
            self.autoChange();
        });
    },
    initActivityLists:function(){
        var tableView = new cc.TableView(this, activitySize);
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
        tableView.setDelegate(this);
        tableView.setAnchorPoint(0, 0);
        tableView.setPosition(this.m_tableViewPos);
        this.m_parent.addChild(tableView, 2);
        tableView.reloadData();

        tableView.setColor(cc.color(0,0,0));

        this.m_tableView= tableView;
    },
    //单选框
    initRadioButton:function(){
        var startPosX= (activitySize.width- (this.m_activityCnt- 1)* offset)* 0.5;
        for(var i=0; i< this.m_activityCnt; ++i){
            var sprite= cc.Sprite.create("res/ui_hall_tuiguangfenye_yemadi.png");
            sprite.setPosition(cc.pAdd(cc.p(startPosX+ i* offset, -15),this.m_tableViewPos));
            this.m_parent.addChild(sprite, 2);
            this.m_arrRadioButton[i]= sprite;
        }
        //初始时，始终为0
        var sprite1= cc.Sprite.create("res/ui_hall_tuiguangfenye_dangqianye.png");
        var backSpriteSize= this.m_arrRadioButton[0].getPosition();
        sprite1.setAnchorPoint(0.5, 0.5);
        sprite1.setPosition(backSpriteSize.width* 0.5, backSpriteSize.height* 0.5);
        this.m_arrRadioButton[0].addChild(sprite1);
    },
    tableCellSizeForIndex:function (table, idx) {
        return activitySize;
    },
    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        var sprite = new cc.Sprite(arrActivityLists[parseInt(strValue)]);
        sprite.setAnchorPoint(0,0);
        sprite.setPosition(0,0);
        cell.addChild(sprite);
        this.m_arrActivityList[parseInt(strValue)]= cell;
        return cell;
    },
    numberOfCellsInTableView:function (table) {
        return this.m_activityCnt;
    },
    //启动切换
    autoChange:function(){
        var self= this;
        setInterval(function(delta){
            self.changeRadioButton();
        }, 3000);
    },
    changeRadioButton:function(){
        var self= this;
        var preRadio= self.m_curActivityID;
        self.m_arrRadioButton[preRadio].removeAllChildren();
        self.m_curActivityID= (++self.m_curActivityID)%(self.m_activityCnt);

        //更新指示
        var sprite1= cc.Sprite.create("res/ui_hall_tuiguangfenye_dangqianye.png");
        var backSpriteSize= self.m_arrRadioButton[self.m_curActivityID].getPosition();
        sprite1.setAnchorPoint(0.5, 0.5);
        sprite1.setPosition(backSpriteSize.width* 0.5, backSpriteSize.height* 0.5);
        self.m_arrRadioButton[self.m_curActivityID].addChild(sprite1);

        self.m_tableView.setContentOffsetInDuration(cc.p(self.m_curActivityID* (-activitySize.width), 0), 1);
    }
};
