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
      .then(results => ctx.book = results[0])
      .then(callback)
      .catch(errorCallback);

  Book.delete = (ctx, callback) => {
    console.log(ctx)
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`,
      method: 'DELETE',
      success: function() {
        page('/');
        callback();
      }
    })
  }
  Book.update = (book, ctx) => {
    console.log(book)
    console.log(ctx)
    $.ajax({
      url: `${__API_URL__}/api/v1/books/${ctx.params.book_id}`,
      method: 'PUT',
      data: book,
      success: function() {
        page('/');
      }
    })
    console.log(`${__API_URL__}/api/v1/books/${ctx.params.book_id}`)
  }

  Book.create = book => {
    console.log(book);
    $.post(`${__API_URL__}/api/v1/books`, book)
      .then(() => page('/'))
      .catch(errorCallback);
  }

  Book.validateAdmin = function(token) {
    $.get(`${__API_URL__}admin/`, {token})
      .then((result) => {
        if(result) {
          localStorage.token = true;
          app.adminView.handleAdmin();
          $('#login').hide();
          $('#logout').show();
        } else{
          alert('inncorrect password')
        }
      })
  }

  module.Book = Book
})(app)
