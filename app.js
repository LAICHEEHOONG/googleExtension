console.log('google extension');



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {
    console.log(request.txt);
    if (request.txt === 'hello') {
        document.querySelector('textarea').style.backgroundColor = 'black';
        document.querySelector('textarea').style.color = 'white';
    }
}