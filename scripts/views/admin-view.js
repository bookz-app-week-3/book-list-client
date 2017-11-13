'use strict'
var app = app || {};

(function (module){
  const adminView = {};

  adminView.initAdminPage = () => {
    $('.admin-view').show();
  };

  adminView.handleAdmin = () => {
    //need to show the update and delete buttons when this is called but for now it only needs to remove the login form.
    $('.admin-view').hide();
    $('.update-button').show();
    $('.delete-button').show();
  }

  $('admin-login').on('submit', function(e) {
    e.preventDefault();
    let token = e.target.password.value;
    app.Book.validateAdmin(token);
  });

  adminView.handleAdminLogout = () => {
    localStorage.clear();
    $('#logout').hide();
    $('#login').show();
    page('/');
  }

  module.adminView = adminView
})(app);
