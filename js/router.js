TodoApp.Router.map(function() {
  this.resource('todos', function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
});
