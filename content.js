const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span,a,div')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.toLowerCase().includes('xandering')) {
        text[i].innerHTML = text[i].innerHTML.replace(/xandering/gi, 'Jaquaysing')
    }
    if (text[i].innerHTML.toLowerCase().includes('jaquaying')) {
        text[i].innerHTML = text[i].innerHTML.replace(/jaquaying/gi, 'Jaquaysing')
    }
    if (text[i].innerHTML.toLowerCase().includes('xandered')) {
        text[i].innerHTML = text[i].innerHTML.replace(/xandered/gi, 'Jaquaysed')
    }
}