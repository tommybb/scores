import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  result: DS.attr('number'),
  pupil: DS.belongsTo('pupil'),
  classRoom: DS.belongsTo('class-room'),
  sport: DS.belongsTo('sport')
});
