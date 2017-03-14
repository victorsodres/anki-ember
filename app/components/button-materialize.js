import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    onClick(){
      if(this.action) this.send(this.action);
    }
  }
});
