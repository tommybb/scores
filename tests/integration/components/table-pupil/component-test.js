import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table pupil', function() {
  setupComponentTest('table-pupil', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{table-pupil}}`);
    expect(this.$()).to.have.length(1);
  });
});
