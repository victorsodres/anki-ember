import Ember from 'ember';

export default Ember.Route.extend({
  SM2: Ember.inject.service('sm2'),
  model(params){
    return this.modelFor('decks').findBy('urlTitle', params.deckTitle);
  },

  actions: {
    criarCard(){
      let card = this.controller.getProperties('front', 'back', 'description');
      let record = this.store.createRecord('card', card)

      Ember.set(record, 'deck', this.controller.model)

      record.save();
    },
    studyThisDeck() {
      let decks = this.controller.model.get('cards')//.toArray();
      let sorted = this.get('SM2').sortCardsDescendantByPercentOverdue(decks);
      debugger
    }
  }

});
