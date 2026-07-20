console.log("✅ Content script loaded!");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    console.log("Received:", request);

    if (request.action !== "detectProduct") return;

    console.log("Current URL:", window.location.href);
    console.log("Current Path:", window.location.pathname);

    const match = window.location.pathname.match(/products\/(\d+)/);

    console.log("Regex match:", match);

    if (!match) {
        sendResponse(null);
        return;
    }

    sendResponse({
        productId: match[1]
    });

});