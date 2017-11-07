var app = app || {};
var __API_URL__ = 'https://jc-knbooklist.herokuapp.com';

(function(module){
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }


  function Task(taskObject) {
    Object.keys(taskObject).forEach(key => this[key] = taskObject[key]);
  }

  Task.all = [];

  Task.loadAll = rows => {
    Task.all = rows.map(task => new Task(task))
  }

  Task.fetchAll = callback =>
    $.get(`${__API_URL__}/books`)
      .then(Task.loadAll)
      .then(callback)
      .catch(errorCallback);


  module.Task = Task
})(app)
