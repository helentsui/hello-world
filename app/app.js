import React from 'react';
import HelloWorld from './HelloWorld';
import ReactDOM from 'react-dom';

if (document.getElementById('HelloWorld')) {
    ReactDOM.render(<HelloWorld />, document.getElementById('HelloWorld'));
}