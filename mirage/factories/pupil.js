import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: 'Szymon Kolecki',
  birthdate: new Date(),
  classRoom: association(),
});
