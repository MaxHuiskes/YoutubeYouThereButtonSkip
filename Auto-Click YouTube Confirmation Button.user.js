// ==UserScript==
// @name         Auto-Click YouTube Confirmation Button
// @namespace    https://github.com/MaxHuiskes/YoutubeYouThereButtonSkip.git
// @version      1.0
// @description  Automatically click the "Ja" button on YouTube confirmation dialogs.
// @author       Max Huiskes
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to click the "Ja" button
    function clickJaButton() {
        const jaButton = document.querySelector('yt-button-renderer[aria-label="Ja"]');
        if (jaButton) {
            jaButton.click();
        }
    }

    // Check for the confirmation dialog periodically and click the "Ja" button when found
    const intervalId = setInterval(() => {
        clickJaButton();
    }, 1000); // Check every 1 second (adjust as needed)
})();
