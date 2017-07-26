
declare namespace BootStrapTable {

    type IFormatterReturn = {
        disabled?: boolean, checked?: boolean, value?: any
    } | string;

    type IFormatter = string | ((value: any, row?: any, index?: number)=> BootStrapTable.IFormatterReturn);

    interface IColParam {
        radio?: boolean;
        checkbox?: boolean;  //ʹ�ø�ѡ��?
        sortable?: boolean; //����������?
        switchable?: boolean;
        field?: string;
        title?: string;  //����
        titleTooltip?: string;
        class?: string;
        rowspan?: number;
        colspan?: number;
        align?: 'left' | 'right' | 'center';
        halign?: string;  // ��ͷ����
        valign?: 'top' | 'middle' | 'bottom';
        width?: number;
        visible?: boolean;
        clickToSelect?: boolean;  //True to select checkbox or radio when the column is clicked.


        formatter?: IFormatter;  //�����ӷ�������Ϊ"ID %s", ����һ��������. 

        //�����һ��������,�� ��������ķ���ֵ��һ��html�ַ���.
    }


    interface IOption<R> {
        data?: R[];
        columns?: BootStrapTable.IColParam[];
        url?: string;
        method?: 'get' | 'post';
        cache?: boolean,
        contentType?: string, //'application/json' The contentType of request remote data.
        dataType?: string, //'json' The type of data that you are expecting back from the server.

            //When requesting remote data, you can send additional parameters by modifying queryParams.
            // If queryParamsType = 'limit', the params object contains:
                   //limit, offset, search, sort, order
            // Else, it contains:
            //pageSize, pageNumber, searchText, sortName, sortOrder.
            //Return false to stop request.
        queryParams?: (params: any) => any; 

        queryParamsType?: string; //Set 'limit' to send query params width RESTFul type. ��Դ�뿴�����û����
        icons?: any;  // �Զ���ͼ�� { }
        iconsPrefix?: string;
        classes?: string;  //table table-hover
        sortClass?: string;
        height?: number;
        striped?: boolean;  //���б�ɫ
        undefinedText?: string; //������Ϊundefinedʱ �����ʾ.
        sortName?: string | (() => string);
        sortOrder?: 'asc' | 'desc';
        pagination?: boolean;
        paginationLoop?: boolean;
        sidePagination?: 'client' | 'server';
        pageNumber?: number; //��ҳҳ��
        pageSize?: number; // ҳ��������.
        pageList?: number[]; //ҳ������ѡ��������.
        search?: boolean; //�Ƿ�����������.
        searchOnEnterKey?: boolean;
        strictSearch?: boolean;
        searchText?: string; //��ʼ�������ı�.
        searchTimeOut?: number;
        trimOnSearch?: boolean;
        showHeader?: boolean;
        showFooter?: boolean;
        showColumns?: boolean;  //�Ƿ���ʾ��Щ����Ҫ��ʾ.
        showRefresh?: boolean;
        showPaginationSwitch?: boolean;  //�Ƿ���ʾ��������ѡ���, �� pageList������.
        minimumCountColumns?: number;  //������С�ڴ�ֵʱ��������������������Ĭ��ֵΪ1
        idField?: string; //ָ��������.
        uniqueId?: string; // Indicate an unique identifier for each row.
        toolbarAlign?: string;
        buttonsAlign?: string;
        searchAlign?: string;
        paginationVAlign?: 'top' | 'bottom' | 'both';
        paginationHAlign?: string;

        paginationPreText?: string; // '<'
        paginationNextText?: string; // '>'
        clickToSelect?: boolean; // false;   //�����м���ѡ��.
        singleSelect?: boolean; // ����Ϊtrue, ����ֹ��ѡ.
        toolbar?: string; // һ��jQuery ѡ������ָ���Զ����toolbar ����:  #toolbar, .toolbar.
        checkboxHeader?: boolean; // ����false ������ͷ����check-all checkbox .
        maintainSelected?: boolean; // ����Ϊ true �ڵ����ҳ��ť��������ťʱ������סcheckbox��ѡ����
        sortable?: boolean;  //����Ϊfalse ����ֹ�����е�����
        silentSort?: boolean; //����Ϊ false ���ڵ����ҳ��ťʱ���Զ���ס��������� sidePagination����Ϊ serverʱ��Ч
        rowStyle?: ((rowData: R, rowIndex: number) => string); //�Զ�������ʽ ����Ϊ: row: ������; index: ���±�; ����ֵ����Ϊclass����css
        rowAttributes?: ((rowData: R, rowIndex: number) => any);

        detailView?: boolean;   //�����ӱ� ������trueʱ,������onExpandRow�ص�����.

        //����Ҫ���� detailView:true
        // $detail��չ���������.
        onExpandRow?: (index: number, row: R, $detail: JQuery) => void;

        onCheck?: (row: R, $e?:JQuery) => void;
        onUncheck?: (row: R,$e?:JQuery) => void;
        onCheckAll?: (rows: R[]) => void;
        onUncheckAll?: (rows: R[]) => void;
        //onPageChange?: (number, size) => void;
        onSearch?: (txt: string) => void;

