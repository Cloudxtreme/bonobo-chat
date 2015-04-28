Messages = new Meteor.Collection('messages');

Messages.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    }
  });
