import "./broadcast.html";
import "./broadcast_add.html";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Bert } from "meteor/themeteorchef:bert";
import { timeago, monthDayYearAtTime } from "../../../modules/dates";
import Broadcasts from "../../../api/Broadcasts/Broadcasts.js";

Template.broadcast.onCreated(function helloOnCreated() {
  Bert.alert(
    "broadcasts rendered dynamically",
    "success",
    "growl-bottom-right",
    "fa-smile-o"
  );
  Meteor.subscribe("broadcasts");
  // Meteor.subscribe('broadcasts.view');
});

Template.broadcast.helpers({
  moment(date) {
    return timeago(date);
  },
  dateyeartime(date) {
    return monthDayYearAtTime(date);
  },
  broadcasts() {
    return Broadcasts.find({});
  }
});

Template.broadcast.events({
  "click .delete"(event, instance) {
    Meteor.call("broadcasts.remove", this._id, error => {
      if (error) {
        alert(error.error);
      } else {
        console.log("No Error in deleting");
        Bert.alert(
          "Deleted Broadcast " + this.title,
          "danger",
          "growl-bottom-right",
          "fa-remove"
        );
      }
    });
  }
});

Template.broadcast_add.events({
  "click .add-broadcast"(event, instance) {
    event.preventDefault();
    const broadcast_body = $("#broadcast_body").val();
    const broadcast_title = $("#broadcast_title").val();
    console.log(broadcast_body);

    const doc = {
      title: broadcast_title,
      body: broadcast_body
    };
    Meteor.call("broadcasts.insert", doc, error => {
      if (error) {
        alert(error.error);
      } else {
        $("#broadcast_body").val("");
        $("#broadcast_title").val("");
      }
    });
  }
});
