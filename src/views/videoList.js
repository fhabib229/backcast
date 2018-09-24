var VideoListView = Backbone.View.extend({
  // el: '.list',

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },

  events: {
    'change': 'render'
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({el: $('.video-list'), model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
