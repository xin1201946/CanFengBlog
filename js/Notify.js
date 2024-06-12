/*
 * Copyright (c) 2024.  By Canfeng
 */
function notify_help(){
    console.info('showNotification(title,message,timeout) -> 显示指定信息')
}
function add_is_safe(){
    const notifycation_a=document.getElementById('about_notify_a')
    const abut_notify_button1=document.getElementById('abut_notify_button')
    if (notifycation_a.href.startsWith('https://')){
        abut_notify_button1.innerText='⩥ 访问提供的Url地址(安全)'
    }else if(notifycation_a.href.startsWith('file')){
        abut_notify_button1.innerText='⩥ 访问提供的Url地址(本地)'
    }else{
        abut_notify_button1.innerText='!⩥ 访问提供的Url地址(未知)'
    }
}
function add_is_safe_out(){
    const abut_notify_button1=document.getElementById('abut_notify_button')
    abut_notify_button1.innerText='⩥'
}

function showNotification(title,message,timeout=40000,about_Url) {
    const notification = document.getElementById('notification');
    const notification_title = document.getElementById('notify_title');
    const notification_message = document.getElementById('notify_message');
    const notifycation_a=document.getElementById('about_notify_a')
    const abut_notify_button=document.getElementById('abut_notify_button')
    const whocallme=showNotification.arguments.caller
    const notifycation_button =document.getElementById('close_notify_button')
    notification.classList.remove('show');
    if (title === undefined){
        title='来自Notify.js的提示: ';
    }
    if (message === undefined){
        message='By CanFeng Notify API\nUse "showNotification(title,message,timeout)" to show your first Notify!';
    }
    if (about_Url === undefined || about_Url===""){
        notifycation_a.style.visibility='hidden'
        notifycation_a.href=""
    }else{
        if (about_Url.startsWith('#')){
            notifycation_a.target='_self'
        }else{
            notifycation_a.target='_blank'
        }
        notifycation_a.style.visibility='visible'
        notifycation_a.href=about_Url
    }
    notification_title.innerText=title;
    notification_message.innerText=message;
    notification.classList.add('show');

    // N秒后自动隐藏通知
    setTimeout(function() {
        notification.classList.remove('show');
    }, timeout);
}
const abut_notify_button=document.getElementById('abut_notify_button')
abut_notify_button.addEventListener('mouseover',add_is_safe)
abut_notify_button.addEventListener('mouseout',add_is_safe_out)
