var app = app || {};
var __API_URL__ = 'https://jc-kn-booklist.herokuapp.com';

(function(module){
  function errorCallback(err) {
    console.error(err);
    module.errorview.initErrorPage(err);
  }
  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
  }


  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($('#book-template').text());
    return template(this);
  }

  Book.all = [];

  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book))
  }

  Book.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);


  module.Book = Book
})(app)
