import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    error({ errors }, transition) {
      if (errors.length > 0)
        if (errors[0].status == "401") {
          this.transitionTo('login').then(() => {
            Materialize.toast('Você precisa estar logado para ver seus decks', 5000);
          });
        }
    }
  }
});
