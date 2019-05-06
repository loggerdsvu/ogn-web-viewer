import EmberRouter from '@ember/routing/router';

import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  if (config.environment !== 'production') {
    this.route('freestyle');
  }
});

export default Router;
