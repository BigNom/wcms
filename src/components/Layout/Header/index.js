import React from 'react';
import { FormattedMessage } from 'react-intl';

//import A from './A';
import Img from './Img';
//import Navigation from './Navigation';
//import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
//import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

          <Img src={Banner} alt="react-boilerplate - Logo" />


      </div>
    );
  }
}

export default Header;
