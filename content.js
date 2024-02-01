
var walker = document.createTreeWalker(
    document.body, 
    NodeFilter.SHOW_TEXT, 
    null, 
    false
);

var node;

while (node = walker.nextNode()) {
    if (node.nodeValue.toLowerCase().includes('xandering')) {
        node.nodeValue = node.nodeValue.replace(/xandering/gi, 'Jaquaysing')
    }
    
    if (node.nodeValue.toLowerCase().includes('jaquaying')) {
        node.nodeValue = node.nodeValue.replace(/jaquaying/gi, 'Jaquaysing')
    }
    if (node.nodeValue.toLowerCase().includes('xandered')) {
        node.nodeValue = node.nodeValue.replace(/xandered/gi, 'Jaquaysed')
    }
}
