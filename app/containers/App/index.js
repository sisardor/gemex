/*
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Alignment, Button, Navbar } from '@blueprintjs/core';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import '@blueprintjs/core/lib/css/blueprint.css';
import './stylereset.css';
import './layout.css';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <aside className="left-sidebar">
        <strong>Left Sidebar:</strong> Integer velit.
        <ul>
          <li>Item</li>
          <li>Item</li>
          <li>Item</li>
        </ul>
      </aside>
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
