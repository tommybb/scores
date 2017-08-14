import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | table score/header', function() {
  setupComponentTest('table-score/header', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#table-score/header}}
    //     template content
    //   {{/table-score/header}}
    // `);

    this.render(hbs`{{table-score/header}}`);
    expect(this.$()).to.have.length(1);
  });
});
