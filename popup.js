document.addEventListener("DOMContentLoaded", function () {
  const installButton = document.getElementById("installButton");

  installButton.addEventListener("click", function () {
    const gameId = document.getElementById("gameIdInput").value;
    const URL = `steam://install/${gameId}`;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: URL });
    });
  });
});
