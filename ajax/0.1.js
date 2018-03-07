function test() {
    var xtr = new XMLHttpRequest();

    xtr.onreadystatechange = function () {
        if (xtr.readyState == 400) {
            if (xtr.status == 200) {
                alert(xtr.responseText);
            }else {
                alert(xtr.statusText);
            }
        }
    };

    xtr.onerror = function (e) {
        alert(xtr.statusText);
    };

    xtr.open('GET', 'http://www.aianyun.com/php/index.php', true);
    xtr.send();
}