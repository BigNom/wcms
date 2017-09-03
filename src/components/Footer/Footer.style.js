import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(1fr, 2fr);
    background: rgb(0 ,50, 99);
		width: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
    margin-top: 20px;

    div:nth-child(4) {
        grid-column: 3/4;
        grid-row: 1;
    };
    `;

export const FooterLink = styled.a.attrs({
    target: "_blank"
}) `
  color: #828282;
  text-decoration: none;
  margin: 0px 3px;
`;

export const FooterRowLinks = styled.div`
display: flex;
flex-direction: column;
padding-left: 50px;
grid-column: 1 / 2;
grid-row: 1;

`;

export const FooterRowSocial = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    grid-column: 2 / 3;
    grid-row: 1;
`;

export const FooterRowAddress = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 4/5;
    grid-row: 1;
`;

export const FooterCopyright = styled.div`
    grid-column: 1 / -1;
		grid-row: 2;
		text-align: center;
		color: #828282;
		margin-top: 20px;
`

export const FooterNavItem = styled(NavLink)`
		border-bottom: 1px solid #424242;
    color: #828282;
    cursor: pointer;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
		line-height: 30px;

    `;


