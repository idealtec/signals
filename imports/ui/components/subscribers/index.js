import "./subsribers.html";
import "./subscriber_add.html";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Bert } from "meteor/themeteorchef:bert";
import { timeago, monthDayYearAtTime } from "../../../modules/dates";
import Subscribers from "../../../api/Subscribers/Subscribers.js";

Template.subscribers.onCreated(function helloOnCreated() {

  // console.log('Testing' ,timeago('02/10/2018'));
  Meteor.subscribe("subscribers");
  //  Meteor.subscribe('subscribers.view');
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
          "danger",
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

    const doc = {
      phone: subscriber_phone,
      email: subscriber_email
    };

    Meteor.call("subscribers.insert", doc, error => {
      if (error) {
        alert(error.error);
      } else {
        $("#subscriber_phone").val("");
        $("#subscriber_email").val("");
      }
    });
  }
});
