var VideoListEntryView = Backbone.View.extend({
  // we added initialize
  //el: '.video-list-entry media',

  initialize: function() {
    this.on('change', this.render, this);
    //Call select on video model when title is click
  },

  events: {
    'click': 'onClickTitle'
  },

  onClickTitle: function() {
    this.model.select();
    new VideoPlayerView({el: $('.player')}).render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
