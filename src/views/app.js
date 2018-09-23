var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.videoPlayerView = new VideoPlayerView();
    this.videoList = new VideoListView();
    this.render();
    this.videoPlayerView.render();
    this.videoList.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
