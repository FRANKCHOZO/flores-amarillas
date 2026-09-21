document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", function () {
            // Generar la lluvia de girasoles
            for (let i = 0; i < 40; i++) {
                createFlower();
            }

            // Cambiar mensaje al dar clic
            alert("¡Te quiero muchísimo! ❤️ 🌻");
        });
    }
});

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("petal");
    flower.textContent = "🌻";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (2 + Math.random() * 3) + "s";
    
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}