        //Fires when user click a row, the parameters contain: 
        //row: the record corresponding to the clicked row,
        //$tr: the tr element,
        //field: the field name corresponding to the clicked cell.
        onClickRow?: (row: R, $tr: JQuery, field: string) => void;
        onDblClickRow?: (row: R, $tr: JQuery, field: string) => void;

        //    Fires when user click a cell, the parameters contain:
        //    field: the field name corresponding to the clicked cell,
        //    value: the data value corresponding to the clicked cell,
        //    row: the record corresponding to the clicked row,
        //    $element: the td element.

        onClickCell?: (field: string, value, row: R, $element) => void;
        onDblClickCell?: (field: string, value, row: R, $element) => void;

        //name: the sort column field name
        //order: the sort column order.
        onSort?: (field: string, order: 'asc' | 'desc') => void;

        ajax?: string | ((p: IAjaxParams) => void); //A method to replace ajax call. Should implement the same API as jQuery ajax method.
        onLoadSuccess?: (data?: R[]) => void;
        onLoadError?: (status, res) => void;
        onColumnSwitch?: (field: string, checked: boolean) => void; //Fires when switch the column visible.
        onColumnSearch?: (field: string, text: string) => void; //Fires when search by column.
        onPageChange?: (pageIndex: number, pageSize: number) => void; //Fires when change the page number or page size.
    }

    interface IAjaxParams {
        data: {
            search: string,
            sort: string,
            asc: string,  //asc desc
            offset: number,  //20
            limit: number
        };
        success(d: {
            total: number,
            rows: any[]
        });

    }

    interface ICheckByData {
        field: string;
        values: number[];

    }



}









interface JQuery {
    bootstrapTable<R>(opt: BootStrapTable.IOption<R>): void;
    /*
     * uncheckAll
     * resetView
     * getSelections
     */
    //bootstrapTable(cmd: string): any;

    bootstrapTable(cmd: "uncheckAll" | "resetView"
                         | 'checkAll'): void;
    //bootstrapTable(cmd: "resetView"): void;
    bootstrapTable(cmd: "getSelections" | 'getAllSelections' |'getData'): any[];
    bootstrapTable(cmd: string, data: any): void;
    bootstrapTable(cmd: "checkBy" |"uncheckBy", data: BootStrapTable.ICheckByData): void;
    bootstrapTable(cmd: "check" | 'uncheck', index: number): void;
 
    //bootstrapTable(cmd: "checkAll"): void;
    //getSelections-Return selected rows, when no record selected, an empty array will return


//    var allowedMethods = [
//    'getOptions',
//    'getSelections', 'getAllSelections', 'getData',
//    'load', 'append', 'prepend', 'remove', 'removeAll',
//    'insertRow', 'updateRow', 'updateCell', 'updateByUniqueId', 'removeByUniqueId',
//    'getRowByUniqueId', 'showRow', 'hideRow', 'getRowsHidden',
//    'mergeCells',
//    'checkAll', 'uncheckAll', 'checkInvert',
//    'check', 'uncheck',
//    'checkBy', 'uncheckBy',
//    'refresh',
//    'resetView',
//    'resetWidth',
//    'destroy',
//    'showLoading', 'hideLoading',
//    'showColumn', 'hideColumn', 'getHiddenColumns',
//    'filterBy',
//    'scrollTo',
//    'getScrollPosition',
//    'selectPage', 'prevPage', 'nextPage',
//    'togglePagination',
//    'toggleView',
//    'refreshOptions',
//    'resetSearch',
//    'expandRow', 'collapseRow', 'expandAllRows', 'collapseAllRows',
//    'updateFormatText'
//];

    
//    BootstrapTable.EVENTS = {
//    'all.bs.table': 'onAll',
//    'click-cell.bs.table': 'onClickCell',
//    'dbl-click-cell.bs.table': 'onDblClickCell',
//    'click-row.bs.table': 'onClickRow',
//    'dbl-click-row.bs.table': 'onDblClickRow',
//    'sort.bs.table': 'onSort',
//    'check.bs.table': 'onCheck',
//    'uncheck.bs.table': 'onUncheck',
//    'check-all.bs.table': 'onCheckAll',
//    'uncheck-all.bs.table': 'onUncheckAll',
//    'check-some.bs.table': 'onCheckSome',
//    'uncheck-some.bs.table': 'onUncheckSome',
//    'load-success.bs.table': 'onLoadSuccess',
//    'load-error.bs.table': 'onLoadError',
//    'column-switch.bs.table': 'onColumnSwitch',
//    'page-change.bs.table': 'onPageChange',
//    'search.bs.table': 'onSearch',
//    'toggle.bs.table': 'onToggle',
//    'pre-body.bs.table': 'onPreBody',
//    'post-body.bs.table': 'onPostBody',
//    'post-header.bs.table': 'onPostHeader',
//    'expand-row.bs.table': 'onExpandRow',
//    'collapse-row.bs.table': 'onCollapseRow',
//    'refresh-options.bs.table': 'onRefreshOptions',
//    'reset-view.bs.table': 'onResetView'
//};


}



