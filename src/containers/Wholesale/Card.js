import React from 'react';
import './Card.css'
import {withState} from 'recompose'
import styled from 'styled-components'

import {
  Avatar,
  BackgroundImage,
  Button,
  Image,
  Text
} from 'rebass'

const H3 = styled.h3`
color: #F3C00F;
padding-top: 10px;
padding-bttom: 10px;
font-size: 20px;
margin: 0;
`

const Wrapper = styled.div`
  float: left;
  width: 320px;
  margin: 10px;
  padding: 10px 24px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 #d9d9d9;
`;
const TopWrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const CardTitle = styled.div`
display: flex;
flex-direction: column;
width: 180px;
`;

const CardImage = styled.img`
align-self: flex-end;
width: 200px;
height: 150px;
`;

const Card = ({ open, setOpen, animalCut, meatCut, picture, description, price}) => {
  return (
    <Wrapper>
      <TopWrapper>
        <CardTitle>
          <H3>{meatCut}</H3>
          <div className="price">$ {price} per kg</div>
          <svg height="2" width="75%" className={animalCut}>
          </svg>
        </CardTitle>
        <CardImage src={picture} />
      </TopWrapper>
      <div className={open ? "card open" : "card closed"}>
        <div className="header" onClick={() => setOpen(!open)}>
          Know your cut</div>
        <div className="body">
          <p>{description}</p>
        </div>
      </div>
    </Wrapper>

  );
};

export default withState('open', 'setOpen', false)(Card);