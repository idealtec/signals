import "./subsribers.html";
import "./subscriber_add.html";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Bert } from "meteor/themeteorchef:bert";
import validator from "validator";
import { timeago, monthDayYearAtTime } from "../../../modules/dates";
import Subscribers from "../../../api/Subscribers/Subscribers.js";
import Channels from "../../../api/Channels/Channels.js";

Template.subscribers.onCreated(function helloOnCreated() {
  // console.log('Testing' ,timeago('02/10/2018'));
  Meteor.subscribe("subscribers");
  Meteor.subscribe("channels");
  //  Meteor.subscribe('subscribers.view');
});

Template.subscriber_add.helpers({
  channels() {
    return Channels.find({});
  }
});
Template.subscribers.helpers({
  moment(date) {
    return timeago(date);
  },
  dateyeartime(date) {
    return monthDayYearAtTime(date);
  },
  subscribers() {
    return Subscribers.find({});
  }
});

Template.subscribers.events({
  "click .delete"(event, instance) {
    Meteor.call("subscribers.remove", this._id, error => {
      if (error) {
        alert(error.error);
      } else {
        Bert.alert(
          "Removed subscriber " + this.email,
          "info",
          "growl-bottom-right",
          "fa-remove"
        );
      }
    });
  }
});

Template.subscriber_add.events({
  "click .add-subscriber"(event, instance) {
    event.preventDefault();
    const subscriber_phone = $("#subscriber_phone").val();
    const subscriber_email = $("#subscriber_email").val();
    const subscriber_username = $("#subscriber_username").val();
    const subscriber_channel = $("#subscriber_channel option:selected").text();

    let isEmailValid = validator.isEmail(subscriber_email);
    let isPhoneValid = validator.isMobilePhone(subscriber_phone,'en-US');

    console.log("Channel", subscriber_channel);
    const doc = {
      phone: subscriber_phone,
      email: subscriber_email,
      channel: subscriber_channel,
      username: subscriber_username
    };

    if (isEmailValid && isPhoneValid) {
      Meteor.call("subscribers.insert", doc, (error, result) => {
        if (error) {
          alert(error);
        } else {
          if(!result.error){
            $("#subscriber_phone").val("");
            $("#subscriber_email").val("");
            $("#subscriber_username").val("");
            $("#subscriber_channel").val("");
          }else{
            console.log("result:", result);
            Bert.alert(
              result.reason,
              'warning',
              "growl-top-right",
              "fa-exclamation-circle"
            );
          }
        }
      });
    } else {
      console.log("Invalid Email/phone", subscriber_email);
      Bert.alert(
        "Invalid Email or Phone. Please check",
        "warning",
        "growl-top-right",
        "fa-exclamation-triangle"
      );
    }
  }
});
