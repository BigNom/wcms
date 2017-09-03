import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled';
import Helmet from "react-helmet"
import {
    BackgroundImage,
    Card
} from 'rebass'


import {
  HR,
  H1,
  H2,
  P,
} from '../../components/Global/Typography.js'

import {
    HomeFlex,
    Main, 
    ContentWrapper,
    RightAside,
    AffiliateCard,
    Img,
    DishesWrapper
} from '../../components/Global/Main.js'

import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Dishes from '../../components/Dishes'

import msa from './msa-66.jpg'
import halal from './halal.jpg'
import haccp from './haccp-96x96.jpg'
import beef from './beef-is-the-greatest.jpg'

class Home extends Component {
  render() {
    return (
      <HomeFlex>
        <Helmet
          title="West Coast Meat Solutions"
          meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
          ]}
        />
          <Box width={1}><Hero /></Box>
          <Box pb={1} width={1}><Nav /></Box>
          <ContentWrapper className="content-wrapper">
          <Main>
              <H1>West Coast Meat Solutions</H1>
              <H2>Perth Markets Wholesale Clearance</H2>
              <P>West Coast Meat Solutions are open to the public on Saturday morning as part of the WholeSale Clearance Market Canning Vale.</P>
              <P>Meat can be purchased in bulk quantities or by the kg at prices you won't see anywhere else.</P>
              <P>The gates open at 6:00 so make sure you get in early to beat the rush.</P>
              <HR />
              <H2>Restaurant quality meat at wholesale prices</H2>
              <P>West Coast Meat Solutions supply meat to many Restaurants, Super Markets and Butchers all over Perth.</P>
              <HR/>
              <H2>Wholesale Clearance Market</H2>
              <P>On Saturday morning we are open to the public between 6:00am - 10:00am. Come down and grab top quality
                  meat and wholesale prices. We can honestly say our prices are hard to beat.
              </P>
              <Dishes /> 
              <Card width={256}>
                  <BackgroundImage
                      ratio={1}
                      src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
                  />
                  <Subhead p={2}>
                      Hello
	</Subhead>
              </Card> 
              </Main>
              <hr/>
          
              <RightAside>                      
                        <div style={{textAlign: 'center'}}>
                            <img src={beef} style={{width: '75%'}} alt="" />
                            
                            <p>Meat and LiveStock Australia have just commenced a brand new marketing campaign.</p>
                            <p> Head on over
                            to their website to download all new recipes and tips on cooking Australian Beef the Greatest.</p>
                            <button><a href="http://www.australianbeef.com.au/">For more info</a></button>
                        </div>
              <AffiliateCard>
                  <img src={msa} alt="" />
                  <button><a href="https://www.mla.com.au/marketing-beef-and-lamb/meat-standards-australia/">For more info</a></button>
              </AffiliateCard> 
                  <AffiliateCard>
                      <img src={haccp} alt="" />
                      <button><a href="http://www.haccp.com.au/">For more info</a></button>
                  </AffiliateCard>
              </RightAside>
          </ContentWrapper>
          <Box width={1}><Footer /></Box>
      </HomeFlex>
    );
  }
}

export default Home;