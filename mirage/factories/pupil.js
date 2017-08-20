import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'Szymon Kolecki',
  birthDate() {
    return new Date();
  },
  classRoom: association()
});
