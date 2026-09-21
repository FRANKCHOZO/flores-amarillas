const startButton =
    document.getElementById("startButton");

const welcome =
    document.querySelector(".welcome");

const story =
    document.getElementById("story");


startButton.addEventListener("click", function () {

    welcome.style.display = "none";

    story.classList.remove("hidden");

});

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const petals =
    document.getElementById("petals");


surpriseButton.addEventListener(
    "click",
    function () {

        for (
            let i = 0;
            i < 50;
            i++
        ) {

            createPetal();

        }

    }
);


function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.textContent = "🌻";

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    petals.appendChild(petal);

    setTimeout(
        function () {

            petal.remove();

        },
        7000
    );

}
setTimeout(
    function () {

        const finalMessage =
            document.getElementById(
                "finalMessage"
            );

        finalMessage.classList.remove(
            "hidden"
        );

    },
    4000
);
