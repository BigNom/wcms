import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import Welcome from './Welcome';
import App from './Searchbar';
import Navigation from './Navigation'
import Rooter from './Rooter'
import LazyLoader from './LazyLoader'

let products = [
  {
    id: '1',
  name: 'Beef',
  cut: 'Rump'
},
  {
    id: '2',
    name: 'Lamp',
    cut: 'Loin Chops'
  },
  {
    id: '3',
    name: 'Deer',
    cut: 'Legs'
  },
]

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

  storiesOf('Searchbar', module)
  .add('with text', () => <App products={products}>Hello Button</App>)

  storiesOf('Navigation', module)
  .add('Navigation', () => <Navigation></Navigation>)

  storiesOf('Rooter', module)
  .add('With navigation', () => <Rooter></Rooter>)

  storiesOf('LazyLoader', module)
  .add('Lazy', () => <LazyLoader></LazyLoader>)

