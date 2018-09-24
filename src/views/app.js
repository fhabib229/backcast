var AppView = Backbone.View.extend({

  el: '#app',

  videos: new Videos(window.exampleVideoData),

  // collection: this.videos,

  initialize: function() {
    // this.videoPlayerView = new VideoPlayerView();
    // this.videoList = new VideoListView(this.videos);
    this.render();
    // this.videoPlayerView.render();
    // this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: $('.player')}).render();
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
