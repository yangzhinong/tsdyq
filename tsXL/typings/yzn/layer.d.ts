/*
 * yzn 2017/05/27
 * For layer version 1.9.5
 * http://layer.layui.com/api.html
 * http://layer.layui.com/1.8.5/
 */
declare var layer: Ilayer;

declare const enum LayerType {
    MessageBox = 0,
    PageLayer = 1,
    Iframe = 2,
    LoadLayer = 3,
    TipsLayer=4
}
declare const enum LayerIcon {

    Warn = 0,
    OK = 1,
    Question = 3,
    Lock = 4,
    CryingFace = 5,
    SaillingFace = 6,
    Error=-1
   

}

declare const enum LayerTipDicrect {
    Top = 1,
    Right = 2,
    Bottom = 3,
    Left =4
}


interface Ilayer {
    config(options): void;
    ready(path, callback): void;
    open(option: ILayerOptions): void;
    alert(content:string, opt: ILayerOptions, yes);
    confirm(content: string, options: ILayerOptions, yes:Function, cancel:Function);
    msg(content:string, options?, end?);
    tips(content:string, follow?: JQuery, options?:ILayerOptions) 
    tips(conten:string,options?:ILayerOptions)
    prompt(options:ILayerOptions, yes:(index:number,layero:JQuery)=>void);
    tab(options: ILayerTabOptions);  //erea, tab;[title:]
    photos(options:ILayerPhotoOptions);

    close(index:number)
    closeAll(type?:'dialog'|'page'|'iframe'|'loading'|'tips')
    style(index: number, cssStyle: Object);
    title(title: string, index: number);
    getChildFrame(selector, index);  //当你试图在当前页获取iframe页的DOM元素时，你可以用此方法。window[layero.find('iframe')[0]['name']];
    getFrameIndex(windowName);
    iframeAuto(index);//调用该方法时，iframe层的高度会重新进行适应
    setTop(layero:JQuery)//
    full();
    min();
    restore();


}

interface ILayerTabOptions extends ILayerOptions {
    tab: [{title:string, content:string}]
}

interface ILayerPhotoOptions extends ILayerOptions {
    photos: {
        title: string;  //相册标题
        id: number;  ////相册id
        start: number;
        data: {
            alt: string;  //图片名
            pid: number;  
            src: string;  //图片id
            thumb: string;
        }
    }
}

interface ILayerOptions {
    id?: string; //设置该值后，不管是什么类型的层，都只允许同时弹出一个。一般用于页面层和iframe层模式
    title?: string|boolean;
    type?: LayerType | number;  // LayerType常量
    content?: string | JQuery | string[];
    skin?: string;
    maxmin?: boolean; //是不有最大最小
    area?: string | string[]; //'auto ['auto', 'auto']
    shift?: number; //1..6 'left-top' | 'top' | 'right-top' | 'left' |'bottom'; //动画方式.
    closeBtn?: [number, boolean]; // [关闭按钮的风格（支持0和1）, true]
    time?: number; //0表示不自动关闭，若3秒后自动关闭，time: 3即可
    zIndex?: number;  //1000,不然其它部件有可能不正常
    shadeClose?: boolean;
    shade?: string | [number,string] | number  //即弹层外区域。默认是0.3透明度的黑色背景（'#000'）。如果你想定义别的颜色，可以shade: [0.8, '#393D49']
    success?: (layero: JQuery, index:number) => void;  //层弹出成功后的回调函数. 
    scrollbar?: boolean; //默认允许浏览器滚动
    fix?: boolean; //即鼠标滚动时，层是否固定在可视区域。如果不想，设置fix: false即可
    maxWidth?: number;  //最大宽度, 当area:'atuo'此设置才有效.
    move?: string |JQuery| boolean;  //默认是触发标题区域拖拽。如果你想单独定义，指向元素的选择器或者DOM即可。如move: '.mine-move'。你还配置设定move: false来禁止拖拽
    moveType?: 0 | 1; 
    moveOut?: boolean;  //默认只能在窗口内拖拽，如果你想让拖到窗外，那么设定moveOut: true即可
    moveEnd?: () => void;
    tips?: LayerTipDicrect | [LayerTipDicrect, string];  // tips方向和颜色
    tipsMore?: boolean;   //允许多个意味着不会销毁之前的tips层。通过tipsMore: true开启
    yes?: (index:number, layero:JQuery) => void;  //
    cancel?: (index: number) => boolean; //是否取消关闭 return false则不关闭.
    end?: () => void;  //无论是确认还是取消，只要层被销毁了，end都会执行，不携带任何参数。
    full?: (layero: JQuery) => void;
    min?: (layero: JQuery) => void;
    restore?: (layero: JQuery) => void;
    btn?: string | string[];
    btn3: (layero: JQuery, index: number) => void;

}



interface JQueryStatic {
    layer(ops:ILayerOptions): number;
}

