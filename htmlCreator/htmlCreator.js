var json2Html = require('node-json2html');

exports.getHtml = function (headerJson, contentJson) {
    var result = _getHeader(headerJson);
    result += _getBody(contentJson);
    var startHtml = "<table cellpadding=\"8\" style=\"border: 1px solid #dddddd;;border-collapse: collapse;font-size: 12px;font-family: 'Segoe UI', Verdana, Helvetica, Sans-Serif;\">";
    var endHtml = "</table>"


    return startHtml + result + endHtml;
}

var _getHeader = function (headerJson) {
        var headerTransform = { 'tag': 'th', 'html': '${element}' };
        var headerHtml = json2Html.transform(headerJson, headerTransform);
        return '<tr style=\"background-color: #f9f9f9;\">' + headerHtml + '</tr>';
    }

    var _getBody = function (contentJson) {

        var bodyTransform = { tag: 'tr', html: function () { return (json2Html.transform(this.row, valuesTransform)); } }

        var valuesTransform = { tag: 'td', html: '${value}' };

        var bodyHtml = json2Html.transform(contentJson, bodyTransform);

        return bodyHtml;
    }