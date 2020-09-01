'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contentSettings.plugins.set({
        'primaryPattern': 'https://www.habboon.pw/*',
        'setting': 'allow',
        'scope': 'regular'
    });
});
