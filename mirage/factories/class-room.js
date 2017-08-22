import { Factory, association, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.random.number({ min: 1, max: 8 })
     + faker.random.arrayElement(['A', 'B', 'C', 'D', 'E']);
  },
  year: association()
});
