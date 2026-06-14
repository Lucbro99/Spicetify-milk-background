function waitForElement(els, func, timeout = 100) {
    const queries = els.map((el) => document.querySelector(el));
    if (queries.every((a) => a)) {
        func(queries);
    } else if (timeout > 0) {
        setTimeout(waitForElement, 300, els, func, --timeout);
    }
}

// Replace the progress bar slider with the play image
const ASSETS = "https://raw.githubusercontent.com/Lucbro99/Spicetify-milk-background/main/assets";

// Replace liked songs and episodes covers
for (const img of document.querySelectorAll('img[src="https://misc.scdn.co/liked-songs/liked-songs-300.jpg"]')) {
    img.removeAttribute("srcset");
    img.setAttribute("src", `${ASSETS}/play.jpg`);
}

// Replace progress bar handle with custom image
const style = document.createElement("style");
style.innerHTML = `
    .progress-bar__slider,
    .REMgVhoMClSNRZve5xaJ,
    .x-progressBar-handle {
        background-color: transparent !important;
        background-image: url("${ASSETS}/play.jpeg") !important;
        background-size: cover;
        height: 30px;
        width: 20px;
        box-shadow: none;
    }

    /* Skip back button — back image */
    [data-testid="control-button-skip-back"] button,
    [data-testid="control-button-skip-back"] {
        background-image: url("${ASSETS}/back-button.jpg") !important;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    /* Skip forward button — forward image */
    [data-testid="control-button-skip-forward"] button,
    [data-testid="control-button-skip-forward"] {
        background-image: url("${ASSETS}/forward-button.jpg") !important;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
`;
document.head.appendChild(style);