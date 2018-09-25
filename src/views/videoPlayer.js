var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //When a video is selected in the collection, re-render video player view
    this.listenTo(this.collection, 'select', this.render);
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
