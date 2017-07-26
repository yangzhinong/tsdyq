$(function () {
    InitialPage();
    GetGrid();
    $('').serialize;
});
//初始化页面
function InitialPage() {
    $(window).resize(function (e) {
        window.setTimeout(function () {
            $('#gridTable').setGridWidth(($('.gridPanel').width()));
            $("#gridTable").setGridHeight($(window).height() - 280);
        }, 200);
        e.stopPropagation();
    });
}
//加载表格
function GetGrid() {
    var selectedRowIndex = 0;
    var $gridTable = $('#gridTable');
    $gridTable.jqGrid({
        url: "/YQ/NPSAInputData/GridData",
        datatype: "json",
        //method:'post',
        height: $(window).height() - 280,
        autowidth: true,
        colModel: [
            { label: "Id", name: "Id", index: "Id", hidden: true },
            { label: "Mode", name: "Mode", index: "Mode", width: 60, align: "left" },
            { label: "PN", name: "PN", index: "PN", width: 150, align: "left" },
            { label: "SBB Type", name: "SBBType", index: "SBBType", width: 100, align: "left" },
            { label: "PN Desp", name: "PNDesp", index: "PNDesp", width: 200, align: "left" },
            { label: "Project", name: "Project", index: "Project", width: 100, align: "left" },
            {
                label: "API", name: "API", index: "API", width: 120, align: "left",
                formatter: function (cellvalue, options, rowObject) {
                    try {
                        return cellvalue.toString().substr(0, 10);
                    }
                    catch (ex) {
                        return "";
                    }
                }
            },
            { label: "Location", name: "Location", index: "Location", width: 100, align: "left" },
            { label: "Vendor", name: "Vendor", index: "Vendor", width: 100, align: "left" },
            { label: "Demand", name: "Demand", index: "Demand", width: 60, align: "left" },
            { label: "GSM", name: "GSM", index: "GSM", width: 100, align: "left" },
            { label: "NPSA", name: "NPSA", index: "NPSA", width: 100, align: "left" }
        ],
        viewrecords: true,
        rowNum: 30,
        rowList: [30, 50, 100],
        pager: "#gridPager",
        sortname: 'InputDate',
        sortorder: 'desc',
        rownumbers: true,
        shrinkToFit: false,
        gridview: true,
        onSelectRow: function () {
            selectedRowIndex = $("#" + this.id).getGridParam('selrow');
        },
        gridComplete: function () {
            $("#" + this.id).setSelection(selectedRowIndex, false);
        }
    });
    //    $gridTable.authorizeColModel();
    $('').formToArray;
    //查询事件
    $("#btn_Search").click(function () {
        $gridTable.jqGrid('setGridParam', {
            postData: {
                searchKey: $("#SearchKey").val(),
                searchType: $('#SearchType').val(),
                startTime: $('#StartTime').val(),
                endTime: $('#EndTime').val()
            },
            page: 1
        }).trigger('reloadGrid');
    });
}
//新增
function btn_add() {
    dialogOpen({
        id: "Form",
        title: 'Add This Week Data',
        url: '/YQ/NPSAInputData/Form',
        width: "960px",
        height: "500px",
        callBack: function (iframeId) {
            top.frames[iframeId].AcceptClick();
        }
    });
}
;
//编辑
function btn_edit() {
    var keyValue = $("#gridTable").jqGridRowValue("Id");
    if (checkedRow(keyValue)) {
        dialogOpen({
            id: "Form",
            title: 'Change NPSAInputData',
            url: '/YQ/NPSAInputData/Form?keyValue=' + keyValue,
            width: "960px",
            height: "500px",
            callBack: function (iframeId) {
                top.frames[iframeId].AcceptClick();
            }
        });
    }
}
//删除
function btn_delete() {
    var keyValue = $("#gridTable").jqGridRowValue("Id");
    if (checkedRow(keyValue)) {
        $.RemoveForm({
            url: "/YQ/NPSAInputData/Delete",
            param: { keyValue: keyValue },
            success: function (data) {
                $("#gridTable").trigger("reloadGrid");
            }
        });
    }
    else {
        dialogMsg('请选择需要删除的记录！', 0);
    }
}
function downExcel(url) {
    var el = document.createElement("a");
    document.body.appendChild(el);
    el.href = url; //url 是你得到的连接
    el.target = '_blank'; //指定在新窗口打开
    el.click();
    document.body.removeChild(el);
}
function btn_export() {
    //var load = layer.load("提交中...", 3);
    downExcel("/YQ/NPSAInputData/export");
}
//本周录入数据的计算结果
function btn_cal_result() {
    downExcel("/YQ/NPSAInputData/downCalResult");
}
//btn_publishToGSM
function btn_publishToGSM() {
    var url = "/YQ/NPSAInputData/publishToGSM";
    Loading(true, "正在生成发布数据...");
    $.post(url, {}, function (data) {
        var data = $.parseJSON(data);
        if (data.type == "3") {
            dialogAlert(data.message, -1);
        }
        else {
            Loading(false);
            dialogMsg(data.message, 1);
            downExcel("/YQ/NPSAInputData/DownloadToGSM");
        }
        Loading(false);
    });
}
function btn_workToGSM() {
    dialogContent({
        id: 'worktogsm',
        title: '系统窗口',
        width: "100px",
        height: "100px",
        content: $('#div-work-to-gsm').html(),
        btn: null,
        callBack: null
    });
}
//# sourceMappingURL=1.js.map