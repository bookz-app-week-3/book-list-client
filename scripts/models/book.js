var app = app || {};
var __API_URL__ = 'https://jc-kn-booklist.herokuapp.com';

(function(module){
  function errorCallback(err) {
    module.errorView.initErrorPage(err);
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

  Book.fetchOne = (ctx, callback) =>
    $.get(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
      .then(results => {
        console.log(ctx.book);
        ctx.book = results[0]

      })
      .then(callback)
      .catch(errorCallback);

  // Book.create = book =>
  //   $.post(`${__API_URL__}/api/v1/books`, book)
  //     .then(() => page('/'))
  //     .catch(errorCallback);

  module.Book = Book
})(app)
