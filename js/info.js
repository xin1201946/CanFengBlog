
/*
 * Copyright (c) 2024.  By Canfeng
 */

ReflashHotikoto()
function info(){
    console.log('%c CanFeng %c https://canfeng.kesug.com', 'background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff', '');
   }
function update_info(){
    let title='更新日志:'
    let message="2024-5-15: 网页框架搭建完成\n" +
        "2024-5-20: 修改框架,美化界面\n" +
        "2024-5-23: 开放源码至canfeng.kesug.com\n" +
        "2024-5-30: 基于源码二次重置,删除大量br元素\n" +
        "2024-5-31: 加入视频壁纸,并为网页添加JavaScript\n" +
        "2024-6-1:  二次重置项目完成,添加 '帮助' 页面,美化UI显示\n"+
        "2024-6-11: 加入Dialog弹窗,使用方式:showDialog(htmlpath,title,yourcss_path)"
    showNotification(title,message,9999999999)
}
function about_in_head() {
    let title1 ="About-关于"
    let message1 ="作者:CanFeng\n网站参考: CanFeng的小站\n参考代码网站: https://canfeng.kesug.com/\n版权声明: Copyright © 2024.  By Canfeng\n"
    showNotification(title1,message1,40000,'https://canfeng.kesug.com/')
}
function help_document_func() {
    let title = '帮助'
    let message = 'JavaScript函数\n' +
        '在控制台可输入 文件名(不含.js)+_help即可查看对应帮助,例如: tools_help\n' +
        '这些函数有可能会导致网页出现排版错误,显示异常等情况,只能通过刷新解决!\n' +
        '函数之间存在依赖关系,请不要更改加载顺序!\n' +
        '请按下F12查看表格'
    console.info('| 函数名                                            | 功能                                            | 所在文件              | 备注                                                         |\n' +
        '| ------------------------------------------------- | ----------------------------------------------- | --------------------- | ------------------------------------------------------------ |\n' +
        '| ReflashHotikoto()                                 | 刷新一言                                        | yiyan.js              |                                                              |\n' +
        '| ReflashHotikoto_tools(str)                        | 根据类型刷新一言,参数可省                       | tools.js              | 参考[Hitokoto_类型](https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0) |\n' +
        '| change_background_image_tools()                   | 更改背景图片为Bing每日一图                      | tools.js              | 会删除Video元素                                              |\n' +
        '| change_video_tools(str)                           | 更改指定的视频背景,允许接收 Url ,无参数显示帮助 | tools.js              |                                                              |\n' +
        '| tools_help()                                      | 显示tools.js的帮助                              | tools.js              |                                                              |\n' +
        '| showNotification(title,message,timeout,about_Url) | 显示提示信息,参数可省                           | Notify.js             | 参数(标题,信息,显示时间,要跳转的Url)                         |\n' +
        '| development_help()                                | 显示developmentConsole.js的帮助                 | developmentConsole.js |                                                              |\n' +
        '| P_Color(str)                                      | 更改段落标签的字体颜色                          | developmentConsole.js | 存在BUG,右侧栏目无法更改颜色                                 |\n' +
        '| change_background_image(str)                      | 更改背景图片(路径),参数不可省略                 | developmentConsole.js |                                                              |\n' +
        '| change_BiaoTi(str)                                | 更改大标题内容,参数不可省略                     | developmentConsole.js |                                                              |\n' +
        '| NO_Video()                                        | 删除Video元素,不可恢复!                         | developmentConsole.js |                                                              |\n')
    showNotification(title, message, 40000)
}
function show_about_dialog() {
    showDialog('./about.html')
}
function show_privacy(){
    showDialog('./Privacy_Statement.html')
}
info()
showNotification('欢迎访问 CanFeng的小站','站点地址: https://canfeng.kesug.com/',4000)

const update_href_a = document.getElementById('update_href');
const about_href_a=document.getElementById('about_href')
const help_document_a=document.getElementById('help_document')
const privacy_document_a=document.getElementById('PrivacyStatement')
update_href_a.addEventListener('click',update_info)
about_href_a.addEventListener('click',show_about_dialog)
help_document_a.addEventListener('click',help_document_func)
privacy_document_a.addEventListener('click',show_privacy)