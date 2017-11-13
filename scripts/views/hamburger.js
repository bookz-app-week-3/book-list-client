$(function($){
  $( '.icon-menu' ).hover(function(){
    $('.nav-links').addClass('expand')
  })
  $( '.nav-links' ).click(function(){
    $('.nav-links').removeClass('expand')
  })
})
