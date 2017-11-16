import React from "react";
import Navigation from "../Navbar/Navigation";
import { Container, Blend, Title, SubTitle, HeaderWrapper } from "./Hero.style.js";
import HeaderLink from './HeaderLink'

export default class Hero extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Blend>
          <HeaderWrapper>
          <Title>West Coast Meat Solutions</Title>
          <SubTitle>Wholesale meat suppliers open to the public</SubTitle>
         
          </HeaderWrapper>
          <HeaderLink to="/wholesale">Start Saving</HeaderLink>
        </Blend>
        </Container>
        <Navigation />
      </div>
    );
  }
}
