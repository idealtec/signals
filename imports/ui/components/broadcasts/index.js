import "./broadcast.html";
import "./broadcast_add.html";
import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";
import { Bert } from "meteor/themeteorchef:bert";
import { timeago, monthDayYearAtTime } from "../../../modules/dates";
import Broadcasts from "../../../api/Broadcasts/Broadcasts.js";

Template.broadcast.onCreated(function helloOnCreated() {
  // counter starts at 0
  Bert.alert(
    "broadcasts rendered dynamically",
    "success",
    "growl-bottom-right",
    "fa-smile-o"
  );
  // console.log('Testing' ,timeago('02/10/2018'));
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
    console.log("will delete", this);
    
    Meteor.call("broadcasts.remove", this._id, error => {
      if (error) {
        alert(error.error);
      } else {
        console.log("No Error in deleting");
      }
    });


  }
});


Template.broadcast_add.events({
  "click .add-broadcast"(event, instance) {
    event.preventDefault();
    const broadcast_body = $("#broadcast_body").val();
    console.log(broadcast_body);

    const doc = {
      title: "Hello",
      body: broadcast_body
    };

    Meteor.call("broadcasts.insert", doc, error => {
      if (error) {
        alert(error.error);
      } else {
        console.log("No Error");
        // title.value = '';
        // url.value = '';
      }
    });
  }
});
