var emailSender = require('../emailSender/emailSender');
var htmlCreator = require('../htmlCreator/htmlCreator');

exports.sendDailyEmail = function (req, res) {
    var jsonEmailData = req.body;
    var today = getCurrentDate();

    var result = htmlCreator.getHtml(jsonEmailData.tableHeader, jsonEmailData.tableContent);

    //emailSender.sendEmail(jsonEmailData.to, jsonEmailData.subject + today, jsonEmailData.htmlMessage)

    res.send(result);
}

exports.sendWeeklyEmail = function(req, res)
{
    res.send({result:'POST'});
}

exports.getEmail = function (req, res) {
    
    res.send({ result: "aa" });
}


function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = dd + ' - ' + mm + ' - ' + yyyy;

    return today;
}