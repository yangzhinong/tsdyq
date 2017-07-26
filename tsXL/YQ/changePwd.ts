$('#btn-change-pwd').click(function () {
    var dlg = new top.BootstrapDialog({
        title: 'Change Password',
        draggable: true,
        closeByBackdrop: false,
        message: function () {
            var $div = $('<div/>');
            $div.append($("#div-change-pwd").html());
            return $div;
        },
        buttons: [
            {
                label: 'OK',
                cssClass: 'btn btn-ok',
                action: function () {
                    var $frm = dlg.$modal.find('form');

                    $.post($frm.attr("action"),
                        $frm.serialize(),
                        function (res: IJsonMsg) {
                            if (res.code) {
                                dialogMsg("修改密码成功!", LayerIcon.OK);
                            } else {
                                dialogAlert(res.msg, LayerIcon.Error);
                            }
                    });
                   
                }
            }, {
                label: 'Cancel',
                cssClass: 'btn btn-cancel',
                action: function () {
                    var me = <IBootstrapDialogButtonEx>this;
                    me.dialog.close();
                }
            }
        ]
    })
});