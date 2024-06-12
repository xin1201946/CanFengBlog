function showDialog(htmlUrl, title, cssUrl) {
    // 设置对话框标题
    if(title === undefined){
        title=''
    }
    document.getElementById('notify_title1').innerText = title;

    // 动态加载CSS
    if (cssUrl) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssUrl;
        document.head.appendChild(link);
    }

    // 创建一个请求来获取HTML内容
    fetch(htmlUrl)
        .then(response => response.text()) // 将响应转换为文本
        .then(html => {
            document.getElementById('dialogContent').innerHTML = html; // 将加载的内容设置为对话框内容
            showBackdrop(); // 显示对话框和背景
        })
        .catch(error => console.error('Error loading the content:', error));
}

// 显示对话框和背景的函数
function showBackdrop() {
    const dialogContainer = document.getElementById('dialogContainer');
    dialogContainer.style.display = 'block'; // 显示对话框

    // 设置对话框的样式
    dialogContainer.style.top = '100px';
    dialogContainer.style.left = 'calc(50% - 400px)'; // 假设对话框宽度为800px
    dialogContainer.style.right = '400px';
    dialogContainer.style.bottom = '100px';
    dialogContainer.style.overflow='hidden';
    dialogContainer.style.maxWidth = '1200px'; // 根据实际情况调整最大宽度
    dialogContainer.style.backdropFilter = 'blur(20px)';
    dialogContainer.style.backgroundColor = 'rgba(252, 252, 252, 0.06)';

    // 为关闭按钮添加点击事件，以便关闭对话框
    document.getElementById('close_notify_button1').onclick = hideBackdrop;
}

// 隐藏对话框和背景的函数
function hideBackdrop() {
    const dialogContainer = document.getElementById('dialogContainer');
    dialogContainer.style.display = 'none'; // 隐藏对话框

    // 清除动态添加的CSS链接
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href.includes('your-css-file-name.css')) { // 根据实际情况调整
            document.head.removeChild(links[i]);
            break;
        }
    }
}