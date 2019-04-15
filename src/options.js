const autoTrim = document.getElementById('auto-trim');

autoTrim.addEventListener('click', event => {
  const { target } = event;
  browser.storage.local.set({
    trimOnFocustLost: target.checked,
  });
});

browser.storage.local.get().then(userSettings => {
  if (autoTrim) {
    autoTrim.checked = userSettings.trimOnFocustLost;
  }
});
