import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Channels from '../Channels';

Meteor.publish('channels', function channels() {
  return Channels.find({ owner: this.userId }, {sort: {updatedAt: -1}});
});

Meteor.publish('channels.view', function channelsView(documentId) {
  check(documentId, String);
  return Channels.find({ _id: documentId, owner: this.userId });
});