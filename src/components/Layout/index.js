import React, { Component } from 'react';
import {
  Flex,
  Box,
  Heading,
  Text
} from 'rebass'

import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import {
  CustomFlex,
  HomeFlex,
} from '../Global/Main.js'



class Layout extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Flex wrap className='bold'>
          <Box px={2} py={1} width={1}>

          </Box>
        </Flex>

      </div>
    );
  }
}

export default Layout;