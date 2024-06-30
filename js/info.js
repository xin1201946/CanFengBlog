
/*
 * Copyright (c) 2024.  By Canfeng
 */

ReflashHotikoto()

function update_info(){
    showDialog('./Update.html','','./update.css')
}

function help_document_func() {
    showDialog('./Help.html')
}
function show_about_dialog() {
    showDialog('./about.html')
}
function show_privacy(){
    showDialog('./Privacy_Statement.html')
}
function show_shuoshuo(){
    showDialog('./ShuoShuo.html')
}
function  show_time_mechine(){
    showDialog('./Time_mechine_Words.html','','./time_mechine_words.css')
}

const user_image=document.querySelector('#user_image');
const update_href_a = document.getElementById('update_href');
const about_href_a=document.getElementById('about_href')
const help_document_a=document.getElementById('help_document')
const privacy_document_a=document.getElementById('PrivacyStatement')
const ShuoShuo=document.getElementById('ShuoShuo')

update_href_a.addEventListener('click',update_info)
user_image.addEventListener('click',show_time_mechine)
about_href_a.addEventListener('click',show_about_dialog)
help_document_a.addEventListener('click',help_document_func)
privacy_document_a.addEventListener('click',show_privacy)
ShuoShuo.addEventListener('click',show_shuoshuo)