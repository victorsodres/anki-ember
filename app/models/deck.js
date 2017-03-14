import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  urlTitle: DS.attr(),
  description: DS.attr(),
  user: DS.belongsTo('user'),
  cards: DS.hasMany('card')
});
