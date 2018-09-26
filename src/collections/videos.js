var Videos = Backbone.Collection.extend({
  // url: '/videos',

  search: function(string) {
    $.ajax({
      query: string, //FIX ME
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        console.log('Message received');
        return data;
      },
      error: function(data) {
        console.log('Failed to receive message: ', data);
      }
    });
  },
  model: Video,

  parse: function(data) {
    return data;
  }
});
