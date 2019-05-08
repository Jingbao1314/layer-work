$(function(){
    //页面加载完成之后执行
    pageInit();
});
function pageInit(){
    //创建jqGrid组件
    jQuery("#list2").jqGrid(
        {
            url : 'data/JSONData.json',//组件创建完成之后请求数据的url
            datatype : "json",//请求数据返回的类型。可选json,xml,txt
            colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ,'images'],//jqGrid的列显示名字
            colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                {name : 'id',index : 'id',width : 55},
                {name : 'invdate',index : 'invdate',width : 90},
                {name : 'name',index : 'name asc, invdate',width : 100},
                {name : 'amount',index : 'amount',width : 80,align : "right"},
                {name : 'tax',index : 'tax',width : 80,align : "right"},
                {name : 'total',index : 'total',width : 80,align : "right"},
                {name : 'note',index : 'note',width : 150,sortable : false} ,
                {name : 'images',index : 'images',width : 55 ,formatter: imageFormat}
            ],
            rowNum : 10,//一页显示多少条
            rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
            pager : '#pager2',//表格页脚的占位符(一般是div)的id
            sortname : 'id',//初始化的时候排序的字段
            sortorder : "desc",//排序方式,可选desc,asc
            mtype : "post",//向后台请求数据的ajax的类型。可选post,get
            viewrecords : true,
            caption : "JSON Example"//表格的标题名字
        });


    function imageFormat( cellvalue, options, rowObject ){
        // ele='{type: 1,title: false, closeBtn: 0,offset:' +
        //     ' [Math.random()*($(window).height()/2), Math.random()*($(window).width()/2)],'+
        //     'skin: \'layui-layer-nobg\',shadeClose: true,content:' + '<img ' +
        //     ' src='+cellvalue+'>'
        // res='<input type="image" onclick=layer.open('+ele+'}) ' +
        //     ' style="width:50px;height:50px;"' + ' "src"='+cellvalue+ '>'
        res='<input type="image" onclick=_opt.operation.myOpen("'+cellvalue+'");' +
            ' style="width:50px;height:50px;"src="'+cellvalue+ '" id="'+cellvalue+ '">'
        return res;

    }

    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}

var _opt = _opt || {};
_opt.operation = {
    myOpen : function(id) {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: ['auto','auto'],
            offset: 'auto',
            shadeClose: true,
            content:
                '<img src='+id+' >'
        })
        // console.log(id);
        // var times=localStorage.getItem("times");
        // if (times==null){
        //     localStorage.setItem("times",1);
        // }
        // var t=document.getElementById(id);
        // if (times==1){
        //
        //     t.setAttribute("style","width: 50%;height: auto;margin: 50px auto;display: flex;justify-content: center;align-items: center;")
        //     localStorage.setItem("times",2);
        // }else {
        //     t.setAttribute("style","width: 50px;height: 50px;");
        //     localStorage.setItem("times",1);
        // }
    }
}