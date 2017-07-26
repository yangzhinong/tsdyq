// Type definitions for jQuery jqgrid Plugin 1.3
// Project: https://github.com/tonytomov/jqGrid
// Definitions by: Lokesh Peta <https://github.com/lokeshpeta/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../jquery/jquery.d.ts" />

// http://www.trirand.com/jqgridwiki/doku.php?id=wiki:colmodel_options


declare namespace LRJqGrid {

    

    interface IEditOptionsForText {
        size?: number;
        maxlength?: number;
    }
    interface IEditOptionsForTextarea {
        rows?: number;
        cols?: number;

    }

    interface IEditOptionsForCheck {
        value: string | "Yes:No";
    }
    interface IEditOptionsForSelect {
        value: string | Object;
    }

    interface IEditOptionForCustom {
        custom_element: (value, options) => HTMLElement;
        // function myelem(value, options) {
        //var el = document.createElement("input");
            //el.type = "text";
            //el.value = value;
        //return el;
        // }


    //function myvalue(elem, operation, value) {
    //    if (operation === 'get') {
    //        return $(elem).val();
    //    } else if (operation === 'set') {
    //        $('input', elem).val(value);
    //    }
    //}

        custom_value: (elem, operation:'get'|'set', value) => any;

    }

    interface IEditRules {
        required?: boolean;
        number?: boolean;
        integer?: boolean;
        minValue?: number;
        maxValue?: number;
        email?: boolean;
        url?: boolean;
        date?: boolean;
        time?: boolean;
        custom?: boolean;
        custome_func?: (value, colname) => boolean;
    }


    interface JQueryJqGridColumn {

        /**
         * Defines the alignment of the cell in the Body layer, not in header cell. Possible values: left, center, right
         */
        align?: "left" | "center" | "right";

        /**
         * This function add attributes to the cell during the creation of the data - i.e dynamically.
         * By example all valid attributes for the table cell can be used or a style attribute with different properties.
         * @param rowId the id of the row
         * @param val the value which will be added in the cell
         * @param rowObject  the raw object of the data row - i.e if datatype is json - array, if datatype is xml xml node.
         * @param cm all the properties of this column listed in the colModel
         * @param rdata the data row which will be inserted in the row. This parameter is array of type name:value, where name is the name in colModel
         * @returns {} 
         */
        cellattr?: (rowId: any, val: any, rowObject: any, cm: any, rdata: any) => string;

        /**
         * This option allow to add classes to the column. If more than one class will be used a space should be set.
         * By example classes:'class1 class2' will set a class1 and class2 to every cell on that column.
         * In the grid css there is a predefined class ui-ellipsis which allow to attach ellipsis to a particular row.
         * Also this will work in FireFox too.
         */
        classes?: string;

        /**
         * Governs format of sorttype:date (when datetype is set to local) and editrules {date:true} fields.
         * Determines the expected date format for that column. Uses a PHP-like date formatting. Currently "/", "-", and "." are supported as date separators. Valid formats are:
         *  y,Y,yyyy for four digits year
         *  YY, yy for two digits year
         *  m,mm for months
         *  d,dd for days.
         */
        datefmt?: string;

        /**
         * Defines if the field is editable. This option is used in cell, inline and form modules.
         */
        editable?: boolean;

        /**
         * The predefined types (string) or custom function name that controls the format of this field
         * @param cellvalue is the value to be formatted
         * @param options is an object containing the following element: rowId - is the id of the row colModel is the object of the properties for this column getted from colModel array of jqGrid
         * @param rowObject  is a row data represented in the format determined from datatype option. If we have datatype: xml/xmlstring - the rowObject is xml node,provided according to the rules from xmlReader If we have datatype: json/jsonstring - the rowObject is array, provided according to the rules from jsonReader
         * @returns {} the formatted value
         */
        formatter?: "integer" | "number" | "currency" | "date" | "email" | "link" | "showlink" | "checkbox" | "select" | "actions" | ((cellvalue: any, options: { rowId: any, colModel: any }, rowObject: any) => any);
        formatoptions?: { baseLinkUrl?: string, addParam?: string, idName?: string; }
        edittype?: 'text' | 'textarea' | 'select' | 'checkbox' | 'password' | 'button' | 'image' | 'file' | 'custom';
        editoptions?: { dataInit?: Function, value?: string /*select: '1:one;2:two;'*/ } | LRJqGrid.IEditOptionsForTextarea | LRJqGrid.IEditOptionsForText | LRJqGrid.IEditOptionForCustom;
        editrules?: LRJqGrid.IEditRules;



        /**
         * Defines if this column is hidden at initialization.
         */
        hidden?: boolean;

