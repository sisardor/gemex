/**
 *
 * MainPane
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainPane from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper, { ContentPane, CardRoot } from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
export class MainPane extends React.Component {
  render() {
    console.log('MainPane')
    return (
      <Wrapper>
        <ContentPane>
          <CardRoot>Balance
          </CardRoot>
        </ContentPane>
      </Wrapper>
    );
  }
}

MainPane.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  mainpane: makeSelectMainPane(),
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

const withReducer = injectReducer({ key: 'mainPane', reducer });
const withSaga = injectSaga({ key: 'mainPane', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MainPane);
