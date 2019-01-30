'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/noderestserverController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks);
};
