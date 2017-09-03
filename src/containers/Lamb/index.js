import React, { Component } from 'react';
import { Box, Container, Flex, Heading, Subhead, Lead, Text } from "rebass";

import {
  CustomFlex,
  HomeFlex,
  PageHeader
} from '../../components/Global/Main.js'

import ProductList from './ProductList'
import Footer from '../../components/Footer/'
import Hero from '../../components/Hero/Hero'

const products = require('./lamb/lamb.json');

export default class Lamb extends React.Component{
  render() {
    return (<HomeFlex>
        <CustomFlex>
          <PageHeader>
            <Heading children="Lamb Cuts" />
            <Text bold children="Locally sourced from WA" />
            <ProductList products={products} />
          </PageHeader>
        </CustomFlex>
        <Footer />
      </HomeFlex>);
  }
}
