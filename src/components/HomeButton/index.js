import React, { Children } from 'react';

import A from './A'
import StyledButton from './StyledButton'
import Wrapper from './Wrapper'

function HomeButton(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
    {Children.toArray(props.children)}
    </A>
  );

  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
      {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return (
    <Wrapper>
    {button}
    </Wrapper>
  )
}

export default HomeButton;