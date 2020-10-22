const filter = {
  urls: ["*://*/*"],
  types: ["main_frame", "sub_frame"],
}

function header(details) {
  for (let i in details.responseHeaders){
     if (details.responseHeaders[i].name.toLowerCase() === "content-security-policy"){
        details.responseHeaders[i].value = ""
      }
  }
  return {
    responseHeaders: details.responseHeaders,
  }
}

chrome.webRequest.onHeadersReceived.addListener(header, filter, [
  "blocking",
  "responseHeaders",
])
