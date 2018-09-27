var AppView = Backbone.View.extend({

  el: '#app',

  videos: new Videos(),

  initialize: function() {
    console.log('Videos,',this.videos);
    this.listenTo(this.videos, 'sync', function() {
      this.videos.at(0).select();
    });
    this.videos.search('Bananas');
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoPlayerView({el: $('.player'), model: this.videos.at(0), collection: this.videos}).render();
    new VideoListView({el: $('.list'), collection: this.videos}).render();
    new SearchView({el: $('.search'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
