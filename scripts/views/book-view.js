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
  module.bookView = bookView;
})(app)

$(document).ready(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});
