function injectScript(file) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file);
  document.body.appendChild(script);
}
const interval = setInterval(() => {
  if (!document.body) return;
  injectScript(chrome.extension.getURL('/utils/define-globals.js'));
  clearInterval(interval);
}, 10);
