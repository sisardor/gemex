/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import LoginForm from 'components/LoginForm/Loadable';
import { Button, Card, Tag, Elevation } from '@blueprintjs/core';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  onRemove = () => {};
  render() {
    const list = [];
    for (let i = 0; i < 100; i += 1) {
      list.push(
        <Card interactive elevation={Elevation.TWO}>
          <h5>
            <a href="/">Card heading</a>
          </h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>,
      );
    }
    return (
      <div className="container">
        <main className="content">
          <div>
            <Tag onRemove={true && this.onRemove}>Text</Tag>
          </div>
          <div className="grid-container">{list}</div>
        </main>
      </div>
    );
  }
}
