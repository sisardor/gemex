/**
 *
 * Asynchronously loads the component for RegsiterForm
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
