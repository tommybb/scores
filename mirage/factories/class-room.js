import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: '4B',
  year: association()
});
