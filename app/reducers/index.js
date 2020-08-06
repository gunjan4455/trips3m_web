import appV2Reducers from './app-v2.reducers';
import appReducers from './app.reducers';

const reducers = {
  ...appV2Reducers,
  ...appReducers
};

const sortedReducers = Object.keys(reducers).sort().reduce((acc, cur) => {
  acc[cur] = reducers[cur];
  return acc;
}, {});

export default sortedReducers;
