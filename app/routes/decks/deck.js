import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.modelFor('decks').findBy('urlTitle', params.deckTitle);
  }
});
