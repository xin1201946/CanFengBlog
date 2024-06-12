# 帮助文档

## JavaScript函数

为了调试方便,我定义一些函数来实时更改界面元素,避免重复刷新页面.以下是常用函数:

> [!NOTE]
>
> 在控制台可输入 文件名(不含.js)+_help即可查看对应帮助,例如: tools_help

> [!IMPORTANT]
>
> 这些函数有可能会导致网页出现排版错误,显示异常等情况,只能通过刷新解决!

> [!CAUTION]
>
> 函数之间存在依赖关系,请不要更改加载顺序!

| 函数名                                            | 功能                                            | 所在文件              | 备注                                                         |
| ------------------------------------------------- | ----------------------------------------------- | --------------------- | ------------------------------------------------------------ |
| ReflashHotikoto()                                 | 刷新一言                                        | yiyan.js              |                                                              |
| ReflashHotikoto_tools(str)                        | 根据类型刷新一言,参数可省                       | tools.js              | 参考[Hitokoto_类型](https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0) |
| change_background_image_tools()                   | 更改背景图片为Bing每日一图                      | tools.js              | 会删除Video元素                                              |
| change_video_tools(str)                           | 更改指定的视频背景,允许接收 Url ,无参数显示帮助 | tools.js              |                                                              |
| tools_help()                                      | 显示tools.js的帮助                              | tools.js              |                                                              |
| showNotification(title,message,timeout,about_Url) | 显示提示信息,参数可省                           | Notify.js             | 参数(标题,信息,显示时间,要跳转的Url)                         |
| development_help()                                | 显示developmentConsole.js的帮助                 | developmentConsole.js |                                                              |
| P_Color(str)                                      | 更改段落标签的字体颜色                          | developmentConsole.js | 存在BUG,右侧栏目无法更改颜色                                 |
| change_background_image(str)                      | 更改背景图片(路径),参数不可省略                 | developmentConsole.js |                                                              |
| change_BiaoTi(str)                                | 更改大标题内容,参数不可省略                     | developmentConsole.js |                                                              |
| NO_Video()                                        | 删除Video元素,不可恢复!                         | developmentConsole.js |                                                              |
