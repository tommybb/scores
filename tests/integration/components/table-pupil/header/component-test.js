import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table pupil/header', function() {
  setupComponentTest('table-pupil/header', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{table-pupil/header}}`);
    expect(this.$()).to.have.length(1);
  });
});
