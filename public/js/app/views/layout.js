define(['jquery','underscore','backbone','text!./../templates/layout.html'],
		function($,_,Backbone,LayoutTemplate){
	var LayoutView = Backbone.View.extend({
		id:"content",
		render:function(){
			this.$el.html(_.template(LayoutTemplate));
		}
	});
	return LayoutView;
});