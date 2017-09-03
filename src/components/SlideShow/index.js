import React, { Component } from 'react';
import styled from 'styled-components'
import SlideShow from './SlideShow';
import {
    BackgroundImage
 } from 'rebass'

import bgSmall from './bgSmall.jpg';
import Goat from './goats-350.jpg'

const Image = styled.img`
width: 100%;
height: auto;
`;

const SlideContainer = styled.div`
height: 350px;
background-size: cover;
background-repeat: no-repeat;
z-index: -1;
`;

class SlideShowContainer extends Component {
    render() {
        return (
            <SlideContainer>
                <SlideShow>
  
                    <Image src={Goat}></Image>  
                    <Image src={bgSmall }></Image>    
                </SlideShow>
            </SlideContainer>
        );
    }
}

export default SlideShowContainer;