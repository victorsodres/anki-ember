import Ember from 'ember';

export default Ember.Service.extend({

  rating: {
    EASY: 1,
    GOOD: 0.8,
    HARD: 0.6,
    AGAIN: 0,
  },

  CORRECT_RATING: 0.6,

  TEN_MINUTES_IN_DAYS: 0.007,
  HOUR_MILLIS: 1000*60*60,
  DAY_MILLIS: 1000*60*60*24,
  NOW: () => new Date(),

  review(card, performanceRating) {
    let pcOvd = this._percentOverdue(card);
    let difficulty = this._updateDifficulty(card.get('difficulty'), pcOvd, performanceRating);
    let difficultyWeight = this._calcDifficultyWeight(difficulty);
    let daysBtwn = this._calcDaysBetweenReviews(card.get('daysBetweenReviews'), difficultyWeight, performanceRating, pcOvd);

    card.updateByReview(difficulty, daysBtwn, this.NOW());
    return card;
  },

  /**
   *  Ordena o deck de acordo com a porcentagem de atraso de cada carta
   */
  sortCardsDescendantByPercentOverdue(deck) {
    return deck
      .filter(card => {
        return (card.get('daysBetweenReviews') <= this.TEN_MINUTES_IN_DAYS)
          || 8 < this._hoursBetweenTodayAndAnotherDate(card.get('dateLastReviewed'));
      })
      .sort((cardA, cardB) =>
        this._percentOverdue(cardA) - this._percentOverdue(cardB)).reverse();
  },

  /**
   *  Retorna a porcentagem de atraso da carta
   *  levando em conta a ultima data revista e os dias dados para rever
   *
   *  Quanto mais alto o valor, mais atrasado
   */
  _percentOverdue(card){
    if (card.get('dateLastReviewed') && card.get('daysBetweenReviews')) {
      let days = this._daysBetweenTodayAndAnotherDate(card.get('dateLastReviewed'));
      return Math.min(2, days / card.get('daysBetweenReviews'));
    } else {
      return 1
    }
  },

  /**
   *  Retorna a quantidade de dias entre hoje e outra data
   */
  _daysBetweenTodayAndAnotherDate(date){
    return (this.NOW().getTime() - date.getTime()) / this.DAY_MILLIS;
  },

  /**
   *  Retorna a quantidade de horas entre hoje e a outra data
   */
  _hoursBetweenTodayAndAnotherDate(date){
    return Math.round((this.NOW().getTime() - date.getTime()) / this.HOUR_MILLIS)
  },

  /**
   *  Retorna os dias para a proxima revisão
   *  Usado na hora em que é feita a revisão
   */
  _calcDaysBetweenReviews(daysBetweenReviews, difficultyWeight, performanceRating, percentageOverdue){
    if(performanceRating < this.CORRECT_RATING)
      // return daysBetweenReviews * (1/Math.pow(difficultyWeight, 2))
      return this.TEN_MINUTES_IN_DAYS; //Se errou, rever em 10 minutos
    else
      return daysBetweenReviews * (1 + (difficultyWeight - 1) * percentageOverdue)
  },

  /**
   *  Retorna a dificuldade com base na dificuldade anterior,
   *  na porcentagem de atraso e na nota da performance
   */
  _updateDifficulty(prevDifficulty, percentageOverdue, performanceRating) {
    return prevDifficulty + (percentageOverdue * 1/17 * (8-9 * performanceRating))
  },

  /**
   *  Retorna o peso da dificuldade com base na dificuldade
   */
  _calcDifficultyWeight(difficulty) {
    return 3 - 1.7 * difficulty;
  }

});
