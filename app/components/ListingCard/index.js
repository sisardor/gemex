/**
 *
 * ListingCard
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CardHolder, PlaceHolder, P, Img } from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class ListingCard extends React.PureComponent {
  render() {
    return (
      <CardHolder>
        <PlaceHolder>
          <Img src="https://i.etsystatic.com/6477454/c/1219/969/151/234/il/05ba38/1175462881/il_340x270.1175462881_78rm.jpg" alt=""/>
        </PlaceHolder>
        <P>{this.props.title}</P>
      </CardHolder>
    );
  }
}

ListingCard.propTypes = {};

export default ListingCard;
