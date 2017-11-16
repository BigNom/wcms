import styled from 'styled-components'
import likeButton from './fb-like.png'
import fbLogo from './fbLogo.png'
import fbLogoSm from './fbLogoSm.png'
import {
  Button
} from 'rebass'

const FacebookButton = styled(Button)`
background-image: url(${fbLogoSm});
height: 50px;
width: 50px;
background-size: cover;
background-repeat: no-repeat;
`;

export default FacebookButton


