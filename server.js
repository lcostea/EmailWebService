var express = require('express')
  , emailController = require('./routes/emailController');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
});


app.post('/EmailReport/email', emailController.sendDailyEmail);
app.put('/EmailReport/email', emailController.transformToHtmlJson);



app.listen(process.env.PORT, function(){
  console.log("Express server listening on port " + process.env.PORT);
});
