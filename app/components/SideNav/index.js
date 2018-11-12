/**
 *
 * SideNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import SideNavItem from 'components/SideNavItem';
import makeSelectSideNav, { makeSelectRoute } from './selectors';
import reducer from './reducer';
import SidenavContainer from './SidenavContainer';
import SidenavSection from './SidenavSection';
import SidenavBox from './SidenavBox';

const sidenavMenu = [
  {
    id: 'sidenav.home',
    path: '/admin',
    label: 'Home',
    icon: 'home',
    indent: false,
    disable: false,
  },
  {
    id: 'sidenav.products',
    path: '/admin/products',
    label: 'Products',
    icon: 'balance',
    indent: false,
    items: [
      {
        id: 'sidenav.products.new',
        path: '/admin/products/new',
        label: 'Payouts',
        indent: true,
      },
      {
        id: 'sidenav.products.new',
        path: '/admin/products/new2',
        label: 'Transactions',
        indent: true,
      },
      {
        id: 'sidenav.products.new',
        path: '/admin/products/new3',
        label: 'Settings',
        indent: true,
      },
    ],
  },
  {
    id: 'sidenav.payments',
    path: '/admin/payments',
    label: 'Payments',
    icon: 'payments',
    indent: false,
    disable: false,
    items: [
      {
        id: 'sidenav.products.new',
        path: '/admin/products/new4',
        label: 'Payouts',
        indent: true,
      },
      {
        id: 'sidenav.products.new',
        path: '/admin/products/new5',
        label: 'Transactions',
        indent: true,
      },
      {
        id: 'sidenav.products.new6',
        path: '/admin/products/new6',
        label: 'Settings',
        indent: true,
      },
    ],
  },
  {
    id: 'sidenav.payments',
    path: '/admin/customer',
    label: 'Customers',
    icon: 'payments',
    indent: false,
    disable: false,
  },
];

/* eslint-disable react/prefer-stateless-function */
export class SideNav extends React.Component {
  render() {
    const { location } = this.props.route;
    let yOffset = 0;
    const list = [];

    for (let i = 0; i < sidenavMenu.length; i += 1) {
      const nav = sidenavMenu[i];
      const { path, icon, disable = false, items } = nav;
      const navProps = { path, icon, disable, yOffset, items: [] };
      if (path === location.pathname) {
        navProps.isExpanded = true;
      }

      if (items && items.length) {
        for (let j = 0; j < items.length; j += 1) {
          const subnav = items[j];
          const subnavProps = {
            path: subnav.path,
            indent: subnav.indent,
            disable: false,
          };
          if (subnav.path === location.pathname) {
            navProps.isExpanded = true;
          }

          navProps.items.push(
            <SideNavItem
              key={j}
              {...subnavProps}
              globals={{ route: this.props.route }}
              content={
                <FormattedMessage
                  id={subnav.id}
                  defaultMessage={subnav.label}
                />
              }
            />,
          );
        }
      }

      if (navProps.isExpanded && nav.items) {
        yOffset = 24 * nav.items.length + 8;
      }

      list.push(
        <SideNavItem
          key={i}
          {...navProps}
          globals={{ route: this.props.route }}
          content={<FormattedMessage id={nav.id} defaultMessage={nav.label} />}
        />,
      );
    }
    return (
      <SidenavContainer>
        <SidenavSection>
          <SidenavBox>
            <ul>{list}</ul>
          </SidenavBox>
        </SidenavSection>
      </SidenavContainer>
    );
  }
}

SideNav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  route: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  sidenav: makeSelectSideNav(),
  route: makeSelectRoute(),
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

const withReducer = injectReducer({ key: 'sideNav', reducer });

export default compose(
  withReducer,
  withConnect,
)(SideNav);
