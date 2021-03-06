/**
 *
 * BalancePane
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import PaneContainer from 'components/PaneContainer';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class BalancePane extends React.Component {
  render() {
    return (
      <PaneContainer>
        <FormattedMessage {...messages.header} />
      </PaneContainer>
    );
  }
}

BalancePane.propTypes = {};

export default BalancePane;
