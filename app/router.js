import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', function() {
    this.route('index', { path: '/' }, function() {
      this.route('show',{ path: '/show' });
    });
    this.route('add',{ path: '/add'});
    this.route('edit',{ path: '/edit'});
  });
});

export default Router;
