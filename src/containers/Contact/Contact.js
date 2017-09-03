import React, { Component } from 'react';
import Helmet from "react-helmet"
import { Box } from 'grid-styled';
import styled, { css } from 'styled-components'
import {
	Avatar,
	BackgroundImage,
	Button,
	Card,
	Image,
	Text
} from 'rebass'

import './style.css'
	
//import ContactCard from './ContactCard'

import {
    HomeFlex,
    ContentWrapper
} from '../../components/Global/Main.js'

import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
// import GettingStartedGoogleMap from './GoogleMap'

import Layout from '../../components/Layout/'
import ContactForm from './ContactForm'
import GoogleMap from '../Maps/google_map'

const CustomCard = styled(Card)`
width: 100%;
box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

class Contact extends Component {
	render() {
		const { lng } = 131.044922;
		const { lat } = -25.363882;
		return (
				<div>
				<Hero />
				<div className="container">
					<div className="row">
						<div className="col-6">
							<ContactForm />
    </div>
						<div className="col-6">
							<GoogleMap className="google-maps" lat= {lat} lng= {lng} />
    </div>
					</div>
				</div>
					<Footer />
							</div>
						)
				}
			}

export default Contact;
