import Ember from 'ember';
import moment from 'moment';

const { Controller, computed } = Ember;

export default Controller.extend({
  // queryParams: ['result', 'sport'],   #czy to jest potrzebne?
  date: '',
  result: '',
  sport: '',
  classRoom: '',
  pupil: '',

  filteredScores: computed('model', function() {
    let scores = this.get('model');
    let date = this.get('date');
    let result = +this.get('result');
    let sport = this.get('sport');
    let classRoom = this.get('classRoom');
    let pupil = this.get('pupil');
    
    if (date) {
      scores = scores.filter(function(score){
        return moment(score.data.date).format('DD-MM-YYYY') === date;
      });
    }
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