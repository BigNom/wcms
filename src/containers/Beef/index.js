import React, { Component } from 'react';
import Helmet from "react-helmet";
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
import Searchbar from '../../components/Searchbar/'

const products = require('./beef/beef.json');


export default class Beef extends React.Component{

  render() {
    return <HomeFlex>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Beef Cuts | Beef Wholesale Products
          </title>
          <link rel="canonical" href="https://wcm.solutions" />
          <meta name="description" content="Beef cuts cost per kg." />
        </Helmet>
        <ContentWrapper>
          <PageHeader>
            <Heading children="Beef Cuts" />
            <Text bold children="Locally sourced from WA" />
            <ProductsList products={products} />
          </PageHeader>
        </ContentWrapper>
      </HomeFlex>;

  }
}
