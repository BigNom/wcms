import React, { Component } from 'react';
import Helmet from "react-helmet"
import { Box } from 'grid-styled';
import styled from 'styled-components'
import {
    Avatar,
    BackgroundImage,
    Button,
    Card,
    Image,
    Text
} from 'rebass'

import GMaps from './GMaps'


import ContactCard from './ContactCard'

import {
    HomeFlex,
    Main,
    ContentWrapper,
    RightAside,
    AffiliateCard,
    TwentyFive
} from '../../components/Global/Main.js'

import Nav from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'

const CustomCard = styled(Card) `
width: 100%;
box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;


class Contact extends Component {

    render() {
        return (
            <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>West Coast Meat Solutions</title>
                <link rel="canonical" href="https://wcmeat.com.au" />
                <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.grey-pink.min.css" />
                              </Helmet>
                <HomeFlex>
                    <Box width={1}><Hero /></Box>
                    <Box pb={1} width={1}><Nav /></Box>
                    <ContentWrapper>
											<ContactCard />
          
                
                            <GMaps />
 
                             
     
                    </ContentWrapper>
                    <Box width={1}><Footer /></Box>
                </HomeFlex>
            </div>


                )
            }
        }


export default Contact;
