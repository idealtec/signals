import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Subscribers from '../Subscribers';

Meteor.publish('subscribers', function subscribers() {
  return Subscribers.find({ owner: this.userId });
});

// Note: subscribers.view is also used when editing an existing subscriber.
Meteor.publish('subscribers.view', function subsribersView(documentId) {
  check(documentId, String);
  return Subscribers.find({ _id: documentId, owner: this.userId });
});