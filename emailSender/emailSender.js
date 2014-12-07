exports.sendEmail = function(toAddresses, fromAddress, subject, htmlText){
    
    var ses = require('node-ses');
    var client = ses.createClient({ key: 'key', secret: 'secret_key' });

    for (var toAddress in toAddresses)
    {
        client.sendemail({
           to: toAddress
         , from: fromAddress
         , subject: subject
         , message: htmlText
         , altText: 'error sending email'
        }, function (err, data, res) {
        });
    }
}
