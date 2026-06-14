console.log("[DEBUG] milk-bg.js loaded");
(function () {
    if (!Spicetify?.Player?.addEventListener) {
        setTimeout(arguments.callee, 500);
        return;
    }

    const CONTAINER = () => document.querySelector(".Root__top-container");
    const BG_IMAGE = "/home/lucbro/.spicetify/Themes/milk/Milk.png";

    function setBackground() {
        const container = CONTAINER();
        if (!container) return;

        let layer = document.getElementById("milk-bg-layer");
        if (!layer) {
            layer = document.createElement("div");
            layer.id = "milk-bg-layer";
            layer.style.cssText = `
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-image: url("file://${BG_IMAGE}");
                background-size: cover;
                background-position: center;
                opacity: 0.3;
                z-index: -1;
                pointer-events: none;
            `;
            container.appendChild(layer);
        }
    }

    setTimeout(setBackground, 800);
    setInterval(setBackground, 1400);
})();
