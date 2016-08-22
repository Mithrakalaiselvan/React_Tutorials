import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

ReactDOM.render(<App />, document.getElementById('main'));
setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('main'));}, 10000)