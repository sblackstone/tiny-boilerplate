requirejs.config({
  baseUrl: 'js',
  paths: {
	  jquery: '//code.jquery.com/jquery-2.1.4.min.js',
    bootstrap:  "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min" 
  }, 
  shim: {
    'bootstrap': ['jquery']
  }

});

require(['jquery','bootstrap'], function($) {
  console.log($('html'));
});