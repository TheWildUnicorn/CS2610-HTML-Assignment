function addMore(addition, body) {

    var trigger = 'I';
    var selection = window.getSelection();
    if (selection.toString().includes(trigger)) {
        var totalText = selection + addition;
        var htmlDiv = document.createElement('div');
        body.appendChild(htmlDiv);
        htmlDiv.innerHTML = totalText;
        selection.selectAllChildren(htmlDiv);
        setTimeout(function() {
            body.removeChild(htmlDiv);
        });
    }

}

function init() {

    /********* this is the addition *********/

    var addition = ' Gotcha!';

    /****************************************/

    var body = document.body;
    body.oncopy = function() {
        addMore(addition, body);
    };
}
window.addEventListener ?
    window.addEventListener('load', init, false) :
    window.attachEvent('onload', init);