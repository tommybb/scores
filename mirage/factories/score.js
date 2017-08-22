import { Factory, association, faker } from 'ember-cli-mirage';

export default Factory.extend({
  date: new Date(),
  result() {
    return faker.finance.amount(0, 100, 3);
  },
  pupil: association(),
  classRoom: association(),
  sport: association()
});
