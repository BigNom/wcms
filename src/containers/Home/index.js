import React, { Component } from 'react';
import SlideShowContainer from '../../components/SlideShow/'
import { Col, Row, PageHeader, Checkbox, FormGroup, HelpBlock, Radio, ControlLabel, FormControl } from 'react-bootstrap'

import { Box } from 'grid-styled';
import styled from 'styled-components'
import Helmet from "react-helmet"
import {
  Avatar,
  BackgroundImage,
  Button,
  Container,
  Card,
  Group,
  Heading,
  Image,
  Subhead,
  Text,
} from 'rebass'

import {
  A,
  HR,
  H1,
  H2,
  H4,
  Li,
  P,
  Ul,
} from '../../components/Global/Typography.js'

import {
  ContentWrapper,
  HomeFlex
} from '../../components/Global/Main'

import Footer from '../../components/Footer/'
//import Hero from '../../components/Hero/Hero'
import ButtonGroup from '../../components/Buttons/ButtonGroup'
import Nav from '../../components/Navbar/Nav'

import {
  HomeCard } from './Home.style.js'
import msa from './msa-66.jpg'
import haccp from './haccp-96x96.jpg'
import beef from './beef-is-the-greatest.jpg'
import halal from './halal.jpg'
import Goat from './goats-350.jpg'

const CustomButton = styled(Button) `
	border: 1px solid rgba(0, 0, 0, .25);
	background-color: goldenrod;
	background-image: linear-gradient(transparent, rgba(243, 192, 15, .125));
	box-shadow: 0 0 4px rgba(0, 0, 0, .25);
	width: 100%;
`;

const CustomCard = styled(Card)`
  background-color: #fffff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
`;

const RightCard = styled(Card)`
display: flex;
flex-direction: column;
margin: 0 20px 20px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);

`;

const AdvertCard = styled(Card)`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
`;

const CustomContainer = styled(Container)`
background: rgba(0, 0, 0, 0.5);
max-width: 350px;
color: white;
position: absolute;
left: 200;
top: 200;
`;

const HeadingBlend = styled(Heading)`
background: linear-gradient(#009fel, #3acec2);
background-blend-mode: multiply;
`

class Home extends Component {
  render() {
    return <div>
        <PageHeader>Contact and Location Details</PageHeader>
        <Row>
          <Col xs={12} md={9}>
            <H1>We have Goat in stock</H1>
            <H2>For a limited time only we have Goat in stock. </H2>
            <P>
              Goat meat is lower in cholestrol, saturated fat and calories
              than beef, lamb and chicken.{" "}
            </P>
            <P>We will have the following on sale this saturday</P>
            <P>Goat Curry Pieces $13.50kg</P>
            <P>Goat Legs $16.50kg</P>
            <HR />
            <H1>Perth Markets Wholesale Clearance</H1>
            <P>
              Based in Perth, Australia, we stock a selected range of
              premium quality beef and lamb in whole vacuum packs to
              guarantee tenderness and save the cost of having the meat
              prepared by a butcher. Lower prices are the direct result of
              bulk buying power and less handling. West Coast Meat Solutions
              are open to the public on Saturday morning as part of the
              WholeSale Clearance Market Canning Vale. Meat can be purchased
              in bulk quantities or by the kg at prices you won't see
              anywhere else.
            </P>
            <P>
              The gates open at 6:00 so make sure you get in early to beat
              the rush.
            </P>
            <HR />
            <H1>Restaurant quality meat at wholesale prices</H1>
            <P>
              West Coast Meat Solutions supply meat to many Restaurant
              chains, Super Markets and Butchers all throughout Perth.
            </P>
            <HR />
            <H1>Buy Bulk Vacuum Packs</H1>
            <P>
              Vacuum packing method involves placing items in a plastic film
              package, removing air from inside, and sealing the package.
              The intent of vacuum packing is usually to remove oxygen from
              the container to extend the shelf life of foods to reduce the
              volume of the contents and package. Vacuum packing reduces
              atmospheric oxygen, limiting the growth of aerobic bacteria or
              fungi, and preventing the evaporation of volatile components.
              Vacuum Packaging assists in the preservation of meat and
              improves tenderness as proteins begin to break down – known as
              the "ageing" process. Enjoy the superb eating quality of aged
              beef.
            </P>
            <P>
              West Meat is a meat wholesaler that is open to the public on a
              Saturday morning. We sell wholesale meat and lamb to
              restaurants and supermarkets throughout Perth.
            </P>
            <HR />
            <H1>Halal Certified</H1>
            <P>
              West Coast Meat Solutions is certified by the Western
              Australian Halal Authority (WAHA). We are committed to
              providing customers with truly genuine Halal meat at the
              lowest prices in Perth.
            </P>
            </Col>
            <Col xs={12} md={3}>
            <AdvertCard w={[1, 1, 3 / 4]}>
              <H4>Wholesale Clearance Market</H4>
              <Ul>
                <Li>Open to the Public</Li>
                <Li>Saturday: 6:00am - 10:00am</Li>
              </Ul>
            </AdvertCard>

            <RightCard width={256} my={20}>
              <Image mx={25} my={10} width={128} height={128} src={haccp} />

              <A href="https://www.haccp.com.au/" target="_blank" />
            </RightCard>
            <RightCard width={256}>
              <Avatar size={128} src={halal} mx={25} p={2} />

              <A href="http://www.halalbooklet.com/index.html" target="_blank" />
            </RightCard>
            <RightCard width={256}>
              <Avatar size={128} src={msa} mx={25} p={2} />
              <A href="https://www.mla.com.au/marketing-beef-and-lamb/meat-standards-australia/" target="_blank" />
            </RightCard>
          </Col>
        </Row>
        <Footer />
      </div>;
  }
}

export default Home;