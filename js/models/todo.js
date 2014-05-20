TodoApp.Todo = DS.Model.extend({
  title:       DS.attr('string'),
  description: DS.attr('string'),
  createdAt:   DS.attr('date')
});

TodoApp.Todo.FIXTURES = [
  { id: 1, title: 'Buy Milk', description: 'The bottle is empty', createdAt: new Date() },
  { id: 2, title: 'Buy Bread', description: 'I need a Sandwich', createdAt: new Date() },
  { id: 3, title: 'Buy Cheese', description: 'My sandwich needed', createdAt: new Date() }
]
