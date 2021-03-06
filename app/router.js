import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

// eslint-disable-next-line array-callback-return
Router.map(function() {
  this.route('404', { path: '/*path' });

  if (config.environment !== 'production') {
    this.route('freestyle');
  }
});

export default Router;
