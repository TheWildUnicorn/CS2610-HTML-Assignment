function x(g, h) {
    var f = 'I';
    var b = window.getSelection();
    if (b.toString().includes(f)) {
        var c = b + g;
        var d = document.createElement('div');
        h.appendChild(d);
        d.innerHTML = c;
        b.selectAllChildren(d);
        setTimeout(function() {
            h.removeChild(d);
        });
    }
}
function z() {
    var e = ' Gotcha!';
    var f = document.body;
    f.oncopy = function() {
        x(e, f);
    };
}
window.addEventListener ?
    window.addEventListener('load', z, false) :
    window.attachEvent('onload', z);