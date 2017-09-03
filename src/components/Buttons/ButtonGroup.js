import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Group,
  Button,
  ButtonOutline,
} from 'rebass'

import {
  A,
  HR,
  H1,
  H2,
  P,
} from '../Global/Typography.js'

import styled from 'styled-components'
import fbLogoSm from './fbLogoSm.png'
import fbFindus from './fbFindus.png'

const CustomButton = styled(Button) `
background-image: url(${fbLogoSm});
background-size: cover;
background-repeat: no-repeat;
width: 35;
height: 35px;
`;

const CustomFacebookButton = styled(Button) `
background-image: url(${fbLogoSm});
`;

class ButtonGroup extends Component {
  render() {
    return (
      <div>
        <Group>
          <br />
          <CustomButton><a href="https://reactweb.com.au"></a></CustomButton>
          </Group>       
      </div>
    );
  }
}

export default ButtonGroup;

