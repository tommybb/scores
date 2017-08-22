import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.random.arrayElement(['Bieg na 100m', 'Bieg na 200m', 'Skok w dal', 'Pchnięcie kulą']);
  },
  metric() {
    return faker.random.arrayElement(['time', 'distance']);
  }
});
