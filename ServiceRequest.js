var ajax=function (ops){
    // 先处理默认属性
    // ops.type = ops.type || "get";
    // ops.data = ops.data || "";
    // 根据当前的请求方式，决定是否需要拼接数据，处理url
    ops.url = ops.type=="get" ? ops.url + "?" + ops.data : ops.url;
    var xhr = new XMLHttpRequest();
    // 开启请求
    xhr.open(ops.type, ops.url);
    // 根据类型决定send的内容及内容数据格式
    if(ops.type == "get"){
        xhr.send();
    }else{
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(ops.data);
    }
    // 开启监听
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            // 执行回调函数，取出数据
            ops.success(JSON.parse(xhr.responseText));
        }
    }
}
