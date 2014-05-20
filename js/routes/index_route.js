TodoApp.IndexRoute = Ember.Route.extend({
  enter: function() {
    return this.transitionTo('todos');
  }
});

