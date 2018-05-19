import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Subscribers from "./Subscribers";
import Channels from "../Channels/Channels.js";
import "../Channels/methods";
import validator from "validator";
import handleMethodException from "../../modules/handle-method-exception";
import "../../modules/globals";
import {
  ValidationLang,
  validatePhone,
  validateEmail
} from "../../modules/globals";

Meteor.methods({
  "subscribers.insert": function subscribersInsert(doc) {
    check(doc, {
      phone: String,
      email: String,
      username: String,
      channel: String
    });
    try {
      console.log(" Before channeling", doc.channel);

      if (validatePhone(doc.phone) && validateEmail(doc.email)) {
        console.log("Server logging -- valid phone", doc.phone);
        let channelExists = Channels.find({ name: doc.channel }).fetch();
        if (!channelExists) {
          let channelDoc = {
            name: doc.channel,
            description: doc.channel + "Description"
          };
          let channelId = Channels.insert({
            owner: this.userId,
            ...channelDoc
          });
          console.log("Created channel ", doc.channel, " With Id ", channelId);
        }
        let userNameExists = Subscribers.findOne({
          
          $or: [
            {username: doc.username},
            { phone: doc.phone },
            { email: doc.email } 
          ]
        });

        if (userNameExists) {
          console.log("User Exists");
          return new Meteor.Error('Duplicate', "User already exists !");

        } else {
          return Subscribers.insert({ owner: this.userId, ...doc });
        }
      } else {
        console.log(
          "Server logging -- Not a valid phone - Not inserting..returning"
        );
        return new Meteor.Error('Invalid data', "Invalid Phone/email/username");
      }
    } catch (exception) {
      console.log(exception);
      handleMethodException(exception);
    }
  },
  "subscribers.update": function subscribersUpdate(doc) {
    check(doc, {
      _id: String,
      phone: String,
      email: String,
      username: String,
      channel: String
    });

    try {
      const subscriberId = doc._id;
      Subscribers.update(subscriberId, { $set: doc });
      return subscriberId; // Return _id so we can redirect to document after update.
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  "subscribers.remove": function subscribersRemove(subscriberId) {
    check(subscriberId, String);

    try {
      return Subscribers.remove(subscriberId);
    } catch (exception) {
      handleMethodException(exception);
    }
  }
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


