import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    result: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('score', { filter: params });
  }
});
