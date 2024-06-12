/*
 * Copyright (c) 2024.  By Canfeng
 */

function show_About_Plugin_Footer_button() {
    let title1 ="About-关于"
    let message1 ="作者: CanFeng\n网站参考: CanFeng的小站\n参考代码网站: https://canfeng.kesug.com/\n版权声明: Copyright (c) 2024.  By Canfeng\n"
    showNotification(title1,message1,40000,'https://canfeng.kesug.com/')
}
footer_button=document.getElementById('footer_button_about')
footer_button.addEventListener('click',show_About_Plugin_Footer_button)