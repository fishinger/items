// var StaticServer = require('static-server');
// var deployd = require('deployd');
// var server = new StaticServer({
//   rootPath: '.',            // required, the root of the server file tree
//   name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
//   port: 8090,               // optional, defaults to a random port
//   host: 'localhost',       // optional, defaults to any interface
//   cors: '*',                 // optional, defaults to undefined
//   followSymlink: true,      // optional, defaults to a 404 error
//   templates: {
//     index: 'index.html',      // optional, defaults to 'index.html'
//     notFound: '404.html'    // optional, defaults to undefined
//   }
// });


//  //dpd.on('items:changed', function(el) {
//  //  fetch();
//  //  console.log('aaaaaaaaa');
//  //});

// //server.on('items:changed', function (data) {
// //    console.log(data)
// //});
// //server.on('items:create', function (data) {
// //    console.log(data)
// //});

// server.start(function () {
//   console.log('Server listening to', server.port);

//   var dpd = require('dpd-js-sdk')('http://localhost:2403', '/items' );
//   //dpd.items = dpd("/items");

//   // dpd.items.get(function(results, error) {
//   //   console.log(results, error)
//   // });
//   globalName = 'NAME';
//   console.log(dpd)
// });

// server.on('request', function (req, res) {
//   // req.path is the URL resource (file name) from server.rootPath
//   // req.elapsedTime returns a string of the request's elapsed time
// });

// server.on('symbolicLink', function (link, file) {
//   // link is the source of the reference
//   // file is the link reference
//   console.log('File', link, 'is a link to', file);
// });

// server.on('response', function (req, res, err, stat, file) {
//   // res.status is the response status sent to the client
//   // res.headers are the headers sent
//   // err is any error message thrown
//   // file the file being served (may be null)
//   // stat the stat of the file being served (is null if file is null)

//   // NOTE: the response has already been sent at this point
// });

//server.on('response', function (data) {
//
//});


// production.js
// var deployd = require('deployd');

// var server = deployd({
//   port: 5000,
//   env: 'items',
//   db: {
//     host: 'localhost',
//     port: 27017,
//     name: 'items',
//     credentials: {
//       username: 'username',
//       password: 'password'
//     }
//   }
// });

// server.listen();

// server.on('listening', function() {
//   console.log("Server is listening");
// });

// server.on('error', function(err) {
//   console.error(err);
//   process.nextTick(function() { // Give the server a chance to return an error
//     process.exit();
//   });
// });


// production.js
var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: process.env.ENVIRONMENT || 'develop',
  db: {
    connectionString: 'mongodb://localhost:27017/dpdinterface'
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});