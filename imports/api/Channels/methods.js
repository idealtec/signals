import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Channels from './Channels';
import handleMethodException from '../../modules/handle-method-exception';

Meteor.methods({
  'channels.insert': function channelsInsert(doc) {
    check(doc, {
      name: String,
      description: String,
    });
    try {

      return Channels.insert({ owner: this.userId, ...doc });
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'channels.update': function channelsUpdate(doc) {
    check(doc, {
      _id: String,
      name: String,
      description: String,
    });

    try {
      const channelId = doc._id;
      Channels.update(channelId, { $set: doc });
      return channelId; // Return _id so we can redirect to document after update.
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'channels.remove': function channelsRemove(channelId) {
    check(channelId, String);

    try {
      return Channels.remove(channelId);
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});

// rateLimit({
//   methods: [
//     'channels.insert',
//     'channels.update',
//     'channels.remove',
//   ],
//   limit: 5,
//   timeRange: 1000,
// });