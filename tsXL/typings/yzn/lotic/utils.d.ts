//declare var Loading(b: boolean, text: string): void;


interface JQueryStatic {
    SetForm(opt: LR.ISetFormOption);
    Validform(): boolean;
    SaveForm(opt: LR.ISaveFormOption);

    //删除数据
    RemoveForm(opt: LR.IRemoveFormOption);
    ConfirmAjax(opt: LR.IConfirmAjaxOption);
    ExistField(controlId: string, url: string, param?: Object): void;
    currentIframe(): Window; // HTMLIFrameElement; //返回当值iframe
    isbrowsername(): string; //返回浏览器名.
    download(url: string, data: string | Object, method: "post" | "get"): void;   //动态提交数据.
    isNullOrEmpty(obj: any): boolean;
    arrayClone(data: any[]): any[];


}




declare namespace LR {

    const enum JsonMsgType {
        info = 0,
        success = 1,
        warning=2,
        error = 3,

    }

     interface IJsonMsgReturnData {
         type: JsonMsgType;
         errorcode: number;
         message: string;
         resultdata: any;
     }
    
    interface ISaveFormOption {
        url: string;
        param?: object | { keyValue: any };
        type?: "post" | "get";
        dataType?: "json" | "xml";
        loading?: string;
        success?: (data:any)=>void;
        close?: boolean;
    }

    interface IRemoveFormOption {
        msg?: string;
        loading?: string;
        url: string;
        param?: object | { keyValue: any };
        type?: "post" | "get";
        dataType?: "json" | "xml";
        success?: (data: any) => void;
    }

    interface ISetFormOption {
        url: string;
        param?: object | { keyValue: any };
        type?:  "get"|"post";
        dataType?: "json" | "xml";
        success?: (data: any) => void;
        async?: boolean;
    }

    interface IConfirmAjaxOption extends IRemoveFormOption {

    }


    interface IComboBoxOption {
        id: string;
        text: string;
        url?: string;
        param?: any;
        allowSearch?: boolean;
        data?: any[];  //可以有title属性
        description?: string;
        height?: number;
        width?: number;
        onselect?: Function;

    }

    interface IComboxTreeOption {
        height?: number;
        url?: string;
        param?: any;
        allowSearch?: boolean;
        data?: any[];  //可以有title属性
        description?: string;
        appendTo?: string;
        click?: Function;
        method?: any;
        icon?: string;
    }

    interface IAuthoriazeColumElement {
        ActionCode: string;
        ViewCode: string;
    }

    interface IPaginationOption {
        firstBtnText?: string; // '首页',
        lastBtnText?: string; // '尾页',
        prevBtnText?: string;// '上一页',
        nextBtnText?: string;// '下一页',
        showInfo?: boolean;// true,
        showJump?: boolean;// true,
        jumpBtnText?: string;// '跳转',
        showPageSizes?: boolean;// true,
        infoFormat?: string;// '{start} ~ {end}条，共{total}条',
        sortname?: string;// '',
        url?: string; // "",
        success?: (rows:number,pageIndex:number)=>void; //,rows每页行数
        beforeSend?: Function; //,
        complete?: Function;//
        params?:Object //附加参数
    }



    interface IDialogOpenOption {
        id?: string;
        title?: string;
        width?: string; //"100px;"
        height?: string;
        url?: string;
        shade?: number;
        btn?: string[];
        callBack?: (id: string) => void;  //id==option.id  OKCallBack
        cancel?: () => void;
    }

    interface IDialogContentOption {
        id?: string;
        title?: string;
        width?: string; //"100px;"
        height?: string;
        content?: string|JQuery;
        btn?: string[];
        callBack?: (id: string, index?:number) => void;  //id==option.id  OKCallBack
    }
}

interface JQuery {
    ///可以从html直接加载, data-value data-text
    ComboBox(ops: LR.IComboBoxOption): void;
    ComboBoxSetValue(value: string);
    ComboBoxTree(ops: LR.IComboxTreeOption): void;
    ComboBoxTreeSetValue(value: string);

    SetWebControls(data: Object);
    GetWebControls(keyValue?: string): Object;
    SetWebControls(data: Object):void;
    //Contextmenu(): void;
    authorizeButton(): void;
    authorizeColModel(): void;

    panginationEx(opt: LR.IPaginationOption): void; //分页扩展
    page(opt: any); //默认分页,不建议用.

    jqGridEx(opt: LRJqGrid.JQueryJqGridOptions): void;
    jqGridRowValue(code: string): string; //返回String(any[])== ['2','5']??
    jqGridRow(): any[];//选中行的值数组

    serializeObject(): object;
    Validform(): boolean;

}

declare var tabiframeId: () => string;  //返回 顶frame .LRADMS_ifrmae:Visible 's id'
declare var Loading: (show: boolean, text?: string)=>void;
declare var dialogTop: (contentHtml: string, typeClass: string) => void;
declare var dialogOpen: (opt:LR.IDialogOpenOption) => void;  //iframe layer
declare var dialogContent: (opt: LR.IDialogContentOption) => void; //page layer
declare var dialogAlert: (content: string, type?: LayerIcon) => void;
declare var dialogConfirm: (content: string, callback: (ok: boolean) => void) => void;
declare var dialogMsg: (content: string, type?: LayerIcon) => void;
declare var dialogClose: () => void;
declare var reload: () => void;
declare var newGuid: () => string;
declare var formatDate: (v: any, fmt: string) => void;
declare var toDecimal: (v: any) => number;
declare var request: (keyValue) => string; //通过location.search 取各参数值
declare var changeUrlParam: (url: string, key: string, value: string) => string;

declare var checkedRow: (id: any) => boolean;
declare var checkedArray: (id: any) => boolean;

declare var IsMoney:(id: string)=>void; //设置文本框只能输金额
declare var IsIsNumber: (id: string) => void; //设置文本框只能输数字

declare var GUID: () => string; //生成Guid;


interface Date {
    DateAdd(strInterval: "ms"|"s"|"n"|"h"|"w"|"m"|"q"|"y", n: number):Date;

}
interface Window {
    authorizeColumnData: any[];
    AcceptClick(cb?: (data:any)=>void): void;
    layer: Ilayer;
    BootstrapDialog: IBootstrapDialog;
    
}

interface ITop extends Window {
    layer: Ilayer;
}


