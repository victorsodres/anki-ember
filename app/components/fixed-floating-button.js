import Ember from 'ember';

export default Ember.Component.extend({
  didRender(){
    if(this.get('tooltip-text'))
      $('.tooltipped').tooltip({delay: 10});
  }
});
