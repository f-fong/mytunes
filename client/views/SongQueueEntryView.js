// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    //this.render();
  }, 

  render: function() {
    //rtrn a html element representing our queue elem
    console.log('render - song queue');
    var artist = this.model.get('artist');
    var title = this.model.get('title');
    var html = '<div> (' + artist + ')   '+ title + '</div>';
    return html;
  }
});
