document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const surpriseButton = document.getElementById("surpriseButton");
    const petals = document.getElementById("petals");
    const finalMessage = document.getElementById("finalMessage");
    
    const audio = document.getElementById("myAudio");
    const musicButton = document.getElementById("musicButton");

    // Al hacer clic en "Comenzar", se despliega el contenido y empieza la música
    if (startButton) {
        startButton.addEventListener("click", function () {
            welcomeScreen.style.display = "none";
            mainContent.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Iniciar reproducción de audio automáticamente al presionar Comenzar
            if (audio) {
                audio.play().then(() => {
                    if (musicButton) musicButton.textContent = "⏸️ Pausar nuestra canción";
                }).catch(err => {
                    console.log("El navegador bloqueó la autoreproducción:", err);
                });
            }
        });
    }

    // Botón para pausar o reproducir la música manualmente
    if (musicButton && audio) {
        musicButton.addEventListener("click", function () {
            if (audio.paused) {
                audio.play();
                musicButton.textContent = "⏸️ Pausar nuestra canción";
            } else {
                audio.pause();
                musicButton.textContent = "🎵 Reproducir nuestra canción";
            }
        });
    }

    // Lluvia de girasoles al presionar "Descubrir sorpresa"
    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            for (let i = 0; i < 50; i++) {
                createPetal();
            }

            setTimeout(function () {
                finalMessage.classList.remove("hidden");
                finalMessage.scrollIntoView({ behavior: 'smooth' });
            }, 3000);
        });
    }

    function createPetal() {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = "🌻";
        
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (2.5 + Math.random() * 3.5) + "s";

        petals.appendChild(petal);

        setTimeout(function () {
            petal.remove();
        }, 6500);
    }
});
