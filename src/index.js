import './ReactotronConfig'
import React from 'react';
import { render } from 'react-snapshot'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "normalize.css/normalize.css";
import "@blueprintjs/core/dist/blueprint.css";

render(
        <App />
, document.getElementById('root'));

if (module.hot) {
    module.hot.accept()
}

registerServiceWorker();
