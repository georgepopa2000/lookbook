define(['backbone'],function(Backbone){
	var ImageModel = Backbone.Model.extend({
		initialize:function(){
			
		}
	});
	
	var AlbumCollection = Backbone.Model.extend({
		model:ImageModel
	});
	return AlbumCollection;
});