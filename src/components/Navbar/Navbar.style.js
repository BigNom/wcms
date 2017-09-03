import styled, { css } from 'styled-components'
import { Link, NavLink } from 'react-router-dom';
import { Flex, Box } from 'grid-styled';

export const sizes = {
	desktop: 30,
	tablet: 24,
	phone: 20
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

export const LogoContainer = styled.div`
img {
    height: auto;
}
flex-grow: 2;
`;
export const LogoLink = styled(Link)`
`;

export const PhoneButton = styled.a.attrs({
    target: "_blank"
}) `
margin: 10px;
align-self: flex-end;
cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    text-align: right;
    padding-right: 32px;
    color: #f2f2f2;
    text-decoration: none;

`;

export const NavLinks = styled.div`
	display: flex;
	flex-direction: row;
	text-align: left;
	flex-grow: 2;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;

	${media.desktop`flex-direction: row;`}
	${media.tablet`flex-direction: row;`}
	${media.phone`flex-direction: column;`}
    `;

export const NavbarLink = styled(Link)`
	active-style: red;
	margin: 10px;

		color: #f2f2f2;
		text-decoration: none;

&:hover {
	background-color: "#99cc33";
	&:after {
			content: ' ';
			position: abolute;
			left: 100%;
			height: 100%;
			background-color: "#99cc33";
			z-index: -1;
			transform: scale(1.5, 1.5);
		}
}
`;

export const NavbarFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	background-color: rgb(0 ,50, 99);
	${media.desktop`flex-direction: row;`}
	${media.tablet`flex-direction: row;`}
	${media.phone`flex-direction: column;`}
    `;    











