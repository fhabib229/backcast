var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function(options) {
    console.log('options', options);

    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
