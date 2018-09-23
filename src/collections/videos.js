var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(options) {
    console.log('Video\'s options', options);

  },
});
