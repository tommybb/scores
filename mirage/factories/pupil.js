import { Factory, association, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.findName();
  },
  birthDate() {
    return new Date();
  },
  classRoom: association()
});
