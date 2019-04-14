const saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', () => {
  const checkbox = document.querySelector('#auto-trim');
  browser.storage.local.set({
    trimOnFocustLost: checkbox.checked,
  });
});

browser.storage.local.get().then(userSettings => {
  const checkbox = document.querySelector('#auto-trim');
  checkbox.checked = userSettings.trimOnFocustLost;
});
