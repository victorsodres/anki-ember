import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){
    if(this.get('tooltip-text'))
      $('.tooltipped').tooltip({delay: 10});
  },
  actions: {
    onClick(){
      if(this.action) this.send(this.action);
    }
  }
});
