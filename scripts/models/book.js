var app = app || {};
var __API_URL__ = 'https://jc-kn-booklist.herokuapp.com';

(function(module){
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
  }


  function Book(bookObject) {
    Object.keys(bookObject).forEach(key => this[key] = bookObject[key]);
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

  // Book.fetchOne = id =>
  //   $.get(`${__API_URL__}/api/v1/books/1`)
  //     .then(data => id )
  //     .catch(errorCallback);

  module.Book = Book
})(app)
