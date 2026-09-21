document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainContent = document.getElementById("mainContent");
    const surpriseButton = document.getElementById("surpriseButton");
    const petals = document.getElementById("petals");
    const finalMessage = document.getElementById("finalMessage");

    // Acción al presionar "Comenzar"
    if (startButton) {
        startButton.addEventListener("click", function () {
            welcomeScreen.style.display = "none";
            mainContent.classList.remove("hidden");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Acción al presionar "Descubrir sorpresa"
    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            // Lluvia de girasoles
            for (let i = 0; i < 50; i++) {
                createPetal();
            }

            // Mostrar recuadro final a los 3 segundos
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
