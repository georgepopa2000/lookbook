define(['jquery','underscore','backbone','text!./../templates/album.html','./../models/album','./../models/lookbook'],
function($,_,Backbone,albumTemplate,AlbumCollection,LookbookCollection){
	var AlbumView = Backbone.View.extend({
		classname:'albumcontainer',
		initialize: function(){
			
			var album = new AlbumCollection();
			this.collection = album;
			var that = this;
			album.fetch({success:function(){
				that.render();
			}});
			
		},
		events:{
			'click .containerthumbnail,.transparentcover':function(event){
				var element	= $(event.target);
				if (element.hasClass('transparentcover')){
					element.removeClass('transparentcover');
					lookbookCollection.remove(element.data('hash'));
				} else {
					element = element.parent();
					lookbookCollection.add({
						'id':element.data('hash'),
						'filename':element.data('filename'),
						});
					element.addClass('transparentcover');
				}
				console.log(lookbookCollection.length);	
				//this.changeelement(element);
			},
		},
		changeelement:function(element){
			if (element.hasClass('transparentcover')){
				element.removeClass('transparentcover');
				lookbookCollection.remove(element.data('hash'));
			} else {
				lookbookCollection.add({
					'id':element.data('hash'),
					'filename':element.data('filename'),
					});
				element.addClass('transparentcover');
			}
			console.log(lookbookCollection.toJSON());			
		},
		render:function(){

			var compiledat = _.template(albumTemplate);		
			var functions = {};
			functions.isLookbook = function(id){				
				return !(lookbookCollection.get(id) == undefined);
			}
			this.$el.html(compiledat({images:this.collection.toJSON(),functions:functions}));
		},
	});
	return AlbumView;
});