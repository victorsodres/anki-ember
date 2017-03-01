import Ember from 'ember';

export default Ember.Object.extend({
  // this.title = title;
  init() {
    this.set('urlTitle', this.title.dasherize());
    this.set('cards', []);
  },
  addCard(card){
    this.cards.push(card);
    return this;
  }
});
