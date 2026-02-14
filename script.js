
window.showPage = function(pageId) {
    // 1. START MUSIC: This triggers the music on the first click
    const music = document.getElementById('bg-music');
    if (music && music.paused) {
        music.play().catch(error => console.log("Music waiting for interaction"));
    }

    // 2. SWITCH PAGES: Standard page switching logic
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0);

        // 3. TRIGGER CELEBRATION: Only on the very last page
        if (pageId === 'final-page') {
            createConfetti();
        }
    }
};

// --- Celebration Effect ---
function createConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🌸'; 
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);

        // Animate falling
        const fallDuration = Math.random() * 3 + 2;
        confetti.style.transition = `transform ${fallDuration}s linear, top ${fallDuration}s linear`;
        
        setTimeout(() => {
            confetti.style.top = '110vh';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, 50);

        // Cleanup
        setTimeout(() => confetti.remove(), fallDuration * 1000);
    }
}
