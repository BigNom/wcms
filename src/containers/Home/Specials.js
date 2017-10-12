import React from 'react';
import styled from 'styled-components'

import {
  Arrow,
  Avatar,
  BackgroundImage,
  Button,
  Image,
  Text
} from 'rebass'

const H3 = styled.h3`
color: #F3C00F;
padding: 0;
font-size: 20px;
margin-right: 20px;
`;

const Wrapper = styled.div`
  width: 260px;
  margin: 10px;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 #d9d9d9;
  postion: relative;
`;

const CardTitle = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin-bottom: 10px;
`;

const Circle = styled.div`
box-sizing: border-bow;
width: 100px;
height: 70px;
line-height: 20px;
border-radius: 50%;
color: white;
background-color: red;
text-align: center;
font-size: 16px;
font-weight: 700;
border: 3px solid red;
margin-left: 20px;
`;

const H4 = styled.h4`
color: white;
text-align: center;
font-size: 16px;
font-weight: 700;
`;

const H6 = styled.h6`
color: white;
`

const Specials = ({ meatCut, price}) => {
  return (
    <Wrapper>
        <CardTitle>
        <H3>{meatCut}</H3>
        <Circle>
        <H4 className="font-effect-fire">$ {price}</H4><H6>per Kg</H6>
        </Circle>
        
        </CardTitle>    
    </Wrapper>

  );
};

export default Specials

