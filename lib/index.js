import React from 'react';
import { render } from 'react-dom';

import Application from './components/Application';
// import firebase from './firebase';

import './styles/index.scss'
// require('./style.scss');

render(<Application />, document.getElementById('react-container'));
