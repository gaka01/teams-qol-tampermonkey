// ==UserScript==
// @name        Teams QOL
// @namespace   Violentmonkey Scripts
// @match       https://teams.live.com/v2*
// @grant       none
// @version     1.0
// @author      -
// @description 5/13/2025, 9:34:41 AM
// ==/UserScript==


(function() {
    'use strict';


    let SELECTORS_TO_HIDE = [
        'div[data-tid="chat-list-layout"] > button', // Invite to Teams button
        '.fui-Primitive:has(button[data-tid="railHeaderFilterButton"])', // Useless chat header
        'div:has(> svg[data-tid=titlebar-teams-icon])', // Teams logo
        'div:has(>div[data-tid="window-controls-placeholder-TitleBarStart"])', //Uselesss top-left blank space
        'div:has(>div[aria-label="Communities"])', // Communities button
        'div:has(>div[aria-label="Meet"])', // Meet button
        'button[data-testid="premium-upgrade-button"]', // Premium (diamond) button
    ];

    addGlobalStyle(SELECTORS_TO_HIDE.join(', ') + ' { display: none; }');

    addGlobalStyle('.fui-ChatMessage__timestamp, .fui-ChatMyMessage__timestamp { display: block; }'); // always show message timestamps

    //addGlobalStyle('body { --colorBrandForeground1: red; }');


    function addGlobalStyle(css, important=true) {
        let head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        let style = document.createElement('style');
        if (important) {
            style.innerHTML = css.replace(/;/g, ' !important;');
        }
        head.appendChild(style);
    }
})();
