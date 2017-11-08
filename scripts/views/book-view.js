app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
  }

  bookView.initIndexPage = function() {
    $('.container').show();
    $('.book-view').empty();
    app.Book.all.map(book => $('.book-view').append(book.toHtml()));
  }

  bookView.singleInitIndexPage = function() {
    $('.container').show();
    $('.single-view').empty();
    app.Book.all.map(book => $('.single-view').append(book.toHtml()));
  }
  module.bookView = bookView;
})(app)

$(document).ready(function() {
  app.Book.fetchOne(app.bookView.singleInitIndexPage);
});
