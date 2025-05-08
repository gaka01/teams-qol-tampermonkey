// ==UserScript==
// @name         Teams quality of life
// @namespace    http://tampermonkey.net/
// @version      2025-04-25
// @description  try to take over the world!
// @author       Galin Dobchev
// @match        https://teams.live.com/v2/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=live.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    let SELECTORS_TO_HIDE = [
        'div[data-tid="chat-list-layout"] > button', // Invite to Teams button
        '.fui-Primitive:has(button[data-tid="railHeaderFilterButton"])', // Useless chat header
        'div:has(> svg[data-tid=titlebar-teams-icon])', // Teams logo
        'div:has(>div[data-tid="window-controls-placeholder-TitleBarStart"])', //Uselesss top-left blank space
    ];

    addGlobalStyle(SELECTORS_TO_HIDE.join(', ') + ' { display: none; }');

    addGlobalStyle('.fui-ChatMessage__timestamp, .fui-ChatMyMessage__timestamp { display: block; }'); // always show message timestamps


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
