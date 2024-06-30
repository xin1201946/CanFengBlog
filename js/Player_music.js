/*
 * Copyright (c) 2024.  By Canfeng
 */
    // 获取播放按钮和音频元素
    const playButtonMusic = document.getElementById('play_button_music');
    const musicPlayer = document.getElementById('music_player');
    const music_player_src=document.getElementById('music_player_source')
    function play_music(path) {
        if (path === 'chr') {
            path = 'music/CG5 _ Dagames - Children of the Machine.mp3';
        } else if (path === 'default') {
            path = 'music/It\'s over (feat_ Maki Flow) - Jød _ Meiden _ Maki Flow.mp3'; // 修复路径中的空格
        }
        music_player_src.src = path; // 确保设置的是source元素的src属性
        musicPlayer.load(); // 加载新的音频源
        showNotification('Music_Player', '已加载 ' + path, 4000);
    }
    function play(){
    if (musicPlayer.paused) {
        // 如果已暂停，则播放音乐
        musicPlayer.play();
        playButtonMusic.innerText='⏸️'
        showNotification('Music_Player','开始播放',4000)
    } else {
        // 如果正在播放，则暂停音乐
        musicPlayer.pause();
        playButtonMusic.innerText='▶️'
        showNotification('Music_Player','暂停播放',4000)
    }
}
    // 为播放按钮添加点击事件监听器
    playButtonMusic.addEventListener('click', play);