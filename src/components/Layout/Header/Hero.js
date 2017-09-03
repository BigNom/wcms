import React, { Component } from 'react';
import styled from 'styled-components'
import cattleLarge from '../../images/headerLarge.jpg';

import { 
    Image,
HeroImage
 } from './Hero.style.js'

export default class Hero extends Component {
    render() {
        return (
            <div>
                <Image src={ cattleLarge }></Image>
            </div>
        );
    }
}
