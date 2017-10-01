
import React from 'react';
import { render } from 'react-snapshot'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<App />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept()
}

registerServiceWorker();
