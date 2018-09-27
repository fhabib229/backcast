var AppView = Backbone.View.extend({

  el: '#app',

  videos: new Videos(),

  initialize: function() {
    this.videos.search('bananas');
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: $('.player'), model: this.videos.at(0), collection: this.videos}).render();
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
