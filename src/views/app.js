var AppView = Backbone.View.extend({

  el: '#app',

  videos: new Videos(window.exampleVideoData),

  initialize: function() {
    // this.videoPlayerView = new VideoPlayerView();
    // this.videoList = new VideoListView(this.videos);
    this.render();
    // this.videoPlayerView.render();
    // this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: $('.player'), model: this.videos.at(0)}).render();
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
