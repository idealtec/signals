import './nav.html';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

Template.nav.events({
  'click .burger, click .navbar-item'(event, instance) {
    // This is used to toggle the hamburger menu for mobile
    var menu = $('.navbar-menu');
    menu.toggleClass('is-active');
  },
  'click #navMenu'(event, instance) {
    // This is used to toggle the hamburger menu for mobile
    Bert.alert( 'We working on navbar!', 'info', 'growl-bottom-right', 'fa-bell' );

  },
  'click .logout'(event, instance) {
    // This is used to toggle the hamburger menu for mobile
    Meteor.logout();
    Bert.alert( 'Logging out', 'danger', 'growl-bottom-right', 'fa-user' );

  },
});
