import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  birthdate: DS.attr('date'),
  classRoom: DS.belongsTo('class-room')
});
