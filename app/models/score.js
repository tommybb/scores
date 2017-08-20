import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  date: attr('date'),
  result: attr('number'),
  pupil: belongsTo('pupil'),
  classRoom: belongsTo('class-room'),
  sport: belongsTo('sport')
});
