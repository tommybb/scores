import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  queryParams: {
    result: {
      refreshModel: true
    },
    sport: {
      refreshModel: true
    },
    classRoom: {
      refreshModel: true
    },
    pupil: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('score', { filter: params });
  }
});
