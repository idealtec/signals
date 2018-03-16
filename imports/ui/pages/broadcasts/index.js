import './broadcast.html';
import './broadcasts.html';
import {Template} from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert'; 

Template.broadcastp.onCreated(function helloOnCreated() {
  // counter starts at 0
  Bert.alert( 'broadcasts rendered dynamically', 'success', 'growl-bottom-right','fa-smile-o' );
});

