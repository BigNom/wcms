import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Helmet from "react-helmet";
import { 
  Button, Well, Col, Row, Thumbnail, NavItem,
  Media } from 'react-bootstrap'
  import { LinkContainer } from "react-router-bootstrap";

import msa from './msa-66.jpg'
import haccp from './haccp-96x96.jpg'
import halal from './halal.jpg'
import beefIcon from '../../assets/beefIcon.svg';

const linkStyles = {
  color: "white"
};

const headerStyles = {
  margin: "20px auto",
  textAlign: "center"
};
const ulStyles = {
  listStyleType: "none",
  padding: "0"
}
const homeStyles = {
  margin: "40px auto"
};




class Home extends Component {
  render() {
    return <div className="container" style={homeStyles}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Wholesale Meat, Perth | Canning Vale Meat Markets | Cheap Meat,
            Perth | Quality Meat, Perth | Halal Certified | MSA Certified
          </title>
          <link rel="canonical" href="https://www.wcm.solutions" />
          <meta name="description" content="Looking for wholesale price restaurant quality meat. At West Coast Meat Solutions we are committed to providing affordable meat to Perth families. We are Halal and MSA Certified. Open Saturday Morning to the public" />
        </Helmet>       
        <Row>
          <Col xs={12} md={9}>
            <h1>Perth Markets Wholesale Clearance</h1>
            <p>
            For the <strong>Lowest Prices</strong> on premium quality meat Perth Markets Wholesale
            Clearance is the place to be. For the one day only per week our doors are open to the public
            to purchase meat at the discounted price that is usually reserved for our distributers.
            To compare costs head on over to our Wholesale Market page of click here.
            Lower prices are the direct result of bulk buying power and less handling.
            </p>
            <p>
              The gates open at 6:00 so make sure you get in early to beat
              the rush.
            </p>
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
              <h1>We have Goat in stock</h1>
              <p>
                Goat meat is lower in cholestrol, saturated fat and calories
                than beef, lamb and chicken.
              </p>
              <p>We will have the following on sale this saturday</p>
              <p>Goat Curry Pieces $13.50kg</p>
              <p>Goat Legs $16.50kg</p>
            </Col>
            <Col xs={12} md={3}>
            <div className="list-group">
            <h3>Links</h3>
            <Link to="/halal">Hala Certification</Link>
            </div>
            <Well>
            <h4>Loyalty Card</h4>
            <p>West Coast Meat Solutions Loyalty program is starting soon.</p>
            <Button>
            <LinkContainer to="/members">
            <NavItem eventKey={3} href="#">
              Members
            </NavItem>
          </LinkContainer></Button>

          </Well>
              <Well>
                <h4>Open hours</h4>
                <h5>Wholesale Clearance Market</h5>
                <ul style={ulStyles}>
                  <li>Open to the Public</li>
                  <li>Saturday: 6:00am - 10:00am</li>
                </ul>
                <h5>Wholesale business</h5>
                <ul style={ulStyles}>
                  <li>Monday to Friday: 6:00am - 2:30pm</li>
                </ul>
              </Well>
  
              <Well>
                <div>
                  <address>
                    <strong>West Coast Meat Solutions</strong>
                    <br />
                    West Wing 4 Market City,<br />
                    280 Bannister Road,<br />
                    Canning Vale WA 6155<br />
                    <abbr title="Phone"></abbr> 9455 7962
                  </address>
                </div>
              </Well>  
              <Well>
                <Media.List>
                  <Media.ListItem>
                    <Media>
                      <Media.Left>
                        <img width={64} height={64} src={msa} alt="haccp logo" />
                        <a href="https://www.mla.com.au/marketing-beef-and-lamb/meat-standards-australia/" />
                      </Media.Left>
                      <Media.Left>
                        <img width={64} height={64} src={halal} alt="haccp logo" />
                        <a href="https://www.haccp.com.au/" />
                      </Media.Left>
                      <Media.Left>
                        <img width={64} height={64} src={haccp} alt="haccp logo" />
                        <a href="https://www.haccp.com.au/" />
                      </Media.Left>
                    </Media>
                  </Media.ListItem>
                </Media.List>
              </Well>
            </Col>   

         
        </Row>
      </div>;
  }
}

export default Home;