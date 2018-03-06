import './nav.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

Template.nav.events({
  'click .burger'(event, instance) {
    // This is used to toggle the hamburger menu for mobile
    var menu = $('.navbar-menu');
    menu.toggleClass('is-active');
  },
  'click #navMenu'(event, instance) {
    // This is used to toggle the hamburger menu for mobile
    Bert.alert( 'We working on navbar!', 'info', 'growl-bottom-right', 'fa-bell' );


  },
});
