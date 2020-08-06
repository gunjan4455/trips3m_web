import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

const CancellationAsync = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'cancellation' */ './CancellationAsync'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: () => import('./CancellationAsync'),
  },
])(CancellationAsync);
