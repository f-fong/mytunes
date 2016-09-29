// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    console.log('getting..');
    $.get('https://api.parse.com/1/classes/songs', function(data) {
      console.log('got!');
      for (var elem of data.results) {
        context.add(elem);
      }
      context.trigger('200', context);
    });
  }
});