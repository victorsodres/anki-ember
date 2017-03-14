import Ember from 'ember';

export default Ember.Component.extend({
  SM2: Ember.inject.service('sm2'),
  actions: {
    rate(nivel) {
      let grade = this.get('SM2').rating[nivel];
      this.get('SM2').review(this.card, grade);
    }
  }
});
