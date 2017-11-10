var app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
  }

  bookView.initIndexPage = function() {
    reset();
    $('.book-view').show();
    $('.list-book').hide();
    app.Book.all.map(book => $('.book-view').append(book.toHtml()));
  }

  bookView.initDetailPage = function(ctx) {
    reset();
    $('.single-view').show();
    $('.single-book').empty();
    let template = Handlebars.compile($('#single-template').text());
    $('.single-book').append(template(ctx));
  }
  module.bookView = bookView;

  bookView.initFormPage = function() {
    reset();
    $('.create-view').show();
    $('.create-book').on('submit', function(e) {
      e.preventDefault();
      let newBook = {
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value,
        image_url: e.target.image_url.value,
        description: e.target.description.value
      };
      module.Book.create(newBook);
    })
  }

  bookView.initUpdateFormPage = function() {
    reset();
    $('.update-view').show();
    $('.update-book').on('submit', function(e) {
      e.preventDefault();
      let updatedBook = {
        title: e.target.title.value,
        author: e.target.author.value,
        isbn: e.target.isbn.value,
        image_url: e.target.image_url.value,
        description: e.target.description.value,
      };
      module.Book.update(updatedBook);
    })
  }

})(app)

// $(document).ready(function() {
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });
