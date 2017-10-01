import React from "react";
import Navigation from "../Navbar/Navigation";
import { Container, Blend, H1 } from "./Hero.style.js";

const dataBg = (image) => {
    const baseUrl = 'https://res.cloudinary.com/react-web/image/upload/w_1500,h_350,c_fill,g_south,f_auto/v1503136122/banner_kkqglj.jpg'
    console.log('Header', image);

var clientWidth = image.clientWidth,
clientHeight = image.clientHeight;


var pixelRatio = window.devicePixelRatio || 1.0
var imageParams = 'w_'
}



export default class Hero extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Blend>
        <H1>West Coast Meat Solutions</H1>
        </Blend>
        </Container>
        <Navigation />
      </div>
    );
  }
}
