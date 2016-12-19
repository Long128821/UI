const DESTROY_TYPE_CLEAN = 0;
const DESTROY_TYPE_EFFECT = 1;

var Layer= {
    Base_Layer:0,
    Second_Layer:1,
    Third_Layer:2,
    Fourth_Layer:3,
    Fifth_Layer:4,
    Sixth_Layer:5,
    Seventh_Layer:6,
    Eighth_Layer:7,
    Ninth_Layer:8
};

var ModuleTable = {};//UI界面列表

ModuleTable["DeleteUser"] = {};
ModuleTable["DeleteUser"]["jsLists"] = [
    "src/module/login/profile/ProfileDeleteUser.js",
    "src/module/login/logic/DeleteUserLogic.js",
    "src/module/login/controller/DeleteUserController.js"];
ModuleTable["DeleteUser"]["Layer"] = Layer.Third_Layer;
ModuleTable["DeleteUser"]["resLists"] = [
    "res/bg_toumingditu1.png",
    "res/btn_gerenziliao37.png",
    "res/btn_orange.png",
    "res/ui_quxiao.png",
    "res/DeleteUser.json"];

ModuleTable["Hall"] = {};
ModuleTable["Hall"]["jsLists"] = [
    "src/module/hall/profile/ProfileHall.js",
    "src/module/hall/logic/HallLogic.js",
    "src/module/hall/controller/HallController.js"];
ModuleTable["Hall"]["Layer"] = Layer.Base_Layer;
ModuleTable["Hall"]["resLists"] = [
    "res/bg_hall_beijingditu.png",
    "res/ui_nothing.png",
    "res/ui_hall_donghuacanzhao.png",
    "res/btn_hall_shezhi.png",
    "res/pic_hongdian.png",
    "res/btn_hall_youxiang.png",
    "res/pic_hongdian.png",
    "res/btn_hall_paihang.png",
    "res/pic_hongdian.png",
    "res/btn_hall_shangcheng.png",
    "res/pic_hongdian.png",
    "res/btn_hall_haoyou.png",
    "res/pic_hongdian.png",
    "res/btn_hall_renwu.png",
    "res/btn_hall_liaotiananniu.png",
    "res/pic_hongdian.png",
    "res/btn_hall_jinbi.png",
    "res/btn_hall_yuanbao.png",
    "res/ic_vip_0.png",
    "res/ic_vip_jiaobiao_zizuan.png",
    "res/ic_vip_jiaobiao_shuzichendi.png",
    "res/bg_qihuanzhanghu_01.png",
    "res/ui_hall_yonghu_touxiangkuang.png",
    "res/ui_fujiatianxia_1.png",
    "res/ic_tuijian_paizhuo_chenghao1.png",
    "res/desk_playerhead_1.png",
    "res/ui_hall_donghuacanzhao.png",
    "res/btn_hall_jingjichangrukou.png",
    "res/ui_chaozhiyueka.png",
    "res/ui_hall_daojishi_tian.png",
    "res/ui_huoqujinbi.png",
    "res/pic_hongdian.png",
    "res/ui_libaodi.png",
    "res/ui_huodong.png",
    "res/pic_gonggaolan.png",
    "res/ui_hall_bisaichang_anniu_diban.png",
    "res/ui_hall_jingdianchang_diban.png",
    "res/ui_hall_qianwangchang_diban.png",
    "res/bg_hall_xiaoyouxi_dikuang.png",
    "res/btn_hall_vipanniu.png",
    "res/ui_hall_fenggexianguangxiao.png",
    "res/btn_hall_xiaoyouxi_bairenniuniu.png",
    "res/btn_hall_xiaoyouxi_jiejibuyu.png",
    "res/btn_hall_xiaoyouxi_shuiguoji.png",
    "res/btn_hall_xiaoyouxi_wanrenjinhua.png",
    "res/Hall.json"];

ModuleTable["Loading"] = {};
ModuleTable["Loading"]["jsLists"] = [
    "src/module/login/profile/ProfileLoading.js",
    "src/module/login/logic/LoadingLogic.js",
    "src/module/login/controller/LoadingController.js"];
