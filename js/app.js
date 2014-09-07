App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource("bookmarks", function(){
  	this.route("new");
  });
});

