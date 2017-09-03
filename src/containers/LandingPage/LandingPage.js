import React, { Component } from 'react';

import {
  Banner,
  Heading,
  Subhead
} from 'rebass';

import Background from './background.jpg'

class LandingPage extends Component {
  render() {
    return (

      <Banner

      color='white'
      bg='gray8'
      backgroundImage={Background}
      >

          <Heading
           f={[2, 3, 4, 5]}>
            West Coast Meat Solutions
	</Heading>
  <Subhead>
    Coming Soon...
  </Subhead>
      </Banner>
    );
  }
}

export default LandingPage;