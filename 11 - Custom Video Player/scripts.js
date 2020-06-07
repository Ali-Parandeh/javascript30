// Get Our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenButton = player.querySelector('.fullscreen');

// Build our functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause'; // tenery operator
    video[method]();
}

function updateButton() {
    const icon = video.paused ? '▋▋' : '►';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgressUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function makeFullScreen() {
    player.requestFullscreen();
}

function changeVolumeWithKeys(e) {
    let volumeStep = parseFloat(ranges[0].step);

    if (e.key === 'ArrowUp' && video.volume + volumeStep < 1) {
        video.volume += volumeStep;
    }

    if (e.key === 'ArrowDown' && video.volume - volumeStep > 0) {
        video.volume -= volumeStep;
    }
}

function skipWithKeys(e) {
    let forwardStep = parseFloat(player.querySelector('.skip-forward').dataset.skip);
    let backwardStep = parseFloat(player.querySelector('.skip-backward').dataset.skip);

    if (e.key === 'ArrowLeft') {
        video.currentTime += backwardStep;
    }

    if (e.key === 'ArrowRight') {
        video.currentTime += forwardStep;
    }
}

// Hookup the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgressUpdate);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

fullScreenButton.addEventListener('click', makeFullScreen);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDownFlag = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mouseDownFlag = true);
progress.addEventListener('mouseup', () => mouseDownFlag = false);
progress.addEventListener('mousemove', (e) => mouseDownFlag && scrub(e));


document.addEventListener('keydown', (e) => {
    let volumeKeys = ['ArrowUp', 'ArrowDown'];
    let skipKeys = ['ArrowLeft', 'ArrowRight'];

    if (volumeKeys.includes(e.key)) {
        changeVolumeWithKeys(e);
    }

    if (skipKeys.includes(e.key)) {
        skipWithKeys(e);
    }
})