define(['jquery','backbone'],function($,Backbone){
	var MenuItemModel = Backbone.Model.extend({
		
	});
	
	var MenuCollection = Backbone.Collection.extend({
		model:MenuItemModel,
		initialize:function(){
			//console.log(options);
		}
	});
	
	return MenuCollection;
});