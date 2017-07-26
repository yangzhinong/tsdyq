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
    getChildFrame(selector, index);  //������ͼ�ڵ�ǰҳ��ȡiframeҳ��DOMԪ��ʱ��������ô˷�����window[layero.find('iframe')[0]['name']];
    getFrameIndex(windowName);
    iframeAuto(index);//���ø÷���ʱ��iframe��ĸ߶Ȼ����½�����Ӧ
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
        title: string;  //������
        id: number;  ////���id
        start: number;
        data: {
            alt: string;  //ͼƬ��
            pid: number;  
            src: string;  //ͼƬid
            thumb: string;
        }
    }
}

interface ILayerOptions {
    id?: string; //���ø�ֵ�󣬲�����ʲô���͵Ĳ㣬��ֻ����ͬʱ����һ����һ������ҳ����iframe��ģʽ
    title?: string|boolean;
    type?: LayerType | number;  // LayerType����
    content?: string | JQuery | string[];
    skin?: string;
    maxmin?: boolean; //�ǲ��������С
    area?: string | string[]; //'auto ['auto', 'auto']
    shift?: number; //1..6 'left-top' | 'top' | 'right-top' | 'left' |'bottom'; //������ʽ.
    closeBtn?: [number, boolean]; // [�رհ�ť�ķ��֧��0��1��, true]
    time?: number; //0��ʾ���Զ��رգ���3����Զ��رգ�time: 3����
    zIndex?: number;  //1000,��Ȼ���������п��ܲ�����
    shadeClose?: boolean;
    shade?: string | [number,string] | number  //������������Ĭ����0.3͸���ȵĺ�ɫ������'#000'����������붨������ɫ������shade: [0.8, '#393D49']
    success?: (layero: JQuery, index:number) => void;  //�㵯���ɹ���Ļص�����. 
    scrollbar?: boolean; //Ĭ���������������
    fix?: boolean; //��������ʱ�����Ƿ�̶��ڿ�������������룬����fix: false����
    maxWidth?: number;  //�����, ��area:'atuo'�����ò���Ч.
    move?: string |JQuery| boolean;  //Ĭ���Ǵ�������������ק��������뵥�����壬ָ��Ԫ�ص�ѡ��������DOM���ɡ���move: '.mine-move'���㻹�����趨move: false����ֹ��ק
    moveType?: 0 | 1; 
    moveOut?: boolean;  //Ĭ��ֻ���ڴ�������ק������������ϵ����⣬��ô�趨moveOut: true����
    moveEnd?: () => void;
    tips?: LayerTipDicrect | [LayerTipDicrect, string];  // tips�������ɫ
    tipsMore?: boolean;   //��������ζ�Ų�������֮ǰ��tips�㡣ͨ��tipsMore: true����
    yes?: (index:number, layero:JQuery) => void;  //
    cancel?: (index: number) => boolean; //�Ƿ�ȡ���ر� return false�򲻹ر�.
    end?: () => void;  //������ȷ�ϻ���ȡ����ֻҪ�㱻�����ˣ�end����ִ�У���Я���κβ�����
    full?: (layero: JQuery) => void;
    min?: (layero: JQuery) => void;
    restore?: (layero: JQuery) => void;
    btn?: string | string[];
    btn3: (layero: JQuery, index: number) => void;

}



interface JQueryStatic {
    layer(ops:ILayerOptions): number;
}

