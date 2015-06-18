define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  var AppRouter = Backbone.Router.extend({
    routes: {
        'album': 'album',
        'lookbook': 'lookbook',
        '':'album',
      // Default
      '*actions': 'defaultAction'
    },
    album:function(){
    	console.log('album');
    },
    lookbook: function(){
    	console.log('lookbook');
    },
    defaultAction:function(){
    	console.log('default');
    }
  });

  var initialize = function(){
	    var app_router = new AppRouter;
	    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});