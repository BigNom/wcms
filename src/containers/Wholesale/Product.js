import React, { Component } from "react";
import { Thumbnail, Image, Col } from "react-bootstrap";

const thumbStyles = {
  float: "left",
  width: "300px",
  margin: "10px",
  padding: "10px 24px",
  flex: "1"
};

const imageStyles = {
  height: "150px"
}

class Product extends React.Component {
  render() {
    return <Thumbnail style={thumbStyles}>
        <div style={imageStyles}>
          <Image src={this.props.product.picture} />
        </div>

        <h3>{this.props.product.name}</h3>
        <p>$ {this.props.product.price} per kg</p>
        <p>Average package weighs {this.props.product.weight} kg</p>
      </Thumbnail>;
  }
}
export default Product