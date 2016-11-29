var g_LayerTag= {
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

//用户名
var g_userLists= new Map();
g_userLists.put("xxl", "123");
g_userLists.put("小明", "世纪");

var g_ModuleTable= {};//UI界面列表

//登录页面
g_ModuleTable[GUI_LOGIN]= {};
g_ModuleTable[GUI_LOGIN]["jsLists"]= ["src/Game/login/Logic/LoginLogic.js","src/Game/login/Controller/LoginController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_LOGIN]["Layer"]= g_LayerTag.Base_Layer;//层级
g_ModuleTable[GUI_LOGIN]["resLists"]= [
    "res/Login.json"
];//需要的资源

//同意用户协议
g_ModuleTable[GUI_USERAGREEMENT]= {};
g_ModuleTable[GUI_USERAGREEMENT]["jsLists"]= ["src/Game/Login/Logic/UserAgreementLogic.js", "src/Game/Login/Controller/UserAgreementController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_USERAGREEMENT]["Layer"]= g_LayerTag.Second_Layer;//层级
g_ModuleTable[GUI_USERAGREEMENT]["resLists"]= [//所需要的资源列表
    "res/UserAgreement.json"
];

//账户下拉列表
g_ModuleTable[GUI_MORE]= {};
g_ModuleTable[GUI_MORE]["jsLists"]= ["src/Game/Login/Logic/MoreLogic.js", "src/Game/Login/Controller/MoreController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_MORE]["Layer"]= g_LayerTag.Second_Layer;//层级
g_ModuleTable[GUI_MORE]["resLists"]= [//所需要的资源列表
    "res/More.json"
];

//忘记密码
g_ModuleTable[GUI_RESETPASSWORD]= {};
g_ModuleTable[GUI_RESETPASSWORD]["jsLists"]= ["src/Game/Login/Logic/ResetPasswordLogic.js", "src/Game/Login/Controller/ResetPasswordController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_RESETPASSWORD]["Layer"]= g_LayerTag.Third_Layer;//层级
g_ModuleTable[GUI_RESETPASSWORD]["resLists"]= [//所需要的资源列表
    "res/ResetPassword.json"
];

//删除用户
g_ModuleTable[GUI_DELETEUSER]= {};
g_ModuleTable[GUI_DELETEUSER]["jsLists"]= ["src/Game/Login/Logic/DeleteUserLogic.js", "src/Game/Login/Controller/DeleteUserController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_DELETEUSER]["Layer"]= g_LayerTag.Fourth_Layer;//层级
g_ModuleTable[GUI_DELETEUSER]["resLists"]= [//所需要的资源列表
    "res/DeleteUser.json"
];

//加载页面
g_ModuleTable[GUI_LOADING]= {};
g_ModuleTable[GUI_LOADING]["jsLists"]= ["src/Game/Login/Logic/LoadingLogic.js", "src/Game/Login/Controller/LoadingController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_LOADING]["Layer"]= g_LayerTag.Base_Layer;//层级
g_ModuleTable[GUI_LOADING]["resLists"]= [//所需要的资源列表
    "res/Loading.json"
];

//大厅
g_ModuleTable[GUI_HALL]= {};
g_ModuleTable[GUI_HALL]["jsLists"]= ["src/Game/Hall/Logic/HallLogic.js", "src/Game/Hall/Controller/HallController.js"];//所需要的JS文件数组
g_ModuleTable[GUI_HALL]["Layer"]= g_LayerTag.Base_Layer;//层级
g_ModuleTable[GUI_HALL]["resLists"]= [//所需要的资源列表
    "res/Animation/Animation_Hall_Quick.ExportJson",
    "res/Animation/Animation_Hall_Quick0.plist",
    "res/Animation/Animation_Hall_Quick0.png",
    "res/Animation/Yaoqianshu_Action_Enter_Animation.ExportJson",
    "res/Animation/Yaoqianshu_Action_Enter_Animation0.plist",
    "res/Animation/Yaoqianshu_Action_Enter_Animation0.png",
    "res/Animation/Animation_Newhall_ClassicRoom.ExportJson",
    "res/Animation/Animation_Newhall_ClassicRoom0.plist",
    "res/Animation/Animation_Newhall_ClassicRoom0.png",
    "res/Animation/Animation_Newhall_CheatKingRoom.ExportJson",
    "res/Animation/Animation_Newhall_CheatKingRoom0.plist",
    "res/Animation/Animation_Newhall_CheatKingRoom0.png",
    "res/Animation/Animation_Newhall_TounamentRoom.ExportJson",
    "res/Animation/Animation_Newhall_TounamentRoom0.plist",
    "res/Animation/Animation_Newhall_TounamentRoom0.png",
    "res/Hall.json"
];
//不能根据res/+ Table名+ 资源名读取的原因是:有时候不同页面可能会使用相同的资源，浪费流量

