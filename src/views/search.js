var SearchView = Backbone.View.extend({

  events: {
    'click button': 'onSearch',
    'keyup': 'onSearch'
  },

  onSearch: function(e) {
    this.collection.search(this.$('.form-control').val());
    if (e.which === 13) {
      this.collection.search(this.$('.form-control').val());
    }
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
