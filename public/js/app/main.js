require.config({
	  paths: {
		    jquery: './../libs/jquery',
		    underscore: './../libs/underscore',
		    backbone: './../libs/backbone',
		    text: './../libs/text',
		    localstorage: './../libs/backbone.localstorage',
		  },
		  baseUrl:'./js/app/',
});
var lookbookCollection; 
//console.log(require.toUrl());
require(['jquery'],'./../libs/bootstrap.min')
require(['app',
         './models/lookbook'],
         function(App,LookbookCollection){
	lookbookCollection = new LookbookCollection();
	App.initialize();
})