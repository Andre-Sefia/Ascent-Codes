let home = document.getElementById('home');
let tapToEnter = document.getElementById('tapToEnter');
let loadingStage1 = document.getElementById('loadingStage1');
let loadingStage2 = document.getElementById('loadingStage2');
let loadingVideo1 = document.getElementById('loadingVideo1');
let loadingVideo2 = document.getElementById('loadingVideo2');
let logoCard = document.getElementById('logoCard');

const music = document.getElementById("bg-music");
music.volume = 0.5;

const FADE_MS = 900;        // soft crossfade between stages
const FLIP_DELAY_MS = 800; // flip card 2s after home is shown

/* --- TAP TO ENTER → LOADING 1 --- */
tapToEnter.addEventListener('click', () => {
    tapToEnter.style.display = 'none';
    loadingStage1.style.display = 'flex';
    loadingStage1.style.opacity = '1';

    music.muted = true;
    music.play().catch(() => {});

    loadingVideo1.play().catch((e) => console.error('Video 1 play failed:', e));
});

/* --- LOADING 1 → LOADING 2 (crossfade) --- */
loadingVideo1.addEventListener('ended', () => {
    loadingStage2.style.display = 'flex';
    loadingStage2.style.opacity = '0';
    void loadingStage2.offsetWidth; // force reflow so transition fires

    loadingStage2.style.transition = `opacity ${FADE_MS}ms ease`;
    loadingStage2.style.opacity = '1';

    // Play the background video and loop it, since the spinner can take longer
    loadingVideo2.loop = true;
    loadingVideo2.play().catch((e) => console.error('Video 2 play failed:', e));

    loadingStage1.style.transition = `opacity ${FADE_MS}ms ease`;
    loadingStage1.style.opacity = '0';

    setTimeout(() => {
        loadingStage1.style.display = 'none';
    }, FADE_MS);

    // Hold the Chapter II spinner for a bit, then go home
    setTimeout(() => {
        revealHome();
    }, 4500);
});

/* --- LOADING 2 → HOME (crossfade) --- */
function revealHome() {
    loadingStage2.style.transition = `opacity ${FADE_MS}ms ease`;
    loadingStage2.style.opacity = '0';

    home.style.display = 'block';
    void home.offsetWidth;
    home.classList.add('fade-in');

    music.muted = false;
    music.play().catch((e) => console.error('Play failed:', e));

    setTimeout(() => {
        loadingStage2.style.display = 'none';
        loadingVideo2.pause();

        // Flip the hero card 2s after home is visible
        setTimeout(() => {
            logoCard.classList.add('flipped');
        }, FLIP_DELAY_MS);

    }, FADE_MS);
}

/* --- IDENTITY CARDS --- */
document.querySelectorAll('.identity').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});