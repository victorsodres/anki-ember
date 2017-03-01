import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  createdAt: DS.attr(),
  decks: DS.hasMany('deck')
});
