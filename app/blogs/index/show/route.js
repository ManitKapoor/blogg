import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		id: {
			refreshModel: true,
			replace: true
		}
	},
	blog: Ember.inject.service(),
	model(params){
		return this.get('blog').get('data')[params.id];
	},
	blog: Ember.inject.service()
});
