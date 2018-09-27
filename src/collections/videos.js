var Videos = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search',

  search: function(string) {
    this.fetch({
      data: {
        q: string,
        maxResults: 5,
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        type: 'video',
        videoEmbeddable: true
      },
      success: function() {
        console.log('Successfully received data!');
      },
      error: function(data) {
        console.log('Failed to receive,',data);
      }
    });
  },

  model: Video,

  parse: function(data) {
    return data.items;
  }
});
