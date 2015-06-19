define(['backbone','localstorage'],function(Backbone,localstorage){
	var LookbookModel = Backbone.Model.extend({
		
	});
	var LookbookCollection = Backbone.Collection.extend({
		//model:
		localStorage: new Backbone.LocalStorage("lookbook"),
	});
	return LookbookCollection;
});