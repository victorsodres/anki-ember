import Ember from 'ember';

export default Ember.Route.extend({
  authManager: Ember.inject.service('session'),

  beforeModel() {
    if(this.logged)
      this.transitionTo('index');
  },

  actions: {
    authenticate(){
      let auth = this.controller.getProperties('username', 'password');
      this.loginUser(auth);
    },
    createUser(){
      let user = this.controller.get('user');
      this.store.createRecord('user', user).save()
      .then(() => this.loginUser({ "username": user.email, "password":  user.password}));
    }
  },

  loginUser(auth) {
    this.get('authManager').authenticate(auth).then(() => window.location.reload());
  }

});
