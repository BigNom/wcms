import React, { Component } from 'react'
import { Box } from 'grid-styled';
import styled from 'styled-components'
import Helmet from "react-helmet"
import {
		Avatar,
		BackgroundImage,
		Button,
		Card,
		Image,
		Text,
} from 'rebass'

import {
	A,
  HR,
  H2,
  P,
} from '../../components/Global/Typography.js'

import {
		CustomFlex,
    HomeFlex,
} from '../../components/Global/Main.js'

import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Dishes from '../../components/Dishes'


import msa from './msa-66.jpg'
import haccp from './haccp-96x96.jpg'
import beef from './beef-is-the-greatest.jpg'

const CustomButton = styled(Button) `
	border: 1px solid rgba(0, 0, 0, .25);
	background-color: goldenrod;
	background-image: linear-gradient(transparent, rgba(243, 192, 15, .125));
	box-shadow: 0 0 4px rgba(0, 0, 0, .25);
	width: 100%;
`;

const CustomCard = styled(Card)`
width: 100%;
box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
`;

class Home extends Component {
  render() {
    return (
      <HomeFlex>
          <Helmet>
          <meta charSet="utf-8" />
           <title>Wholesale Meat, Perth | Canning Vale Meat Markets | Cheap Meat, Perth | Quality Meat, Perth | West Coast Meat Solutions</title>
           <link rel="canonical" href="https://wcm.solutions" />
            <meta name="description" content="Wholesale Meat suppliers to Perth food service industries and supermarkets." />
					</Helmet>
          <Box width={1}><Hero /></Box>
					<Box w={2 / 3}>
					<CustomCard className="custom-card" wrap p={2}>
						<H2>West Coast Meat Solutions</H2>
						<H2>Perth Markets Wholesale Clearance</H2>
						<P>
							Based in Perth, Australia, we stock a selected range of premium quality beef and lamb in whole vacuum packs
									to guarantee tenderness and save the cost of having the meat prepared by a butcher. Lower prices are the direct
									result of bulk buying power and less handling. West Coast Meat Solutions are open to the public on Saturday
									morning as part of the WholeSale Clearance Market Canning Vale. Meat can be purchased in bulk quantities or by
									the kg at prices you won't see anywhere else.
									</P>
						<P>
							The gates open at 6:00 so make sure you get in early to beat the rush.
									</P>
						<HR />
						<H2>Restaurant quality meat at wholesale prices</H2>
						<P>
							West Coast Meat Solutions supply meat to many Restaurant chains, Super Markets and Butchers all throughout Perth.
									</P>
						<HR />
						<H2>Buy Bulk Vacuum Packs</H2>
						<P>
							Vacuum packing method involves placing items in a plastic film package, removing air from inside, and sealing the package. The intent of vacuum packing is usually to remove oxygen from the container to extend the shelf life of foods to reduce the volume of the contents and package.
									Vacuum packing reduces atmospheric oxygen, limiting the growth of aerobic bacteria or fungi, and preventing the evaporation of volatile components.
									Vacuum Packaging assists in the preservation of meat and improves tenderness as proteins begin to break down – known as the "ageing" process. Enjoy the superb eating quality of aged beef.
									</P>
						<P>
							West Meat is a meat wholesaler that is open to the public on a Saturday morning. We sell wholesale meat and lamb to restaurants and supermarkets throughout Perth.
									</P>
						<HR />
						<Dishes />
					</CustomCard>
					</Box>

						
								<Box w={ 1 / 3 }>
								<Card width={256}>
									<BackgroundImage
										ratio={1}
										src={beef}
									/>
								
									<CustomButton
										color='white'
										bg='blue'
									><A href="http://www.australianbeef.com.au/">For more info</A></CustomButton>
								</Card>
								<Card width={256}
									my={20}
								>
									<Image
										mx={64}
										my={10}
										width={128}
										height={128}
										src={haccp}
									/>
									<Text
										center
										f={1} p={2}>
										Meat and LiveStock Australia have just commenced a brand new marketing campaign.
							</Text>
									<CustomButton
										color='white'
										bg='blue'
									><A href="http://www.haccp.com.au/">For more info</A></CustomButton>
								</Card>
								<Card width={256}>
									<Avatar
										size={128}
										src={msa}
										mx={64}
										p={2}
									/>
									<Text
										center
										f={1} p={2}>
										Meat and LiveStock Australia have just commenced a brand new marketing campaign.
							</Text>
									<CustomButton><A href="https://www.mla.com.au/marketing-beef-and-lamb/meat-standards-australia/">For more info</A></CustomButton>
								</Card>
								</Box> 
		
              <hr/>
          <Box width={1}><Footer /></Box>
      </HomeFlex>
    );
  }
}

export default Home;