import styled, { css } from 'styled-components'
//import headerLarge from './headerLarge.jpg'

const headerLarge = 'https://res.cloudinary.com/react-web/image/upload/w_1500,h_350,c_fill,g_south,f_auto/v1503136122/banner_kkqglj.jpg'

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`
  return acc
}, {})



export const Container = styled.div`
background-image: url(${headerLarge});
background-size: 100vw;
height: 350px;
background-size: cover;
background-repeat: no-repeat;
z-index: -1;
${media.desktop`height: 350px);`}
${media.phone`height: 200px);`}
`;

export const Blend = styled.div`
background-color: rgba(0,0,0,0.1);
mix-blend-mode: luminosity;
color: white;
display: block;
height: auto;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;
font-size: 160px;
font-family: 'Orbitron', sans-serif;
`;

export const H1 = styled.h1`
height: 3vw;
color: white;
z-index: 1;
`;










