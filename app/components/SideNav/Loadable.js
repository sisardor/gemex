/**
 *
 * Asynchronously loads the component for SideNav
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
