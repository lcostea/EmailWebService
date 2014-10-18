exports.sendEmail = function(toAddresses, subject, htmlText){
    
    var ses = require('node-ses');
    var client = ses.createClient({ key: 'key', secret: 'secret' });

    client.sendemail({
        to: 'liviu@travelsale.ro'
     , from: 'no-reply@travelsale.ro'
     , subject: subject
     , message: htmlText
     , altText: 'plain text'
    }, function (err, data, res) {
    });

}
