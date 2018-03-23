import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Broadcasts from './Broadcasts';
import handleMethodException from '../../modules/handle-method-exception';

Meteor.methods({
  'broadcasts.insert': function broadcastsInsert(doc) {
    check(doc, {
      title: String,
      body: String,
    });

    try {
        const myUser = 'faker';
        if(this.userId) myUser = this.userId;
      return Broadcasts.insert({ owner: myUser, ...doc });
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'broadcasts.update': function broadcastsUpdate(doc) {
    check(doc, {
      _id: String,
      title: String,
      body: String,
    });

    try {
      const broadcastId = doc._id;
      Broadcasts.update(broadcastId, { $set: doc });
      return broadcastId; // Return _id so we can redirect to document after update.
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'broadcasts.remove': function broadcastsRemove(broadcastId) {
    check(broadcastId, String);

    try {
      return Broadcasts.remove(broadcastId);
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});

// rateLimit({
//   methods: [
//     'broadcasts.insert',
//     'broadcasts.update',
//     'broadcasts.remove',
//   ],
//   limit: 5,
//   timeRange: 1000,
// });