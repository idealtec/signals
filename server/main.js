// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';
import { ServiceConfiguration } from 'meteor/service-configuration';

import LoginConfiguration from './modules/configure-services';


// first, remove configuration entry in case service is already configured
// ServiceConfiguration.configurations.remove({
//     service: "google"
//   });
//   ServiceConfiguration.configurations.insert({
//     service: "google",
//     clientId: "757650949908-kmlebbj158foniet9vjd0oks5ha0hk1l.apps.googleusercontent.com",
//     loginStyle: "popup",
//     secret: "NQMYkUUMWn_cZhHjGVcKgwPc"
//   });
