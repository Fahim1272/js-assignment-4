// Function
function isJavaScriptFile(String) {
    if (typeof String === 'string') {
        const doesExist = String.endsWith('.js')
        return doesExist;
    } else {
        return "Please input File name Properly!"
    }
}
const existFile = isJavaScriptFile('index.js');
console.log(existFile);