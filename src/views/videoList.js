var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);

  },

  // events: {
  //   'change': 'render'
  // },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('Children',$('.video-list').children());
    var videoListChildren = $('.video-list').children();
    // for (var i = 0; i < videoListChildren.length; i++) {
    //   console.log(typeof videoListChildren[i]);
    //   $(videoListChildren[i]).replaceWith(this.renderVideo(this.collection[i]));
    // }
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
