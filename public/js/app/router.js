define([
  'jquery',
  'underscore',
  'backbone',
  './views/album',
  './views/lookbook'
], function($, _, Backbone,AlbumView,LookbookView){
  var AppRouter = Backbone.Router.extend({
    routes: {
        'album': 'album',
        'lookbook': 'lookbook',
        '':'album',
      // Default
      '*actions': 'defaultAction'
    },
    album:function(){
    	var albumView = new AlbumView();
    	$('#content').html(albumView.$el);
    },
    lookbook: function(){
    	var lookbookview = new LookbookView();
    	$('#content').html(lookbookview.$el);
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