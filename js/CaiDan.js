/*
 * Copyright (c) 2024.  By Canfeng
 */

function Dark_mode(str){
    if (str === 'on'){
        yuansu=document.querySelector('body')
        video=document.querySelector('#v1')
        yuansu.style.backgroundImage ='none'
        yuansu.style.backgroundColor ='black'
        video.style.visibility='hidden'
    }
    else
    {
        yuansu=document.querySelector('body')
        video=document.querySelector('#v1')
        yuansu.style.backgroundImage ='url("./images/bizhi.jpg")'
        yuansu.style.backgroundColor ='White'
        video.style.visibility='visible'
    }
}