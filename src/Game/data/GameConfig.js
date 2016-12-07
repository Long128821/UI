var GameConfig= {
    GAME_ID:4,
    //如果当前屏幕的比例是大于1.6,则使用1136x640的UI工程(1136 / 640 = 1.7)
    //如果当前屏幕的比例是大于1.4小于1.6,则使用960x640的UI工程(960 / 640 = 1.5)
    //如果当前屏幕的比例是小于1.4,则使用的UI工程(待定)
    SCREEN_PROPORTION_GREAT:1.6,//大的屏幕比例
    SCREEN_PROPORTION_SMALL:1.4,//小的屏幕比例
    RealProportion:1.775,//真实的屏幕比例(默认是1.775)
    ScaleAbscissa:1,//横坐标的缩放
    ScaleOrdinate:1,//纵坐标的缩放
    ScreenWidth:1136,//屏幕宽度（分辨率）
    ScreenHeight:640,//屏幕高度（分辨率）

    /**
     * 设置当前屏幕的分辨率
     * 一级界面设置显示屏幕比例(本期3.06pad版留黑边)
     * 二三级界面使用当前一级界面屏幕比例进行缩放(对应屏幕比例的UI不存在)
     * @param UIView    进行适配的view
     * @param gui   当前界面的GUI
     * @param UIDesignWidth UI工程的宽
     * @param UIDesignHeight UI工程的高
     * @param kResolution 适配的方式 kResolutionExactFit(拉伸)、kResolutionShowAll(留黑边)
     */
    setCurrentScreenResolution:function(UIView, gui, UIDesignWidth, UIDesignHeight, kResolution){
        //Todo:适配方案
        //如果是一级界面,设置游戏分辨率
        this.ScreenWidth = UIDesignWidth;
        this.ScreenHeight = UIDesignHeight;
        cc.view.setDesignResolutionSize(this.ScreenWidth, this.ScreenHeight, kResolution);
    }
};

