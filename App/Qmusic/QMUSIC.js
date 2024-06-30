let audio = document.getElementById('audio');
let lyricsContainer = document.getElementById('lyrics');
let audioUpload = document.getElementById('audio-upload');
let lyricsUpload = document.getElementById('lyrics-upload');
let playPauseButton = document.getElementById('play-pause');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let loopButton = document.getElementById('loop');

let songs = [];
let lyrics = [];
let currentIndex = 0;
let isLooping = false;
let currentLyrics = [];
let currentLine = 0;

audioUpload.addEventListener('change', handleAudioUpload);
lyricsUpload.addEventListener('change', handleLyricsUpload);
playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);
loopButton.addEventListener('click', toggleLoop);

function handleAudioUpload(event) {
    for (let file of event.target.files) {
        songs.push(URL.createObjectURL(file));
    }
    playSong(currentIndex);
}

function handleLyricsUpload(event) {
    let reader = new FileReader();
    reader.onload = function(e) {
        parseLyrics(e.target.result);
    };
    reader.readAsText(event.target.files[0]);
}

function playSong(index) {
    audio.src = songs[index];
    audio.play();
    currentIndex = index;
    currentLine = 0;
    updateLyricsDisplay();
}

function parseLyrics(lrc) {
    currentLyrics = [];
    let lines = lrc.split('\n');
    for (let line of lines) {
        let match = line.match(/\[(\d+):(\d+).(\d+)\](.*)/);
        if (match) {
            let time = parseInt(match[1]) * 60 + parseInt(match[2]) + parseInt(match[3]) / 1000;
            let text = match[4];
            currentLyrics.push({time: time, text: text});
        }
    }
    currentLyrics.sort((a, b) => a.time - b.time);
}

function updateLyricsDisplay() {
    lyricsContainer.innerHTML = '';
    for (let line of currentLyrics) {
        let p = document.createElement('p');
        p.textContent = line.text;
        lyricsContainer.appendChild(p);
    }
    requestAnimationFrame(syncLyrics);
}

function syncLyrics() {
    if (!audio.paused) {
        let currentTime = audio.currentTime;
        if (currentLine < currentLyrics.length && currentTime >= currentLyrics[currentLine].time) {
            let currentLyricElement = lyricsContainer.children[currentLine];
            let offset = currentLyricElement.offsetTop - lyricsContainer.clientHeight / 2 + currentLyricElement.clientHeight / 2;
            lyricsContainer.scrollTop = offset;
            currentLine++;
        }
        requestAnimationFrame(syncLyrics);
    }
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function playPrevious() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    playSong(currentIndex);
}

function playNext() {
    currentIndex = (currentIndex + 1) % songs.length;
    playSong(currentIndex);
}

function toggleLoop() {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopButton.textContent = isLooping ? '取消循环' : '循环播放';
}

audio.addEventListener('ended', () => {
    if (!isLooping) {
        playNext();
    }
});