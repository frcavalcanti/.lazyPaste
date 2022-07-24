chrome.action.onClicked.addListener(function(){
  chrome.windows.create({
      url: chrome.runtime.getURL("ext/popup.html"),
      type: "popup",
      height: 613,
      width: 370,
      focused: true
  })
});
