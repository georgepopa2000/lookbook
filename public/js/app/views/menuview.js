define(['jquery','underscore','backbone','text!./../templates/menu.html','./../models/menu'],
	function($,_,Backbone,menuTemplate,MenuCollection){
		return Backbone.View.extend({
			id:"menucontainer",
			initialize : function(){				
				this.collection = new MenuCollection([
					{'name':'Album','link':'#'},
					{'name':'Lookbook','link':'#lookbook'},
				]);
			},
			render:function(){				
				var compiledT = _.template(menuTemplate);
				this.$el.html(compiledT({'menudata':this.collection.toJSON()}));
			}
		});
});