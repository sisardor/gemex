/**
 *
 * Header
 *
 */

import React from 'react';
import { Alignment, Button, Navbar } from '@blueprintjs/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Gemex</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" text="Sign in" />
          </Navbar.Group>
        </Navbar>
        {/* <FormattedMessage {...messages.header} /> */}
      </Wrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
