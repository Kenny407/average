/* eslint-disable no-restricted-globals */
(() => {
  const fingerprintMap = [
    [navigator, 'userAgent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0'],
    [navigator, 'platform', 'Windows'],
    [navigator, 'plugins', []],
    [navigator, 'doNotTrack', null],
    [screen, 'width', 1366],
    [screen, 'height', 768],
    [screen, 'colorDepth', 24],
  ];

  const defineGlobal = function defineGlobal(GLOBAL, key, value) {
    Object.defineProperty(GLOBAL, key, {
      get() {
        return value;
      },
    });
    console.log(`Overriden ${GLOBAL}.${key}`);
  };

  fingerprintMap.map(args => defineGlobal(...args));
})();
