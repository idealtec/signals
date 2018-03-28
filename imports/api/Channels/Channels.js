import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Channels = new Mongo.Collection('Channels');

Channels.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Channels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Channels.schema = new SimpleSchema({
  owner: {
    type: String,
    label: 'The ID of the user this document belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this document was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  updatedAt: {
    type: String,
    label: 'The date this document was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString();
    },
  },
  name: {
    type: String,
    label: 'Channel name.',
  },
  description: {
    type: String,
    label: 'Channel description.',
  },
});

Channels.attachSchema(Channels.schema);

export default Channels;