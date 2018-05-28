import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table score/row', function() {
  setupComponentTest('table-score/row', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{table-score/row}}`);
    expect(this.$()).to.have.length(1);
  });
});
