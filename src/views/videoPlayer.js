var VideoPlayerView = Backbone.View.extend({
  // model: this.collection.at(0),

  initialize: function() {
    this.listenTo(this.collection, 'select', this.render);
    //When a video is selected in the collection, re-render video player view

  },

  render: function() {
    if (this.model === undefined) {
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      this.$el.html(this.template(this.model.attributes));
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
