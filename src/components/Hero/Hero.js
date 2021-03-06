import React from "react";
import Navigation from "../Navbar/Navigation";
import { Container, Blend, H1, H2 } from "./Hero.style.js";

export default class Hero extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Blend>
        <H1>West Coast Meat Solutions</H1>
        <H2>Wholesale meat suppliers open to the public</H2>
        </Blend>
        </Container>
        <Navigation />
      </div>
    );
  }
}
