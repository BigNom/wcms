import styled, { css } from 'styled-components'
//import headerLarge from './headerLarge.jpg'

const headerLarge = 'https://res.cloudinary.com/react-web/image/upload/w_1500,h_350,c_fill,g_south,f_auto/v1503136122/banner_kkqglj.jpg'
export const TopBar = styled.div`
background-color: rgba(0,0,0,0.5);
height: 40px;
color:white;
z-index:10;
`;

export const Container = styled.div`
background-image: url(${headerLarge});
background-size: 100%;
height: 350px;
background-size: cover;
background-repeat: no-repeat;
z-index: -1;
`;









