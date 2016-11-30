//获取连接中的Code
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


//是否为微信浏览器
function isWebChatBrowser(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

var g_arrHonor= [
    "res/ui_xiaoqigai_1.png",//小乞丐
    "res/ui_pingming_1.png",//平民
    "res/ui_xiaokang_1.png",//小康

    "res/ui_tuhao_1.png",//土豪
    "res/ui_yidiajujia_1.png",//一代巨贾
    "res/ui_yidiajujia_1.png"//富甲天下
];

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