ModuleTable["Loading"]["Layer"] = Layer.Base_Layer;
ModuleTable["Loading"]["resLists"] = [
    "res/bg1_hall.png",
    "res/Loading.json"];

ModuleTable["Login"] = {};
ModuleTable["Login"]["jsLists"] = [
    "src/module/login/profile/ProfileLogin.js",
    "src/module/login/logic/LoginLogic.js",
    "src/module/login/controller/LoginController.js"];
ModuleTable["Login"]["Layer"] = Layer.Base_Layer;
ModuleTable["Login"]["resLists"] = [
    "res/btn_denglu_weixinzhanghaodenglu_anniu.png",
    "res/btn_denglu_yiyouzhanghaodenglu_anniu.png",
    "res/btn_gerenziliao34.png",
    "res/ui_login_agreement.png",
    "res/bg_denglubeijing.png",
    "res/input_login.png",
    "res/btn_gerenziliao34.png",
    "res/btn_gerenziliao34.png",
    "res/ui_denglu_logo.png",
    "res/ui_login_wangjimima.png",
    "res/btn_zhankai.png",
    "res/ui_mingchenhemimadi.png",
    "res/ui_mingchenhemimadi.png",
    "res/btn_denglu_yiyouzhanghaodenglu_anniu.png",
    "res/btn_item_close.png",
    "res/Login.json"];

ModuleTable["More"] = {};
ModuleTable["More"]["jsLists"] = [
    "src/module/login/profile/ProfileMore.js",
    "src/module/login/logic/MoreLogic.js",
    "src/module/login/controller/MoreController.js"];
ModuleTable["More"]["Layer"] = Layer.Third_Layer;
ModuleTable["More"]["resLists"] = [
    "res/bg_ui_xiugaizhanghaoxinxi_info.png",
    "res/More.json"];

ModuleTable["ResetPassword"] = {};
ModuleTable["ResetPassword"]["jsLists"] = [
    "src/module/login/profile/ProfileResetPassword.js",
    "src/module/login/logic/ResetPasswordLogic.js",
    "src/module/login/controller/ResetPasswordController.js"];
ModuleTable["ResetPassword"]["Layer"] = Layer.Second_Layer;
ModuleTable["ResetPassword"]["resLists"] = [
    "res/bg_tongyongdi.png",
    "res/ui_mingchenhemimadi.png",
    "res/btn_shouqizhankaidi.png",
    "res/ui_zhankai.png",
    "res/ui_zhankai.png",
    "res/btn_zengsongliwu.png",
    "res/btn_tichupaizhuo.png",
    "res/ResetPassword.json"];

ModuleTable["UserAgreement"] = {};
ModuleTable["UserAgreement"]["jsLists"] = [
    "src/module/login/profile/ProfileUserAgreement.js",
    "src/module/login/logic/UserAgreementLogic.js",
    "src/module/login/controller/UserAgreementController.js"];
ModuleTable["UserAgreement"]["Layer"] = Layer.Second_Layer;
ModuleTable["UserAgreement"]["resLists"] = [
    "res/bg_tongyongdi.png",
    "res/btn_zengsongliwu.png",
    "res/UserAgreement.json"];

ModuleTable["Setting"] = {};
ModuleTable["Setting"]["jsLists"] = [
    "src/module/hall/profile/ProfileSetting.js",
    "src/module/hall/logic/SettingLogic.js",
    "src/module/hall/controller/SettingController.js"];
ModuleTable["Setting"]["Layer"] = Layer.Second_Layer;
ModuleTable["Setting"]["resLists"] = [
    "res/ic_setup_close.png",
    "res/ic_setup_close.png",
    "res/bg_tongyongdi2.png",
    "res/btn_item_close.png",
    "res/ui_xiugaimimadi.png",
    "res/ui_xiugaimimadi.png",
    "res/ui_xigaimima.png",
    "res/btn_shezhi.png",
    "res/ic_setup_music.png",
    "res/btn_shezhi.png",
    "res/ic_setup_volume.png",
    "res/btn_shezhi.png",
    "res/btn_shezhi.png",
    "res/btn_tichupaizhuo.png",
    "res/bth_qhzh.png",
    "res/btn_zengsongliwu.png",
    "res/bth_bbjc.png",
    "res/ui_xiugaimima.png",
    "res/Setting.json"];

