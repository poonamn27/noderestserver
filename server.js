var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


var routes = require('./api/routes/noderestserverRoutes'); //importing route
routes(app);
  app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
