import DS from 'ember-data';

export default DS.Model.extend({
  front: DS.attr(),
  back: DS.attr(),
  description: DS.attr(),
  deck: DS.belongsTo('deck'),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});
