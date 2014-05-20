TodoApp.TodosNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('todo');
  },

  actions: {
    create: function() {
      this.modelFor('todos.new').save();

      this.transitionTo('todos');
    }
  }
});
