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
// import {
//   Button,
//   Card,
//   Classes,
//   Elevation,
//   H5,
//   Label,
//   Slider,
//   Switch,
// } from '@blueprintjs/core';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <main className="content">
          Content: Sed placerat accumsan ligula. Aliquam felis magna, congue
          quis, tempus eu, aliquam vitae, ante. Cras neque justo, ultrices at,
          rhoncus a, facilisis eget, nisl. Quisque vitae pede. Nam et augue. Sed
          a elit. Ut vel massa. Suspendisse nibh pede, ultrices vitae, ultrices
          nec, mollis non, nibh. In sit amet pede quis leo vulputate hendrerit.
          Cras laoreet leo et justo auctor condimentum. Integer id enim.
          Suspendisse egestas, dui ac egestas mollis, libero orci hendrerit
          lacus, et malesuada lorem neque ac libero. Morbi tempor pulvinar pede.
          Donec vel elit.
        </main>
      </div>
    );
  }
}
