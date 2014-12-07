var emailSender = require('../emailSender/emailSender');
var htmlCreator = require('../htmlCreator/htmlCreator');
var commonJsonCreator = require('../htmlCreator/commonJsonCreator');

exports.sendDailyEmail = function (req, res) {

    var jsonData = req.body;
    
    var commonJson = commonJsonCreator.getCommonJson(jsonData);
    var resultHtml = htmlCreator.getHtml(commonJson.tableHeader, commonJson.tableContent);

    //emailSender.sendEmail(commonJson.to, commonJson.subject, resultHtml);

    
    var resultJson = JSON.stringify(commonJson);
    res.send(resultJson);
}

exports.transformToHtmlJson = function (req, res) {
    var jsonData = req.body;

    var commonJson = commonJsonCreator.getCommonJson(jsonData);
    var resultJson = JSON.stringify(commonJson);

    res.send(resultJson);
}