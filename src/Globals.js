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
    "ui_xiaoqigai_1.png",//小乞丐
    "ui_pingming_1.png",//平民
    "ui_xiaokang_1.png",//小康

    "ui_tuhao_1.png",//土豪
    "ui_yidiajujia_1.png",//一代巨贾
    "ui_yidiajujia_1.png"//富甲天下
];