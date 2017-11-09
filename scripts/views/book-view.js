var app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
  }

  bookView.initIndexPage = function() {
    reset();
    $('.book-view').show();
    $('.list-book').empty();
    app.Book.all.map(book => $('.book-view').append(book.toHtml()));
  }

  // bookView.initCreateFormPage = function() {
  //   console.log('initCreateFormPage');
  //   resetView();
  //   $('.create-view').show();
  //   $('#create-form').on('submit', )
  // }

  bookView.initDetailPage = function(ctx) {
    reset();
    $('.single-view').show();
    $('.book-details').empty();
    let template = Handlebars.compile($('#single-template').text());
    $('.book-details').append(template(ctx));
  }
  module.bookView = bookView;
})(app)

$(document).ready(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});
