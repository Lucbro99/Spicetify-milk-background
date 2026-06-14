const ASSETS = "https://raw.githubusercontent.com/Lucbro99/Spicetify-milk-background/main/assets";

// Replace the "Liked Songs" cover with a custom image
for (const img of document.querySelectorAll('img[src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg"]')) {
    img.removeAttribute("srcset");
    img.setAttribute("src", `${ASSETS}/play.jpg`);
}

// Replace the progress bar handle with a custom image
const style = document.createElement("style");
style.innerHTML = `
    .progress-bar__slider,
    .REMgVhoMClSNRZve5xaJ,
    .x-progressBar-handle {
        background-color: transparent !important;
        background-image: url("${ASSETS}/play.jpg") !important;
        background-size: cover;
        height: 30px;
        width: 20px;
        box-shadow: none;
    }
`;
document.head.appendChild(style);