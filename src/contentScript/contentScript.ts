chrome.runtime.sendMessage('I am loading content script', (response) => {
    console.log(response);
    console.log('I am content script')

})

window.onload = (event) => {
    console.log('page is fully loaded');

    function replaceTextInNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = node.nodeValue.replace(/answer/g, 'keywords');
        } else {
          for (let childNode of node.childNodes) {
            replaceTextInNode(childNode);
          }
        }
      }
    
      // Replace all occurrences of 'answer' with 'keywords' in the whole document
      replaceTextInNode(document.body);
};

