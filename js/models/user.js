TodoApp.User = DS.Model.extend({
  name: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string')
});

TodoApp.User.FIXTURES = [
  { id: 1, name: 'Jordan', lastName: 'Belfort', email: 'jordan@belfort.com' },
  { id: 2, name: 'Jordan', lastName: 'Michael', email: 'michael.jordan@google.com' }
]
