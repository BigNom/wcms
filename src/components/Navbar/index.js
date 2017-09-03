import React, { Component } from 'react';
import logoBlue from './logoBlue.png'
import { Box } from 'grid-styled';
import {
	Text
} from 'rebass'

import {
    NavbarFlex,
    NavbarLink,
    NavLinks,
    LogoContainer,
    LogoLink,
    PhoneButton,
} from './Navbar.style'

export default class Nav extends Component {
  render() {
    return(
        <NavbarFlex>
            <LogoContainer>
                <LogoLink
                    to='/'>
                  <img src={logoBlue} />
                </LogoLink>
            </LogoContainer>
                <NavLinks>
                    <NavbarLink
                      to='/beef'
											activeStyle={{
												fontWeight: 'bold',
												color: 'red'
											}}
                    >Beef
                </NavbarLink>
                  <NavbarLink
                      to='/lamb'
											activeClassName='active'
											activeStyle={{
												fontWeight: 'bold',
												color: 'red'
											}}
                  >Lamb
									</NavbarLink>
                  <NavbarLink
                      to='/contact' 
											activeClassName='active'
											activeStyle={{
												fontWeight: 'bold',
												color: 'red'
											}}                 
									>Contact Us
									</NavbarLink>
									<PhoneButton className="phone-button">9455 7962</PhoneButton>
              </NavLinks>
      </NavbarFlex>
    )
  }
} 

        