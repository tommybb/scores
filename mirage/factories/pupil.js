import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'Szymon Kolecki',
  birthdate() {
    return new Date();
  },
  classRoom: association(),
});
