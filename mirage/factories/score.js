import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  date: new Date(),
  result: 1,
  pupil: association(),
  classRoom: association(),
  sport: association()
});
