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

const onBeforeSendingHeaders = function onBeforeSendingHeaders(reqDetails) {
  const { requestHeaders } = reqDetails;
  const filteredHeaders = requestHeaders.filter(header => header.name !== 'User-Agent');
  console.log('filtered headers', filteredHeaders);
  return { requestHeaders: filteredHeaders };
};

// Not sure why we would we need this one but it has some interesting information.
const onBeforeRequest = function onBeforeRequest(reqDetails) {
  console.log('before sending the request');
  const {
    initiator,
    method,
    timeStamp,
  } = reqDetails;
  console.log(`${initiator}, ${method}, ${timeStamp}`);
};

// WHICH IS IT?!
chrome.tabs.onCreated.addListener(onNewNavigation);
// chrome.webNavigation.onDOMContentLoaded.addListener(onNewNavigation);

// Remove the User-Agent from the headers of the web request
chrome.webRequest.onBeforeSendHeaders.addListener(onBeforeSendingHeaders, { urls: ['<all_urls>'] }, ['requestHeaders']);

// Uncomment next line to see information about the initiator of the web request.
// chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, { urls: ['<all_urls>'] });