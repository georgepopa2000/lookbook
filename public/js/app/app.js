define([
  'jquery',
  'underscore',
  'backbone',
  './views/menuview',
  './views/layout',
  'router',
], function($, _, Backbone,MenuView,LayoutView,Router){
  var initialize = function(){
	  var menuView = new MenuView();
	  menuView.render();
	  $('body').append(menuView.$el);
	  var layoutView = new LayoutView();
	  layoutView.render();
	  $('body').append(layoutView.$el);
	  
	  Router.initialize();
  };

  return {
    initialize: initialize
  };
});