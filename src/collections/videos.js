var Videos = Backbone.Collection.extend({

  model: Video,

  parse: function(data) {
    return data;
  }
});