ModuleTable["OtherUserInfo"] = {};
ModuleTable["OtherUserInfo"]["jsLists"] = [
    "src/module/userinfo/profile/ProfileOtherUserInfo.js",
    "src/module/userinfo/logic/OtherUserInfoLogic.js",
    "src/module/userinfo/controller/OtherUserInfoController.js"];
ModuleTable["OtherUserInfo"]["Layer"] = Layer.Second_Layer;
ModuleTable["OtherUserInfo"]["resLists"] = [
    "res/bg_toumingditu.png",
    "res/co_desk.plist",
    "res/co_desk.png",
    "res/ic_vip_shuzi.png",
    "res/num_vip_level.png",
    "res/table_elements.plist",
    "res/table_elements.png",
    "res/ui_jinbishu.png",
    "res/ui_meilizhishu.png",
    "res/ui_meilushu.png",
    "res/ui_meilushu_daifuhao.png",
    "res/ui_paihang_shuzi2.png",
    "res/ui_vip_jiaobiaoshuzi.png",
    "res/ui_vip_lvshuzi_gaoji.png",
    "res/userinfo_mine.plist",
    "res/userinfo_mine.png",
    "res/OtherUserInfo.json"];

ModuleTable["MonthCard"] = {};
ModuleTable["MonthCard"]["jsLists"] = [
    "src/module/recharge/profile/ProfileMonthCard.js",
    "src/module/recharge/logic/MonthCardLogic.js",
    "src/module/recharge/controller/MonthCardController.js"];
ModuleTable["MonthCard"]["Layer"] = Layer.Second_Layer;
ModuleTable["MonthCard"]["resLists"] = [
    "res/btn_weixinzhifu3.png",
    "res/pic_caizhi.png",
    "res/btn_item_close.png",
    "res/btn_zengsongliwu.png",
    "res/ui_item_btn_ensure.png",
    "res/ui_yueka_daojishiwenzi.png",
    "res/MonthCard.json"];

ModuleTable["VipInfo"] = {};
ModuleTable["VipInfo"]["jsLists"] = [
    "src/module/vip/profile/ProfileVipInfo.js",
    "src/module/vip/logic/VipInfoLogic.js",
    "src/module/vip/controller/VipInfoController.js"];
ModuleTable["VipInfo"]["Layer"] = Layer.Second_Layer;
ModuleTable["VipInfo"]["resLists"] = [
    "res/bg_toumingditu.png",
    "res/btn_vipshuoming_zuoyoujiantou.png",
    "res/btn_vipshuoming_zuoyoujiantou.png",
    "res/ui_vipshuoming_biaoti.png",
    "res/btn_item_close.png",
    "res/ic_vip_0.png",
    "res/ic_vip_jiaobiao_hongzuan.png",
    "res/ic_vip_jiaobiao_shuzichendi.png",
    "res/ic_vip_0.png",
    "res/ic_vip_jiaobiao_hongzuan.png",
    "res/ic_vip_jiaobiao_shuzichendi.png",
    "res/btn_orange.png",
    "res/ui_nothing.png",
    "res/VipInfo.json"];

ModuleTable["ChangeInfoPop"] = {};
ModuleTable["ChangeInfoPop"]["jsLists"] = [
    "src/module/userinfo/profile/ProfileChangeInfoPop.js",
    "src/module/userinfo/logic/ChangeInfoPopLogic.js",
    "src/module/userinfo/controller/ChangeInfoPopController.js"];
