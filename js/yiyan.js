/*
 * Copyright (c) 2024.  By Canfeng
 */

function ReflashHotikoto(){
    fetch('https://international.v1.hitokoto.cn/')
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
function Hitokoto_help() {
    console.info('Hitokoto_help')
    console.info('-------------')
    console.info('ReflashHotikoto() -> 刷新一言')
}

