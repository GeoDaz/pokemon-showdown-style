chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("play.pokemonshowdown.com/")) {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["bootstrap.css", "style.css"],
        });

        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"],
        });
    }
});
