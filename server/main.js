// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';
import  Broadcasts from '../imports/api/Broadcasts/Broadcasts.js';

Meteor.startup(() => {

    console.log('Starting Signals');
  // const numberBroadcasts = Broadcasts.find({}).count();
  // console.log(numberBroadcasts);
  // if (!numberBroadcasts) {
  //   _.times(20, () => {
  //     const title = faker.lorem.sentence();
  //     const body = faker.lorem.paragraph();
  //     const owner = 'faker';

  //     Meteor.call('broadcasts.insert', {
  //       title,
  //       body,
  //     });
  //   });
  // }


});
