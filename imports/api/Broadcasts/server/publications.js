import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Broadcasts from '../Broadcasts';

Meteor.publish('broadcasts', function broadcasts() {
  return Broadcasts.find({ owner: 'faker' });
  // return Broadcasts.find({ owner: this.userId });
});

// Note: broadcasts.view is also used when editing an existing document.
Meteor.publish('broadcasts.view', function broadcastsView(documentId) {
  check(documentId, String);
  return Broadcasts.find({ _id: documentId, owner: 'faker' });
  // return Broadcasts.find({ _id: documentId, owner: this.userId });
});