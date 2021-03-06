// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var ready;
ready = function() {
  $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 240
     edge: 'right', // Choose the horizontal origin
     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $('#textarea1').trigger('autoresize');
  Materialize.updateTextFields();
  $(".dropdown-button").dropdown();

  function fullscreen(){
    jQuery('#hero').css({
        width: jQuery(window).width(),
        height: jQuery(window).height()
    });
  }

  fullscreen();

// Run the function in case of window resize
  jQuery(window).resize(function() {
    fullscreen();
  });

};

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
