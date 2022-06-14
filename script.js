const rickroll = document.getElementById('rickroll')
const playButton = document.getElementById('play')
const icon = document.getElementById('playpause')
const currentTime = document.getElementById('currenttime')
var playing = false

playButton.addEventListener('click', playPauseAudio)

function playPauseAudio() {
    if (!playing) {
        rickroll.play()
        playing = !playing
        icon.setAttribute('src', 'asset/pause.png')
        playButton.classList.add('clicked')
        currentTime.style.animationPlayState = 'running'
    }
    else {
        rickroll.pause()
        playing = !playing
        icon.setAttribute('src', 'asset/play.png')
        playButton.classList.remove('clicked')
        currentTime.style.animationPlayState = 'paused'
    }
}

