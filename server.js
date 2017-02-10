var deployd = require('deployd');
var request = require('request');
var mailOptions, transporter;
var nodemailer = require('nodemailer');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:5000');


var dpd = deployd({
  port: process.env.PORT || 5000,
  env: process.env.ENVIRONMENT || 'development',
  db: {
    connectionString: 'mongodb://localhost:27017/items'
  }
});

dpd.listen();

dpd.on('listening', function() {
  console.log("Server is listening");

});

dpd.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});

//создаем коллекцию
function Collection(url) {
  this.url = url
}

Collection.prototype.request = function (options, fn) {
  var url = this.url;
  options.url = url + (options.url || '');
  request(options, function (err, res, body) {
    if(res.statusCode >= 400) {
      err = body || {message: 'an unknown error occurred'};
      return fn(err);
    }

    fn(null, body);
  });
}

//подключаемся к колекции
var c = new Collection('http://localhost:5000/items');
c.request({url: '?done=false'}, function(err, todos) {
  //console.log(todos); // [...]
});

/*
* почта
* */
transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'pavel45888@gmail.com',
    pass: '27041963elgoog'
  }
});
//ловим событие регистрации и отправляем почту
socket.on('reg', function (data) {
  console.log(data.email); // emit()ed from the server
  // mailOptions = {
  //   from: 'Pavel',
  //   to: data.email,
  //   subject: 'Hello',
  //   html: '<b>test</b>'
  // };
  // transporter.sendMail(mailOptions, function(err, info) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   return console.log("Message sent: " + info.response);
  // });
});