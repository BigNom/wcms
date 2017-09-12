import React, { Component } from 'react';
import Helmet from "react-helmet";
import { 
  Well, Col, Row, Thumbnail, NavItem,
  Media } from 'react-bootstrap'
  import { LinkContainer } from "react-router-bootstrap";

import msa from './msa-66.jpg'
import haccp from './haccp-96x96.jpg'
import halal from './halal.jpg'

const linkStyles = {
  color: "white"
};

const homeStyles = {
  margin: "40px auto"
};

const headerStyles = {
  margin: "20px auto",
  textAlign: "center"
};
const ulStyles = {
  listStyleType: "none",
  padding: "0"
}

class Home extends Component {
  render() {
    return <div className="container" style={homeStyles}>
        <Helmet>
 <meta charSet="utf-8" />
         <title>
            Wholesale Meat, Perth | Canning Vale Meat Markets | Cheap 
            Meat, Perth | Quality Meat, Perth | Halal Certified | MSA 
            Certified 
          </title>
        <link rel="canonical" href="https://wcm.solutions" />
          <meta name="description" content="Looking for wholesale price restaurant quality meat. At West Coast Meat Solutions we are committed to providing affordable meat to Perth families. We are Halal and MSA Certified. Open Saturday Morning to the public" />
      
        </Helmet>
        <Row>
          <Col xs={12} md={9}>
            <Well>
              <h1>Wholesale</h1>
              <p>
                West Coast Meat Solutions supply an extensive range of
                premium meat to supermarkets, butchers, restaurants and food
                distributors all over Perth. Our boning room facility
                processes on average 150 bodies of young and prime beef a
                week. We are one of the only facilities open to the public
                in the state. Our facility uses the latest state of the art
                technology.
              </p>
            </Well>
            <Well>
              <h1>Perth Markets Wholesale Clearance</h1>
              <p>
                West Coast Meat Solutions are open to the public on Saturday
                morning as part of the WholeSale Clearance Market Canning
                Vale. Meat can be purchased in bulk quantities or by the kg
                at prices you won't see anywhere else. Lower prices are the
                direct result of bulk buying power and less handling.
              </p>
              <p>
                The gates open at 6:00 so make sure you get in early to beat
                the rush.
              </p>
            </Well>
            <Well>
              <h1>Buy Bulk Vacuum Packs</h1>
              <p>
                Vacuum packing method involves placing items in a plastic
                film package, removing air from inside, and sealing the
                package. The intent of vacuum packing is usually to remove
                oxygen from the container to extend the shelf life of foods
                to reduce the volume of the contents and package. Vacuum
                packing reduces atmospheric oxygen, limiting the growth of
                aerobic bacteria or fungi, and preventing the evaporation of
                volatile components. Vacuum Packaging assists in the
                preservation of meat and improves tenderness as proteins
                begin to break down – known as the "ageing" process. Enjoy
                the superb eating quality of aged beef.
              </p>
            </Well>

            <Well>
              <h1>We have Goat in stock</h1>
              <h2>For a limited time only we have Goat in stock. </h2>
              <p>
                Goat meat is lower in cholestrol, saturated fat and calories
                than beef, lamb and chicken.
              </p>
              <p>We will have the following on sale this saturday</p>
              <p>Goat Curry Pieces $13.50kg</p>
              <p>Goat Legs $16.50kg</p>
            </Well>
          </Col>
          <Col xs={12} md={3}>
            <Well>
              <h4>Wholesale Clearance Market</h4>
              <ul style={ulStyles}>
                <li>Open to the Public</li>
                <li>Saturday: 6:00am - 10:00am</li>
              </ul>
            </Well>

            <Well>
              <div>
                <address>
                  <strong>West Coast Meat Solutions</strong>
                  <br />
                  West Wing 4 Market City,<br />
                  280 Bannister Road,<br />
                  Canning Vale WA 6155
                  <abbr title="Phone">P:</abbr> 9455 7962
                </address>
              </div>
            </Well>
            <Well>
              <h4>Halal Certified</h4>
              <p>
                West Coast Meat Solutions is certified by the Western
                Australian Halal Authority (WAHA). We are committed to
                providing customers with truly genuine Halal meat at the
                lowest prices in Perth.
              </p>
            </Well>

            <Well>
              <Media.List>
                <Media.ListItem>
                  <Media>
                    <Media.Left>
                      <img width={64} height={64} src={msa} alt="haccp logo" />
                      <a href="https://www.mla.com.au/marketing-beef-and-lamb/meat-standards-australia/" target="_blank" />
                    </Media.Left>
                    <Media.Left>
                      <img width={64} height={64} src={halal} alt="haccp logo" />
                      <a href="https://www.haccp.com.au/" target="_blank" />
                    </Media.Left>
                    <Media.Left>
                      <img width={64} height={64} src={haccp} alt="haccp logo" />
                      <a href="https://www.haccp.com.au/" target="_blank" />
                    </Media.Left>
                  </Media>
                </Media.ListItem>
              </Media.List>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Thumbnail>
              <LinkContainer to="/beef">
                <NavItem style={linkStyles} eventKey={2} href="#">
                  Beef
                </NavItem>
              </LinkContainer>
            </Thumbnail>
            <Thumbnail>
              <LinkContainer to="/lamb">
                <NavItem eventKey={3} href="#">
                  Lamb
                </NavItem>
              </LinkContainer>
            </Thumbnail>
            <Thumbnail>
              <LinkContainer to="/wholesale">
                <NavItem eventKey={1}>Wholesale Market</NavItem>
              </LinkContainer>
            </Thumbnail>
          </Col>
        </Row>
      </div>;
  }
}

export default Home;