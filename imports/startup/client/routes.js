import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/broadcasts';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    // BlazeLayout.render('dy_boradcast', { tbroadcast: 'broadcastp' });
    BlazeLayout.render('App_body', { 
      main: 'App_home',
    });
  },
});

FlowRouter.route('/broadcasts', {
  name: 'App.broadcasts',
  action() {
    // BlazeLayout.render('dy_boradcast', { tbroadcast: 'broadcastp' });
    BlazeLayout.render('App_body', { 
      main: 'App_home',
      tbroadcast: 'broadcastp' 
    });
  },
});
FlowRouter.route('/history', {
  name: 'App.broadcasts',
  action() {
    BlazeLayout.render('App_body', { 
      main: 'App_home',
      tbroadcast: 'panel' 
    });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
