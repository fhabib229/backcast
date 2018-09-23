var VideoListEntryView = Backbone.View.extend({
  // we added initialize
  // initialize: function() {
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
