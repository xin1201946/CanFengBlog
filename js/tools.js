
/*
 * Copyright (c) 2024.  By Canfeng
 */

function change_background_image_tools(){
    const background_image = document.querySelector('body');
    NO_Video()
    background_image.style.backgroundImage= "url('https://bing.img.run/rand_uhd.php')";

}
function change_video_tools(str){
    if (str === 'help' || str==='HELP' || str === null || str=== undefined){
        console.info('可用参数 -> 类型 -> 本地映射')
        console.info('cat -> 视频 -> cat.mp4')
        console.info('sea -> 视频 -> sea.mp4')
        console.info('wood -> 视频 -> senlin.mp4')
        console.info('water -> 视频 -> bingchuan.mp4')
        console.info('apoc -> 视频 -> Apoc.mp4')
        console.info('cyber -> 视频 -> Cyber_Car.mp4')
        console.info('Other_Video_Url -> 视频Url')
    }else if (str === 'cat'){
        document.getElementById("v1").src='./video/cat.mp4'
        document.getElementById("v1").play()
    }else if (str === 'sea'){
        document.getElementById("v1").src='./video/sea.mp4'
        document.getElementById("v1").play()
    }else if (str === 'wood'){
        document.getElementById("v1").src='./video/senlin.mp4'
        document.getElementById("v1").play()
    }else if (str === 'water'){
        document.getElementById("v1").src='./video/bingchuan.mp4'
        document.getElementById("v1").play()
    }else if (str === 'cyber'){
        document.getElementById("v1").src='./video/Cyber_Car.mp4'
        document.getElementById("v1").play()
    }else if (str === 'apoc'){
        document.getElementById("v1").src='./video/Apoc.mp4'
        document.getElementById("v1").play()
    }else if (str === 'close') {
        document.getElementById("v1").src = null
    }else{
        document.getElementById("v1").src=str
        document.getElementById("v1").play()
    }
}
function ReflashHotikoto_tools(str){
    if (str=== undefined){
        str='z'
    }
    fetch('https://v1.hitokoto.cn/?c='+str)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.querySelector('#fromwho').innerText = `---${data.from}`;
            document.querySelector('#hitokoto_text').innerText = data.hitokoto;
            console.log(`%c一言 %c${data.hitokoto}`, 'color: rgba(255,255,255,.6); background: #5e72e4; font-size: 15px;border-radius:5px 0 0 5px;padding:10px 0 10px 20px;','color: #fff; background: #92A1F4; font-size: 15px;border-radius:0 5px 5px 0;padding:10px 20px 10px 15px;');
        })
        .catch(error => {
            console.error('Error fetching hitokoto:', error);
        });
    
}
function  send_about_message(){
    showNotification('欢迎访问 CanFeng的小站','站点地址: https://canfeng.kesug.com/',4000)
}
function close_notify_message(){
    showNotification('','',0)
}
function tools_help(){
    console.info('本JavaScript需要 DevelopmentConsole.js 作为前置!')
    console.info('change_video_tools(str) => 更换 视频壁纸')
    console.info('change_background_image_tools() => 更换背景图')
    console.info('ReflashHotikoto_tools(str) => 可根据 "一言" 官网的 "句子类型" 参数表选择要显示的句子类型')
    console.info('close_notify_message() => 强制关闭Notify')
    console.info('send_about_message() => 再次显示首次提示信息')
}
const yiyan = document.querySelector('.yiyanbutton');
yiyan.addEventListener('click', ReflashHotikoto);
const user_image=document.querySelector('#user_image');
user_image.addEventListener('click',send_about_message)
const close_notify =document.querySelector('#close_notify_button')
close_notify.addEventListener('click',close_notify_message)