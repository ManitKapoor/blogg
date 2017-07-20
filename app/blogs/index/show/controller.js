import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['id'],
	id: null,
	blog: Ember.inject.service(),
	prev: Ember.computed('blog','id',function() { return this.get('id') > 0; }),
	next: Ember.computed('blog','id',function() { return this.get('id') < this.get('blog').get('data').length-1; }),
	actions: {
		setprev(id){
			id = parseInt(id);
			if(id > 0)
			  this.set('id',id-1);
		},
		setnext(id){
			id = parseInt(id);
			if(id < this.get('blog').get('data').length-1)
				this.set('id',id+1);
		}
	}
});
