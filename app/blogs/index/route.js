import Ember from 'ember';

export default Ember.Route.extend({
	blog: Ember.inject.service(),
	model() {
		return this.get('blog').getBlogs();
	}
});
