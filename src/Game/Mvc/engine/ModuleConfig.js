const DESTORY_TYPE_CLEAN = 0;
const DESTORY_TYPE_EFFECT = 1;

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
    "res/ui_BG01.png",
    "res/ui_nothing.png",
    "res/btn_setting.png",
    "res/pic_hongdian.png",
    "res/btn_hall_youxiang_press.png",
    "res/pic_hongdian.png",
    "res/btn_rankinglist.png",
    "res/pic_hongdian.png",
    "res/btn_shop.png",
    "res/pic_hongdian.png",
    "res/btn_friend.png",
    "res/pic_hongdian.png",
    "res/D:cocosdiudiu1.6EditorDefaultResGUI/image.png",
    "res/ui_icon_yuanbao.png",
    "res/ui_icon_jinbi.png",
    "res/ui_yueka0.png",
    "res/ic_vip1.png",
    "res/desk_playerhead_1.png",
    "res/ui_touxiangkuang.png",
    "res/ui_fujiatianxia_1.png",
    "res/ui_chaozhiyueka.png",
    "res/btn_hall_liaotian.png",
    "res/pic_hongdian.png",
    "res/ui_huoqujinbi.png",
    "res/pic_hongdian.png",
    "res/ui_libaodi.png",
    "res/ui_huodong.png",
    "res/btn_back.png",
    "res/pic_gonggaolan.png",
    "res/pic_pochan1.png",
    "res/pic_hongdian.png",
    "res/pic_jingdianchang.png",
    "res/pic_qianwangchang.png",
    "res/pic_xiaoyouxi.png",
    "res/btn_lijiyouxi.png",
    "res/ui_nothing.png",
    "res/pic_chujichang.png",
    "res/pic_zhongji500.png",
    "res/pic_zhongjichang.png",
    "res/pic_zhongji5000.png",
    "res/pic_gaojichang.png",
    "res/pic_gaoji100000.png",
    "res/btn_guanbi.png",
    "res/ui_nothing.png",
    "res/pic_chujichang2.png",
    "res/pic_gaoji100000.png",
    "res/pic_gaojichang2.png",
    "res/pic_qianwanggaoji200000.png",
    "res/pic_chaojijichang2.png",
    "res/pic_weikaiqi.png",
    "res/btn_guanbi.png",
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
    "res/bg_tanchukuang_ui.png",
    "res/btn_login_ui_nor.png",
    "res/btn_login_ui_nor.png",
    "res/btn_login_ui_input_press.png",
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