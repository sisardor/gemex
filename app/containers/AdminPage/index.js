/**
 *
 * AdminPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import NavItem from 'components/NavItem';
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper, { BoxRoot, FlexBoxRoot, A,  } from './Wrapper';
// import 'style.scss'
const navigations = [
  {
    name: 'Payments',
    route: '/payments',
    icon: 'payments-icon',
    children: [
      {
        name: 'Disputes',
        route: '/disputes',
        icon: null
      },
      {
        name: 'Settings',
        route: '/settings',
        icon: null
      },
      {
        name: 'Apple Pay',
        route: '/applepay',
        icon: null
      }
    ]
  },
  {
    name: 'Balance',
    route: '/balance',
    icon: 'balance-icon',
    children: [
      {
        name: 'Payouts',
        route: '/payouts',
        icon: null
      },
      {
        name: 'Transactions',
        route: '/transactions',
        icon: null
      },
      {
        name: 'Settings',
        route: '/settings',
        icon: null
      }
    ]
  }
]
/* eslint-disable react/prefer-stateless-function */
export class AdminPage extends React.Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>AdminPage</title>
          <meta name="description" content="Description of AdminPage" />
        </Helmet>
        <FlexBoxRoot>
          <NavGroup navigations={navigations} />
        </FlexBoxRoot>
      </Wrapper>
    );
  }
}

class NavGroup extends React.Component {
  render() {
    var lis = this.props.navigations.map((nav,i) => {
      return (
        <li key={i}><NavItem {...nav} /></li>
      );
    })
    return (
      <BoxRoot>
        <ul>{lis}</ul>
      </BoxRoot>
    );
  }
}

AdminPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminpage: makeSelectAdminPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'adminPage', reducer });
const withSaga = injectSaga({ key: 'adminPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AdminPage);
