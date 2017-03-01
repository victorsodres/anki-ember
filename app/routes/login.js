import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),

  beforeModel() {
    if(this.logged)
      this.transitionTo('index');
  },

  actions: {
    authenticate(){
      // returns sessionToken and user data
      let auth = this.controller.getProperties('username', 'password');
      this.get('authManager').authenticate(auth).then(() => window.location.reload());
    }
  }
});
