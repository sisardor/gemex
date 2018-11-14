/**
 *
 * Asynchronously loads the component for ProductsPane
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
