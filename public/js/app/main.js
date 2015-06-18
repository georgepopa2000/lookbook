require.config({
	  paths: {
		    jquery: './../libs/jquery',
		    underscore: './../libs/underscore',
		    backbone: './../libs/backbone',
		    text: './../libs/text',
		  },
		  baseUrl:'./js/app/',
});
//console.log(require.toUrl());
require(['jquery'],'./../libs/bootstrap.min')
require(['app'
         ],
         function(App){
		
	App.initialize();
})