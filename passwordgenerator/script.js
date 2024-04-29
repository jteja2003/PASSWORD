
function generatepass() {
    var l = document.getElementById('len').value;
    var randompass = "";
    for (var i = 0; i < l; i++) {
        randompass += randomc();
    }
    document.getElementById('out-box').value = randompass;
}

function randomc() {
    var rand = Math.floor(Math.random() * 62);
    if (rand <= 9) {
        var ch = rand + 48;
        return String.fromCharCode(ch);
    } else if (rand > 9 && rand <= 35) {
        var ch = rand + 55;
        return String.fromCharCode(ch);
    } else {
        var ch = rand + 61;
        return String.fromCharCode(ch);
    }
}
