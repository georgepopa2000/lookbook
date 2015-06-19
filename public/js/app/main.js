require.config({
	  paths: {
		    jquery: './../libs/jquery',
		    underscore: './../libs/underscore',
		    backbone: './../libs/backbone',
		    text: './../libs/text',
		    localstorage: './../libs/backbone.localstorage',
		    jqueryui: '//code.jquery.com/ui/1.11.4/jquery-ui',
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