ModuleTable["ChangeInfoPop"]["Layer"] = Layer.Third_Layer;
ModuleTable["ChangeInfoPop"]["resLists"] = [
    "res/bg_tongyongdi.png",
    "res/ui_mingchenhemimadi.png",
    "res/ui_mingchenhemimadi.png",
    "res/btn_xinxixiugai_xingbieweixuanzhong.png",
    "res/btn_xinxixiugai_xingbieweixuanzhong.png",
    "res/btn_xinxixiugai_xingbieweixuanzhong.png",
    "res/btn_gerenziliao37.png",
    "res/ui_quxiao.png",
    "res/btn_orange.png",
    "res/ui_queding.png",
    "res/btn_denglu_yiyouzhanghaodenglu_anniu.png",
    "res/btn_xinxixiugai_tankuang_jiechubangdinganniu.png",
    "res/btn_denglu_weixinzhanghaodenglu_anniu.png",
    "res/btn_xinxixiugai_yibandinganniu.png",
    "res/ChangeInfoPop.json"];

ModuleTable["DoubleButtonConfirm"] = {};
ModuleTable["DoubleButtonConfirm"]["jsLists"] = [
    "src/module/gameDialog/profile/ProfileDoubleButtonConfirm.js",
    "src/module/gameDialog/logic/DoubleButtonConfirmLogic.js",
    "src/module/gameDialog/controller/DoubleButtonConfirmController.js"];
ModuleTable["DoubleButtonConfirm"]["Layer"] = Layer.Third_Layer;
ModuleTable["DoubleButtonConfirm"]["resLists"] = [
    "res/co_desk.plist",
    "res/co_desk.png",
    "res/DoubleButtonConfirm.json"];

ModuleTable["GameHelp"] = {};
ModuleTable["GameHelp"]["jsLists"] = [
    "src/module/customservice/profile/ProfileGameHelp.js",
    "src/module/customservice/logic/GameHelpLogic.js",
    "src/module/customservice/controller/GameHelpController.js"];
ModuleTable["GameHelp"]["Layer"] = Layer.Second_Layer;
ModuleTable["GameHelp"]["resLists"] = [
    "res/ui_xuanchangfangjiandi.png",
    "res/ui_nothing.png",
    "res/btn_item_close.png",
    "res/GameHelp.json"];

ModuleTable["MessageList"] = {};
ModuleTable["MessageList"]["jsLists"] = [
    "src/module/message/profile/ProfileMessageList.js",
    "src/module/message/logic/MessageListLogic.js",
    "src/module/message/controller/MessageListController.js"];
ModuleTable["MessageList"]["Layer"] = Layer.Second_Layer;
ModuleTable["MessageList"]["resLists"] = [
    "res/btn_item_close.png",
    "res/pic_xitongyoujian_biaoti.png",
    "res/btn_vipshuoming_zuoyoujiantou.png",
    "res/btn_vipshuoming_zuoyoujiantou.png",
    "res/MessageList.json"];

ModuleTable["MessageServer"] = {};
ModuleTable["MessageServer"]["jsLists"] = [
    "src/module/message/profile/ProfileMessageServer.js",
    "src/module/message/logic/MessageServerLogic.js",
    "src/module/message/controller/MessageServerController.js"];
ModuleTable["MessageServer"]["Layer"] = Layer.Second_Layer;
ModuleTable["MessageServer"]["resLists"] = [
    "res/ui_nothing.png",
    "res/btn_zengsongliwu.png",
    "res/ui_queding.png",
    "res/btn_zengsongliwu.png",
    "res/ui_lingqu.png",
    "res/MessageServer.json"];

ModuleTable["DailySalary"] = {};
ModuleTable["DailySalary"]["jsLists"] = [
    "src/module/dayilySalary/profile/ProfileDailySalary.js",
    "src/module/dayilySalary/logic/DailySalaryLogic.js",
    "src/module/dayilySalary/controller/DailySalaryController.js"];
ModuleTable["DailySalary"]["Layer"] = Layer.Third_Layer;
ModuleTable["DailySalary"]["resLists"] = [
    "res/bg_linggongzi_dikuang.png",
    "res/desk_playerhead_1.png",
    "res/ui_pingming_1.png",
    "res/btn_linggongzi_vipshengji.png",
    "res/ic_vip_0.png",
    "res/ic_vip_jiaobiao_zizuan.png",
    "res/ic_vip_jiaobiao_shuzichendi.png",
    "res/btn_zuoceanniudi.png",
    "res/ui_gongzi_lingqu.png",
    "res/btn_item_close.png",
    "res/DailySalary.json"];