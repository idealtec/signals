import './broadcast.html';
import {Template} from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert'; 
import { timeago, monthDayYearAtTime } from '../../../modules/dates';



Template.broadcast.onCreated(function helloOnCreated() {
  // counter starts at 0
  Bert.alert( 'broadcasts rendered dynamically', 'success', 'growl-bottom-right','fa-smile-o' );
  // console.log('Testing' ,timeago('02/10/2018'));
});

Template.broadcast.helpers({
  moment(date){
    return timeago(date);
  },
  dateyeartime(date){
    return monthDayYearAtTime(date);
  }
});

