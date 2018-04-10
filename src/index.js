import React from 'react';
import ReactDOM from 'react-dom';
import Home from './scenes/home';
import './stylesheets/index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
