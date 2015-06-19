define(['backbone','localstorage'],function(Backbone,localstorage){
	var LookbookModel = Backbone.Model.extend({
		initialize:function(){
			var filename = this.get('filename');
			
			this.set({
				'thumbnail' : '/cache/thumbnails/'+filename+'_w200_h200.jpg',
				'file' : '/cache/images/'+filename+'_w2000_h2000.jpg',
				'sortorder' :100
			});
		}		
	});
	var LookbookCollection = Backbone.Collection.extend({
		model:LookbookModel,
		localStorage: new Backbone.LocalStorage("lookbook"),
		comparator:'sortorder',
//		function(collection){
//			return( collection.get( 'sortorder' ) );
//		}
	});
	return LookbookCollection;
});