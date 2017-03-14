import DS from 'ember-data';

const Card = DS.Model.extend({
  front: DS.attr(),
  back: DS.attr(),
  description: DS.attr(),
  deck: DS.belongsTo('deck'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  daysBetweenReviews: DS.attr(),
  dateLastReviewed: DS.attr('date'),
  difficulty: DS.attr(),
  updateByReview(difficulty, daysBtwn, dateLastReviewed) {
    this.set('difficulty', difficulty);
    this.set('daysBetweenReviews', daysBtwn);
    this.set('dateLastReviewed', dateLastReviewed);
    this.save();
  }
});


export default Card;
