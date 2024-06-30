/*
 * Copyright (c) 2024.  By Canfeng
 */
function checkboxOnclick(checkbox){

    if ( switch_button.checked === true){
        darkmode('on')
//Action for checked

    }else{
        darkmode('off')
//Action for not checked

    }
}
/* 暗色模式接口 */
function darkmode(mode){
    if (mode === 'on' || mode ==='ON'){
        dialog_dark_mode.style.backgroundColor='rgba(0,0,0,0.55)'
        notify_dark_mode.style.backgroundColor='rgba(0,0,0,0.55)'
        neirong_zhuti_darkmode.style.backgroundColor='rgba(0,0,0,0.55)'
        switch_button.innerText='🌑'
        switch_button.checked='true'
    }
    else{
        dialog_dark_mode.style.backgroundColor='rgba(255,255,255,0)'
        notify_dark_mode.style.backgroundColor='rgba(255,255,255,0)'
        neirong_zhuti_darkmode.style.backgroundColor='rgba(255,255,255,0)'
    }
}
const dialog_dark_mode=document.getElementById('dialogContainer')
const notify_dark_mode=document.getElementById('notification')
const neirong_zhuti_darkmode=document.getElementById('neirong_zhuti_darkmode')
const switch_button=document.getElementById('check_dark_box')
switch_button.addEventListener('click',checkboxOnclick)