        /**
         * Set the index name when sorting. Passed as sidx parameter.
         */
        index?: string;

        /**
         * Overwrite the id (defined in readers) from server. Can be set as id for the unique row id. Only one column can have this property.
         * This option have higher priority as those from the readers.
         * If there are more than one key set the grid finds the first one and the second is ignored.
         */
        key?: boolean;

        /**
         * When colNames array is empty, defines the heading for this column.
         * If both the colNames array and this setting are empty, the heading for this column comes from the name property.
         */
        label?: string;

        /**
         * Set the unique name in the grid for the column.
         * This property is required.
         * As well as other words used as property/event names, the reserved words (which cannot be used for names) include subgrid, cb and rn.
         */
        name: string;

        /**
         * When used in search modules, disables or enables searching on that column
         */
        search?: boolean;

        /**
         * Defines is this can be sorted
         */
        sortable?: boolean;

        /**
         * Set the initial width of the column, in pixels. This value currently can not be set as percentage
         */
        width?: number;
    }

    interface IJqGridJsonReader {
        /**
         * tells jqGrid that the information for the data in the row is repeatable - i.e. the elements have the same tag cell described in cell element. Setting this option to false instructs jqGrid to search elements in the json data by name.
         * This is the name from colModel or the name described with the jsonmap option in colModel
         */
        repeatitems: boolean;

        /**
         * Name of the root property
         * @param obj 
         * @returns {} 
         */
        root: string | ((obj: any) => any);

        /**
         * current page of the query
         * @param obj 
         * @returns {} 
         */
        page: string | ((obj: any) => number);

        /**
         * total pages for the query
         * @param obj 
         * @returns {} 
         */
        total: string | ((obj: any) => number);

        /**
         * total number of records for the query
         * @param obj 
         * @returns {} 
         */
        records: string | ((obj: { data: any[] }) => number);
    }

    interface JQueryJqGridOptions {
        /**
         * When set to true encodes (html encode) the incoming (from server) and posted data (from editing modules).
         */
        autoencode?: boolean;
        autowidth?: boolean;
        postData?: object;

        rownumbers?: boolean;
        //单元格编辑
        cellEdit?: boolean;
        cellsubmit?: 'remote' | 'clientArray';
        cellurl?: string;
        rownumWidth?: number;

        treeGrid?: boolean;
        treeGridModel?: 'nested' |'adjacency';
        treeIcons?: { plus: string, minus: string, leaf: string };
        tree_root_level?: number;
        treeReader?: any;
        userData?: any;
        

        /**
         * When set to true, the grid width is recalculated automatically to the width of the parent element.
         * This is done only initially when the grid is created.
         * In order to resize the grid when the parent element changes width you should apply custom code and use the setGridWidth method for this purpose
         */
        autoWidth?: boolean;

        /**
         * Defines the caption for the grid. This caption appears in the caption layer, which is above the header layer
         */
        caption?: string;

        /**
         * Array which describes the parameters of the columns. This is the most important part of the grid.
         */
        colModel?: JQueryJqGridColumn[];

        /**
         * An array in which we place the names of the columns.
         * This is the text that appears in the head of the grid (header layer). The names are separated with commas.
         * Note that the number of elements in this array should be equal of the number elements in the colModel array.
         */
        colNames?: string[];

        /**
         * An array that stores the local data passed to the grid. You can directly point to this variable in case you want to load an array data.
         * It can replace the addRowData method which is slow on relative big data
         */
        data?: any[];

        /**
         * Defines in what format to expect the data that fills the grid.
         * Valid options are xml (we expect data in xml format), xmlstring (we expect xml data as string), json (we expect data in JSON format),
         * jsonstring (we expect JSON data as a string), local (we expect data defined at client side (array data)),
         * javascript (we expect javascript as data), function (custom defined function for retrieving data),
         * or clientSide to manually load data via the data array
         */
        datatype?: "xml" | "xmlstring" | "json" | "jsonstring" | "local" | "javascript" | Function | "clientSide";

        /**
         * If set to true, and a column's width is changed, the adjacent column (to the right) will resize so that the overall grid width is maintained
         * (e.g., reducing the width of column 2 by 30px will increase the size of column 3 by 30px). In this case there is no horizontal scrollbar.
         * Note: This option is not compatible with shrinkToFit option - i.e if shrinkToFit is set to false, forceFit is ignored.
         */
        forceFit?: boolean;
        /**
         * What will be the result if we insert all the data at once?
         * Yes, this can be done with a help of gridview option (set it to true).
         * The result is a grid that is 5 to 10 times faster. Of course, when this option is set to true we have some limitations.
         * If set to true we can not use treeGrid, subGrid, or the afterInsertRow event.
         * If you do not use these three options in the grid you can set this option to true and enjoy the speed.
         */
        gridview?: boolean;

