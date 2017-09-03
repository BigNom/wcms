import React, { Component } from 'react';
import styled from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Subhead,
  Lead,
  Text
} from 'rebass'

import {
  CustomFlex,
  HomeFlex,
  ContentWrapper,
  PageHeader
} from '../../components/Global/Main.js'

import ProductsList from './ProductsList'
import Footer from '../../components/Footer/'
import Searchbar from '../../components/Searchbar/'

const products = require('./beef/beef.json');


export default class Beef extends React.Component{

  render() {
    return (
      <HomeFlex>

      <ContentWrapper>
        <PageHeader>
        <Heading children="Beef Cuts" />
        <Text bold children="Locally sourced from WA" />
        <ProductsList products={products} />
        </PageHeader>

      </ContentWrapper>
      <Footer />
    </HomeFlex>
    );

  }
}
