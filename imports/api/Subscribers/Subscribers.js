import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Subscribers = new Mongo.Collection('Subscribers');

Subscribers.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Subscribers.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Subscribers.schema = new SimpleSchema({
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
  phone: {
    type: String,
    label: 'The phone number of the subsriber.',
  },
  email: {
    type: String,
    label: 'Subscribers Email.',
  },
});

Subscribers.attachSchema(Subscribers.schema);

export default Subscribers;