        /**
         * The height of the grid.
         * Can be set as number (in this case we mean pixels) or as percentage (only 100% is accepted) or value of auto is acceptable.
         */
        height?: number | string | "auto";

        /**
         * If this flag is set to true, the grid loads the data from the server only once (using the appropriate datatype).
         * After the first request, the datatype parameter is automatically changed to local and all further manipulations are done on the client side.
         * The functions of the pager (if present) are disabled.
         */
        loadonce?: boolean;

        sorttype?: 'text' | 'number' | 'date' | 'int' | 'float';

        /**
         * An array which describes the structure of the expected json data.
         */
        jsonReader?: IJqGridJsonReader;

        /**
         * Defines the type of request to make ("POST" or "GET")
         */
        mtype?: "GET" | "POST";

        /**
         * This option works only when the multiselect option is set to true.
         * When multiselect is set to true, clicking anywhere on a row selects that row;
         * when multiboxonly is also set to true, the multiselection is done only when the checkbox is clicked (Yahoo style).
         * Clicking in any other row (suppose the checkbox is not clicked) deselects all rows and selects the current row.
         */
        multiboxonly?: boolean;

        /**
         * If this flag is set to true a multi selection of rows is enabled. A new column at left side containing checkboxes is added.
         * Can be used with any datatype option
         */
        multiselect?: boolean;

        /**
         * Defines that we want to use a pager bar to navigate through the records.
         * This must be a valid HTML element; in our example we gave the div the id of "pager", but any name is acceptable.
         * Note that the navigation layer (the "pager" div) can be positioned anywhere you want, determined by your HTML;
         * in our example we specified that the pager will appear after the body layer.
         * The valid settings can be (in the context of our example) pager, #pager, jQuery('#pager').
         * I recommend to use the second one - #pager
         */
        pager?: string;

        /**
         * An array to construct a select box element in the pager in which we can change the number of the visible rows.
         * When changed during the execution, this parameter replaces the rowNum parameter that is passed to the url.
         * If the array is empty, this element does not appear in the pager. Typically you can set this like [10,20,30].
         * If the rowNum parameter is set to 30 then the selected value in the select box is 30
         */
        rowList?: number[];

        /**
         * Sets how many records we want to view in the grid. This parameter is passed to the url for use by the server routine retrieving the data.
         * Note that if you set this parameter to 10 (i.e. retrieve 10 records) and your server return 15 then only 10 records will be loaded
         */
        rowNum?: number;

        /**
         * This option, if set, defines how the the width of the columns of the grid should be re-calculated, taking into consideration the width of the grid.
         * If this value is true, and the width of the columns is also set, then every column is scaled in proportion to its width.
         * For example, if we define two columns with widths 80 and 120 pixels, but want the grid to have a width of 300 pixels,
         * then the columns will stretch to fit the entire grid, and the extra width assigned to them will depend on the width of the columns themselves and the extra width available.
         * The re-calculation is done as follows: the first column gets the width (300(new width)/200(sum of all widths))*80(first column width) = 120 pixels,
         * and the second column gets the width (300(new width)/200(sum of all widths))*120(second column width) = 180 pixels.
         * Now the widths of the columns sum up to 300 pixels, which is the width of the grid.
         * If the value is false and the value in width option is set, then no re-sizing happens whatsoever.
         * So in this example, if shrinkToFit is set to false, column one will have a width of 80 pixels,
         * column two will have a width of 120 pixels and the grid will retain the width of 300 pixels.
         * If the value of shrinkToFit is an integer, the width is calculated according to it.
         */
        shrinkToFit?: boolean | number;

        /**
         * The column according to which the data is to be sorted when it is initially loaded from the server
         * (note that you will have to use datatypes xml or json to load remote data). This parameter is appended to the url.
         * If this value is set and the index (name) matches the name from colModel,
         * then an icon indicating that the grid is sorted according to this column is added to the column header.
         * This icon also indicates the sorting order - descending or ascending (see the parameter sortorder). Also see prmNames
         */
        sortname?: string;

        /**
         * The initial sorting order (ascending or descending) when we fetch data from the server using datatypes xml or json.
         * This parameter is appended to the url - see prnNames. The two allowed values are - asc or desc.
         */
        sortorder?: "asc" | "desc";

        /**
         * The url of the file that returns the data needed to populate the grid. May be set to clientArray to manualy post data to server
         */
        url?: string | "clientArray";

        /**
         * If true, jqGrid displays the beginning and ending record number in the grid, out of the total number of records in the query.
         * This information is shown in the pager bar (bottom right by default)in this format: "View X to Y out of Z".
         * If this value is true, there are other parameters that can be adjusted, including emptyrecords and recordtext.
         */
        viewrecords?: boolean;

