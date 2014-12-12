exports.sendEmail = function(toAddresses, fromAddress, subject, htmlText){
    
    var ses = require('node-ses');
    var client = ses.createClient({ key: 'key', secret: 'secret' });

    for (var i = 0; i < toAddresses.length; i++) 
    {
		console.log(JSON.stringify(toAddresses[i]));
		
        client.sendemail({
           to: toAddresses[i].email
         , from: fromAddress
         , subject: subject
         , message: htmlText
         , altText: 'error sending email'
        }, function (err, data, res) {console.log("Error sending email: " + JSON.stringify(err));
        });
    }
}
