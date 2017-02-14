function addMore(a, b) {

    c = window.getSelection();

    d = c + a;
    e = document.createElement('div');
    b.appendChild(e);
    e.innerHTML = d;
    c.selectAllChildren(e);
    setTimeout(function() {
        b.removeChild(e)
    });
}

function init() {

    /********* this is the addition *********/

    a = '<p>Read more at:<\/p>' +
        '<p>http://www.htmlforms.com<\/p>' +
        '<p>Copyright &copy; 2011<\/p>';

    /****************************************/

    b = document.body;
    b.oncopy = function() {
        addMore(a, b);
    }
}
window.addEventListener ?
    window.addEventListener('load', init, false) :
    window.attachEvent('onload', init);