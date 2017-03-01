import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    criarDeck() {
      let deck = this.controller.getProperties('title', 'description');
      let record = this.store.createRecord('deck', deck);
      record.save();
    },
    removerDeck() {
      confirm('Tem certeza de que deseja remover este Deck?')
    }
  }
});
