import './broadcast.html';
import {Template} from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert'; 

Template.broadcast.onCreated(function helloOnCreated() {
  // counter starts at 0
  Bert.alert( 'broadcasts rendered dynamically', 'success', 'growl-bottom-right','fa-smile-o' );
});

