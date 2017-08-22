import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.random.arrayElement(['2010/11', '2011/12', '2012/13', '2013/14', '2014/15']);
  }
});
