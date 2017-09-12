import React, { Component } from 'react';
import { Box, Container, Flex, Heading, Subhead, Lead, Text } from "rebass";
import Helmet from "react-helmet";

import {
  CustomFlex,
  HomeFlex,
  PageHeader
} from '../../components/Global/Main.js'

import ProductList from './ProductList'

const products = require('./lamb/lamb.json');

export default class Lamb extends React.Component{
  render() {
    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lamb Cuts | Lamb Wholesale Products</title>
          <link rel="canonical" href="https://wcm.solutions" />
          <meta name="description" content="Lamb cuts cost per kg." />
        </Helmet>
        <HomeFlex>
          <CustomFlex>
            <PageHeader>
              <Heading children="Lamb Cuts" />
              <Text bold children="Locally sourced from WA" />
              <ProductList products={products} />
            </PageHeader>
          </CustomFlex>
        </HomeFlex>
      </div>;
  }
}
