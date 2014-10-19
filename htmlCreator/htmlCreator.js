var json2Html = require('node-json2html');

exports.getHtml = function (headerJson, contentJson) {
    var result = _getHeader(headerJson);
    result += _getBody(contentJson);
    var startHtml = "<table>";
    var endHtml = "</table>"


    return startHtml + result + endHtml;
}

var _getHeader = function (headerJson) {
        var headerTransform = { 'tag': 'th', 'html': '${element}' };
        var headerHtml = json2Html.transform(headerJson, headerTransform);
        return '<tr>' + headerHtml + '</tr>';
    }

    var _getBody = function (contentJson) {

        var bodyTransform = { tag: 'tr', html: function () { return (json2Html.transform(this.row, valuesTransform)); } }

        var valuesTransform = { tag: 'td', html: '${value}' };

        var bodyHtml = json2Html.transform(contentJson, bodyTransform);

        return bodyHtml;
    }