/**
 *
 * RegisterForm
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Button,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  width: 400px;
  margin: 20px auto;
`;

/* eslint-disable react/prefer-stateless-function */
class RegisterForm extends React.Component {
  state = {
    label: false,
    helperText: false,
    isLoading: false,
  };

  loading = () => {
    this.setState({ isLoading: true });
  };

  render() {
    const { label, helperText, isLoading } = this.state;
    const tmp = true;
    return (
      <Wrapper>
        <Card interactive={false} elevation={Elevation.TWO}>
          <h1 style={{ textAlign: 'center' }}>
            <FormattedMessage {...messages.createAccount} />
          </h1>
          <FormGroup
            helperText={helperText && 'Helper text with details...'}
            label={label && 'Label'}
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup id="text-input" placeholder="Email Address*" />
          </FormGroup>
          <FormGroup
            helperText={helperText && 'Helper text with details...'}
            label={label && 'Label'}
            labelFor="text-input2"
            labelInfo="(required)"
          >
            <InputGroup id="text-input2" placeholder="Name*" />
          </FormGroup>
          <FormGroup
            helperText={helperText && 'Helper text with details...'}
            label={label && 'Label'}
            labelFor="password-input"
            labelInfo="(required)"
          >
            <InputGroup
              id="password-input"
              placeholder="Password*"
              type="password"
            />
          </FormGroup>

          <Button
            fill={tmp}
            loading={isLoading}
            text={<FormattedMessage {...messages.register} />}
            onClick={this.loading}
          />
        </Card>
      </Wrapper>
    );
  }
}

RegisterForm.propTypes = {};

export default RegisterForm;
