var emailSender = require('../emailSender/emailSender');
var htmlCreator = require('../htmlCreator/htmlCreator');
var commonJsonCreator = require('../htmlCreator/commonJsonCreator');

exports.sendDailyEmail = function (req, res) {
    var commonJson = commonJsonCreator.getCommonJson(req.body);
    var resultHtml = htmlCreator.getHtml(commonJson.tableHeader, commonJson.tableContent);

    //emailSender.sendEmail(commonJson.to, commonJson.from, commonJson.subject, resultHtml);
    
    res.send(resultHtml);
}

exports.transformToHtmlJson = function (req, res) {
    var commonJson = commonJsonCreator.getCommonJson(req.body);
    var resultHtml = htmlCreator.getHtml(commonJson.tableHeader, commonJson.tableContent);

    res.send(resultHtml);
}