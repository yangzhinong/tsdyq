/// add html attr: data-key, data-target, data-min��data-max(�ı�����)
////*!jquery - html5Validate.js ����HTML5����֤��jQuery���
////    * ֧��type="email", type = "number", type = "tel", type = "url", type = "zipcode", �Լ���type, ��type = "email|tel".֧�� step, min, max, required, pattern, multiple
////        * ��4���Զ�����չ���� data- key, data - target, data - min, data - max
////            * �ĵ���http://www.zhangxinxu.com/wordpress/?p=2857
//// * ��������κ����⣬�����ʼ���zhangxinxu@zhangxinxu.com
//// * create by zhangxinxu 2012- 12 - 05
////    * v1.0 beta
////on 2012- 12 - 05 ����
////on 2012- 12 - 06 �����Ե���
////on 2012- 12 - 14 ���Ӷ�multiple����֧��
////testRemind���������������
////on 2012- 12 - 17 ����submitEnabled����
////on 2012- 12 - 19 ��¶testRemind������CSS����
////on 2012- 12 - 20 testRemind�������overflow: hidden for IE6
////	v1.0 publish on 2012- 12 - 20
////v1.2 on 2012- 12 - 21 ���ʵ�ʸ߶ȿ��ܸ��ǵ���ѡ������⣬���˸߶����ƴ���
////v1.2.1 on 2013- 03 - 20 ����hidden��ʾʱ��Ķ�λ���Ա��ڶ����µ�ʱ����ʾ�ɼ�
////v1.3 on 2013- 06 - 19 ����validate������Ӧ������һЩ�Զ������֤
interface JQueryStatic {

    html5Validate: IHtml5Vailate;
}

declare var OBJREG: { prompt: {} };  //�ɶ�̬�������� ��:OBJREG['RMB'] = "^\\d+.\\d{0,2}$";, OBJREG.prompt.rmb="����"

interface JQuery {
    testRemind(msg: string,
        opt?: {
            size: number,
            align?: 'center' | 'left' | 'right',
            css: {}
        }): void;
    isVisible(): boolean;  //���Ԫ���Ƿ�ɼ�.
    hasProp(): boolean;   //Boole�����Լ��, ָrequired, multiple, novalidate������.
    html5Validate(success: () => void,
        config: {
            novalidate?: boolean,  //�Ƿ�ȡ���ִ��������������֤
            submitEnabled?: boolean, //���н����ύ��ť
            validate?: () => boolean //��������ֵ,�������֤
        });
    //��һ���ط�д���������.
    disabled: boolean;
    enabled: boolean;
    render(): string;
    render(data: any): string;
    live(event: string, cb: any);
}

interface IHtml5Vailate {
    isAllpass(obj: JQuery): boolean;  //���û�й�ϵ.
    
}

