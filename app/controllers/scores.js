import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  // queryParams: ['result', 'sport'],   #czy to jest potrzebne?
  result: '',
  sport: '',
  classRoom: '',
  pupil: '',

  filteredScores: computed('model', 'result', 'sport', 'classRoom', function() {
    let scores = this.get('model');
    let result = +this.get('result');
    let sport = this.get('sport');
    let classRoom = this.get('classRoom');
    let pupil = this.get('pupil');

    if (result) {
      scores = scores.filterBy('result', result);
    }
    if (sport) {
      scores = scores.filterBy('sport.name', sport);
    }
    if (classRoom) {
      scores = scores.filterBy('classRoom.name', classRoom);
    }
    if (pupil) {
      scores = scores.filterBy('pupil.name', pupil);
    }

    return scores;
  })
});