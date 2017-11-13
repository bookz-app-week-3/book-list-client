if (window.location.pathname !== '/') {
  console.log('resetting page base to handle nested path')
  page.base('/book-list-client');
}

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/new', ctx => app.bookView.initFormPage(ctx));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailPage));
page('/books/:book_id/delete', ctx => app.Book.delete(ctx, app.bookView.initIndexPage))
page('/books/:book_id/update', ctx => app.bookView.initUpdateFormPage(ctx))

page();
