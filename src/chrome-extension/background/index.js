const onNewNavigation = function onNewNavigation(details) {
  const { tabId, url } = details;

  if (url.startsWith('chrome://')) return;

  try {
    chrome.tabs.executeScript(
      tabId,
      {
        file: '/utils/define-globals.js',
        matchAboutBlank: true,
        runAt: 'document_start',
      },
    );
  } catch (error) {
    console.log(error);
  }
};


// WHICH IS IT?!
chrome.tabs.onCreated.addListener(onNewNavigation);
// chrome.webNavigation.onDOMContentLoaded.addListener(onNewNavigation);
