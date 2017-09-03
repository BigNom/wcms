import React from 'react';
import Nav from '../Navbar/Nav'
import Header from '../Navbar/Header'

import { 

Container
 } from './Hero.style.js'

export default class Hero extends React.Component {
    render() {
        return <div>
            <Container>
              <Header />
            </Container>
            <Nav />
          </div>;
    }
}
