Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Dist = new Mongo.Collection('dist');

Meteor.subscribe('dist');

