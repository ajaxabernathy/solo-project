import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

// uncomment so that webpack can bundle styles
//import styles from './scss/application.scss';

// render(<App />, document.getElementById('root'));
const root = createRoot(document.querySelector('#root'));
root.render(<App />,);