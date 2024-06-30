/*
 * Copyright (c) 2024.  By Canfeng
 */

function development_help() {
    console.info('Development Help V1')
    console.info('===================')
    console.info('P_Color(str) -> 更换段落颜色')
    console.info('change_background_image(str) -> 更换背景图片,接受一个路径或者Url')
    console.info('change_BiaoTi(str) -> 更换大标题')
    console.info('NO_Video -> 更换壁纸的基础前置,用于关闭视频壁纸')
    console.info('Development Help V1')
}
function P_Color(str) {
    var p = document.querySelectorAll('p'); // 选择所有的<p>元素
    for (let i = 0; i < p.length; i++) { // 使用let声明循环变量i
        p[i].style.color = str; // 设置背景颜色
    }
}
function change_background_image(str){
    if (str ===  undefined){
        var background=document.querySelector("body");
        background.style.backgroundImage="url('" +'https://t.alcy.cc/pc/' + "')";
        return 'DONE...'
    }
    else{
        var background=document.querySelector("body");
        background.style.backgroundImage="url('" + str + "')";
        return 'DONE...'
    }

}
function change_BiaoTi(str){
    var biaoti=document.querySelector('.biaotiname');
    biaoti.textContent=str
    return "DONE..."
}
function NO_Video(){
    change_video_tools('close')
}


console.info('您已加载Development模式,V1.0,输入development_help() 查看帮助')
