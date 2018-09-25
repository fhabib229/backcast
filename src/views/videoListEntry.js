var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.on('change', this.render, this);
  },

  events: {
    'click .video-list-entry-title': 'onClickTitle'
  },

  onClickTitle: function() {
    console.log('yay');
    this.model.select();
    new VideoPlayerView({el: $('.player'), model: this.model}).render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
