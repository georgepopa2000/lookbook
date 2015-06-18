define([
  'jquery',
  'underscore',
  'backbone',
  './views/menuview',
  'router',
], function($, _, Backbone,MenuView,Router){
  var initialize = function(){
	  var menuView = new MenuView();
	  menuView.render();
	  $('body').append(menuView.$el);
	  
	  Router.initialize();
  };

  return {
    initialize: initialize
  };
});