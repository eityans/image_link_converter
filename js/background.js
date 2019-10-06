(function()
{
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(null, { file: "js/jquery.js" }, function() {
            chrome.tabs.executeScript(null, { file: "js/script.js" });
        });
    });
})();
