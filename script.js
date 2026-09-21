document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const surpriseButton = document.getElementById("surpriseButton");
    const petals = document.getElementById("petals");
    const finalMessage = document.getElementById("finalMessage");

    // Al pulsar "Comenzar"
    if (startButton) {
        startButton.addEventListener("click", function () {
            welcomeScreen.style.display = "none";
            mainContent.classList.remove("hidden");
        });
    }

    // Al pulsar "Descubrir sorpresa"
    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            // Generar 50 girasoles
            for (let i = 0; i < 50; i++) {
                createPetal();
            }

            // Mostrar el mensaje final a los 3.5 segundos y desplazarse hacia él
            setTimeout(function () {
                finalMessage.classList.remove("hidden");
                finalMessage.scrollIntoView({ behavior: 'smooth' });
            }, 3500);
        });
    }

    function createPetal() {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = "🌻";
        
        // Posición horizontal aleatoria
        petal.style.left = Math.random() * 100 + "vw";
        
        // Duración de la caída aleatoria entre 3 y 7 segundos
        petal.style.animationDuration = (3 + Math.random() * 4) + "s";

        petals.appendChild(petal);

        // Remover el elemento del DOM al terminar la animación
        setTimeout(function () {
            petal.remove();
        }, 7000);
    }
});
