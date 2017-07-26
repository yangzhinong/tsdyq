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
                    $.post($frm.attr("action"), $frm.serialize(), function (res) {
                        if (res.code) {
                            dialogMsg("修改密码成功!", 1 /* OK */);
                        }
                        else {
                            dialogAlert(res.msg, -1 /* Error */);
                        }
                    });
                }
            }, {
                label: 'Cancel',
                cssClass: 'btn btn-cancel',
                action: function () {
                    var me = this;
                    me.dialog.close();
                }
            }
        ]
    });
});
