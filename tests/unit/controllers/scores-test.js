import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Controller | scores', function() {
  setupTest('controller:scores', {
  });

  it('exists', function() {
    let controller = this.subject();
    expect(controller).to.be.ok;
  });
});
