let loading = document.getElementById('loading');
let home = document.getElementById('home');
let firstCover = document.getElementById('firstCover');
let introVideo = document.getElementById('introVideo');
let tapToEnter = document.getElementById('tapToEnter');

const music = document.getElementById("bg-music");
music.volume = 0.5;

function revealHome() {
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.6s ease';
    setTimeout(() => {
        loading.style.display = 'none';
        home.style.display = 'block';
        home.style.opacity = '1';
        void home.offsetWidth;
        home.classList.add('fade-in');
        music.muted = false;
        music.play().catch((e) => {
            console.error('Play failed:', e);
        });
    }, 600);
}

tapToEnter.addEventListener('click', () => {
    tapToEnter.style.display = 'none';
    firstCover.style.display = 'flex';
    music.muted = true;
    music.play();
    introVideo.play();
});

introVideo.addEventListener('ended', () => {
    firstCover.style.opacity = '0';
    setTimeout(() => {
        firstCover.style.display = 'none';
        loading.style.display = 'flex';
        setTimeout(() => {
            revealHome();
        }, 8000);
    }, 600);
});

let button = document.getElementById('granted');

button.onclick = function(){
    if(button.innerHTML = "Request Access"){
        button.innerHTML = "Access"
        button.style.color = "white"
        button.style.backgroundColor = "rgba(34, 131, 34, 0.801)"
        button.style.boxShadow = "0 0 10px rgba(34, 131, 34, 0.801)"
        button.style.textShadow = "0 0 2.5px white"
    }
}