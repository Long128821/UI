var CommonSignalConfig= {
    //显示图文toast
    slot_GAMEID_IMAGE_TOAST:function(dataTable){
        Profile_ImageToast.readGAMEID_IMAGE_TOAST(dataTable);
        Common.showImageToast();
    }
};
Frameworks.addSlot2Signal(GAMEID_IMAGE_TOAST, CommonSignalConfig.slot_GAMEID_IMAGE_TOAST);
