const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', () => {
  const checkbox = document.getElementById('auto-trim');
  if (checkbox) {
    browser.storage.local.set({
      trimOnFocustLost: checkbox.checked,
    });
  }
});

browser.storage.local.get().then(userSettings => {
  const checkbox = document.getElementById('auto-trim');
  if (checkbox) {
    checkbox.checked = userSettings.trimOnFocustLost;
  }
});
