//Old way of doing things
// import {Meteor} from 'meteor/meteor';

// const services = Meteor.settings.private.oAuth;

// const configure = () => {
//   if ( services ) {
//     for( let service in services ) {
//       ServiceConfiguration.configurations.upsert( { service: service }, {
//         $set: services[ service ]
//       });
//     }
//   }
// };

// Modules.server.configureServices = configure;

import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from "meteor/service-configuration";

const OAuthSettings = Meteor.settings.private.OAuth;

const LoginConfig = () => {
  if (OAuthSettings) {
    Object.keys(OAuthSettings).forEach(service => {
      ServiceConfiguration.configurations.upsert(
        { service },
        { $set: OAuthSettings[service] }
      );
    });
  }
};

export default LoginConfig;
