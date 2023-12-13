document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
  
    toggleBtn.addEventListener('click', function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { action: 'toggle' });
      });
    });
  });
  