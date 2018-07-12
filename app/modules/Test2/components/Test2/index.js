/**
*
* Test2
*
*/
import React, { Component } from "react";

import styled from 'styled-components'

const StyledDiv = styled.div`
 width: 100px;
 height: 100px;
 background: blue;

 @media screen and (max-width: 500px) {
   background: green;
 }
 `

const Text = styled.span`
 font-size: 30px;
 @media screen and (max-width: 500px) {
   font-size: 10px;
 }
 `

const IMG = styled.img`
 width: 100px;`


class Test2 extends Component {
  render() {
    return (
      <StyledDiv>
        <Text> ruucm </Text>
        {/* <img src="https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2F4.bp.blogspot.com%2F-MGNChTBCDJQ%2FU-dE6y_ddrI%2FAAAAAAAAAqs%2FFjc4WHV_p_Q%2Fs1600%2F14080119.gif&container=blogger&gadget=a&rewriteMime=image%2F*" 
        ></img>
        <IMG src="https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2F4.bp.blogspot.com%2F-MGNChTBCDJQ%2FU-dE6y_ddrI%2FAAAAAAAAAqs%2FFjc4WHV_p_Q%2Fs1600%2F14080119.gif&container=blogger&gadget=a&rewriteMime=image%2F*"></IMG> */}
      </StyledDiv>
    )
  }
}
export default Test2;
