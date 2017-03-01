import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  // session: Ember.inject.service('session'),
  // headers: Ember.computed('session.token', function(){
  //   let token = this.get('session.token');
  //   if (token)
  //     return { 'Authorization': `Bearer ${token}` };
  // })
});
