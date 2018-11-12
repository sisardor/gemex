/**
 *
 * SideNavIcon
 *
 */

// import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import home from 'images/home.svg';
import balance from 'images/balance.svg';
import homeH from 'images/home-highlighted.svg';
import homeS from 'images/home-selected.svg';
import balanceH from 'images/balance-highlighted.svg';
import balanceS from 'images/balance-selected.svg';
import payments from 'images/payments.svg';
import paymentsH from 'images/payments-highlighted.svg';
import paymentsS from 'images/payments-selected.svg';

const icons = {
  home,
  'home-highlighted': homeH,
  'home-selected': homeS,
  balance,
  'balance-highlighted': balanceH,
  'balance-selected': balanceS,
  payments,
  'payments-highlighted': paymentsH,
  'payments-selected': paymentsS,
};

const SideNavIcon = styled.span`
  background-image: url(${props => {
    if (props.highlighted) {
      return icons[`${props.name}-highlighted`];
    } else if (props.selected) {
      return icons[`${props.name}-selected`];
    }
    return icons[props.name];
  }});
  background-color: transparent;
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
`;

SideNavIcon.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  highlighted: PropTypes.bool,
};

export default SideNavIcon;
