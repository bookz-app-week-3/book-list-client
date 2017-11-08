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

  // bookView.initCreateFormPage = function() {
  //   console.log('initCreateFormPage');
  //   resetView();
  //   $('.create-view').show();
  //   $('#create-form').on('submit', )
  // }

  bookView.singleInitIndexPage = function() {
    $('.container').show();
    $('.single-view').empty();
    app.Book.all.map(book => $('.single-view').append(book.toHtml()));
  }
  module.bookView = bookView;
})(app)

$(document).ready(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});
