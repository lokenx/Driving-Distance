Template.body.helpers({
    trips: function () {
      return Dist.find({});
    }
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('ll');
});

Template.trip.events({
  'click .delete': function () {
    var del = confirm("Please confirm you want to delete this trip");
    var id = this._id;
    if (del) {
      Meteor.call('removeTrip', id);
    }
  }
});