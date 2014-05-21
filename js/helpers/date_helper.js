Ember.Handlebars.registerBoundHelper('formatDate', function(date, format) {
  if(date) {
    if(format) {
      return moment(date).format(format);
    }

    return moment(date).fromNow();
  } else {
    return '';
  }
});
