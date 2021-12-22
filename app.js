function _startPlayingMusic(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
        alert('Mauvaise touche !');
        return;
    }
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', (e) => {
    _startPlayingMusic(e);
});

window.addEventListener('keyup', (e) => {
    $('.key').removeClass('playing');
})

