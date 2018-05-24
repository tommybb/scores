import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  queryParams: ['result'],
  result: "",

  filteredScores: computed('result', 'model', function() {
    let result = +this.get('result');
    let scores = this.get('model');

    if (result) {
      return scores.filterBy('pupil.name', 'Szymon Kolecki');
    } else {
      return scores;
    }
  })
});