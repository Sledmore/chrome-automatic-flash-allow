'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contentSettings.plugins.set({
        'primaryPattern': '*://*.habboon.pw/*',
        'setting': 'allow',
        'scope': 'regular'
    });
});
