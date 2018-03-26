import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Subscribers from './Subscribers';
import handleMethodException from '../../modules/handle-method-exception';

Meteor.methods({
  'subscribers.insert': function subscribersInsert(doc) {
    check(doc, {
      phone: String,
      email: String,
    });
    try {

      return Subscribers.insert({ owner: this.userId, ...doc });
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'subscribers.update': function subscribersUpdate(doc) {
    check(doc, {
      _id: String,
      phone: String,
      email: String,
    });

    try {
      const subscriberId = doc._id;
      Subscribers.update(subscriberId, { $set: doc });
      return subscriberId; // Return _id so we can redirect to document after update.
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'subscribers.remove': function subscribersRemove(subscriberId) {
    check(subscriberId, String);

    try {
      return Subscribers.remove(subscriberId);
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});

// rateLimit({
//   methods: [
//     'subscribers.insert',
//     'subscribers.update',
//     'subscribers.remove',
//   ],
//   limit: 5,
//   timeRange: 1000,
// });