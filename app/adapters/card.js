import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForCreateRecord(modelName, snapshot) {
    return `/decks/${snapshot.record.get('deck.id')}/cards`;
  },
  urlForUpdateRecord(id, modelName, snapshot) {
    return `/decks/${snapshot.record.get('deck.id')}/cards/${id}`;
  }
});
