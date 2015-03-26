Dist = new Mongo.Collection("dist");

Meteor.methods({
    'addTrip': function(amt, loc){
      Dist.insert({
              total: amt,
              trip: loc,
              createdAt: new Date(),
              owner: Meteor.userId(),  
              username: Meteor.user().username
            });
    },
    'removeTrip': function(id){
      Dist.remove(id);
    }
});

Meteor.publish('dist', function (){
  var currentUser = this.userId;
  return Dist.find({owner: currentUser});
});