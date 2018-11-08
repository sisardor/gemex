/**
 *
 * Asynchronously loads the component for TopNavigator
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
