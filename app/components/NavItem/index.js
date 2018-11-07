/**
 *
 * NavItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { classnames } from 'classnames';
// import './style.css'

const Wrapper = styled.div`
  position: relative;
`;
const A = styled.a`
  // color: #586ada;
  // text-decoration: none;
  // font-weight: 500;
  //
  // :hover {
  //   color: #2b2d50;
  // text-decoration: none;
  // }
`
const NavItemX = styled.div`
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
  background-color: #e3e8ee;
`
const AlignItem = styled.div`
  align-items: center;
  display: flex;
`
const NavIconDiv = styled.div`
  align-items: center;
  display: flex;
  margin-right: 12px;
`

const NavIcon = styled.span`
  background-color: transparent;
  background-size: 20px 20px;
  height: 20px;
  width: 20px;
`
const NavTextSpan = styled.span`
  white-space: normal;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Ubuntu', sans-serif;
  line-height: 20px;
  font-weight: 400;
  font-size: 14px;
  display: inline;
  color: #2b2d50;
`

class NavItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHighlighted: false
    }
  }
  mouseOut() {
    console.log("Mouse out!!!");
    this.setState({isHighlighted: false});
  }

  mouseOver() {
    console.log("Mouse over!!!");
    this.setState({isHighlighted: true});
  }
  render() {
    var icon_class = classnames({
      'foo-bar': true
    });
    console.log(this.props);
    return <Wrapper onMouseOver={() => this.mouseOver()}
                    onMouseOut={() => this.mouseOut()}>
        <A>
          <NavItemX>
            <AlignItem>
              <NavIconDiv>
                <NavIcon className={this.props.icon}></NavIcon>
              </NavIconDiv>
              <NavTextSpan>
                {this.props.name}
              </NavTextSpan>
            </AlignItem>

          </NavItemX>
        </A>
    </Wrapper>;
  }
}

NavItem.propTypes = {};

export default NavItem;
