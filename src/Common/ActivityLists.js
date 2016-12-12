var arrActivityLists= [
    "res/ui_hall_tuiguang_yibudaowei.png",
    "res/ui_hall_tuiguang_fuxinggaozhao.png",

    "res/ui_hall_tuiguangfenye_dangqianye.png",
    "res/ui_hall_tuiguangfenye_yemadi.png"
];

var activitySize= cc.size(454, 190);//每一个单元的尺寸
var offset= 20;//指示标识符的间隔

var ActivityLists= {
    m_parent:null,//视图
    m_pageViewPos:cc.p(0,0),//视图列表位置
    m_activityCnt:arrActivityLists.length-2,//当前活动数量
    m_arrRadioButton:[],//单选框按钮
    m_pageView:null,//PageView视图
    m_activityTimer:null,//切换定时器
    init:function(parent, pos){
        this.m_parent= parent;
        this.m_pageViewPos= pos;
        this.preLoad();//预加载资源
    },
    preLoad:function(){
        var self= this;
        this.m_arrRadioButton= [];//指示数组
        cc.loader.load(arrActivityLists, function(){}, function(){
            self.initActivityLists();
            self.initRadioButton();
            self.autoChange();
        });
    },
    initActivityLists:function(){
        var pageView = new ccui.PageView();
        pageView.setPosition(this.m_pageViewPos);
        pageView.setTouchEnabled(true);
        pageView.setContentSize(activitySize);

        for (var i = 0; i < this.m_activityCnt; ++i) {
            var imageView = new ccui.Button(arrActivityLists[i]);
            imageView.x = activitySize.width / 2;
            imageView.y = activitySize.height / 2;

            //仅仅触发一次
            imageView.addClickEventListener(this.pageViewEvent, this);
            //触发多次
            imageView.addTouchEventListener(this.pageViewEvent1, this);

            pageView.addPage(imageView, 2);
        }
        this.m_pageView= pageView;
        this.m_parent.addChild(pageView, 2);

        pageView.addEventListenerPageView(this.pageViewEvent, this);
    },
    //单选框
    initRadioButton:function(){
        var startPosX= (activitySize.width- (this.m_activityCnt- 1)* offset)* 0.5;
        for(var i=0; i< this.m_activityCnt; ++i){
            var sprite= cc.Sprite.create("res/ui_hall_tuiguangfenye_yemadi.png");
            sprite.setPosition(cc.pAdd(cc.p(startPosX+ i* offset, -15),this.m_pageViewPos));
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
    //启动切换
    autoChange:function(){
        var self= this;
        this.m_activityTimer= setInterval(function(delta){
            self.changeRadioButton();
        }, 3000);
    },
    //切换定时器s
    changeRadioButton:function(){
        var self= this;
        var curActivityID= self.m_pageView.getCurPageIndex();
        var preRadio= curActivityID;
        self.m_arrRadioButton[preRadio].removeAllChildren();
        curActivityID= (++curActivityID)%(self.m_activityCnt);

        //更新指示
        var sprite1= cc.Sprite.create("res/ui_hall_tuiguangfenye_dangqianye.png");
        var backSpriteSize= self.m_arrRadioButton[curActivityID].getPosition();
        sprite1.setAnchorPoint(0.5, 0.5);
        sprite1.setPosition(backSpriteSize.width* 0.5, backSpriteSize.height* 0.5);
        self.m_arrRadioButton[curActivityID].addChild(sprite1);

        self.m_pageView.scrollToItem((curActivityID)%(self.m_activityCnt));
    },
    pageViewEvent: function (pSender, type) {
    },
    pageViewEvent1: function (pSender, type) {
        console.log(type== ccui.Widget.TOUCH_ENDED);
    }
};

//Todo:关闭定时器
