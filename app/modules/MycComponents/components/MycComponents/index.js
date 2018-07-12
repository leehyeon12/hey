/**
*
* MycComponents
*
*/
import React, { Component } from "react";

import styled from 'styled-components'


const StyledDiv = styled.div`
 padding-right: 70px;
 padding-left: 70px;
 padding-top: 20px;
 padding-bottom: 20px;


 @media screen and (max-width: 500px) {
   padding-right: 10px;
 }
 `

class MycComponents extends Component {
  render() {
    return <StyledDiv>{this.props.children}</StyledDiv>;
  }
}
export default MycComponents;
