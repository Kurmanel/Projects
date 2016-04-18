function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            myFunction(xhttp);
        }
    };
    xhttp.open("GET", "rates_all.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Дата</th><th>Валюта</th><th>Курс</th><th>Индекс</th><th>Изменение</th><th>Quant</th></tr>";
    var x = xmlDoc.getElementsByTagName("item");
    for (i = 0; i <x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("index")[0].childNodes[0] +
            "</td><td>" +
            x[i].getElementsByTagName("change")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("quant")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}