        /**
         * If this option is not set, the width of the grid is the sum of the widths of the columns defined in the colModel (in pixels).
         * If this option is set, the initial width of each column is set according to the value of the shrinkToFit option.
         */
        width?: number;

        // events

        /**
         * This fires after all the data is loaded into the grid and all other processes are complete.
         * Also the event fires independent from the datatype parameter and after sorting paging and etc.
         * @returns {} 
         */
        gridComplete?: () => void;

        /**
         * Raised immediately after row was right clicked
         * @param rowid is the id of the row
         * @param iRow is the index of the row (do not mix this with the rowid)
         * @param iCol is the index of the cell
         * @param e  is the event object
         * @returns {} 
         */
        onRightClickRow?: (rowid: any, iRow: number, iCol: number, e: Event) => void;

        /**
         * Raised immediately after row was clicked.
         * @param id  is the id of the row
         * @param status is the status of the selection
         * @param e  is the event object. Can be used when multiselect is set to true. true if the row is selected, false if the row is deselected.
         * @returns {} 
         */
        onSelectRow?: (id: string, status: any, e: Event) => void;

        //单元格编辑事件.
        afterEditCell?: (rowid, cellname, value, irow, icol) => void;
        afterSaveCell?: (rowid, cellname, value, irow, icol) => void;
        afterSubmitCell?: (serverresponse: { success: boolean, message: string }, rowid, cellname, value, irow, icol) => void;
        beforeSaveCell?: (rowid, cellname, value, irow, icol) => string;  //The return value will be replaced with “new value”
        beforeSubmitCell?: (rowid, cellname, value, irow, icol) => Object; //The returned object will be added to the cellurl posted data.
        formatCell?: (rowid, cellname, value, irow, icol) => string; //applies only to a cell that is editable; this event allows formatting the cell content before editing, and returns the formatted value
        onSelectCell?: (rowid, cellname, value, irow, icol) => void;  //最后发生fires after the cell is selected // Fires when a cell is not editable
        afterRestoreCell?: (rowid, cellname, value, irow, icol) => void; //applies only to a cell that is editable; this event fires after calling the method restoreCell or the user press ESC leaving the changes
        errorCell?: (serverresponse, status) => void;// fires if there is a server error; servereresponse is the response from the server.To use this we should apply serverresponse.responseText to obtain the text message from the server.status is the status of the error.If not set a modal dialog apper.
    }
    
}


//interface JQueryJqGridStatic {
//    (): JQuery;
//    (gridName: string): any;
//    (gridName: string, propName: string): any;
//    (gridName: string, obj: any): any;
//    (gridName: string, id: any, colname: any): any;
//    (options: LRJqGrid.JQueryJqGridOptions): JQuery;
//}


//interface JQueryStatic {
//    jqGrid?: JQueryJqGridStatic;
//}

interface JQuery {
    //jqGrid: JQueryJqGridStatic;
    jqGrid(opt: LRJqGrid.JQueryJqGridOptions): JQuery;
    jqGrid(method: 'setGridParam', opt: { postData?: object,page?:number }):JQuery;
    jqGrid(method: 'getGridParam', name: keyof LRJqGrid.JQueryJqGridOptions): JQuery;
    jqGrid(method: 'addRowData', rowid: string, data: any, position?: 'first' | 'last' | 'before' | 'after', srcrowid?: string): JQuery;
    jqGrid(method: 'addJSONData', data: any[]): JQuery;

    jqGrid(method: 'getRowData', rowid: string): any;
    jqGrid(method: 'delRowData', rowid: string): any;
    jqGrid(method: 'setRowData', rowid: string, data:any):JQuery;
    jqGrid(method: 'setRowData', rowid: string, data: any): JQuery;
    jqGrid(method: 'clearGridData', clearfooter?: boolean): JQuery

    jqGrid(method: 'getCell', rowid: string, iColIndex: string): any;

    jqGrid(method: 'resetSelection'): JQuery;
    jqGrid(method: 'setSelection', rowid:string, trigerOnSelectRow?: boolean): JQuery;

    jqGrid(method: 'setGridHeight', value: number): JQuery;
    jqGrid(method: 'setGridWidth', value: number): JQuery;

    jqGrid(method: 'showCol', colname: string): JQuery;
    jqGrid(method: 'hideCol', colname: string): JQuery;

    jqGrid(method: 'getDataIDs'): string[];
    jqGrid(method: 'getCol', colname: string, returnType: boolean, op?: 'sum' | 'avg' | 'count'): number | { id: string, value: any }[];

    jqGrid(method: 'getInd', rowid: string): number;
    




}