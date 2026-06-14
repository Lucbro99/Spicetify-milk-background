console.log("[DEBUG] milk-bg.js loaded");
(function () {
    if (!Spicetify?.Player?.addEventListener) {
        setTimeout(arguments.callee, 500);
        return;
    }

    // URL of the background GIF hosted on GitHub
    const DEFAULT_BG = "https://raw.githubusercontent.com/Lucbro99/Spicetify-milk-background/main/assets/Milk.gif";

    const CONTAINER = () => document.querySelector(".Root__top-container");
    let layerA, layerB;
    let activeLayer = "a";

    // Create two layers for crossfade effect
    function createLayers(container) {
        layerA = document.createElement("div");
        layerB = document.createElement("div");
        layerA.classList.add("dynamic-bg-layer");
        layerB.classList.add("dynamic-bg-layer");
        container.appendChild(layerA);
        container.appendChild(layerB);
    }

    // Crossfade between layerA and layerB
    function crossfadeTo(imageUrl) {
        const nextLayer = activeLayer === "a" ? layerB : layerA;
        const currentLayer = activeLayer === "a" ? layerA : layerB;
        nextLayer.style.backgroundImage = `url("${imageUrl}")`;
        void nextLayer.offsetWidth;
        nextLayer.style.opacity = "1";
        currentLayer.style.opacity = "0";
        activeLayer = activeLayer === "a" ? "b" : "a";
    }

    // Set the background — always uses DEFAULT_BG
    function updateBackground() {
        const container = CONTAINER();
        if (!container) return;
        if (!layerA || !layerB) createLayers(container);
        container.classList.add("has-custom-bg");
        crossfadeTo(DEFAULT_BG);
    }

    Spicetify.Player.addEventListener("songchange", updateBackground);
    // Safety polling in case songchange doesn't fire
    const safetyInterval = setInterval(updateBackground, 1400);
    setTimeout(updateBackground, 800);
    window.addEventListener("beforeunload", () => clearInterval(safetyInterval));
})();