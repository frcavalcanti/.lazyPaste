chrome.action.onClicked.addListener(function(){
  chrome.windows.create({
      url: chrome.runtime.getURL("ext/popup.html"),
      type: "popup",
      height: 610,
      width: 190,
      focused: true,
  })
});