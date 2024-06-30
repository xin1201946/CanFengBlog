function loadAndExecuteScripts(htmlString) {
    // 创建一个临时的DOM元素来解析HTML字符串
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');

    // 获取所有script元素
    var scripts = doc.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        // 创建一个新的script元素并复制src和type属性
        var newScript = document.createElement('script');
        if (script.src) {
            newScript.src = script.src; // 如果有src属性，则复制
        }
        if (script.type) {
            newScript.type = script.type; // 如果有type属性，则复制
        }
        // 如果script元素有内容，则设置textContent
        if (script.textContent) {
            newScript.textContent = script.textContent;
        }
        // 将新创建的script元素添加到文档中以执行
        document.head.appendChild(newScript);
    }
}

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
            loadAndExecuteScripts(html);
            showBackdrop(); // 显示对话框和背景
        })
        .catch(error => console.error('Error loading the content:', error));
}

// 显示对话框和背景的函数
function showBackdrop() {
    const dialogContainer = document.getElementById('dialogContainer');
    dialogContainer.style.display = 'block'; // 显示对话框

    // 设置对话框的样式
    dialogContainer.style.top = '20%';
    dialogContainer.style.left = '20%'; // 假设对话框宽度为800px
    dialogContainer.style.right = '20%';
    dialogContainer.style.bottom = '100px';
    dialogContainer.style.overflow='hidden';
    dialogContainer.style.maxWidth = '95%'; // 根据实际情况调整最大宽度
    dialogContainer.style.backdropFilter = 'blur(20px)';

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