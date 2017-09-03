import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const Application = App(BrowserRouter);
render(<Application />, document.getElementById("root"));
