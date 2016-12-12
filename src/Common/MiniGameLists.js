//小游戏图标列表
var arrMiniGame= [
    "res/btn_hall_xiaoyouxi_baijiale.png",
    "res/btn_hall_xiaoyouxi_bairenniuniu.png",
    "res/btn_hall_xiaoyouxi_dezhoupuke.png",
    "res/btn_hall_xiaoyouxi_heihongmeifang.png",
    "res/btn_hall_xiaoyouxi_jiejibuyu.png",
    "res/btn_hall_xiaoyouxi_jinhuangguan.png",
    "res/btn_hall_xiaoyouxi_shuiguoji.png",
    "res/btn_hall_xiaoyouxi_wanrenjinhua.png",
    "res/btn_hall_xiaoyouxi_wanrenshuiguopai.png",
    "res/btn_hall_xiaoyouxi_zhajinhua.png",
    "res/btn_hall_xiaoyouxirukou1.png"
];

var MiniGameLists= {
    m_parent:null,//视图
    m_tableViewPos:cc.p(0,0),//视图列表位置
    init:function(parent, pos){
        this.m_parent= parent;
        this.m_tableViewPos= pos;
        this.preLoad();
    },
    preLoad:function(){
        var self= this;
        cc.loader.load(arrMiniGame, function(){}, function(){
            self.initMiniGame();
        });
    },
    initMiniGame:function(){
        var tableView = new cc.TableView(this, cc.size(cc.winSize.width, 141));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);
        tableView.setDelegate(this);//设置回调函数的路径
        tableView.setAnchorPoint(0, 0);
        tableView.setPosition(this.m_tableViewPos);
        this.m_parent.addChild(tableView, 2);
        tableView.reloadData();
    },
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(251, 141);
    },
    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        var sprite = new cc.Sprite(arrMiniGame[parseInt(strValue)]);
        sprite.setAnchorPoint(0,0);
        sprite.setPosition(0,0);
        cell.addChild(sprite);

        return cell;
    },
    numberOfCellsInTableView:function (table) {
        return arrMiniGame.length;
    },
    tableCellTouched:function (table, cell) {
        console.log("cell touched at index: " + cell.getIdx());
    }
};
