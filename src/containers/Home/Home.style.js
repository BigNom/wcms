import styled, { css } from 'styled-components'
import { Flex, Box } from 'grid-styled';

export const HomeCard = styled.div`
background-color: 255,255,255;
border-radius: 3px;
box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
color: 24,32,38;
display: block;
font-size: 14px;
font-weight: normal;
padding: 20px;
text-size-adjust: 100%;
text-transform: none;
transition-delay: 0s, 0s, 0s;
transition-duration: 0.2s, 0.2s, 0.2s;
transition-property: transform, box-shadow, -webkit-transform;
transition-timing-function: cubic-bezier(0.4, 1, 0.75, 0.9), cubic-bezier(0.4, 1, 0.75, 0.9), cubic-bezier(0.4, 1, 0.75, 0.9);
`;

    export const AffiliateCard = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 16px;
    padding-top: 16px;
    
        a {
            color: #424242;
        font-weight: normal;
        text-decoration-style: none;
        list-style: none;
    }
    img {
        padding-bottom: 20px;
        object-fit: cover;
        width: 96px;
        height: auto;
        max-width: 100%;
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
    }
    `;

    export const Img = styled.img`
    height: 100%;
    width: auto;
`;

    export const DishesWrapper = styled.div`
    height: 500px;
    width: 200px;
    `;



