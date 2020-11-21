const defaultFilters = [
        "*://.pixel.ad/*",
        "*://partner.googleadservices.com/*",
        "*://.roq.ad/*",
        "*://.ascend.ai/*",
        "*://creative.ak.fbcdn.net/*",
        "*://.infusionsoft.app/*",
        "*://.exponential.com/*",
        "*://.lianmeng.360.cn/*",
        "*://.c.admaster.com.cn/*",
        "*://.000webhostapp.com/*",
        "*://.247realmedia.com/*",
]
 
chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return { cancel: true }},
        { urls: defaultFilters },
        ["blocking"]
)