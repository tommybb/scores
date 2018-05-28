import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table score/header', function() {
  setupComponentTest('table-score/header', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{table-score/header}}`);
    expect(this.$()).to.have.length(1);
  });
});
