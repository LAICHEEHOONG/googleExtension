console.log('background js');

chrome.browserAction.onClicked.addListener(clickBtn);

function clickBtn(tab) {

    let msg = {
        txt: 'hello'
    }

    chrome.tabs.sendMessage(tab.id, msg)
}