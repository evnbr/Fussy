// Called when the url of a tab changes.
function checkForValidUrl(details) {
  // If the letter 'g' is found in the tab's URL...
  if (details.url.indexOf('facebook') > -1) {
    // ... show the page action.
    // chrome.tabs.insertCSS(details.tabId, {file: 'fb.css'}, function() {
    //   if (chrome.extension.lastError) {
    //     console.log('Not allowed to inject CSS into special page.');
    //   } else {
    //     console.log('Injected style!');
    //   }
    // });
    chrome.pageAction.show(details.tabId);
  }
};

// Listen for any changes to the URL of any tab.
//chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.webNavigation.onBeforeNavigate.addListener(checkForValidUrl);