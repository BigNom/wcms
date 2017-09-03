import styled, { css } from 'styled-components'
//import { Link } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';

export const A = styled.a`
&:hover: {
  pink;
}
`;

export const sizes = {
  desktop: 2000,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

  return acc
}, {})

export const TableFlex = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 10px;
  background-color: rgba(255,255,255,0.9);

	/* Now we have our methods on media and can use them instead of raw queries */
	${media.desktop`margin: 0 25%;`}
	${media.tablet`margin: 0 25%;`}
	${media.phone`margin: 0 2%;`}
`;

export const Image = styled.img`
  box-sizing: border-box;
    width: 64px;
    height: 64px;
    border: 1px solid green;
    border-radius: 50%;
    padding: 10px;
  ${media.desktop`margin: 25px 50px;`}
	${media.tablet`margin: 10px 25px;`}
	${media.phone`margin: 5px 5px;`}
`;


export const TableBox = styled(Box)`
  border: 1px solid red;
  color: black;
`;

export const NavBox = styled(Box) `
  color: black;
  display: flex;
  justfity-content: space-between;
`;

export const TableNavContainer = styled.div `
  display: flex;
  padding: 10px;
  border: 1px solid green;
  color: green;
`


export const TableContainer = styled.div`

    `;


export const TableLinks = styled.li`;
  height: 100px;
  width: 100px;
   border: 1px solid green;
    border-radius: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    list-style: none;
    a {
      color: green;
    }
    a:hover {
        background-color: green;
        &:after {
            content: ' ';
            position: abolute;
            left: 100%;
            height: 100%;
            background-color: green;
            z-index: -1;
            transform: scale(1.5, 1.5);
        }
    }
      &:active {
    background: green;
    color: #FFF;
  }
    `;