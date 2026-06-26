let loading = document.getElementById('loading')
let home = document.getElementById('home');

setTimeout(() => {
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.6s ease';

    setTimeout(() => {
        loading.style.display = 'none';
        home.style.display = 'block';

        void home.offsetWidth;
        home.classList.add('fade-in');
    }, 600);
}, 5000);






let button = document.getElementById('granted')

button.onclick = function(){

    if(button.innerHTML = "Request Access"){
        button.innerHTML = "Access"
        button.style.color = "white"
        button.style.backgroundColor = "rgba(34, 131, 34, 0.801)"
        button.style.boxShadow = "0 0 10px rgba(34, 131, 34, 0.801)"
        button.style.textShadow = "0 0 2.5px white"
        }

}


const firstCover = document.getElementById('firstCover');
const introVideo = document.getElementById('introVideo');

// When intro video ends, fade it out and show loader
introVideo.addEventListener('ended', () => {
    firstCover.style.opacity = '0';
    setTimeout(() => {
        firstCover.style.display = 'none';
        loading.style.display = 'flex';

        // Show home page after 5 seconds of loading
        setTimeout(() => {
            loading.style.opacity = '0';
            loading.style.transition = 'opacity 0.6s ease';
            setTimeout(() => {
                loading.style.display = 'none';
                home.style.display = 'block';
                void home.offsetWidth;
                home.classList.add('fade-in');
            }, 600);
        }, 5000);
    }, 600);
});


const music = document.getElementById('bg-music');
music.volume = 0.5; // Adjust volume: 0.0 (silent) to 1.0 (full)

// Browsers block autoplay until user interacts with the page
// This plays the music on the first interaction
function startMusic() {
  music.play().catch(() => {});
  document.removeEventListener('click', startMusic);
  document.removeEventListener('scroll', startMusic);
  document.removeEventListener('keydown', startMusic);
}

document.addEventListener('click', startMusic);
document.addEventListener('scroll', startMusic);
document.addEventListener('keydown', startMusic);