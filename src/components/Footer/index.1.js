import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
		Button,
		Column, 
		Divider,
		Embed,
		Row,
		Small
} from 'rebass'

import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import ButtonGroup from '../Buttons/ButtonGroup';
import FacebookButton from '../Buttons/FacebookButton'

import {
	A,
  P
} from '../Global/Typography';

import {
    FooterWrapper,
    FooterRowLinks,
    FooterRowSocial,
		FooterRowAddress,
		FooterCopyright,
		FooterRowMap,
    FooterNavItem,
    FooterLink
} from './Footer.style.js'

export default class Footer extends Component {
  render() {
		return <FooterWrapper>
        <FooterRowLinks>
          <FooterNavItem to="/">Home</FooterNavItem>
          <FooterNavItem to="/beef">Beef</FooterNavItem>
          <FooterNavItem to="/lamb">Lamb</FooterNavItem>
          <FooterNavItem to="/contact">Contact Us</FooterNavItem>
        </FooterRowLinks>
        <FooterRowSocial>
          <FacebookButton color="white" bg="blue">
            <A href="https://www.facebook.com/" target="_blank" />
          </FacebookButton>
        </FooterRowSocial>
        <FooterRowAddress>
          <List>
            <ListItem>
              <ListItemTitle>Address</ListItemTitle>
              <ListItemTitle>West Wing 4 Market City,</ListItemTitle>
              <ListItemTitle>280 Bannister Road,</ListItemTitle>
              <ListItemTitle>Canning Vale WA 6155</ListItemTitle>
            </ListItem>
          </List>
        </FooterRowAddress>
        <Embed>
          <iframe width="350" height="300" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJhdlWnH69MioRxgsAmZr370w&key=AIzaSyBuiiGlV57y-miH70QureBPQofKDE1WxHU" />
        </Embed>

        <FooterCopyright>
          <Divider w={1} color="grey" />
          <Link to="/sitemap">Sitemap           
          </Link>
          <Link to="/privacy">Privacy policy</Link>
          <br />
          <Small children="Copyright &#169; 2017" />
        </FooterCopyright>
      </FooterWrapper>;
    };
}
