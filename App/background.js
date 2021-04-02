chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.create({'url': 'https://www.dailywire.com', 'type': 'popup', 'width': 720, 'height': 720} ,

function(window) { });

});
