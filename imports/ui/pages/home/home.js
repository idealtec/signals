import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/nav';
import '../../components/footer';
import '../../components/panel';
import '../../components/broadcasts';
import '../../components/chart';
import '../basecontent';

import {Template} from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert'; 

Template.App_home.onCreated(function helloOnCreated() {
  // counter starts at 0
  Bert.alert( 'Welcome to Signals App', 'success', 'growl-top-right','fa-smile-o' );
});

