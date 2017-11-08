app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide;
    $('.book-view').show;
    app.Books.all.map(books => $('book-view').append(books.toHtml()));
  }
  $(document).ready(function() {
    app.Books.fetchAll(bookView.initIndexPage);
  });
  module.bookView = bookView;
})(app)
