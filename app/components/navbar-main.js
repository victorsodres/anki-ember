import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('session'),
  didRender(){
    $(".dropdown-button").dropdown({ bellowOrigin: true });
  },
  actions: {
    logout(){
      this.get('authManager').destroySession();
    }
  }
});
