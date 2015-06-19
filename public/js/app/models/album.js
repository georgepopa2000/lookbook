define(['backbone'],function(Backbone){
	var ImageModel = Backbone.Model.extend({
		initialize:function(){
			var filename = this.get('filename').substring(0,this.get('filename').lastIndexOf('.'));
			
			this.set({
				'filename' : filename,
				'thumbnail' : '/cache/thumbnails/'+filename+'_w140_h140.jpg',
				'file' : '/cache/images/'+filename+'_w2000_h2000.jpg',
				'slugid' : filename.replace(/^[^a-z]+|[^\w:.-]+/gi, ""),
			});
			this.set('rand',Math.random());
		}
	});
	
	var AlbumCollection = Backbone.Collection.extend({
		model:ImageModel,
		url:'/apigetimages.php',
	});
	return AlbumCollection;
});