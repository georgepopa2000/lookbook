define(['jquery','underscore','backbone','text!./../templates/lookbook.html','text!./../templates/lookbookright.html','jqueryui'],
	function($,_,Backbone,lookbooktemplate,lookbookrighttemplate){
	return Backbone.View.extend({
		className:'lookbookcontainer',
		initialize:function(){
			this.render();
		},
		render:function(){
			var compiledt = _.template(lookbooktemplate);
			var compiledr = _.template(lookbookrighttemplate);
			this.$el.html(compiledt({images:lookbookCollection.toJSON()}));
			this.$('#lookbookrightinner').html(compiledr({images:lookbookCollection.toJSON()}));
			var that=this;
			this.$( "#lookbookleft1" ).sortable({				
					update: function( event, ui ) {
						var arr = that.$("#lookbookleft1 .containerthumbnailb");
						for (var i = 0; i < arr.length; i++) {
							var hash = that.$(arr[i]).data('hash');
							var lookbook = lookbookCollection.get(hash);
							lookbook.set('sortorder',i);
						}
						lookbookCollection.sort();
						that.$('#lookbookrightinner').html(compiledr({images:lookbookCollection.toJSON()}));
			}});
			this.$('#createpdf').click(function(e){
				e.preventDefault();
				var arr = that.$("#lookbookleft1 .containerthumbnailb");
				var stringt = '';
				for (var i = 0; i < arr.length; i++) {
					var filename = that.$(arr[i]).data('filename');					
					stringt+=filename+",";
				}				
				window.location.href='makepdf.php?files='+stringt;
			});
		}
	});
});