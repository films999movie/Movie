function loadJSAtOnload() {
var scripts = [


"/Horror/Curse-Of-The-Nun.js",


];

for (var i = 0; i < scripts.length; i++) {
    console.log('Loading script ' + scripts[i]);
    var scriptType = document.createElement('script');
    scriptType.type = 'text/javascript';
    scriptType.src = scripts[i];
    document.body.appendChild(scriptType);  
}
};
if (window.addEventListener)
    addEventListener('load', loadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent('onload', loadJSAtOnload);
else window.onload = loadJSAtOnload;
