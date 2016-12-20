//数据图标集
var ProfileFriendList= {
    m_curPageID:0,//当前页面ID 0- 我的好友 1- 追踪列表 2-陌生人
    m_friendListTable:null,//好友列表
    m_traceListTable:null,//追踪列表
    m_strangerLisTable:null,//陌生人列表
    //获取好友列表
    slot_JINHUA_MGR_FRIEND_LIST:function(dataTable){
        ProfileFriendList.m_friendListTable= dataTable;
        FriendListLogic.createTableView();
    },
    //追踪列表
    slot_JINHUA_MGR_TRACE_LIST:function(dataTable){
        ProfileFriendList.m_traceListTable= dataTable;
    },
    //陌生人列表
    slot_JINHUA_MGR_STRANGER_LIST:function(dataTable){
        ProfileFriendList.m_strangerLisTable= dataTable;
    }
};
